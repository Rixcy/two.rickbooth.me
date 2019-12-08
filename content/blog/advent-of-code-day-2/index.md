---
title: 'Advent of Code - Day 2: 1202 Program Alarm'
date: 2019-12-02 19:00:00
tags: ['JavaScript','Advent of Code']
---

For the full question, go [here](https://adventofcode.com/2019/day/2).

# Part One

> An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). To run one, start by looking at the first integer (called position 0). Here, you will find an `opcode` - either 1, 2, or 99. The opcode indicates what to do; for example, `99` means that the program is finished and should immediately halt. Encountering an unknown opcode means something went wrong.

The Intcode program is split in to chunks of four, where:

- The first number is the `optcode`
- The second number is the position of the first input
- The third number is the position of the second input
- The fourth number is the position where you should replace the output

If the optcode is `1`, add the first input and second input together, then replace the number at the output position with the result

If the optcode is `2`, multiply the first and second input together, then replace the number at the output position with the result

If the optcode is `99`, it means the program is finished and should immediately halt

```javascript
const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0]

// Overwrite positions 1 & 2 before the program runs like the question tells us to
input[1] = 12
input[2] = 2

let running = true
let currentPosition = 0
while (running === true) {
  const opcode = input[currentPosition]
  const posOne = input[currentPosition+1]
  const posTwo = input[currentPosition+2]
  const posOutput = input[currentPosition+3]

  if (opcode === 1) input[posOutput] = input[posOne] + input[posTwo]
  if (opcode === 2) input[posOutput] = input[posOne] * input[posTwo]
  if (opcode === 99) running = false

  currentPosition = currentPosition+4
}

// input[0] = 3085697
```

# Part Two

```javascript

```
