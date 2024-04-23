import React from 'react'

const CommonJS = () => {
  return <></>
}

//1. Write a function to check if a given string is a palindrome.
const isPalindrome = (string) => {
  return string === string.split('').reverse().join('')
}
//2. Implement a function to reverse a string without using the built-in reverse() method.
const reverseString = (string) => {
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversed.append(string[i])
  }
  return reversed
}
//3. Given an array of numbers, write a function to find the largest and smallest numbers in the array.
const findLargestAndSmallest = (array) => {
  let largest = 0
  let smallest = largest
  for (let num in array) {
    if (num > largest) {
      largest = num
    } else if (num < smallest) {
      smallest = num
    }
  }
  return `The largest number in the array is ${largest} and the smallest number in the array is ${smallest}.`
}
const findMinMax = (array) => {
  let min = Math.min(...array)
  let max = Math.max(...array)
  return [min, max]
}
//4. Write a function that takes an array of integers as input and returns a new array with only the unique elements.
const findUnique = (array) => {
  return Array.from(new Set(array))
}
//5. Implement a function to find the factorial of a given number.
// const findFactorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1
//   } else {
//     return num * factorial(num - 1)
//   }
// }
//6. Write a function that determines if a given number is prime or not.
const isPrime = (num) => {
  if (num <= 1) {
    return false
  } else {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}
//7. Implement a function to find the sum of all the numbers in an array.
const findSum = (array) => {
  let sum = 0
  for (let item in array) {
    sum += item
  }
  return sum
}
//8. Given a string, write a function to count the occurrences of each character in the string.
const countCharacters = (string) => {
  let characterCount = {}
  for (let letter in string) {
    characterCount[letter] = (characterCount[letter] || 0) + 1
  }
  return characterCount
}
//9. Implement a function to remove duplicates from an array.
const removeDuplicates = (array) => {
  return Array.from(new Set(array))
}
//10. Write a function that sorts an array of numbers in ascending order.
const sortAscending = (array) => {
  return array.sort((a, b) => a - b)
}

export default CommonJS
