(function () {
	'use strict';

	const audioFiles = {
		'guitar': {
			'2': {
				'A2': {
					'isSharp': false,
				},
				'ASharp2': {
					'isSharp': true,
				},
				'B2': {
					'isSharp': false,
				},
				'C2': {
					'isSharp': false,
				},
				'CSharp2': {
					'isSharp': true,
				},
				'D2': {
					'isSharp': false,
				},
				'DSharp2': {
					'isSharp': true,
				},
				'E2': {
					'isSharp': false,
				},
				'F2': {
					'isSharp': false,
				},
				'FSharp2': {
					'isSharp': true,
				},
				'G2': {
					'isSharp': false,
				},
				'GSharp2': {
					'isSharp': true,
				},
			},
			'3': {
				'A3': {
					'isSharp': false,
				},
				'ASharp3': {
					'isSharp': true,
				},
				'B3': {
					'isSharp': false,
				},
				'C3': {
					'isSharp': false,
				},
				'CSharp3': {
					'isSharp': true,
				},
				'D3': {
					'isSharp': false,
				},
				'DSharp3': {
					'isSharp': true,
				},
				'E3': {
					'isSharp': false,
				},
				'F3': {
					'isSharp': false,
				},
				'FSharp3': {
					'isSharp': true,
				},
				'G3': {
					'isSharp': false,
				},
				'GSharp3': {
					'isSharp': true,
				},
			},
			'4': {
				'A4': {
					'isSharp': false,
				},
				'ASharp4': {
					'isSharp': true,
				},
				'B4': {
					'isSharp': false,
				},
				'C4': {
					'isSharp': false,
				},
				'CSharp4': {
					'isSharp': true,
				},
				'D4': {
					'isSharp': false,
				},
				'DSharp4': {
					'isSharp': true,
				},
				'E4': {
					'isSharp': false,
				},
				'F4': {
					'isSharp': false,
				},
				'FSharp4': {
					'isSharp': true,
				},
				'G4': {
					'isSharp': false,
				},
				'GSharp4': {
					'isSharp': true,
				},
			}
		},
		'piano': {
			'2': {
				'A2': {
					'isSharp': false,
				},
				'ASharp2': {
					'isSharp': true,
				},
				'B2': {
					'isSharp': false,
				},
				'C2': {
					'isSharp': false,
				},
				'CSharp2': {
					'isSharp': true,
				},
				'D2': {
					'isSharp': false,
				},
				'DSharp2': {
					'isSharp': true,
				},
				'E2': {
					'isSharp': false,
				},
				'F2': {
					'isSharp': false,
				},
				'FSharp2': {
					'isSharp': true,
				},
				'G2': {
					'isSharp': false,
				},
				'GSharp2': {
					'isSharp': true,
				},
			},
			'3': {
				'A3': {
					'isSharp': false,
				},
				'ASharp3': {
					'isSharp': true,
				},
				'B3': {
					'isSharp': false,
				},
				'C3': {
					'isSharp': false,
				},
				'CSharp3': {
					'isSharp': true,
				},
				'D3': {
					'isSharp': false,
				},
				'DSharp3': {
					'isSharp': true,
				},
				'E3': {
					'isSharp': false,
				},
				'F3': {
					'isSharp': false,
				},
				'FSharp3': {
					'isSharp': true,
				},
				'G3': {
					'isSharp': false,
				},
				'GSharp3': {
					'isSharp': true,
				},
			},
			'4': {
				'A4': {
					'isSharp': false,
				},
				'ASharp4': {
					'isSharp': true,
				},
				'B4': {
					'isSharp': false,
				},
				'C4': {
					'isSharp': false,
				},
				'CSharp4': {
					'isSharp': true,
				},
				'D4': {
					'isSharp': false,
				},
				'DSharp4': {
					'isSharp': true,
				},
				'E4': {
					'isSharp': false,
				},
				'F4': {
					'isSharp': false,
				},
				'FSharp4': {
					'isSharp': true,
				},
				'G4': {
					'isSharp': false,
				},
				'GSharp4': {
					'isSharp': true,
				},
			},
			'5': {
				'A5': {
					'isSharp': false,
				},
				'ASharp5': {
					'isSharp': true,
				},
				'B5': {
					'isSharp': false,
				},
				'C5': {
					'isSharp': false,
				},
				'CSharp5': {
					'isSharp': true,
				},
				'D5': {
					'isSharp': false,
				},
				'DSharp5': {
					'isSharp': true,
				},
				'E5': {
					'isSharp': false,
				},
				'F5': {
					'isSharp': false,
				},
				'FSharp5': {
					'isSharp': true,
				},
				'G5': {
					'isSharp': false,
				},
				'GSharp5': {
					'isSharp': true,
				},
			}
		},
		'sax': {
			'2': {
				'A2': {
					'isSharp': false,
				},
				'ASharp2': {
					'isSharp': true,
				},
				'B2': {
					'isSharp': false,
				},
				'C2': {
					'isSharp': false,
				},
				'CSharp2': {
					'isSharp': true,
				},
				'D2': {
					'isSharp': false,
				},
				'DSharp2': {
					'isSharp': true,
				},
				'E2': {
					'isSharp': false,
				},
				'F2': {
					'isSharp': false,
				},
				'FSharp2': {
					'isSharp': true,
				},
				'G2': {
					'isSharp': false,
				},
				'GSharp2': {
					'isSharp': true,
				},
			},
			'3': {
				'A3': {
					'isSharp': false,
				},
				'ASharp3': {
					'isSharp': true,
				},
				'B3': {
					'isSharp': false,
				},
				'C3': {
					'isSharp': false,
				},
				'CSharp3': {
					'isSharp': true,
				},
				'D3': {
					'isSharp': false,
				},
				'DSharp3': {
					'isSharp': true,
				},
				'E3': {
					'isSharp': false,
				},
				'F3': {
					'isSharp': false,
				},
				'FSharp3': {
					'isSharp': true,
				},
				'G3': {
					'isSharp': false,
				},
				'GSharp3': {
					'isSharp': true,
				},
			},
			'4': {
				'A4': {
					'isSharp': false,
				},
				'ASharp4': {
					'isSharp': true,
				},
				'B4': {
					'isSharp': false,
				},
				'C4': {
					'isSharp': false,
				},
				'CSharp4': {
					'isSharp': true,
				},
				'D4': {
					'isSharp': false,
				},
				'DSharp4': {
					'isSharp': true,
				},
				'E4': {
					'isSharp': false,
				},
				'F4': {
					'isSharp': false,
				},
				'FSharp4': {
					'isSharp': true,
				},
				'G4': {
					'isSharp': false,
				},
				'GSharp4': {
					'isSharp': true,
				},
			}
		}
	};

	/**
	 * Loads all audio files for each instrument and octave and stores them as an 'audio' property
	 * on the respective object in the audioFiles structure.
	 * @returns {Promise} A promise that resolves when all files have either loaded or errored
	 */
	function loadAudioFiles() {
	    console.log('Starting to load audio files for all instruments and octaves...');

	    // Array to hold all loading promises
	    const loadingPromises = [];

	    // Iterate through all instruments
	    for (const instrument in audioFiles) {
	        // Iterate through all octaves for this instrument
	        for (const octave in audioFiles[instrument]) {
	            // Iterate through all notes for this octave
	            for (const note in audioFiles[instrument][octave]) {
	                // Determine if the note is natural or sharp and set the isSharp property
	                const isSharp = note.includes('Sharp');
	                audioFiles[instrument][octave][note].isSharp = isSharp;

	                // Create the file path - all notes are now in the same directory for the octave
	                const path = `./sounds/${instrument}/${octave}/${note}.wav`;

	                // Create a promise for loading this audio file
	                const loadPromise = new Promise((resolve, reject) => {
	                    const audio = new Audio();
	                    audio.src = path;

	                    // When the audio can play through, it's loaded
	                    audio.addEventListener('canplaythrough', () => {
	                        // Store the audio object on the respective note object
	                        audioFiles[instrument][octave][note].audio = audio;
	                        console.log(`✓ Loaded: ${instrument} ${octave} ${note} (${path})`);
	                        resolve();
	                    });

	                    // Handle errors
	                    audio.addEventListener('error', (e) => {
	                        console.error(`✗ Missing: ${instrument} ${octave} ${note} (${path})`);
	                        // Resolve anyway to not block the loading process
	                        resolve();
	                    });

	                    // Start loading the audio
	                    audio.load();
	                });

	                loadingPromises.push(loadPromise);
	            }
	        }
	    }

	    // Return a promise that resolves when all audio files have loaded or errored
	    return Promise.all(loadingPromises).then(() => {
	        console.log('All audio files finished loading');
	        return audioFiles;
	    });
	}

	// Trial Selection Module

	// Constants
	const instruments = ['piano', 'guitar', 'sax'];
	const baseNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const baseSharpNotes = ['CSharp', 'DSharp', 'FSharp', 'GSharp', 'ASharp'];
	const allBaseNotes = [...baseNotes, ...baseSharpNotes];

	// State variables
	let selectedInstruments = ['piano']; // Changed to array to support multiple selections
	let currentMode$1 = 'naturals';
	let isRandomized = false;
	let isExtremeMode = false;
	let isNoDelayMode = false;
	let activeNotes = [];
	let totalTrials$1 = 14;
	let trialOrder$1 = [];
	const instrumentStatus = {};

	// Initialize instrument status
	function initializeInstrumentStatus() {
	    instruments.forEach(instrument => {
	        instrumentStatus[instrument] = { naturals: 0, sharps: 0, total: 0 };
	    });
	    return instrumentStatus;
	}

	// Update instrument status based on loaded files
	function updateInstrumentStatus(audioFiles) {
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
	function updateLoadingStatus(loadingStatus, instrumentSelector) {
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
	function setupInstrumentButtons() {
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
	function handleInstrumentSelection(instrument, isChecked) {
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
	function updateMultiInstrumentLabel() {
	    const multiInstrumentLabel = document.getElementById("multiInstrumentLabel");

	    if (selectedInstruments.length > 1) {
	        multiInstrumentLabel.textContent = "Multi-Instrument Mode Enabled";
	    } else {
	        multiInstrumentLabel.textContent = "";
	    }
	}

	// Legacy function for backward compatibility
	function selectInstrument(instrument) {
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
	function updateOctaveAvailability() {
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
	function getSelectedOctaves() {
	    return Array.from(document.querySelectorAll('.octave-checkbox:checked')).map(cb => cb.value);
	}

	// Build active notes
	function buildActiveNotes(instruments, mode) {
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
	function updateMultiOctaveLabel() {
	    const selectedOctaves = getSelectedOctaves();
	    const multiOctaveLabel = document.getElementById("multiOctaveLabel");

	    if (selectedOctaves.length > 1) {
	        multiOctaveLabel.textContent = "Multi-Octave Mode Enabled";
	    } else {
	        multiOctaveLabel.textContent = "";
	    }
	}

	// Update mode grid
	function updateModeGrid() {
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
	function setupModeButtons() {
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
	function startMode(mode, switchToGameScreen) {
	    currentMode$1 = mode;

	    if (mode === 'naturals') {
	        activeNotes = buildActiveNotes(selectedInstruments, 'naturals');
	        totalTrials$1 = 14;
	    } else if (mode === 'chromatic') {
	        activeNotes = buildActiveNotes(selectedInstruments, 'chromatic');
	        totalTrials$1 = 24;
	    } else {
	        console.error(`Unknown mode: ${mode}`);
	        return;
	    }

	    // Apply extreme mode settings if enabled
	    if (isExtremeMode) {
	        currentMode$1 = 'extreme';
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

	                    phaseIndicator.textContent = `Ready to start - ${totalTrials$1} trials ahead`;
	                    startBtn.textContent = `Start Training (${totalTrials$1} trials)`;

	                    if (toggleDescription) {
	                        updateToggleDescription(toggleDescription);
	                    }
	                }

	                console.log("Manually switched to game screen and updated UI elements");
	            }
	        }
	    }

	    return { currentMode: currentMode$1, activeNotes, totalTrials: totalTrials$1 };
	}

	// Update toggle description
	function updateToggleDescription(toggleDescription) {
	    // No text content is set as per the requirement to remove the description text
	    toggleDescription.textContent = '';
	}

	// Toggle randomization
	function toggleRandomization() {
	    isRandomized = !isRandomized;
	    return isRandomized;
	}

	// Toggle extreme mode
	function toggleExtremeMode() {
	    isExtremeMode = !isExtremeMode;
	    return isExtremeMode;
	}

	// Toggle no delay mode
	function toggleNoDelay() {
	    isNoDelayMode = !isNoDelayMode;
	    console.log('No delay mode toggled:', isNoDelayMode);
	    return isNoDelayMode;
	}

	// Generate trial order
	function generateTrialOrder() {
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
	    if (currentMode$1 === 'combined' || currentMode$1 === 'multi-octave') {
	        trialOrder$1 = baseTrialOrder.slice(0, totalTrials$1);
	    } else {
	        // Repeat the sequence to match the expected total trials
	        trialOrder$1 = [];
	        while (trialOrder$1.length < totalTrials$1) {
	            trialOrder$1 = [...trialOrder$1, ...baseTrialOrder];
	        }
	        // Trim to exact totalTrials if needed
	        trialOrder$1 = trialOrder$1.slice(0, totalTrials$1);
	    }

	    console.log(isRandomized ? 'Randomized trial order generated:' : 'Fixed trial order:', trialOrder$1);
	    return trialOrder$1;
	}

	// Get current state
	function getState$1() {
	    return {
	        selectedInstruments,
	        currentMode: currentMode$1,
	        isRandomized,
	        isExtremeMode,
	        isNoDelayMode,
	        activeNotes,
	        totalTrials: totalTrials$1,
	        trialOrder: trialOrder$1
	    };
	}

	// Trial Execution Module

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

	// Initialize state with values from trial selection
	function initializeState(mode, trials) {
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
	function startTraining$1(trialOrder, getSelectedOctaves, activeNotes) {
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
	function nextTrial(trialOrder, getSelectedOctaves, activeNotes) {
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
	function updateStats() {
	    document.getElementById('trialCount').textContent = currentTrial;
	    document.getElementById('correctCount').textContent = correctHits;

	    const accuracy = totalHits > 0 ? Math.round((correctHits / totalHits) * 100) : 0;
	    document.getElementById('accuracy').textContent = accuracy + '%';

	    const avgRT = reactionTimes.length > 0 ?
	        Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length) : 0;
	    document.getElementById('avgReactionTime').textContent = avgRT + 'ms';
	}

	// Update phase indicator
	function updatePhaseIndicator() {
	    document.getElementById('randomizeToggle').classList.contains('active') ? 'Randomized' : 'Fixed';
	    targetNote.split('_');

	    document.getElementById('phaseIndicator').textContent =
	        `Trial ${currentTrial} of ${totalTrials}`;
	}

	// Start note sequence
	function startNoteSequence(trialOrder, getSelectedOctaves, activeNotes) {
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
	function generateConstrainedSequence(target, availableNotes) {
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
	function generateFallbackSequence(target, availableNotes) {
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
	function validateSequenceConstraints(sequence, target) {
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
	function playNextNote(trialOrder, getSelectedOctaves, activeNotes) {
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
	    const { isNoDelayMode } = getState$1();
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
	function endSequence(trialOrder, getSelectedOctaves, activeNotes) {
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
	function endTraining() {
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
	function cancelTrial(trialOrder, getSelectedOctaves, activeNotes) {
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
	function showFeedback(correct, reactionTime) {
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
	function clearFeedback() {
	    const feedback = document.getElementById('feedback');
	    feedback.className = 'feedback empty';
	    feedback.textContent = '';
	}

	// Stop all audio playback
	function stopAllAudio() {
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
	function handleResponse$1() {
	    if (!isSequencePlaying) return;
	    const event = new KeyboardEvent('keydown', { code: 'Space' });
	    document.dispatchEvent(event);
	}

	// Helper function to get audio object from a key in the format "instrument_noteOctave"
	function getAudioFromKey(key) {
	    const [instrument, noteOctave] = key.split('_');
	    const octave = noteOctave.slice(-1);
	    noteOctave.slice(0, -1);

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
	function extractBaseNote(instrumentNoteOctave) {
	    // Extract just the note+octave part (e.g., "piano_C3" -> "C3")
	    const parts = instrumentNoteOctave.split('_');
	    return parts[1]; // Returns "C3", "D#4", etc.
	}

	// Display name function
	function getDisplayName(key) {
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
	function resetSequenceState() {
	    isSequencePlaying = false;
	    currentNoteIndex = 0;
	    console.log('Sequence state reset');
	}

	// Get current state
	function getState() {
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

	// Main Application Module

	// Screen elements
	const modeSelectionScreen = document.getElementById('modeSelectionScreen');
	const gameScreen = document.getElementById('gameScreen');
	const loadingStatus = document.getElementById('loadingStatus');
	const instrumentSelector = document.getElementById('instrumentSelector');
	document.getElementById('octaveSelector');
	document.getElementById('modeGrid');
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
	    initializeInstrumentStatus();

	    try {
	        // Load all audio files using the imported function
	        await loadAudioFiles();

	        // Update instrument status based on loaded files
	        updateInstrumentStatus(audioFiles);

	        // Update loading status
	        updateLoadingStatus(loadingStatus, instrumentSelector);
	    } catch (error) {
	        console.error('Error loading audio files:', error);
	        loadingStatus.className = 'loading-status error';
	        loadingStatus.innerHTML = '❌ Error loading audio files. Please check your connection.';
	    }
	}

	// Randomize toggle functionality
	randomizeToggle.addEventListener('click', function() {
	    const isRandomized = toggleRandomization();
	    randomizeToggle.classList.toggle('active', isRandomized);
	    updateToggleDescription(toggleDescription);
	});

	// Extreme mode toggle functionality
	extremeModeToggle.addEventListener('click', function() {
	    const isExtremeMode = toggleExtremeMode();
	    extremeModeToggle.classList.toggle('active', isExtremeMode);
	});

	// No delay toggle functionality
	noDelayToggle.addEventListener('click', function() {
	    const isNoDelayMode = toggleNoDelay();
	    noDelayToggle.classList.toggle('active', isNoDelayMode);
	});

	// Response handling
	function handleResponse() {
	    handleResponse$1();
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

	    const { selectedInstruments, currentMode, totalTrials, isExtremeMode } = getState$1();
	    const selectedOctaves = getSelectedOctaves();
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

	    updateToggleDescription(toggleDescription);
	}

	// Switch to mode selection
	function switchToModeSelection() {
	    modeSelectionScreen.classList.remove('hidden');
	    gameScreen.classList.remove('active');

	    // Stop all audio playback when exiting trials view
	    stopAllAudio();

	    // Reset state
	    const { noteTimeout } = getState();
	    clearTimeout(noteTimeout);

	    // Reset sequence playing state
	    resetSequenceState();

	    // Reset target note display
	    document.getElementById('targetNote').textContent = 'Press Start to Begin';

	    // Reset phase indicator
	    document.getElementById('phaseIndicator').textContent = `Ready to start - ${getState().totalTrials} trials ahead`;

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
	    cancelTrial();
	});

	// Training functionality
	document.getElementById('startBtn').addEventListener('click', startTraining);
	document.addEventListener('keydown', handleSpacebar);

	function startTraining() {
	    trialOrder = generateTrialOrder();
	    const { currentMode, totalTrials, activeNotes } = getState$1();

	    // Initialize trial execution state
	    initializeState(currentMode, totalTrials);

	    // Start training
	    startTraining$1(trialOrder, getSelectedOctaves, activeNotes);
	}

	function handleSpacebar(e) {
	    // Handled in playNextNote
	}

	// Setup mode buttons with proper context
	function setupModeButtonsWithContext() {
	    const naturalsMode = document.getElementById('naturalsMode');
	    const chromaticMode = document.getElementById('chromaticMode');

	    naturalsMode.onclick = () => startMode('naturals', switchToGameScreen);
	    chromaticMode.onclick = () => startMode('chromatic', switchToGameScreen);
	}

	// Add event listeners for octave and instrument checkboxes
	document.addEventListener('change', function(e) {
	    if (e.target.classList.contains('octave-checkbox')) {
	        updateMultiOctaveLabel();
	        updateModeGrid();
	        setupModeButtonsWithContext();
	    } else if (e.target.classList.contains('instrument-checkbox')) {
	        const instrument = e.target.value;
	        const isChecked = e.target.checked;
	        handleInstrumentSelection(instrument, isChecked);
	    }
	});

	// Override the setupModeButtons function to use our context
	// This needs to happen before any calls to setupModeButtons
	setupModeButtons = function() {
	    setupModeButtonsWithContext();
	};

	// Call setupModeButtonsWithContext directly to initialize the buttons
	setupModeButtonsWithContext();

})();

