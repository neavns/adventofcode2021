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

 
const numbersArr = numbers.split(',').map(n => parseInt(n))
let formattedBoards = boards.join(' ').split(' ').filter(n => n !== '')
const numberOfBoards = formattedBoards.length / 25
let winningBoard = -1
let completedBoards = []
let gameOver = false

const checkWin = () => {

  // check horizontallly
  let boardsArr = formattedBoards.slice()
  let winnerRow = []
  let boardNumber = 1

  while(boardsArr.length > 0) {
    winnerRow.push(boardsArr.shift())

    if(boardsArr.length % 25 === 0) boardNumber++

    if (winnerRow.length === 5) {
      if(winnerRow.filter(n => n.includes('-')).length === 5 && !completedBoards.includes(boardNumber)) {
        winningBoard = boardNumber
        completedBoards.push(winningBoard)
      }

      winnerRow = []
    }
  }

  // check vertically
  let i = 0
  
  while(i < numberOfBoards) {
    const winnerCol = hasWinningColumn(formattedBoards.slice(i * 25, (i + 1) * 25))
    if (winnerCol && !completedBoards.includes(i + 1)) {
      winningBoard = i + 1
      completedBoards.push(winningBoard)
    }

    i++
  }

  return false
}

const hasWinningColumn = board => {
  let pointerOne = 0
  let pointerTwo = 5

  let winnerCol = []

  while (pointerOne < 5) {
    winnerCol.push(board[pointerOne])

    while (winnerCol.length < 5) {
      winnerCol.push(board[pointerTwo])
      pointerTwo += 5
    }

    if (winnerCol.filter(n => n.includes('-')).length === 5) return true

    pointerOne++
    pointerTwo = pointerOne + 5
    winnerCol = []
  }

  return false
}

const calculateResult = number => {
  const board = formattedBoards.slice((winningBoard - 1) * 25, winningBoard * 25)
  
  const unmarkedNumbers = board.filter(n => !n.includes('-'))
  const sum = unmarkedNumbers.reduce((acc, n) => acc + parseInt(n), 0)
  console.log('RESULT____', sum * number)
}

const drawNumbers = (number, isLastNumber = false) => {
  formattedBoards = formattedBoards.map(n => parseInt(n) === number ? `${number}-` : n)

  checkWin()

  if(completedBoards.length === numberOfBoards || isLastNumber) {
    calculateResult(number)
    gameOver = true
  }
}

const bingo = () => {
  for(let i = 0; i < numbersArr.length; i++) {
    if(gameOver) break
    drawNumbers(numbersArr[i], i === numbersArr.length - 1)
  }

  console.log(completedBoards)
}

bingo()

