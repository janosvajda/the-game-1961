# The simulation of The Game

This Node.js script simulates the movement of 1400 people based on the rules provided in the novel "The Game" by Anatoly Dneprov, written in 1961.

## Description

The algorithm follows the specified rules outlined in the novel:

- Binary numbers are given to Comrade Sagirov from the northern stand.
- If the binary number starts with '11' or '00,' it goes to the person right behind Comrade Sagirov.
- If the binary number starts with '1,' pass it to the person on the right, and increment the binary value.
- If the binary number starts with '0,' pass it to the person on the left, and increment the binary value.

## Usage

To run the simulation using the provided Node.js script, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Copy the provided Node.js script into a file, e.g., `game_simulation.js`.
3. Open a terminal and navigate to the directory containing the script.
4. Run the script using the command: `node game_simulation.js`.

## Example

```bash
$ node game_simulation.js
