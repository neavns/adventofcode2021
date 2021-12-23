/**
 * @challenge https://adventofcode.com/2021/day/3
 */

const fs = require('fs')

const input = fs.readFileSync('./c3-input.txt', 'utf8').split('\n').filter(l => l)

const test = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]


const gammaRate = arr => {
  const length = arr[0].length
  let rate = ''
  let i = 0
  while (i < length) {
    const slicedBits = arr.map(bit => bit.slice(i, i + 1))
    rate += mostCommonItem(slicedBits)
    i++
  }

  return [rate, parseInt(rate, 2)]

}

const epsilonRate = gammaRate => {
  let rate = gammaRate[0].split('').map(l => l === '1' ? '0' : '1').join('')
  return [rate, parseInt(rate, 2)]
}

const mostCommonItem = (arr, criteria = '1') => {
  let hash = {
    '0': 0,
    '1': 0,
  }
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i].toString()]++
  }

  if (criteria === '1') {
    if (hash[0] === hash[1]) return '1'
    if (hash[0] > hash[1]) return '0'
    if (hash[0] < hash[1]) return '1'
  } else {
    if (hash[0] === hash[1]) return '0'
    if (hash[0] > hash[1]) return '1'
    if (hash[0] < hash[1]) return '0'
  }
}

const gammaRateResult = gammaRate(input)
const epsilonRateResult = epsilonRate(gammaRateResult)
console.log(gammaRateResult[1] * epsilonRateResult[1])


// c3.2

const lifeSupportRating = (arr, criteria = '1') => {
  const length = arr[0].length
  let currentPos = 0

  let processedArr = arr

  while (currentPos < length && processedArr.length > 1) {
    // get bits at location [currentPos]
    const slicedBits = processedArr.map(bit => bit.slice(currentPos, currentPos + 1))
    // get most common bit
    const mostCommon = mostCommonItem(slicedBits, criteria)
    let tempArr = []

    for (let i = 0; i < processedArr.length; i++) {
      if (processedArr[i][currentPos] === mostCommon) tempArr.push(processedArr[i])
    }

    processedArr = tempArr
    currentPos++
  }

  return [processedArr[0], parseInt(processedArr[0], 2)]
}

console.log('oxygen rating test case:', lifeSupportRating(test, '1'))
console.log('CO2 rating test case:', lifeSupportRating(test, '0'))
console.log('oxygen rating test case:', lifeSupportRating(input, '1'))
console.log('CO2 rating test case:', lifeSupportRating(input, '0'))
console.log('result:', lifeSupportRating(input, '1')[1] * lifeSupportRating(input, '0')[1])
// console.log('most common bit:', mostCommonItem([1, 0], '1'))