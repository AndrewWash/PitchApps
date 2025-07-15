import { audioFiles } from './audioFileConstants.js';

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

                // Create the file path - updated to point to the new sounds location
                const path = `../../../sounds/${instrument}/${octave}/${note}.wav`;

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

// Export only the loadAudioFiles function
export { loadAudioFiles };
