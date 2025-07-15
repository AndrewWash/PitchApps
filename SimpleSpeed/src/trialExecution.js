// Trial Execution Module
// Handles running trials, playing notes, handling user responses, and providing feedback

import { audioFiles } from './audioFileConstants.js';
import { getState as getTrialSelectionState } from './trialSelection.js';

// State variables
let currentTrial = 0;
let totalTrials = 14;
let correctHits = 0;
let totalHits = 0;
let targetNote = '';
let reactionTimes = [];
let isSequencePlaying = false;
let currentNoteIndex = 0;
let noteSequence = [];
let targetPositions = [];
let noteTimeout;
let currentMode = 'naturals';

// Note display mapping
const noteDisplayNames = {
    'C': 'C', 'CSharp': 'C#', 'D': 'D', 'DSharp': 'D#', 'E': 'E', 'F': 'F',
    'FSharp': 'F#', 'G': 'G', 'GSharp': 'G#', 'A': 'A', 'ASharp': 'A#', 'B': 'B'
};

// Initialize state with values from trial selection
export function initializeState(mode, trials) {
    currentMode = mode;
    totalTrials = trials;
    currentTrial = 0;
    correctHits = 0;
    totalHits = 0;
    reactionTimes = [];
    isSequencePlaying = false;
    currentNoteIndex = 0;
    noteSequence = [];
    targetPositions = [];
}

// Start training
export function startTraining(trialOrder, getSelectedOctaves, activeNotes) {
    currentTrial = 0;
    correctHits = 0;
    totalHits = 0;
    reactionTimes = [];

    // Update UI
    const randomizeToggle = document.getElementById('randomizeToggle');
    randomizeToggle.style.pointerEvents = 'none';
    randomizeToggle.style.opacity = '0.5';
    document.getElementById('startBtn').style.display = 'none';

    const inputMethods = document.getElementById('inputMethods');
    const responseButton = document.getElementById('responseButton');
    inputMethods.classList.add('show');
    responseButton.classList.add('show');

    clearFeedback();
    nextTrial(trialOrder, getSelectedOctaves, activeNotes);
}

// Next trial
export function nextTrial(trialOrder, getSelectedOctaves, activeNotes) {
    if (currentTrial >= totalTrials) {
        endTraining();
        return;
    }

    currentTrial++;
    targetNote = trialOrder[currentTrial - 1];

    // Set isSequencePlaying to true at the beginning of the trial
    isSequencePlaying = true;

    updateStats();
    updatePhaseIndicator();

    // Display note name without octave
    const [instrument, noteOctave] = targetNote.split('_');
    const note = noteOctave.slice(0, -1);
    const noteMap = {
        'CSharp': 'C#', 'DSharp': 'D#', 'FSharp': 'F#', 'GSharp': 'G#', 'ASharp': 'A#'
    };
    const displayNote = noteMap[note] || note;
    document.getElementById('targetNote').textContent = displayNote;

    clearFeedback();

    // Show cancel button as soon as the trial starts
    const cancelTrialBtn = document.getElementById('cancelTrial');
    cancelTrialBtn.style.display = 'block';

    // Always use octave 3 for the target note demonstration
    // Create a key for the same note but in octave 3
    const note3 = note + '3';
    const demoKey = `${instrument}_${note3}`;

    // Try to get the audio for the octave 3 version
    let audio = getAudioFromKey(demoKey);

    // If the octave 3 version isn't available, fall back to the original note
    if (!audio) {
        console.warn(`Octave 3 version of ${note} not available for ${instrument}, using original note`);
        audio = getAudioFromKey(targetNote);
    }

    if (audio) {
        console.log('playing note from octave 3');
        audio.currentTime = 0;
        audio.play();

        // Store the audio in a variable that can be accessed by cancelTrial
        window.currentAudio = audio;

        setTimeout(() => {
            if (isSequencePlaying) { // Only pause if not canceled
                console.log('pausing note');
                audio.pause();
                audio.currentTime = 0;
                window.currentAudio = null;
            }
        }, 1500);
    } else {
        console.error(`Failed to play audio for target note: ${targetNote}`);
    }

    setTimeout(() => {
        // Only proceed if not canceled
        if (isSequencePlaying) {
            startNoteSequence(trialOrder, getSelectedOctaves, activeNotes);
        }
    }, 2000);
}

