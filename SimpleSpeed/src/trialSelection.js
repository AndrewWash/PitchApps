// Trial Selection Module
// Handles instrument selection, octave selection, mode selection, and trial order generation

import { audioFiles } from './audioFileConstants.js';

// Constants
const instruments = ['piano', 'guitar', 'sax'];
const baseNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const baseSharpNotes = ['CSharp', 'DSharp', 'FSharp', 'GSharp', 'ASharp'];
const allBaseNotes = [...baseNotes, ...baseSharpNotes];

// State variables
let selectedInstruments = ['piano']; // Changed to array to support multiple selections
let currentMode = 'naturals';
let isRandomized = false;
let isExtremeMode = false;
let isNoDelayMode = false;
let activeNotes = [];
let totalTrials = 14;
let trialOrder = [];
const instrumentStatus = {};

// Initialize instrument status
export function initializeInstrumentStatus() {
    instruments.forEach(instrument => {
        instrumentStatus[instrument] = { naturals: 0, sharps: 0, total: 0 };
    });
    return instrumentStatus;
}

// Update instrument status based on loaded files
export function updateInstrumentStatus(audioFiles) {
    instruments.forEach(instrument => {
        for (const octave in audioFiles[instrument]) {
            for (const note in audioFiles[instrument][octave]) {
                if (audioFiles[instrument][octave][note].audio) {
                    // Track instrument status
                    if (baseNotes.includes(note.replace(/\d+$/, ''))) {
                        instrumentStatus[instrument].naturals++;
                    } else {
                        instrumentStatus[instrument].sharps++;
                    }
                    instrumentStatus[instrument].total++;
                }
            }
        }
    });
    return instrumentStatus;
}

// Update loading status in UI
export function updateLoadingStatus(loadingStatus, instrumentSelector) {
    const totalLoaded = Object.values(instrumentStatus).reduce((sum, status) => sum + status.total, 0);

    // Check which instruments are fully loaded
    const fullyLoadedInstruments = instruments.filter(instrument =>
        instrumentStatus[instrument].naturals >= 7 && instrumentStatus[instrument].sharps >= 5
    );

    console.log('Loading complete. Total loaded:', totalLoaded);
    console.log('Instruments with complete octaves:', fullyLoadedInstruments);

    if (fullyLoadedInstruments.length > 0) {
        // Hide loading status when files are loaded successfully
        loadingStatus.style.display = 'none';

        instrumentSelector.classList.add('show');
        setupInstrumentButtons();

        // Auto-select first available instrument if none selected
        if (selectedInstruments.length === 0 || !selectedInstruments.some(inst => fullyLoadedInstruments.includes(inst))) {
            selectInstrument(fullyLoadedInstruments[0]);
        }

        // Show extreme mode selector
        const extremeModeSelector = document.getElementById('extremeModeSelector');
        extremeModeSelector.classList.add('show');

        // Show octave selector by default since we have at least one instrument selected
        const octaveSelector = document.getElementById('octaveSelector');
        octaveSelector.classList.add('show');
        updateOctaveAvailability();

        // Show mode grid by default since we have at least one octave selected by default
        updateModeGrid();
    } else if (totalLoaded > 0) {
        loadingStatus.className = 'loading-status error';
        loadingStatus.innerHTML = `⚠️ Partial loading: ${totalLoaded} files. No complete octaves available.`;
    } else {
        loadingStatus.className = 'loading-status error';
        loadingStatus.innerHTML = '❌ No audio files found. Please check file structure.';
    }
}

// Setup instrument checkboxes
export function setupInstrumentButtons() {
    instruments.forEach(instrument => {
        const checkbox = document.querySelector(`.instrument-checkbox[value="${instrument}"]`);
        const label = checkbox.parentElement;
        const status = instrumentStatus[instrument];

        if (status.naturals >= 7 && status.sharps >= 5) {
            label.classList.remove('unavailable');
            checkbox.disabled = false;
            checkbox.addEventListener('change', () => handleInstrumentSelection(instrument, checkbox.checked));
        } else {
            label.classList.add('unavailable');
            checkbox.disabled = true;
            label.title = `Missing files: ${7 - status.naturals} naturals, ${5 - status.sharps} sharps`;
        }
    });

    // Initialize with the default selection
    updateMultiInstrumentLabel();
}

