const sentence = "Os maiores resultados são produzidos por – pequenos mas contínuos esforços";

// Function to convert a character to its Unicode code point and then to binary
function charToBinary(char) {
    const codePoint = char.codePointAt(0);
    return codePoint.toString(2).padStart(16, '0');
}

// Function to simulate the movement based on the rules provided by Professor Zarubin
function simulateMovement(peopleCount, sentence) {
    const binaryNumbers = sentence.split('').map(charToBinary);
    const people = Array.from({ length: peopleCount }, (_, index) => index);

    const result = people.reduce((acc, person) => {
        const currentBinary = binaryNumbers[person];
        if (!currentBinary) {
            console.error(`Binary number not available for person ${person}`);
            return acc;
        }

        if (currentBinary.startsWith("11") || currentBinary.startsWith("00")) {
            acc.push(currentBinary);
        } else if (currentBinary.startsWith("1")) {
            acc.push(currentBinary);
            const nextPerson = (person + 1) % peopleCount;
            binaryNumbers[nextPerson] = (parseInt(binaryNumbers[nextPerson], 2) + 1).toString(2).padStart(16, '0');
        } else if (currentBinary.startsWith("0")) {
            acc.unshift(currentBinary);
            const prevPerson = (person - 1 + peopleCount) % peopleCount;
            binaryNumbers[prevPerson] = (parseInt(binaryNumbers[prevPerson], 2) + 1).toString(2).padStart(16, '0');
        }
        return acc;
    }, []);

    return result;
}

// Simulate the movement for 1400 people
const peopleCount = 1400;
const finalBinaryNumbers = simulateMovement(peopleCount, sentence);

// Convert binary numbers to Unicode code points
const finalCodePoints = finalBinaryNumbers.map(binary => String.fromCodePoint(parseInt(binary, 2)));

// Join Unicode code points to form the sentence
const finalSentence = finalCodePoints.join('');

console.log("Final Binary Numbers:", finalBinaryNumbers);
console.log("Final Code Points:", finalCodePoints);
console.log("Final Sentence:", finalSentence);
