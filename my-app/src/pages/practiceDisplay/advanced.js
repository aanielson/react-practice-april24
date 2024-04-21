import React from 'react'

const AdvancedJS = () => {
  return <></>
}

// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.
const debounce = (func, delay) => {
  let timer = setTimeout(func, delay)
  clearTimeout(timer)
}
// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
const sortAscendingByKey = (array, key) => {
  return array.sort((a, b) => a[key] - b[key])
}
// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
const cloneItem = (item) => {
  return JSON.parse(JSON.stringify(item))
}
// 4. Write a recursive function to calculate the factorial of a given number.
const findFactorial = (num) => {
  if (num <= 1) {
    return 1
  } else {
    return num * findFactorial(num - 1)
  }
}
// 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.
const combineAndSort = (array1, array2) => {
  return [...array1, ...array2].sort((a, b) => a - b)
}
// 6. Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.
const isPalindrome = (string) => {
  if (
    string.icludes('0') ||
    string.icludes('1') ||
    string.icludes('2') ||
    string.icludes('3') ||
    string.icludes('4') ||
    string.icludes('5') ||
    string.icludes('6') ||
    string.icludes('7') ||
    string.icludes('8') ||
    string.icludes('9')
  ) {
    return 'Must contain exclusively alphanumeric characters'
  } else {
    string = string.toLowerCase()
    return string === string.split('').reverse().join('')
  }
}
// 7. Create a JavaScript class for a linked list with methods to insert a node at the beginning, end, or at a specific position, and to delete a node from a given position.

// 8. Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.
const flattenArray = (nestedArray) => {
  const flattenedArray = []
  for (array in nestedArray) {
    for (item in array) {
      flattenedArray.push(array)
    }
  }
  return flattenedArray
}
// 9. Write a function that determines if two strings are anagrams of each other
const isAnagram = (string1, string2) => {}
// 10. Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance.
const findFiboncciWithMemoization = (num) => {}
export default AdvancedJS