// Handle instrument selection
export function handleInstrumentSelection(instrument, isChecked) {
    if (isChecked) {
        // Add instrument to the selected list if not already there
        if (!selectedInstruments.includes(instrument)) {
            selectedInstruments.push(instrument);
        }
    } else {
        // Remove instrument from the selected list
        selectedInstruments = selectedInstruments.filter(inst => inst !== instrument);

        // Ensure at least one instrument is selected
        if (selectedInstruments.length === 0) {
            // Find the first available instrument
            const availableInstrument = instruments.find(inst => {
                const status = instrumentStatus[inst];
                return status.naturals >= 7 && status.sharps >= 5;
            });

            if (availableInstrument) {
                selectedInstruments.push(availableInstrument);
                const checkbox = document.querySelector(`.instrument-checkbox[value="${availableInstrument}"]`);
                if (checkbox) checkbox.checked = true;
            }
        }
    }

    // Update the multi-instrument label
    updateMultiInstrumentLabel();

    // Show extreme mode selector
    const extremeModeSelector = document.getElementById('extremeModeSelector');
    extremeModeSelector.classList.add('show');

    // Show octave selector
    const octaveSelector = document.getElementById('octaveSelector');
    octaveSelector.classList.add('show');
    updateOctaveAvailability();

    console.log(`Selected instruments: ${selectedInstruments.join(', ')}`);

    return selectedInstruments;
}

// Update multi-instrument label
export function updateMultiInstrumentLabel() {
    const multiInstrumentLabel = document.getElementById("multiInstrumentLabel");

    if (selectedInstruments.length > 1) {
        multiInstrumentLabel.textContent = "Multi-Instrument Mode Enabled";
    } else {
        multiInstrumentLabel.textContent = "";
    }
}

// Legacy function for backward compatibility
export function selectInstrument(instrument) {
    // Clear all current selections
    selectedInstruments = [];

    // Add the single instrument
    selectedInstruments.push(instrument);

    // Update checkbox states
    instruments.forEach(inst => {
        const checkbox = document.querySelector(`.instrument-checkbox[value="${inst}"]`);
        if (checkbox) checkbox.checked = inst === instrument;
    });

    // Update the multi-instrument label
    updateMultiInstrumentLabel();

    // Show extreme mode selector
    const extremeModeSelector = document.getElementById('extremeModeSelector');
    extremeModeSelector.classList.add('show');

    // Show octave selector
    const octaveSelector = document.getElementById('octaveSelector');
    octaveSelector.classList.add('show');
    updateOctaveAvailability();

    console.log(`Selected instrument (legacy): ${instrument}`);

    return selectedInstruments[0];
}

// Update octave availability
export function updateOctaveAvailability() {
    const checkboxes = document.querySelectorAll('.octave-checkbox');

    checkboxes.forEach(checkbox => {
        const octave = checkbox.value;

        // Check if the octave is complete for any of the selected instruments
        let isCompleteForAnyInstrument = false;

        for (const instrument of selectedInstruments) {
            // Check if notes exist in the audioFiles structure with audio property
            const octaveNaturals = baseNotes.filter(note => {
                return audioFiles[instrument] && 
                       audioFiles[instrument][octave] && 
                       audioFiles[instrument][octave][note + octave] && 
                       audioFiles[instrument][octave][note + octave].audio;
            }).length;

            const octaveSharps = baseSharpNotes.filter(note => {
                return audioFiles[instrument] && 
                       audioFiles[instrument][octave] && 
                       audioFiles[instrument][octave][note + octave] && 
                       audioFiles[instrument][octave][note + octave].audio;
            }).length;

            const isComplete = octaveNaturals === 7 && octaveSharps === 5;

            if (isComplete) {
                isCompleteForAnyInstrument = true;
                console.log(`${instrument} octave ${octave}: ${octaveNaturals} naturals, ${octaveSharps} sharps, complete: ${isComplete}`);
                break; // No need to check other instruments if one is complete
            }
        }

        checkbox.disabled = !isCompleteForAnyInstrument;
        checkbox.parentElement.style.opacity = isCompleteForAnyInstrument ? '1' : '0.5';

        if (!isCompleteForAnyInstrument && checkbox.checked) {
            checkbox.checked = false;
        }
    });

    updateMultiOctaveLabel();
    updateModeGrid();
}

// Get selected octaves
export function getSelectedOctaves() {
    return Array.from(document.querySelectorAll('.octave-checkbox:checked')).map(cb => cb.value);
}