// Update stats
export function updateStats() {
    document.getElementById('trialCount').textContent = currentTrial;
    document.getElementById('correctCount').textContent = correctHits;

    const accuracy = totalHits > 0 ? Math.round((correctHits / totalHits) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';

    const avgRT = reactionTimes.length > 0 ?
        Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
    document.getElementById('avgReactionTime').textContent = avgRT + 'ms';
}

// Update phase indicator
export function updatePhaseIndicator() {
    const orderType = document.getElementById('randomizeToggle').classList.contains('active') ? 'Randomized' : 'Fixed';
    const [instrument, note] = targetNote.split('_');
    const displayNote = noteDisplayNames[note];

    let modeText = '';
    if (currentMode === 'naturals') {
        modeText = `Natural (${instrument})`;
    } else if (currentMode === 'chromatic') {
        modeText = `Chromatic (${instrument})`;
    } else if (currentMode === 'combined') {
        modeText = `Combined (${instrument})`;
    }

    document.getElementById('phaseIndicator').textContent =
        `Trial ${currentTrial} of ${totalTrials}`;
}

// Start note sequence
export function startNoteSequence(trialOrder, getSelectedOctaves, activeNotes) {
    // Extract just the note name without octave
    const [instrument, noteOctave] = targetNote.split('_');
    const note = noteOctave.slice(0, -1);
    const noteMap = {
        'CSharp': 'C#', 'DSharp': 'D#', 'FSharp': 'F#', 'GSharp': 'G#', 'ASharp': 'A#'
    };
    const displayNote = noteMap[note] || note;
    document.getElementById('targetNote').textContent = `Target note is ${displayNote}`;
    isSequencePlaying = true;
    currentNoteIndex = 0;

    // Show cancel button when sequence starts
    const cancelTrialBtn = document.getElementById('cancelTrial');
    cancelTrialBtn.style.display = 'block';

    noteSequence = [];
    targetPositions = [];

    console.log(`\n=== TRIAL ${currentTrial} - TARGET: ${getDisplayName(targetNote)} ===`);
    if (currentMode === 'combined') {
        console.log(`Combined mode: Any instrument playing ${extractBaseNote(targetNote)} counts as target`);
    }

    noteSequence = generateConstrainedSequence(targetNote, activeNotes);

    // Extract the base note (without instrument or octave) from the target
    const [targetInstrument, targetNoteOctave] = targetNote.split('_');
    const targetNoteBase = targetNoteOctave.slice(0, -1); // Remove the octave number

    // Function to determine if a note is a target note
    // Any note from any instrument or octave matching the TARGET NOTE will count as a target note
    const isTargetNote = (note) => {
        const [instrument, noteOctave] = note.split('_');
        const noteWithoutOctave = noteOctave.slice(0, -1); // Remove the octave number
        return noteWithoutOctave === targetNoteBase;
    };

    targetPositions = [];
    noteSequence.forEach((note, index) => {
        if (isTargetNote(note)) {
            targetPositions.push(index + 1);
        }
    });

    const targetCount = noteSequence.filter(note => isTargetNote(note)).length;

    console.log(`Target note appears ${targetCount} times`);
    console.log(`Target positions: ${targetPositions.join(', ')}`);
    console.log(`Full sequence: ${noteSequence.map(getDisplayName).join(', ')}`);

    validateSequenceConstraints(noteSequence, targetNote);

    playNextNote(trialOrder, getSelectedOctaves, activeNotes);
}

// Generate constrained sequence
export function generateConstrainedSequence(target, availableNotes) {
    // Extract the base note (without instrument or octave) from the target
    const [targetInstrument, targetNoteOctave] = target.split('_');
    const targetNote = targetNoteOctave.slice(0, -1); // Remove the octave number

    // Function to determine if a note is a target note
    // Any note from any instrument or octave matching the TARGET NOTE will count as a target note
    const isTargetNote = (note) => {
        const [instrument, noteOctave] = note.split('_');
        const noteWithoutOctave = noteOctave.slice(0, -1); // Remove the octave number
        return noteWithoutOctave === targetNote;
    };

    const nonTargetNotes = availableNotes.filter(note => !isTargetNote(note));
    let attempts = 0;
    const maxAttempts = 100;

    // Determine sequence length based on mode
    const isExtremeMode = currentMode === 'extreme';
    const sequenceLength = isExtremeMode ? 32 : 16;

    // Determine target count with equal distribution
    // Normal mode: 3-5 with equal probability (1/3 chance for each)
    // Extreme mode: 5-7 with equal probability (1/3 chance for each)
    let targetCount;
    if (isExtremeMode) {
        // Extreme mode: 5-7 with equal probability (1/3 chance for each)
        const rand = Math.random();
        if (rand < 1/3) targetCount = 5;
        else if (rand < 2/3) targetCount = 6;
        else targetCount = 7;
    } else {
        // Normal mode: 3-5 with equal probability (1/3 chance for each)
        const rand = Math.random();
        if (rand < 1/3) targetCount = 3;
        else if (rand < 2/3) targetCount = 4;
        else targetCount = 5;
    }

    const nonTargetCount = sequenceLength - 1 - targetCount; // -1 for first note

    while (attempts < maxAttempts) {
        attempts++;
        let sequence = [];

        // First note is always non-target
        const firstNote = nonTargetNotes[Math.floor(Math.random() * nonTargetNotes.length)];
        sequence.push(firstNote);

        let remainingNotes = [];

        // Select target notes
        const possibleTargets = availableNotes.filter(note => isTargetNote(note));
        for (let i = 0; i < targetCount; i++) {
            const randomTarget = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
            remainingNotes.push(randomTarget);
        }

        // Select non-target notes
        for (let i = 0; i < nonTargetCount; i++) {
            const randomNote = nonTargetNotes[Math.floor(Math.random() * nonTargetNotes.length)];
            remainingNotes.push(randomNote);
        }

        let placementSuccess = true;

        // For extreme mode, ensure the final target note is within the last 7 notes
        if (isExtremeMode) {
            // Shuffle the remaining notes
            for (let i = remainingNotes.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remainingNotes[i], remainingNotes[j]] = [remainingNotes[j], remainingNotes[i]];
            }

            // Find all target notes in the shuffled array
            const targetIndices = [];
            remainingNotes.forEach((note, index) => {
                if (isTargetNote(note)) {
                    targetIndices.push(index);
                }
            });

            // Ensure at least one target is in the last 7 positions
            let hasTargetInLast7 = false;
            for (const index of targetIndices) {
                if (index >= remainingNotes.length - 7) {
                    hasTargetInLast7 = true;
                    break;
                }
            }

            if (!hasTargetInLast7 && targetIndices.length > 0) {
                // Move one target to a position in the last 7
                const targetToMove = targetIndices[targetIndices.length - 1];
                const newPosition = remainingNotes.length - Math.floor(Math.random() * 7) - 1;

                // Swap the target with the note at the new position
                const temp = remainingNotes[targetToMove];
                remainingNotes[targetToMove] = remainingNotes[newPosition];
                remainingNotes[newPosition] = temp;
            }
        }

        for (let pos = 1; pos < sequenceLength; pos++) {
            let availableForPosition = [...remainingNotes];

            // Check for potential TN->non-TN->TN pattern (not allowed in any mode)
            if (pos >= 2) {
                // If we have a TN followed by a non-TN, don't allow another TN
                if (isTargetNote(sequence[pos - 2]) && !isTargetNote(sequence[pos - 1])) {
                    availableForPosition = availableForPosition.filter(note => !isTargetNote(note));
                }
            }

            // Prevent consecutive target notes (TN->TN pattern, not allowed in any mode)
            if (pos >= 1 && isTargetNote(sequence[pos - 1])) {
                availableForPosition = availableForPosition.filter(note => !isTargetNote(note));
            }

            // For extreme mode, no TN with same octave/instrument within 5 notes of each other
            if (isExtremeMode && pos > 1) {
                const recentNotes = sequence.slice(Math.max(0, pos - 5), pos);

                availableForPosition = availableForPosition.filter(note => {
                    if (!isTargetNote(note)) return true;

                    const [noteInstrument, noteWithOctave] = note.split('_');
                    const noteOctave = noteWithOctave.slice(-1);

                    // Check if there's a target note with the same instrument and octave in recent notes
                    for (const recentNote of recentNotes) {
                        if (isTargetNote(recentNote)) {
                            const [recentInstrument, recentWithOctave] = recentNote.split('_');
                            const recentOctave = recentWithOctave.slice(-1);

                            if (noteInstrument === recentInstrument && noteOctave === recentOctave) {
                                return false;
                            }
                        }
                    }
                    return true;
                });
            }

            if (availableForPosition.length === 0) {
                placementSuccess = false;
                break;
            }

            const randomIndex = Math.floor(Math.random() * availableForPosition.length);
            const selectedNote = availableForPosition[randomIndex];

            sequence.push(selectedNote);
            const removeIndex = remainingNotes.indexOf(selectedNote);
            remainingNotes.splice(removeIndex, 1);
        }

        const finalTargetCount = sequence.filter(note => isTargetNote(note)).length;
        if (placementSuccess && finalTargetCount === targetCount) {
            console.log(`Sequence generated successfully in ${attempts} attempts with ${targetCount} target notes`);
            return sequence;
        }
    }

    console.warn('Constraint generation failed, using fallback method');
    return generateFallbackSequence(target, availableNotes);
}

