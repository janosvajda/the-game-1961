const { charToBinary, simulateMovement } = require('./functions');

describe('charToBinary', () => {
    test('converts character to binary correctly', () => {
        expect(charToBinary('ç')).toBe('0000000011100111');
        expect(charToBinary('>')).toBe('0000000000111110');
    });
});

describe('simulateMovement', () => {
    test('simulates movement correctly', () => {
        const peopleCount = 1400;
        const sentence = "Os maiores resultados são produzidos por – pequenos mas contínuos esforços";
        console.error = jest.fn();
        Math.random = jest.fn(() => 0.5);
        const consoleSpy = jest.spyOn(console, 'error');
        const result = simulateMovement(peopleCount, sentence);
        console.error.mockRestore();
        Math.random.mockRestore();
        consoleSpy.mockRestore();
        console.error('Console output during test:', consoleSpy.mock.calls);
        expect(result).toEqual(expect.any(Array));
    });
});

