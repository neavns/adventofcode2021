/**
 * @challenge https://adventofcode.com/2021/day/6
 */

const fs = require('fs')
const input = fs.readFileSync('./c6-input.txt', 'utf8').split(',')
const _test_input = [3,4,3,1,2]
const days = 80

const getNumberOfFish = () => {
  let day = 0
  let fish = input.slice()
  let newFish = 0 // keep track of new fish added
  
  while(day < days) {
    for(let i = 0; i < fish.length; i++) {
      if(fish[i] === 0) {
        fish[i] = 6
        fish.push(8)
        newFish++
      } else if(fish[i] === 8 && newFish > 0) {
        newFish--
        continue
      } else {
        fish[i]--
      }
    }

    day++
  }

  return fish.length
}

const result = getNumberOfFish()
console.log('result___', result)