// Generate fallback sequence
export function generateFallbackSequence(target, availableNotes) {
    // Extract the base note (without instrument or octave) from the target
    const [targetInstrument, targetNoteOctave] = target.split('_');
    const targetNote = targetNoteOctave.slice(0, -1); // Remove the octave number

    // Function to determine if a note is a target note
    // Any note from any instrument or octave matching the TARGET NOTE will count as a target note
    const isTargetNote = (note) => {
        const [instrument, noteOctave] = note.split('_');
        const noteWithoutOctave = noteOctave.slice(0, -1); // Remove the octave number
        return noteWithoutOctave === targetNote;
    };

    // Determine sequence length based on mode
    const isExtremeMode = currentMode === 'extreme';
    const sequenceLength = isExtremeMode ? 32 : 16;

    // Determine target count with equal distribution
    // Normal mode: 3-5 with equal probability (1/3 chance for each)
    // Extreme mode: 5-7 with equal probability (1/3 chance for each)
    let targetCount;
    if (isExtremeMode) {
        // Extreme mode: 5-7 with equal probability (1/3 chance for each)
        const rand = Math.random();
        if (rand < 1/3) targetCount = 5;
        else if (rand < 2/3) targetCount = 6;
        else targetCount = 7;
    } else {
        // Normal mode: 3-5 with equal probability (1/3 chance for each)
        const rand = Math.random();
        if (rand < 1/3) targetCount = 3;
        else if (rand < 2/3) targetCount = 4;
        else targetCount = 5;
    }

    const nonTargetCount = sequenceLength - 1 - targetCount; // -1 for first note

    const nonTargetNotes = availableNotes.filter(note => !isTargetNote(note));
    const possibleTargets = availableNotes.filter(note => isTargetNote(note));

    let sequence = [];

    // First note is always non-target
    sequence.push(nonTargetNotes[Math.floor(Math.random() * nonTargetNotes.length)]);

    let remainingNotes = [];
    for (let i = 0; i < targetCount; i++) {
        const randomTarget = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        remainingNotes.push(randomTarget);
    }
    for (let i = 0; i < nonTargetCount; i++) {
        remainingNotes.push(nonTargetNotes[Math.floor(Math.random() * nonTargetNotes.length)]);
    }

    // Shuffle the remaining notes
    for (let i = remainingNotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingNotes[i], remainingNotes[j]] = [remainingNotes[j], remainingNotes[i]];
    }

    // For extreme mode, ensure the final target note is within the last 7 notes
    if (isExtremeMode) {
        // Find all target notes in the shuffled array
        const targetIndices = [];
        remainingNotes.forEach((note, index) => {
            if (isTargetNote(note)) {
                targetIndices.push(index);
            }
        });

        // Ensure at least one target is in the last 7 positions
        let hasTargetInLast7 = false;
        for (const index of targetIndices) {
            if (index >= remainingNotes.length - 7) {
                hasTargetInLast7 = true;
                break;
            }
        }

        if (!hasTargetInLast7 && targetIndices.length > 0) {
            // Move one target to a position in the last 7
            const targetToMove = targetIndices[targetIndices.length - 1];
            const newPosition = remainingNotes.length - Math.floor(Math.random() * 7) - 1;

            // Swap the target with the note at the new position
            const temp = remainingNotes[targetToMove];
            remainingNotes[targetToMove] = remainingNotes[newPosition];
            remainingNotes[newPosition] = temp;
        }
    }

    // Fix any TN->non-TN->TN patterns in the shuffled notes
    for (let i = 0; i < remainingNotes.length - 2; i++) {
        if (isTargetNote(remainingNotes[i]) && !isTargetNote(remainingNotes[i + 1]) && isTargetNote(remainingNotes[i + 2])) {
            // Find a non-target note to swap with
            let swapIndex = -1;
            for (let j = i + 3; j < remainingNotes.length; j++) {
                if (!isTargetNote(remainingNotes[j])) {
                    swapIndex = j;
                    break;
                }
            }

            if (swapIndex === -1) {
                for (let j = 0; j < i; j++) {
                    if (!isTargetNote(remainingNotes[j])) {
                        swapIndex = j;
                        break;
                    }
                }
            }

            if (swapIndex !== -1) {
                // Swap the second target note with a non-target note
                const temp = remainingNotes[i + 2];
                remainingNotes[i + 2] = remainingNotes[swapIndex];
                remainingNotes[swapIndex] = temp;
            }
        }
    }

    // Fix any consecutive target notes (TN->TN pattern, not allowed in any mode)
    for (let i = 0; i < remainingNotes.length - 1; i++) {
        if (isTargetNote(remainingNotes[i]) && isTargetNote(remainingNotes[i + 1])) {
            // Find a non-target note to swap with
            let swapIndex = -1;
            for (let j = i + 2; j < remainingNotes.length; j++) {
                if (!isTargetNote(remainingNotes[j])) {
                    swapIndex = j;
                    break;
                }
            }

            if (swapIndex === -1) {
                for (let j = 0; j < i; j++) {
                    if (!isTargetNote(remainingNotes[j])) {
                        swapIndex = j;
                        break;
                    }
                }
            }

            if (swapIndex !== -1) {
                // Swap the second target note with a non-target note
                const temp = remainingNotes[i + 1];
                remainingNotes[i + 1] = remainingNotes[swapIndex];
                remainingNotes[swapIndex] = temp;
            }
        }
    }

    sequence.push(...remainingNotes);
    console.log(`Fallback sequence generated with ${targetCount} target notes`);
    return sequence;
}