// Build active notes
export function buildActiveNotes(instruments, mode) {
    // If a single instrument is passed as a string, convert it to an array
    const instrumentsArray = Array.isArray(instruments) ? instruments : [instruments];
    const selectedOctaves = getSelectedOctaves();
    const activeNotes = [];

    let notesToUse = mode === 'naturals' ? baseNotes : allBaseNotes;

    instrumentsArray.forEach(instrument => {
        notesToUse.forEach(note => {
            selectedOctaves.forEach(octave => {
                // Check if the note exists in the audioFiles structure with audio property
                if (audioFiles[instrument] && 
                    audioFiles[instrument][octave] && 
                    audioFiles[instrument][octave][note + octave] && 
                    audioFiles[instrument][octave][note + octave].audio) {
                    // Create a key in the format instrument_noteOctave (e.g., piano_C3)
                    const key = `${instrument}_${note}${octave}`;
                    activeNotes.push(key);
                }
            });
        });
    });

    return activeNotes;
}

// Update multi-octave label
export function updateMultiOctaveLabel() {
    const selectedOctaves = getSelectedOctaves();
    const multiOctaveLabel = document.getElementById("multiOctaveLabel");

    if (selectedOctaves.length > 1) {
        multiOctaveLabel.textContent = "Multi-Octave Mode Enabled";
    } else {
        multiOctaveLabel.textContent = "";
    }
}

// Update mode grid
export function updateModeGrid() {
    const selectedOctaves = getSelectedOctaves();
    const modeGrid = document.getElementById('modeGrid');

    if (selectedOctaves.length > 0) {
        modeGrid.style.display = 'grid';
        setupModeButtons();
    } else {
        modeGrid.style.display = 'none';
    }
}

// Setup mode buttons
export function setupModeButtons() {
    const naturalsMode = document.getElementById('naturalsMode');
    const chromaticMode = document.getElementById('chromaticMode');

    // Natural Notes Mode
    naturalsMode.classList.add('available');
    naturalsMode.classList.remove('unavailable');
    naturalsMode.onclick = () => startMode('naturals');

    // Chromatic Mode
    chromaticMode.classList.add('available');
    chromaticMode.classList.remove('unavailable');
    chromaticMode.onclick = () => startMode('chromatic');
}

// Start mode
export function startMode(mode, switchToGameScreen) {
    currentMode = mode;

    if (mode === 'naturals') {
        activeNotes = buildActiveNotes(selectedInstruments, 'naturals');
        totalTrials = 14;
    } else if (mode === 'chromatic') {
        activeNotes = buildActiveNotes(selectedInstruments, 'chromatic');
        totalTrials = 24;
    } else {
        console.error(`Unknown mode: ${mode}`);
        return;
    }

    // Apply extreme mode settings if enabled
    if (isExtremeMode) {
        currentMode = 'extreme';
    }

    console.log("Active Notes:", activeNotes);

    // Check if switchToGameScreen is provided before calling it
    if (typeof switchToGameScreen === 'function') {
        switchToGameScreen();
    } else {
        // If switchToGameScreen is not provided, try to find it in the global scope
        console.log("switchToGameScreen function not provided to startMode, attempting to find it in global scope");
        if (typeof window.switchToGameScreen === 'function') {
            window.switchToGameScreen();
        } else {
            console.error("switchToGameScreen function not found. Mode selected but game screen not shown.");
            // Try to switch to game screen manually
            const modeSelectionScreen = document.getElementById('modeSelectionScreen');
            const gameScreen = document.getElementById('gameScreen');
            if (modeSelectionScreen && gameScreen) {
                modeSelectionScreen.classList.add('hidden');
                gameScreen.classList.add('active');

                // Update UI elements that would normally be updated by switchToGameScreen
                const modeBadge = document.getElementById('modeBadge');
                const phaseIndicator = document.getElementById('phaseIndicator');
                const startBtn = document.getElementById('startBtn');
                const toggleDescription = document.getElementById('toggleDescription');

                if (modeBadge && phaseIndicator && startBtn) {
                    const selectedOctaves = getSelectedOctaves();
                    const octaveText = selectedOctaves.length > 1 ? selectedOctaves.join(',') : selectedOctaves[0];

                    if (mode === 'naturals') {
                        modeBadge.textContent = `NATURALS (${selectedInstrument.toUpperCase()} ${octaveText})`;
                        modeBadge.className = 'mode-badge naturals';
                    } else if (mode === 'chromatic') {
                        modeBadge.textContent = `CHROMATIC (${selectedInstrument.toUpperCase()} ${octaveText})`;
                        modeBadge.className = 'mode-badge chromatic';
                    } else if (mode === 'multi-octave') {
                        modeBadge.textContent = `MULTI-OCTAVE (${selectedInstrument.toUpperCase()})`;
                        modeBadge.className = 'mode-badge multi-octave';
                    } else if (mode === 'combined') {
                        modeBadge.textContent = 'COMBINED MODE';
                        modeBadge.className = 'mode-badge combined';
                    } else if (mode === 'extreme') {
                        modeBadge.textContent = `EXTREME MODE (${selectedInstrument.toUpperCase()} ${octaveText})`;
                        modeBadge.className = 'mode-badge extreme';
                    }

                    phaseIndicator.textContent = `Ready to start - ${totalTrials} trials ahead`;
                    startBtn.textContent = `Start Training (${totalTrials} trials)`;

                    if (toggleDescription) {
                        updateToggleDescription(toggleDescription);
                    }
                }

                console.log("Manually switched to game screen and updated UI elements");
            }
        }
    }

    return { currentMode, activeNotes, totalTrials };
}

