import React from 'react'

const TrickyJS = () => {
  return <></>
}

//1. Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
const reverseSentence = (string) => {
  let newSentence = ''
  let wordArray = string.split(' ')
  for (i = wordArray.length - 1; i <= wordArray.length; i--) {
    newSentence.append(`${wordArray[i]} `)
  }
  return newSentence
}
//2. Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation.
const isPalindrome = (string) => {
  let newString = string.replace(/[^\w]/g, '').toLowerCase()
  return newString === newString.split('').reverse().join('')
}
//3. Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.
const largestDiff = (array) => {
  let largest = 0
  let smallest = largest
  for (int in array) {
    if (int > largest) {
      largest = int
    } else if (int < smallest) {
      smallest = int
    }
  }
  return largest - smallest
}
//4. Implement a function that removes duplicates from an array, keeping only the unique elements.
const removeDuplicates = (array) => {
  return array.filter((item, index) => {
    array.indexOf(item) === index
  })
}
//5. Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1).
const findFactorial = (num) => {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
//6. Implement a function that flattens a nested array into a single-dimensional array.
const flattenArray = (array) => {
  return array.flat()
}
//7. Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order).
const isAnagram = (string1, string2) => {
  let array1 = string1
    .split('')
    .sort((a, b) => a - b)
    .join()
  let array2 = string2
    .split('')
    .sort((a, b) => a - b)
    .join()
  return array1 === array2
}
//8. Implement a function that finds the second smallest element in an array of integers.
const findSecondSmallest = (array) => {
  const sortedArray = array.sort((a, b) => a - b)
  return array[1]
}
//9. Write a function that generates a random alphanumeric string of a given length.
const newRandomString = (length) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)

    result += characters.charAt(randomIndex)
  }

  return result
}
//10. Implement a function that converts a number to its Roman numeral representation.
const makeRomanNumeral = (num) => {}

export default TrickyJS