// Validate sequence constraints
export function validateSequenceConstraints(sequence, target) {
    // Extract the base note (without instrument or octave) from the target
    const [targetInstrument, targetNoteOctave] = target.split('_');
    const targetNote = targetNoteOctave.slice(0, -1); // Remove the octave number

    // Function to determine if a note is a target note
    // Any note from any instrument or octave matching the TARGET NOTE will count as a target note
    const isTargetNote = (note) => {
        const [instrument, noteOctave] = note.split('_');
        const noteWithoutOctave = noteOctave.slice(0, -1); // Remove the octave number
        return noteWithoutOctave === targetNote;
    };

    // Determine valid target count range based on mode
    const isExtremeMode = currentMode === 'extreme';
    const minTargetCount = isExtremeMode ? 5 : 3;
    const maxTargetCount = isExtremeMode ? 7 : 5;

    let violations = [];

    // First note should not be a target note
    if (isTargetNote(sequence[0])) {
        violations.push('First note is target note');
    }

    // Check for TN->non-TN->TN pattern (not allowed in any mode)
    for (let i = 0; i < sequence.length - 2; i++) {
        if (isTargetNote(sequence[i]) && !isTargetNote(sequence[i + 1]) && isTargetNote(sequence[i + 2])) {
            violations.push(`TN->non-TN->TN pattern found at positions ${i + 1}, ${i + 2}, and ${i + 3}`);
        }
    }

    // Check for consecutive target notes (TN->TN pattern, not allowed in any mode)
    for (let i = 0; i < sequence.length - 1; i++) {
        if (isTargetNote(sequence[i]) && isTargetNote(sequence[i + 1])) {
            violations.push(`Consecutive target notes found at positions ${i + 1} and ${i + 2}`);
        }
    }

    // Check target count is within valid range
    const targetCount = sequence.filter(note => isTargetNote(note)).length;
    if (targetCount < minTargetCount || targetCount > maxTargetCount) {
        violations.push(`Invalid target count: ${targetCount} (should be between ${minTargetCount} and ${maxTargetCount})`);
    }

    // For extreme mode, check additional constraints
    if (isExtremeMode) {
        // Check if final target note is within last 7 notes
        const targetPositions = [];
        sequence.forEach((note, index) => {
            if (isTargetNote(note)) {
                targetPositions.push(index);
            }
        });

        if (targetPositions.length > 0) {
            const lastTargetPosition = targetPositions[targetPositions.length - 1];
            if (lastTargetPosition < sequence.length - 7) {
                violations.push(`Final target note not within last 7 notes (position ${lastTargetPosition + 1} of ${sequence.length})`);
            }
        }

        // Check for target notes with same octave/instrument within 5 notes of each other
        for (let i = 0; i < sequence.length; i++) {
            if (isTargetNote(sequence[i])) {
                const [noteInstrument, noteWithOctave] = sequence[i].split('_');
                const noteOctave = noteWithOctave.slice(-1);

                // Check next 5 notes for same octave/instrument target
                for (let j = i + 1; j < Math.min(i + 6, sequence.length); j++) {
                    if (isTargetNote(sequence[j])) {
                        const [nextInstrument, nextWithOctave] = sequence[j].split('_');
                        const nextOctave = nextWithOctave.slice(-1);

                        if (noteInstrument === nextInstrument && noteOctave === nextOctave) {
                            violations.push(`Target notes with same octave/instrument within 5 notes (positions ${i + 1} and ${j + 1})`);
                        }
                    }
                }
            }
        }
    }

    if (violations.length > 0) {
        console.warn('Sequence constraint violations:', violations);
    } else {
        console.log('✓ All sequence constraints satisfied');
    }
}

