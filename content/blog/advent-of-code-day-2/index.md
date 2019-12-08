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

const noun = 12
const verb = 2
input[1] = noun
input[2] = verb

const operations = {
  1: (o, a, b, c) => o[c] = o[a] + o[b],
  2: (o, a, b, c) => o[c] = o[a] * o[b],
}

const runProgram = () => {
  let cp = 0
  let running = true
  while (cp < input.length && running) {
    input[cp] === 1 || input[cp] === 2
      ? operations[input[cp]](input, input[cp+1], input[cp+2], input[cp+3])
      : running = false
    cp+=4
  }
}

runProgram()
console.log(input[0])
// 3085697
```

# Part Two

```javascript
const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0]

let inputCopy = [...input]

let noun = 12
let verb = 2

const operations = {
  1: (o, a, b, c) => o[c] = o[a] + o[b],
  2: (o, a, b, c) => o[c] = o[a] * o[b],
}

const desiredOutput = 19690720

const runProgram = () => {
  let cp = 0
  let running = true
  while (cp < inputCopy.length && running) {
    inputCopy[cp] === 1 || input[cp] === 2
      ? operations[inputCopy[cp]](inputCopy, inputCopy[cp+1], inputCopy[cp+2], inputCopy[cp+3])
      : running = false
    cp+=4
  }
}

const hundred = Array.from({length:100},(v,k)=>k+1)
hundred.some(_ => {
  noun = _
  let found = false
  hundred.some(__ => {
    verb = __

    // reset input copy to initial values, then update noun & verb
    inputCopy = [...input]
    inputCopy[1] = noun
    inputCopy[2] = verb

    runProgram()

    if (inputCopy[0] === desiredOutput) found = true
    return found === true
  })
  return found === true
})

console.log(`Noun ${noun} & verb ${verb} === ${inputCopy[0]}`)
console.log(`Computed value is ${100 * noun + verb}`)

// Noun 94 & verb 25 === 19690720
// Computed value is 9425
```
