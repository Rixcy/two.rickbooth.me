---
title: 'Advent of Code - Day 1: The Tyranny of the Rocket Equation'
date: 2019-12-01 19:00:00
tags: ['JavaScript', 'Advent of Code']
---

For the full question, go [here](https://adventofcode.com/2019/day/1).

# Part One

> Fuel required to launch a given <strong>module</strong> is based on its <strong>mass</strong>.
> Specifically, to find the fuel required for a module, take its mass, divide by three, round down,
> and subtract 2.

This one was pretty simple, we can grab the numbers given to us by the advent and turn them in to an
Array. It's up to you how you get this in to an Array but I just wrapped the numbers in backticks
and did a split on new lines, a quick and dirty solution.

```javascript
const input = `131787
116597
71331
101986
56538
105039
119405
...`.split('\n')
// input = (100) ["131787","116597","71331","101986","56538","105039","119405"...
```

<details style="cursor: pointer; user-select: none"><summary>Full code here</summary>

```javascript
const input = `131787
116597
71331
101986
56538
105039
119405
87762
113957
69613
63698
117674
72876
105026
83620
132592
137403
96832
58387
97609
50978
52896
145584
140832
74504
52998
64722
143334
89601
89326
85906
117840
91299
50593
74470
141591
61069
130479
69195
77411
106137
80954
117644
113063
127587
148770
71286
123430
133562
121053
64311
52818
148583
107511
92838
79724
122022
122602
50344
56938
102363
123140
105469
72773
96023
53669
70394
100930
55213
53756
62225
57172
56049
64661
112321
59872
111597
115958
105468
62111
72865
80323
103897
137687
70178
113314
122121
128654
136723
77279
104806
103491
92168
119263
128791
102237
86578
92728
104785
116658`.split('\n')
```

</details>

Then, we can use a [reduce()](/blog/8-useful-java-script-array-methods#7-Reduce) function to run the
calculations required to find out the mass for each module like so:

```javascript
const requiredFuel = input.reduce((a, m) => {
    return a + Math.floor(m / 3) - 2
}, 0)
// requiredFuel = 3173518
```

We pass the reduce function an accumulator variable as well as each module. We then divide m by 3,
round it down using `Math.floor()`, subtract 2 then add the value to the accumulator variable, who's
initial variable is set at the end of the reducer function, in this case it's 0.

# Part Two

> Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and
> subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any
> mass that would require negative fuel should instead be treated as if it requires zero fuel; the
> remaining mass, if any, is instead handled by wishing really hard, which has no mass and is
> outside the scope of this calculation.

For this part we can take the reducer function from earlier and modify it slightly. We'll assign two
variables the result of running `getFuel()` on the module which is the initial fuel required.

The first variable - t, will be used as a total of the fuel required for the module whereas f will
act as the most recently calculated fuel.

We then:

-   Check to see if the most recent fuel variable _(f)_ is positive and if so, run `getFuel()` on
    it.

-   Check to see if the result of that is positive and if so, add it to the total _(t)_ variable.

-   Rinse and repeat until you run out of positive numbers.

-   Once you've run out (at the end of the while loop), add the total _(t)_ variable to the
    accumulator variable _(a)_ to get the result.

```javascript
// const input = [116597, 71331, 101986, 56538...
const getFuel = m => Math.floor(m / 3) - 2
const requiredFuel = input.reduce((a, m) => {
    let t = (f = getFuel(m))
    while (Math.sign(f) === 1) {
        f = getFuel(f)
        if (Math.sign(f) === 1) t = t + f
    }
    return a + t
}, 0)
// requiredFuel = 4757427
```