// Play next note
export function playNextNote(trialOrder, getSelectedOctaves, activeNotes) {
    // Determine sequence length based on mode
    const sequenceLength = currentMode === 'extreme' ? 32 : 16;

    if (currentNoteIndex >= sequenceLength || !isSequencePlaying) {
        endSequence(trialOrder, getSelectedOctaves, activeNotes);
        return;
    }

    // We no longer need to clear feedback here as it's handled by the timeout in showFeedback

    const noteToPlay = noteSequence[currentNoteIndex];
    const positionNumber = currentNoteIndex + 1;

    // Extract the base note (without instrument or octave) from the target
    const [targetInstrument, targetNoteOctave] = targetNote.split('_');
    const targetNoteBase = targetNoteOctave.slice(0, -1); // Remove the octave number

    // Determine if the note to play is a target note
    // Any note from any instrument or octave matching the TARGET NOTE will count as a target note
    const [playInstrument, playNoteOctave] = noteToPlay.split('_');
    const playNoteBase = playNoteOctave.slice(0, -1); // Remove the octave number
    const isTargetNote = playNoteBase === targetNoteBase;

    // const sequenceLength = currentMode === 'extreme' ? 32 : 16;
    console.log(`Playing note ${positionNumber}/${sequenceLength}: ${getDisplayName(noteToPlay)} ${isTargetNote ? '(TARGET!)' : ''}`);

    const audio = getAudioFromKey(noteToPlay);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    } else {
        console.error(`Failed to play audio for note: ${noteToPlay}`);
    }

    const noteStartTime = Date.now();

    const responseHandler = (e) => {
        // Accept both Space and Backspace keys
        if (e.code === 'Space' || e.code === 'Backspace') {
            // Prevent default browser behavior (scrolling for Space, navigation for Backspace)
            e.preventDefault();

            const reactionTime = Date.now() - noteStartTime;

            console.log(`Response detected! RT: ${reactionTime}ms, Target: ${isTargetNote}`);

            if (reactionTime <= 1750) {
                totalHits++;
                if (isTargetNote) {
                    correctHits++;
                    reactionTimes.push(reactionTime);
                    showFeedback(true, reactionTime);
                } else {
                    showFeedback(false, reactionTime);
                }

                // Update stats in real-time after user interaction
                updateStats();
            }
        }
    };

    document.addEventListener('keydown', responseHandler);

    setTimeout(() => {
        audio.pause();
    }, 1500);

    // Check if no delay mode is active
    const { isNoDelayMode } = getTrialSelectionState();
    const nextDelay = isNoDelayMode ? 0 : 500;
    console.log(`Next note delay: ${nextDelay}ms`);

    noteTimeout = setTimeout(() => {
        // Remove the event listener at the end of the note
        document.removeEventListener('keydown', responseHandler);
        currentNoteIndex++;

        // Clear any existing feedback before playing the next note
        clearFeedback();

        setTimeout(() => playNextNote(trialOrder, getSelectedOctaves, activeNotes), nextDelay);
    }, 1500);
}

