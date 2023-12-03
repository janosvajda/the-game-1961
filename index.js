const { simulateMovement } = require('./functions');

const sentence = "Os maiores resultados são produzidos por – pequenos mas contínuos esforços";

// Simulate the movement for 1400 participant of The Game.
const peopleCount = 1400;
const finalBinaryNumbers = simulateMovement(peopleCount, sentence);

// Convert binary numbers to Unicode code points
const finalCodePoints = finalBinaryNumbers.map(binary => String.fromCodePoint(parseInt(binary, 2)));

// Join Unicode code points to form the sentence
const finalSentence = finalCodePoints.join('');

console.log("Final Binary Numbers:", finalBinaryNumbers);
console.log("Final Code Points:", finalCodePoints);
console.log("Final Sentence:", finalSentence);
