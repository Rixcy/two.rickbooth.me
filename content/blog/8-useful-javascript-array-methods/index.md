---
title: 8 Useful JavaScript Array Methods
date: 2019-11-24 19:00:00
tags: ['JavaScript', 'Arrays']
---

Today I wanted to go over some methods which provide useful ways of extracting data from Arrays.

Throughout these methods we're going to use a simple object with some dummy data:

```JavaScript
const items = [
  { name: 'Jeff', age: 36 },
  { name: 'Barry', age: 47 },
  { name: 'Gemma', age: 32 },
  { name: 'Sarah', age: 23 },
  { name: 'Josh', age: 16 }
]
```

#\#1. Find The `find()` method lets us search an array for a record by returning true or false in
the function. This will return the first record that matches.

```JavaScript
const personWeWant = items.find((person) => {
  return person.name === 'Sarah'
})

// or with destructuring
const personWeWant = items.find(({ name }) => name === 'Sarah')

/*
  returns: { name: 'Sarah', age: 23 }
*/
```

#\#2. Filter Let's assume we want to get all of the items in this array where the person is older
than 18, all we would need to do is use the `filter()` method to filter out any records where their
age is less than 18.

```JavaScript
const adults = items.filter((person) => {
  return person.age >= 18
})

// or with destructuring
const adults = items.filter(({ age }) => age >= 18)

/*
  returns: [
    {name: "Jeff", age: 36},
    {name: "Barry", age: 47},
    {name: "Gemma", age: 32},
    {name: "Sarah", age: 23}
  ]
*/
```

#\#3. Map The `map()` method allows you to take one array and create a new array with the results of
calling a procided function on every element in the calling array.

```JavaScript
const ages = items.map((person) => {
  return person.age
})

// or with destructuring
const ages = items.map(({ age }) => age)

/*
  returns: [36, 47, 32, 23, 16]
*/
```

#\#4. ForEach The `forEach()` method executes a provided function once for each array element.

```JavaScript
items.forEach((person) => {
  console.log(`${person.name} is ${person.age} years old`)
})

// or with destructuring
items.forEach(({ name, age }) => console.log(`${name} is ${age} years old`))

/*
  returns:
  Jeff is 36 years old
  Barry is 47 years old
  Gemma is 32 years old
  Sarah is 23 years old
  Josh is 16 years old
*/
```

#\#5. Some The `some()` method tests whether at least one element in the array passes the test
implemented by the provided function. It returns `true` or `false`

```JavaScript
const numbers = [1,2,3,4,5]
const hasEvenNumber = numbers.some((number) => number % 2 === 0)

/*
  returns: true
*/
```

#\#6. Every The `every()` method is similar to the `some()` method but it requires all tests to pass
for it to return `true`, otherwise it returns `false`.

```JavaScript
const teenagersOrAbove = items.every(({ age }) => age >= 13)
// the above would return true however the below would return false
const adultsOrAbove = items.every(({ age }) => age >= 18)
```

#\#7. Reduce The `reduce()` method executes a reducer function (that you provide) on each element of
the array, resulting in a single output value. This is useful for getting total counts from items in
an array, for example the cumulative age of a group, or the average age.

It looks a little tricky, but the method accepts four arguments:

-   Accumulator (the variable to increment)
-   Current Value (the state of the incrementing variable, in this case we're using a function to
    return the sum of the accumulator's current value plus the age of the current person)
-   Current Index (the index to start at, in this case we'll use 0)
-   Source Array (the array to execute the reducer function on - items)

```JavaScript
const totalAge = items.reduce((accumulator, { age }) => {
  return accumulator + age
}, 0) // 0 Is the initial value, this could be a previous total of ages maybe

/*
  returns: 154
*/
```

#\#8. Includes This method isn't just for Arrays, it can be used on strings too. The include method
determines whether an array includes a certain value among its entries, returning `true` or `false`
as appropriate.

```Javascript
// Using it on an Array
const numbers = [1,2,3,5,8,13,21]
const includes34 = numbers.includes(34)
/*
  returns: false
*/

// Using it on a string
const string = `The quick brown fox jumps over the lazy dog`
const includesFox = string.includes(`fox`)
/*
  returns: true
*/
```