// End sequence
export function endSequence(trialOrder, getSelectedOctaves, activeNotes) {
    isSequencePlaying = false;
    clearTimeout(noteTimeout);

    // Hide cancel button when sequence ends
    const cancelTrialBtn = document.getElementById('cancelTrial');
    cancelTrialBtn.style.display = 'none';

    console.log(`Trial ${currentTrial} complete. Moving to next trial in 1500ms...`);

    setTimeout(() => {
        nextTrial(trialOrder, getSelectedOctaves, activeNotes);
    }, 1500);
}

// End training
export function endTraining() {
    // Stop all audio playback
    stopAllAudio();
    isSequencePlaying = false;
    clearTimeout(noteTimeout);

    // Hide cancel button
    const cancelTrialBtn = document.getElementById('cancelTrial');
    cancelTrialBtn.style.display = 'none';

    // Hide response button and input methods
    const responseButton = document.getElementById('responseButton');
    const inputMethods = document.getElementById('inputMethods');
    responseButton.classList.remove('show');
    inputMethods.classList.remove('show');

    // Update UI to show training is complete
    document.getElementById('targetNote').textContent = 'Training Complete!';
    document.getElementById('phaseIndicator').textContent = `Training complete! ${correctHits} correct hits out of ${totalHits} total responses.`;

    // Re-enable start button and randomize toggle
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('startBtn').textContent = 'Start Again';
    const randomizeToggle = document.getElementById('randomizeToggle');
    randomizeToggle.style.pointerEvents = 'auto';
    randomizeToggle.style.opacity = '1';
}

