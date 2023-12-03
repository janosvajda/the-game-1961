# Simulation of The Game

This Node.js script simulates the movement of 1400 participants in a game in the short story 'The Game' by [Anatoly Dneprov](https://en.wikipedia.org/wiki/Anatoly_Dneprov_(writer)), written in 1961.

## Description

The algorithm follows the specified rules outlined in the story:

- Binary numbers are given to Sagirov from the northern stand.
- If the binary number starts with '11' or '00,' it goes to the person right behind Sagirov.
- If the binary number starts with '1,' pass it to the person on the right, and increment the binary value.
- If the binary number starts with '0,' pass it to the person on the left, and increment the binary value.

## Usage

To run the simulation using the provided Node.js script, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Run index.js

```bash
$ node index.js
