import React from 'react'

const BasicsJS = () => {
  return <></>
}

// 1. Write a JavaScript function to calculate the sum of two numbers.
const calculateSum = (a, b) => {
  return a + b
}

// 2. Write a JavaScript program to find the maximum number in an array.
const maxNum = (array) => {
  return Math.max(array)
}

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
const isPalindrome = (string) => {
  return string === string.split('').reverse().join('')
}

// 4. Write a JavaScript program to reverse a given string.
const reverseString = (string) => {
  return string.split('').reverse().join('')
}

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const returnEvenNumbers = (array) => {
  array.filter((x) => x % 2 === 0)
}

// 6. Write a JavaScript program to calculate the factorial of a given number.
// const findFactorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1
//   } else {
//     return num * factorial(num - 1)
//   }
// }

// 7. Write a JavaScript function to check if a given number is prime.
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

// 8. Write a JavaScript program to find the largest element in a nested array.
const findLargestElement = (nestedArray) => {
  let largest = nestedArray[0][0]
  for (let arr of nestedArray) {
    for (let num of arr) {
      if (num > largest) {
        largest = num
      }
    }
  }
  return largest
}

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
const findFiboncci = (term) => {
  if (term <= 0) {
    return 0
  } else if (term === 1) {
    return 0
  } else {
    let sequence = [0, 1]
    while (sequence.length < term) {
      let nextNumber =
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      sequence.push(nextNumber)
    }
    return sequence
  }
}

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
const makeTitleCase = (str) => {
  let titleCase = ''
  str.split(' ').forEach((word) => {
    const capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    titleCase += capitalizedWord + ' '
  })
  return titleCase
}

export default BasicsJS