// Cancel trial
export function cancelTrial(trialOrder, getSelectedOctaves, activeNotes) {
    // Stop all audio playback
    stopAllAudio();

    // Also stop the current audio if it exists (for the first note)
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
        window.currentAudio = null;
    }

    // Reset sequence state
    isSequencePlaying = false;
    clearTimeout(noteTimeout);

    // Hide cancel button
    const cancelTrialBtn = document.getElementById('cancelTrial');
    cancelTrialBtn.style.display = 'none';

    // Hide response button and input methods
    const responseButton = document.getElementById('responseButton');
    const inputMethods = document.getElementById('inputMethods');
    responseButton.classList.remove('show');
    inputMethods.classList.remove('show');

    // Update UI
    document.getElementById('targetNote').textContent = 'Trial Cancelled';

    // Wait a moment before resetting for next trial
    setTimeout(() => {
        // If we're still in the game screen, prepare for next trial
        const gameScreen = document.getElementById('gameScreen');
        if (gameScreen.classList.contains('active')) {
            document.getElementById('targetNote').textContent = 'Press Start to Begin';
            document.getElementById('startBtn').style.display = 'inline-block';
            const randomizeToggle = document.getElementById('randomizeToggle');
            randomizeToggle.style.pointerEvents = 'auto';
            randomizeToggle.style.opacity = '1';

            // Reset trial state
            currentTrial = 0;
            correctHits = 0;
            totalHits = 0;
            reactionTimes = [];
            updateStats();

            // Update phase indicator
            document.getElementById('phaseIndicator').textContent = `Ready to start - ${totalTrials} trials ahead`;
        }
    }, 1000);
}

