// Test script to verify the generateTrialOrder function
import { generateTrialOrder, buildActiveNotes, startMode, toggleRandomization } from './trialSelection.js';

// Mock the document object
global.document = {
    querySelectorAll: () => [
        { value: '3', checked: true },
        { value: '4', checked: true }
    ],
    getElementById: () => ({
        textContent: '',
        classList: {
            contains: () => false
        }
    })
};

// Test with multiple octaves
console.log("Testing with multiple octaves");

// Test sequential mode
console.log("\nTesting sequential mode");
const instruments = ['piano'];
startMode('chromatic');
const sequentialOrder = generateTrialOrder();
console.log("Sequential order:", sequentialOrder);

// Check for duplicates in sequential order
const sequentialBaseNotes = sequentialOrder.map(note => {
    const [instrument, noteOctave] = note.split('_');
    return noteOctave.slice(0, -1); // Remove the octave number
});
const uniqueSequentialBaseNotes = [...new Set(sequentialBaseNotes)];
console.log("Unique base notes in sequential order:", uniqueSequentialBaseNotes);
console.log("Duplicates found:", sequentialBaseNotes.length !== uniqueSequentialBaseNotes.length);

// Test random mode
console.log("\nTesting random mode");
toggleRandomization(); // Enable randomization
const randomOrder = generateTrialOrder();
console.log("Random order:", randomOrder);

// Check for duplicates in random order
const randomBaseNotes = randomOrder.map(note => {
    const [instrument, noteOctave] = note.split('_');
    return noteOctave.slice(0, -1); // Remove the octave number
});
const uniqueRandomBaseNotes = [...new Set(randomBaseNotes)];
console.log("Unique base notes in random order:", uniqueRandomBaseNotes);
console.log("Duplicates found:", randomBaseNotes.length !== uniqueRandomBaseNotes.length);

// Check if the same random sequence is repeated
const firstRandomSequence = randomOrder.slice(0, uniqueRandomBaseNotes.length);
const secondRandomSequence = randomOrder.slice(uniqueRandomBaseNotes.length, 2 * uniqueRandomBaseNotes.length);
console.log("First random sequence:", firstRandomSequence);
console.log("Second random sequence:", secondRandomSequence);
console.log("Same random sequence repeated:", JSON.stringify(firstRandomSequence) === JSON.stringify(secondRandomSequence));