// Update toggle description
export function updateToggleDescription(toggleDescription) {
    // No text content is set as per the requirement to remove the description text
    toggleDescription.textContent = '';
}

// Toggle randomization
export function toggleRandomization() {
    isRandomized = !isRandomized;
    return isRandomized;
}

// Toggle extreme mode
export function toggleExtremeMode() {
    isExtremeMode = !isExtremeMode;
    return isExtremeMode;
}

// Toggle no delay mode
export function toggleNoDelay() {
    isNoDelayMode = !isNoDelayMode;
    console.log('No delay mode toggled:', isNoDelayMode);
    return isNoDelayMode;
}

// Generate trial order
export function generateTrialOrder() {
    // Get unique base notes (without instrument or octave)
    const getBaseNote = (noteKey) => {
        const [instrument, noteOctave] = noteKey.split('_');
        return noteOctave.slice(0, -1); // Remove the octave number
    };

    // Group notes by their base note (C, C#, D, etc.)
    const notesByBaseNote = {};
    activeNotes.forEach(note => {
        const baseNote = getBaseNote(note);
        if (!notesByBaseNote[baseNote]) {
            notesByBaseNote[baseNote] = [];
        }
        notesByBaseNote[baseNote].push(note);
    });

    // Get the list of unique base notes
    const uniqueBaseNotes = Object.keys(notesByBaseNote);

    // For sequential mode, sort the base notes in chromatic order
    if (!isRandomized) {
        // Define the chromatic order
        const chromaticOrder = ['C', 'CSharp', 'D', 'DSharp', 'E', 'F', 'FSharp', 'G', 'GSharp', 'A', 'ASharp', 'B'];
        uniqueBaseNotes.sort((a, b) => chromaticOrder.indexOf(a) - chromaticOrder.indexOf(b));
    } else {
        // For random mode, shuffle the unique base notes
        for (let i = uniqueBaseNotes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [uniqueBaseNotes[i], uniqueBaseNotes[j]] = [uniqueBaseNotes[j], uniqueBaseNotes[i]];
        }
    }

    // Create the trial order using one note for each unique base note
    let baseTrialOrder = [];
    uniqueBaseNotes.forEach(baseNote => {
        // Randomly select one note from each base note group
        const notesForThisBase = notesByBaseNote[baseNote];
        const randomIndex = Math.floor(Math.random() * notesForThisBase.length);
        baseTrialOrder.push(notesForThisBase[randomIndex]);
    });

    // For combined or multi-octave modes, limit to totalTrials
    if (currentMode === 'combined' || currentMode === 'multi-octave') {
        trialOrder = baseTrialOrder.slice(0, totalTrials);
    } else {
        // Repeat the sequence to match the expected total trials
        trialOrder = [];
        while (trialOrder.length < totalTrials) {
            trialOrder = [...trialOrder, ...baseTrialOrder];
        }
        // Trim to exact totalTrials if needed
        trialOrder = trialOrder.slice(0, totalTrials);
    }

    console.log(isRandomized ? 'Randomized trial order generated:' : 'Fixed trial order:', trialOrder);
    return trialOrder;
}

// Get current state
export function getState() {
    return {
        selectedInstruments,
        currentMode,
        isRandomized,
        isExtremeMode,
        isNoDelayMode,
        activeNotes,
        totalTrials,
        trialOrder
    };
}

// Export constants
export { instruments, baseNotes, baseSharpNotes, allBaseNotes };
