/**
 * @challenge https://adventofcode.com/2021/day/4
 */

const fs = require('fs')

const [numbers, ...boards] = fs.readFileSync('./c4-input.txt', 'utf8').split('\n').filter(l => l)


const [_test_numbers, ..._test_boards] = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`.split('\n').filter(el => el)

 
let formattedBoards = boards.join(' ').split(' ').filter(n => n !== '')
const numbersArr = numbers.split(',').map(n => parseInt(n))
let didWin = false
let winningBoard = -1

let numbersDrawn = []


const checkWin = () => {

  // check horizontallly
  let boardsArr = formattedBoards.slice()
  let winnerRow = []
  let boardNumber = 1

  while(boardsArr.length > 0) {
    winnerRow.push(boardsArr.shift())

    if(boardsArr.length % 25 === 0) boardNumber++
    
    if (winnerRow.length === 5) {
      if(winnerRow.filter(n => n.includes('-')).length === 5) {
      console.log(formattedBoards)
        console.log('winnerRow____', winnerRow)
        didWin = true
        winningBoard = boardNumber
        return true
      }

      winnerRow = []
    }
  }

  // check vertically
  let i = 0
  const numberOfBoards = formattedBoards.length / 25
  
  while(i < numberOfBoards) {
    const winnerCol = hasWinningColumn(formattedBoards.slice(i * 25, (i + 1) * 25))
    if (winnerCol) {
      console.log('WINNER____', winnerCol)
      winningBoard = i + 1
      didWin = true
      return true
    }

    i++
  }

  return false
}

const removeDuplicates = arr => {
  let store = {}
  arr.forEach(n => store[n] = true)
  return Object.keys(store)
}

const hasWinningColumn = board => {
  // console.log('board', board)
  let pointerOne = 0
  let pointerTwo = 5

  let winnerCol = []

  while (pointerOne < 5) {
    winnerCol.push(board[pointerOne])

    while (winnerCol.length < 5) {
      winnerCol.push(board[pointerTwo])
      pointerTwo += 5
    }
    // console.log(winnerCol)
    if (winnerCol.filter(n => n.includes('-')).length === 5) {
      console.log('winnerCol____', winnerCol)
      return true
    }

    pointerOne++
    pointerTwo = pointerOne + 5
    winnerCol = []
  }

  return false
}

const calculateResult = number => {
  const board = formattedBoards.slice((winningBoard - 1) * 25, winningBoard * 25)
  
  const unmarkedNumbers = removeDuplicates(board.filter(n => !n.includes('-')))
  const sum = unmarkedNumbers.reduce((acc, n) => acc + parseInt(n), 0)
  console.log('RESULT____', sum * number)
}

const drawNumbers = number => {
  numbersDrawn.push(number)
  formattedBoards = formattedBoards.map(n => parseInt(n) === number ? `${number}-` : n)

  const didWin = checkWin(number)

  if(didWin) {
    console.log('WINNER____', winningBoard)
    calculateResult(number)
    console.log('drawn numbers____', numbersDrawn)
  }


}

const bingo = () => {
  for (const number of numbersArr) {
    if (didWin) break
    drawNumbers(number, formattedBoards)
  }

  if(!didWin) console.log('NO POSSIBLE SOLUTION!')
}

bingo()

