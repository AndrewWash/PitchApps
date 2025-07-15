// Main Application Module
// Coordinates between trial selection and trial execution modules

import { audioFiles } from './audioFileConstants.js';
import { loadAudioFiles } from './audioLoader.js';
import * as TrialSelection from './trialSelection.js';
import * as TrialExecution from './trialExecution.js';

// Screen elements
const modeSelectionScreen = document.getElementById('modeSelectionScreen');
const gameScreen = document.getElementById('gameScreen');
const loadingStatus = document.getElementById('loadingStatus');
const instrumentSelector = document.getElementById('instrumentSelector');
const octaveSelector = document.getElementById('octaveSelector');
const modeGrid = document.getElementById('modeGrid');
const randomizeToggle = document.getElementById('randomizeToggle');
const extremeModeToggle = document.getElementById('extremeModeToggle');
const noDelayToggle = document.getElementById('noDelayToggle');
const toggleDescription = document.getElementById('toggleDescription');
const responseButton = document.getElementById('responseButton');
const inputMethods = document.getElementById('inputMethods');
const cancelTrialBtn = document.getElementById('cancelTrial');

// State variables
let trialOrder = [];

// Auto-load files on page load
window.addEventListener('load', initializeAudio);

// Initialize audio and track loading status
async function initializeAudio() {
    console.log('Starting automatic file loading for all instruments and octaves...');

    // Initialize instrument status
    TrialSelection.initializeInstrumentStatus();

    try {
        // Load all audio files using the imported function
        await loadAudioFiles();

        // Update instrument status based on loaded files
        TrialSelection.updateInstrumentStatus(audioFiles);

        // Update loading status
        TrialSelection.updateLoadingStatus(loadingStatus, instrumentSelector);
    } catch (error) {
        console.error('Error loading audio files:', error);
        loadingStatus.className = 'loading-status error';
        loadingStatus.innerHTML = '❌ Error loading audio files. Please check your connection.';
    }
}

// Randomize toggle functionality
randomizeToggle.addEventListener('click', function() {
    const isRandomized = TrialSelection.toggleRandomization();
    randomizeToggle.classList.toggle('active', isRandomized);
    TrialSelection.updateToggleDescription(toggleDescription);
});

// Extreme mode toggle functionality
extremeModeToggle.addEventListener('click', function() {
    const isExtremeMode = TrialSelection.toggleExtremeMode();
    extremeModeToggle.classList.toggle('active', isExtremeMode);
});

// No delay toggle functionality
noDelayToggle.addEventListener('click', function() {
    const isNoDelayMode = TrialSelection.toggleNoDelay();
    noDelayToggle.classList.toggle('active', isNoDelayMode);
});

// Response handling
function handleResponse() {
    TrialExecution.handleResponse();
}

responseButton.addEventListener('touchstart', function(e) {
    e.preventDefault();
    handleResponse();
});

responseButton.addEventListener('mousedown', function(e) {
    e.preventDefault();
    handleResponse();
});

responseButton.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Switch to game screen
function switchToGameScreen() {
    modeSelectionScreen.classList.add('hidden');
    gameScreen.classList.add('active');

    const modeBadge = document.getElementById('modeBadge');
    const phaseIndicator = document.getElementById('phaseIndicator');
    const startBtn = document.getElementById('startBtn');

    const { selectedInstruments, currentMode, totalTrials, isExtremeMode } = TrialSelection.getState();
    const selectedOctaves = TrialSelection.getSelectedOctaves();
    const octaveText = selectedOctaves.length > 1 ? selectedOctaves.join(',') : selectedOctaves[0];

    // Format the instrument text
    const instrumentText = selectedInstruments.length > 1 
        ? `MULTI-INSTRUMENT` 
        : selectedInstruments[0].toUpperCase();

    if (currentMode === 'extreme') {
        modeBadge.textContent = `EXTREME MODE (${instrumentText} ${octaveText})`;
        modeBadge.className = 'mode-badge extreme';
    } else if (currentMode === 'naturals') {
        const modePrefix = isExtremeMode ? "EXTREME " : "";
        modeBadge.textContent = `${modePrefix}NATURALS (${instrumentText} ${octaveText})`;
        modeBadge.className = isExtremeMode ? 'mode-badge extreme' : 'mode-badge naturals';
    } else if (currentMode === 'chromatic') {
        const modePrefix = isExtremeMode ? "EXTREME " : "";
        modeBadge.textContent = `${modePrefix}CHROMATIC (${instrumentText} ${octaveText})`;
        modeBadge.className = isExtremeMode ? 'mode-badge extreme' : 'mode-badge chromatic';
    }

    phaseIndicator.textContent = `Ready to start - ${totalTrials} trials ahead`;
    startBtn.textContent = `Start Training (${totalTrials} trials)`;

    TrialSelection.updateToggleDescription(toggleDescription);
}

