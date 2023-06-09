# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**


`npm i andrijana85lotide`

**Require it:**

`const _ = require('@andrijana85/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: the function takes in two arraysand console.log the certain message.
* `assertEqual(...)`: the function that compare the two values it takes in and print out a message telling us if they match or not.
* `assertObjectEqual(...)`: takes in two objects and console.log an appropriate message to the console.(similar to assertArrayEqual)
* `countLetters(...)`: the function takes in a sentence and then returns a count of each of the letters in that sentence.
* `countOnly(...)`: the function takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays(...)`:the function returns true or false, based on a perfect match between two arrays 
* `eqObjects(...)`: the function takes in two objects and returns true or false, based on a perfect match.
* `findKey(...)`: the function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: the function takes in an object and a value. It should scan the object and return the first key which contains the given value.
* `flatten(...)`: the function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* `head(...)`: the function that returns the first item in the array
* `letterPositions(string)`: the function returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: the function takes in an array and callback, returns a new array based on the results of the callback function.
* `middle(...)`: takes in an array and returns the middle-most element(s) of the given array.
* `tail(...)`: the function which returns everything except for the first item of the provided array.
* `takeUntil(...)`: the function takes in an array and callback, collects items from a provided array until the callback provided returns a truthy value.
* `without(...)`: the function removes unwanted elements and returns a subset of a given array
