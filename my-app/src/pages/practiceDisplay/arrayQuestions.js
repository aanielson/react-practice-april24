import React, { useState } from 'react'

function ArrayProblemsJS() {
  const [arraySum, setArraySum] = useState([])
  const [arrayInit, setArrayInit] = useState('')
  // // 1. Write a function that returns the sum of all numbers in an array.
  const findSum = (string) => {
    let stringArray = string.split(' ')
    let sum = 0
    for (let i = 0; i < stringArray.length; i++) {
      sum = sum + parseInt(stringArray[i], 10)
    }
    console.log(sum)
    setArraySum(sum)
  }

  return (
    <>
      <div className="new-function">
        <label>Find sum of all numbers in array.</label>
        <input
          name="findSum"
          type="aray"
          value={arrayInit}
          onChange={(e) => setArrayInit(e.target.value)}
        />
        <button type="button" onClick={() => findSum(arrayInit)}>
          Submit
        </button>
        <p id="findSumResult">{arraySum}</p>
      </div>
    </>
  )
}

//2. Implement a function that finds the maximum number in an array.
const findMax = (array) => {}
//3. Write a function that returns a new array containing only the unique elements from an input array.
const findUnique = (array) => {}
//4. Implement a function that returns the average value of numbers in an array.
const findAvg = (array) => {}
//5. Write a function that sorts an array of strings in alphabetical order.
const alphabetize = (array) => {}
//6. Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.
const findIndex = (array) => {}
//7. Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.
const removeFalsey = (array) => {}
//8. Implement a function that merges two arrays into a single array, alternating elements from each array.
const mergeArrays = (array1, array2) => {}
//9. Write a function that finds the second largest number in an array.
const findSecondSmallest = (array) => {}
//10. Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays.
const groupElements = (array, element) => {}

export default ArrayProblemsJS