// Switch to mode selection
function switchToModeSelection() {
    modeSelectionScreen.classList.remove('hidden');
    gameScreen.classList.remove('active');

    // Stop all audio playback when exiting trials view
    TrialExecution.stopAllAudio();

    // Reset state
    const { noteTimeout } = TrialExecution.getState();
    clearTimeout(noteTimeout);

    // Reset sequence playing state
    TrialExecution.resetSequenceState();

    // Reset target note display
    document.getElementById('targetNote').textContent = 'Press Start to Begin';

    // Reset phase indicator
    document.getElementById('phaseIndicator').textContent = `Ready to start - ${TrialExecution.getState().totalTrials} trials ahead`;

    // Hide cancel button
    cancelTrialBtn.style.display = 'none';

    // Hide response button and input methods
    responseButton.classList.remove('show');
    inputMethods.classList.remove('show');

    // Make sure start button is visible and centered
    document.getElementById('startBtn').style.display = 'inline-block';
}

// Back to modes button
document.getElementById('backToModes').addEventListener('click', switchToModeSelection);

// Cancel trial button
cancelTrialBtn.addEventListener('click', function() {
    const { activeNotes } = TrialSelection.getState();
    TrialExecution.cancelTrial(trialOrder, TrialSelection.getSelectedOctaves, activeNotes);
});

// Training functionality
document.getElementById('startBtn').addEventListener('click', startTraining);
document.addEventListener('keydown', handleSpacebar);

function startTraining() {
    trialOrder = TrialSelection.generateTrialOrder();
    const { currentMode, totalTrials, activeNotes } = TrialSelection.getState();

    // Initialize trial execution state
    TrialExecution.initializeState(currentMode, totalTrials);

    // Start training
    TrialExecution.startTraining(trialOrder, TrialSelection.getSelectedOctaves, activeNotes);
}

function handleSpacebar(e) {
    // Handled in playNextNote
}

// Setup mode buttons with proper context
function setupModeButtonsWithContext() {
    const naturalsMode = document.getElementById('naturalsMode');
    const chromaticMode = document.getElementById('chromaticMode');

    naturalsMode.onclick = () => TrialSelection.startMode('naturals', switchToGameScreen);
    chromaticMode.onclick = () => TrialSelection.startMode('chromatic', switchToGameScreen);
}

// Add event listeners for octave and instrument checkboxes
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('octave-checkbox')) {
        TrialSelection.updateMultiOctaveLabel();
        TrialSelection.updateModeGrid();
        setupModeButtonsWithContext();
    } else if (e.target.classList.contains('instrument-checkbox')) {
        const instrument = e.target.value;
        const isChecked = e.target.checked;
        TrialSelection.handleInstrumentSelection(instrument, isChecked);
    }
});

// Override the setupModeButtons function to use our context
// This needs to happen before any calls to setupModeButtons
TrialSelection.setupModeButtons = function() {
    setupModeButtonsWithContext();
};

// Call setupModeButtonsWithContext directly to initialize the buttons
setupModeButtonsWithContext();