// Show feedback
export function showFeedback(correct, reactionTime) {
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';

    if (correct) {
        feedback.classList.add('correct');
        feedback.textContent = `✓`;
    } else {
        feedback.classList.add('incorrect');
        feedback.textContent = `✗`;
    }

    feedback.classList.add('show');


    // Calculate time until the end of the note (1500ms from start)
    const timeUntilNoteEnd = Math.max(1500 - reactionTime, 0);

    // Start fade-out at the end of the note
    setTimeout(() => {
        // Add fade-out class to trigger the CSS transition
        feedback.classList.add('fade-out');

        // Hide feedback after fade-out completes
        //setTimeout(() => {
            //hideFeedback();
       // }, 200);
   }, timeUntilNoteEnd);
}

// Clear feedback
export function clearFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback empty';
    feedback.textContent = '';
}

// Hide feedback (used after fade-out completes)
function hideFeedback() {
    const feedback = document.getElementById('feedback');
    // First remove the show class to ensure the element is hidden
    feedback.classList.remove('show');
    // Then reset the element after a brief delay
    setTimeout(() => {
        feedback.className = 'feedback empty';
        feedback.textContent = '';
    }, 2);
}

// Stop all audio playback
export function stopAllAudio() {
    // Iterate through all instruments, octaves, and notes to pause any playing audio
    for (const instrument in audioFiles) {
        for (const octave in audioFiles[instrument]) {
            for (const note in audioFiles[instrument][octave]) {
                const audioObj = audioFiles[instrument][octave][note].audio;
                if (audioObj) {
                    audioObj.pause();
                    audioObj.currentTime = 0;
                }
            }
        }
    }
    console.log('All audio playback stopped');
}

// Handle response
export function handleResponse() {
    if (!isSequencePlaying) return;
    const event = new KeyboardEvent('keydown', { code: 'Space' });
    document.dispatchEvent(event);
}

// Helper function to get audio object from a key in the format "instrument_noteOctave"
export function getAudioFromKey(key) {
    const [instrument, noteOctave] = key.split('_');
    const octave = noteOctave.slice(-1);
    const note = noteOctave.slice(0, -1);

    if (audioFiles[instrument] && 
        audioFiles[instrument][octave] && 
        audioFiles[instrument][octave][noteOctave] && 
        audioFiles[instrument][octave][noteOctave].audio) {
        return audioFiles[instrument][octave][noteOctave].audio;
    }

    console.warn(`Audio not found for key: ${key}`);
    return null;
}

// Extract base note function
export function extractBaseNote(instrumentNoteOctave) {
    // Extract just the note+octave part (e.g., "piano_C3" -> "C3")
    const parts = instrumentNoteOctave.split('_');
    return parts[1]; // Returns "C3", "D#4", etc.
}

// Display name function
export function getDisplayName(key) {
    const [instrument, noteOctave] = key.split('_');
    const octave = noteOctave.slice(-1);
    const note = noteOctave.slice(0, -1);
    const noteMap = {
        'CSharp': 'C#', 'DSharp': 'D#', 'FSharp': 'F#', 'GSharp': 'G#', 'ASharp': 'A#'
    };

    if (currentMode === 'combined') {
        return `${noteMap[note] || note}${octave} (${instrument})`;
    } else if (currentMode === 'multi-octave' || document.querySelectorAll('.octave-checkbox:checked').length > 1) {
        return `${noteMap[note] || note}${octave}`;
    } else {
        return noteMap[note] || note;
    }
}

// Reset sequence state
export function resetSequenceState() {
    isSequencePlaying = false;
    currentNoteIndex = 0;
    console.log('Sequence state reset');
}

// Get current state
export function getState() {
    return {
        currentTrial,
        totalTrials,
        correctHits,
        totalHits,
        targetNote,
        reactionTimes,
        isSequencePlaying,
        currentNoteIndex,
        noteSequence,
        targetPositions,
        noteTimeout
    };
}
