/**
 * @challenge https://adventofcode.com/2021/day/2#part2
 * ! the input has been modified
 * TODO: to be refactored
 */

const input = [
  {
    forward: 4,
  },
  {
    down: 9,
  },
  {
    forward: 6,
  },
  {
    down: 5,
  },
  {
    up: 2,
  },
  {
    forward: 5,
  },
  {
    forward: 7,
  },
  {
    up: 5,
  },
  {
    down: 9,
  },
  {
    up: 6,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    down: 1,
  },
  {
    up: 2,
  },
  {
    down: 3,
  },
  {
    up: 3,
  },
  {
    forward: 8,
  },
  {
    forward: 7,
  },
  {
    down: 6,
  },
  {
    down: 7,
  },
  {
    forward: 6,
  },
  {
    forward: 9,
  },
  {
    forward: 7,
  },
  {
    up: 9,
  },
  {
    down: 4,
  },
  {
    down: 6,
  },
  {
    down: 5,
  },
  {
    down: 9,
  },
  {
    forward: 8,
  },
  {
    down: 9,
  },
  {
    forward: 9,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    up: 3,
  },
  {
    up: 8,
  },
  {
    down: 9,
  },
  {
    down: 8,
  },
  {
    down: 4,
  },
  {
    forward: 5,
  },
  {
    forward: 4,
  },
  {
    up: 6,
  },
  {
    forward: 6,
  },
  {
    up: 3,
  },
  {
    up: 8,
  },
  {
    up: 3,
  },
  {
    up: 4,
  },
  {
    down: 3,
  },
  {
    down: 5,
  },
  {
    down: 5,
  },
  {
    up: 1,
  },
  {
    forward: 9,
  },
  {
    down: 4,
  },
  {
    forward: 6,
  },
  {
    down: 6,
  },
  {
    up: 2,
  },
  {
    up: 9,
  },
  {
    forward: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 7,
  },
  {
    down: 6,
  },
  {
    up: 6,
  },
  {
    forward: 1,
  },
  {
    forward: 7,
  },
  {
    down: 7,
  },
  {
    forward: 9,
  },
  {
    forward: 4,
  },
  {
    forward: 6,
  },
  {
    down: 5,
  },
  {
    up: 9,
  },
  {
    down: 1,
  },
  {
    up: 5,
  },
  {
    up: 5,
  },
  {
    up: 9,
  },
  {
    down: 5,
  },
  {
    forward: 7,
  },
  {
    down: 1,
  },
  {
    up: 9,
  },
  {
    down: 7,
  },
  {
    forward: 2,
  },
  {
    down: 4,
  },
  {
    down: 4,
  },
  {
    forward: 8,
  },
  {
    forward: 8,
  },
  {
    down: 6,
  },
  {
    down: 3,
  },
  {
    up: 7,
  },
  {
    down: 3,
  },
  {
    forward: 9,
  },
  {
    down: 7,
  },
  {
    forward: 2,
  },
  {
    down: 1,
  },
  {
    forward: 5,
  },
  {
    up: 9,
  },
  {
    down: 2,
  },
  {
    up: 2,
  },
  {
    down: 3,
  },
  {
    up: 7,
  },
  {
    forward: 9,
  },
  {
    forward: 7,
  },
  {
    down: 4,
  },
  {
    down: 5,
  },
  {
    up: 3,
  },
  {
    down: 3,
  },
  {
    down: 5,
  },
  {
    forward: 9,
  },
  {
    down: 3,
  },
  {
    forward: 9,
  },
  {
    down: 3,
  },
  {
    up: 9,
  },
  {
    down: 5,
  },
  {
    forward: 4,
  },
  {
    down: 4,
  },
  {
    up: 8,
  },
  {
    forward: 7,
  },
  {
    up: 1,
  },
  {
    down: 2,
  },
  {
    forward: 4,
  },
  {
    down: 7,
  },
  {
    down: 9,
  },
  {
    down: 4,
  },
  {
    down: 4,
  },
  {
    forward: 6,
  },
  {
    down: 7,
  },
  {
    down: 2,
  },
  {
    down: 1,
  },
  {
    forward: 1,
  },
  {
    down: 2,
  },
  {
    forward: 1,
  },
  {
    down: 7,
  },
  {
    forward: 5,
  },
  {
    up: 3,
  },
  {
    forward: 6,
  },
  {
    up: 9,
  },
  {
    down: 3,
  },
  {
    down: 3,
  },
  {
    down: 9,
  },
  {
    forward: 4,
  },
  {
    down: 4,
  },
  {
    forward: 9,
  },
  {
    forward: 6,
  },
  {
    down: 7,
  },
  {
    up: 9,
  },
  {
    up: 6,
  },
  {
    forward: 4,
  },
  {
    down: 5,
  },
  {
    forward: 2,
  },
  {
    down: 7,
  },
  {
    down: 7,
  },
  {
    forward: 4,
  },
  {
    forward: 5,
  },
  {
    down: 8,
  },
  {
    down: 5,
  },
  {
    up: 4,
  },
  {
    forward: 7,
  },
  {
    up: 8,
  },
  {
    down: 8,
  },
  {
    forward: 4,
  },
  {
    forward: 5,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    down: 1,
  },
  {
    down: 9,
  },
  {
    forward: 4,
  },
  {
    up: 1,
  },
  {
    down: 8,
  },
  {
    up: 7,
  },
  {
    down: 1,
  },
  {
    up: 2,
  },
  {
    forward: 4,
  },
  {
    down: 7,
  },
  {
    down: 7,
  },
  {
    down: 2,
  },
  {
    forward: 7,
  },
  {
    down: 2,
  },
  {
    up: 1,
  },
  {
    up: 4,
  },
  {
    down: 6,
  },
  {
    forward: 5,
  },
  {
    forward: 2,
  },
  {
    up: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 9,
  },
  {
    up: 9,
  },
  {
    up: 7,
  },
  {
    forward: 9,
  },
  {
    down: 8,
  },
  {
    up: 5,
  },
  {
    down: 6,
  },
  {
    down: 6,
  },
  {
    up: 8,
  },
  {
    down: 1,
  },
  {
    forward: 6,
  },
  {
    down: 5,
  },
  {
    forward: 2,
  },
  {
    down: 9,
  },
  {
    down: 9,
  },
  {
    up: 4,
  },
  {
    forward: 4,
  },
  {
    forward: 2,
  },
  {
    forward: 7,
  },
  {
    forward: 3,
  },
  {
    down: 1,
  },
  {
    forward: 8,
  },
  {
    up: 9,
  },
  {
    down: 7,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    forward: 5,
  },
  {
    up: 6,
  },
  {
    down: 6,
  },
  {
    forward: 6,
  },
  {
    up: 3,
  },
  {
    forward: 9,
  },
  {
    down: 3,
  },
  {
    forward: 2,
  },
  {
    down: 7,
  },
  {
    down: 3,
  },
  {
    up: 9,
  },
  {
    down: 2,
  },
  {
    down: 3,
  },
  {
    forward: 5,
  },
  {
    down: 9,
  },
  {
    forward: 8,
  },
  {
    down: 2,
  },
  {
    forward: 1,
  },
  {
    down: 9,
  },
  {
    down: 7,
  },
  {
    forward: 2,
  },
  {
    forward: 6,
  },
  {
    forward: 4,
  },
  {
    forward: 5,
  },
  {
    down: 5,
  },
  {
    down: 1,
  },
  {
    forward: 5,
  },
  {
    up: 4,
  },
  {
    down: 4,
  },
  {
    up: 8,
  },
  {
    down: 4,
  },
  {
    up: 4,
  },
  {
    down: 1,
  },
  {
    down: 2,
  },
  {
    down: 9,
  },
  {
    down: 2,
  },
  {
    up: 4,
  },
  {
    down: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 1,
  },
  {
    forward: 9,
  },
  {
    down: 5,
  },
  {
    up: 4,
  },
  {
    up: 1,
  },
  {
    forward: 8,
  },
  {
    forward: 6,
  },
  {
    forward: 9,
  },
  {
    up: 9,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    down: 1,
  },
  {
    forward: 6,
  },
  {
    forward: 7,
  },
  {
    forward: 3,
  },
  {
    up: 5,
  },
  {
    up: 7,
  },
  {
    down: 1,
  },
  {
    forward: 4,
  },
  {
    down: 3,
  },
  {
    down: 5,
  },
  {
    up: 7,
  },
  {
    down: 4,
  },
  {
    up: 9,
  },
  {
    down: 3,
  },
  {
    down: 5,
  },
  {
    forward: 7,
  },
  {
    forward: 8,
  },
  {
    up: 5,
  },
  {
    up: 1,
  },
  {
    forward: 3,
  },
  {
    up: 8,
  },
  {
    forward: 3,
  },
  {
    down: 2,
  },
  {
    forward: 1,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    down: 2,
  },
  {
    forward: 7,
  },
  {
    down: 5,
  },
  {
    forward: 6,
  },
  {
    down: 9,
  },
  {
    up: 9,
  },
  {
    forward: 5,
  },
  {
    forward: 7,
  },
  {
    forward: 6,
  },
  {
    down: 2,
  },
  {
    up: 2,
  },
  {
    forward: 3,
  },
  {
    forward: 4,
  },
  {
    forward: 3,
  },
  {
    down: 5,
  },
  {
    forward: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 6,
  },
  {
    down: 4,
  },
  {
    forward: 2,
  },
  {
    forward: 6,
  },
  {
    up: 8,
  },
  {
    forward: 2,
  },
  {
    up: 4,
  },
  {
    forward: 7,
  },
  {
    down: 2,
  },
  {
    forward: 1,
  },
  {
    forward: 7,
  },
  {
    down: 6,
  },
  {
    forward: 4,
  },
  {
    down: 3,
  },
  {
    down: 2,
  },
  {
    down: 2,
  },
  {
    forward: 4,
  },
  {
    down: 8,
  },
  {
    forward: 6,
  },
  {
    forward: 6,
  },
  {
    down: 2,
  },
  {
    up: 3,
  },
  {
    up: 1,
  },
  {
    forward: 1,
  },
  {
    down: 5,
  },
  {
    down: 2,
  },
  {
    forward: 4,
  },
  {
    forward: 7,
  },
  {
    forward: 3,
  },
  {
    down: 3,
  },
  {
    forward: 9,
  },
  {
    down: 1,
  },
  {
    down: 7,
  },
  {
    forward: 6,
  },
  {
    forward: 1,
  },
  {
    up: 6,
  },
  {
    forward: 7,
  },
  {
    forward: 1,
  },
  {
    down: 5,
  },
  {
    down: 4,
  },
  {
    forward: 6,
  },
  {
    up: 1,
  },
  {
    down: 1,
  },
  {
    up: 9,
  },
  {
    down: 2,
  },
  {
    down: 2,
  },
  {
    forward: 3,
  },
  {
    up: 4,
  },
  {
    down: 5,
  },
  {
    down: 5,
  },
  {
    down: 3,
  },
  {
    down: 6,
  },
  {
    up: 8,
  },
  {
    forward: 2,
  },
  {
    forward: 2,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    up: 4,
  },
  {
    up: 1,
  },
  {
    down: 5,
  },
  {
    up: 4,
  },
  {
    up: 2,
  },
  {
    forward: 4,
  },
  {
    forward: 6,
  },
  {
    forward: 3,
  },
  {
    down: 7,
  },
  {
    forward: 8,
  },
  {
    up: 5,
  },
  {
    forward: 5,
  },
  {
    down: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 6,
  },
  {
    down: 8,
  },
  {
    up: 6,
  },
  {
    down: 1,
  },
  {
    down: 7,
  },
  {
    forward: 4,
  },
  {
    forward: 2,
  },
  {
    up: 1,
  },
  {
    down: 6,
  },
  {
    forward: 3,
  },
  {
    forward: 1,
  },
  {
    forward: 5,
  },
  {
    forward: 9,
  },
  {
    forward: 9,
  },
  {
    down: 4,
  },
  {
    forward: 2,
  },
  {
    down: 1,
  },
  {
    forward: 1,
  },
  {
    forward: 7,
  },
  {
    forward: 5,
  },
  {
    down: 9,
  },
  {
    down: 8,
  },
  {
    down: 1,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    up: 7,
  },
  {
    down: 3,
  },
  {
    forward: 3,
  },
  {
    up: 6,
  },
  {
    up: 4,
  },
  {
    down: 7,
  },
  {
    down: 7,
  },
  {
    forward: 6,
  },
  {
    up: 7,
  },
  {
    down: 7,
  },
  {
    forward: 9,
  },
  {
    down: 9,
  },
  {
    down: 3,
  },
  {
    forward: 6,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    down: 4,
  },
  {
    forward: 5,
  },
  {
    down: 4,
  },
  {
    down: 2,
  },
  {
    down: 3,
  },
  {
    up: 3,
  },
  {
    forward: 9,
  },
  {
    forward: 7,
  },
  {
    forward: 5,
  },
  {
    down: 5,
  },
  {
    forward: 7,
  },
  {
    up: 4,
  },
  {
    down: 1,
  },
  {
    forward: 3,
  },
  {
    down: 3,
  },
  {
    forward: 4,
  },
  {
    down: 9,
  },
  {
    forward: 2,
  },
  {
    down: 5,
  },
  {
    down: 1,
  },
  {
    forward: 8,
  },
  {
    down: 3,
  },
  {
    forward: 7,
  },
  {
    up: 1,
  },
  {
    down: 3,
  },
  {
    forward: 2,
  },
  {
    up: 8,
  },
  {
    down: 2,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    down: 5,
  },
  {
    up: 6,
  },
  {
    down: 3,
  },
  {
    forward: 5,
  },
  {
    down: 4,
  },
  {
    up: 5,
  },
  {
    forward: 1,
  },
  {
    forward: 6,
  },
  {
    up: 1,
  },
  {
    down: 3,
  },
  {
    forward: 2,
  },
  {
    forward: 9,
  },
  {
    down: 7,
  },
  {
    down: 4,
  },
  {
    forward: 5,
  },
  {
    up: 3,
  },
  {
    up: 6,
  },
  {
    up: 1,
  },
  {
    forward: 4,
  },
  {
    forward: 1,
  },
  {
    forward: 1,
  },
  {
    down: 7,
  },
  {
    up: 4,
  },
  {
    down: 3,
  },
  {
    down: 8,
  },
  {
    down: 3,
  },
  {
    forward: 8,
  },
  {
    forward: 3,
  },
  {
    down: 6,
  },
  {
    down: 9,
  },
  {
    forward: 3,
  },
  {
    forward: 9,
  },
  {
    forward: 7,
  },
  {
    down: 8,
  },
  {
    down: 6,
  },
  {
    down: 4,
  },
  {
    forward: 2,
  },
  {
    up: 4,
  },
  {
    forward: 8,
  },
  {
    down: 1,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    down: 9,
  },
  {
    forward: 2,
  },
  {
    down: 7,
  },
  {
    down: 2,
  },
  {
    up: 7,
  },
  {
    down: 1,
  },
  {
    up: 8,
  },
  {
    forward: 8,
  },
  {
    down: 7,
  },
  {
    forward: 1,
  },
  {
    down: 1,
  },
  {
    forward: 3,
  },
  {
    forward: 1,
  },
  {
    up: 2,
  },
  {
    down: 7,
  },
  {
    down: 5,
  },
  {
    forward: 5,
  },
  {
    down: 8,
  },
  {
    forward: 4,
  },
  {
    down: 1,
  },
  {
    up: 2,
  },
  {
    up: 8,
  },
  {
    down: 8,
  },
  {
    down: 1,
  },
  {
    down: 5,
  },
  {
    up: 3,
  },
  {
    forward: 3,
  },
  {
    forward: 5,
  },
  {
    down: 2,
  },
  {
    up: 4,
  },
  {
    down: 2,
  },
  {
    forward: 7,
  },
  {
    forward: 9,
  },
  {
    up: 9,
  },
  {
    up: 7,
  },
  {
    forward: 1,
  },
  {
    up: 4,
  },
  {
    forward: 3,
  },
  {
    up: 5,
  },
  {
    forward: 9,
  },
  {
    forward: 9,
  },
  {
    forward: 6,
  },
  {
    forward: 2,
  },
  {
    down: 7,
  },
  {
    forward: 8,
  },
  {
    forward: 4,
  },
  {
    forward: 7,
  },
  {
    down: 8,
  },
  {
    down: 5,
  },
  {
    down: 6,
  },
  {
    forward: 6,
  },
  {
    down: 4,
  },
  {
    down: 1,
  },
  {
    down: 9,
  },
  {
    down: 1,
  },
  {
    forward: 3,
  },
  {
    forward: 5,
  },
  {
    down: 6,
  },
  {
    down: 7,
  },
  {
    down: 9,
  },
  {
    down: 8,
  },
  {
    down: 4,
  },
  {
    up: 5,
  },
  {
    forward: 7,
  },
  {
    down: 9,
  },
  {
    forward: 6,
  },
  {
    down: 7,
  },
  {
    forward: 5,
  },
  {
    down: 5,
  },
  {
    forward: 1,
  },
  {
    down: 5,
  },
  {
    down: 3,
  },
  {
    up: 9,
  },
  {
    up: 3,
  },
  {
    forward: 2,
  },
  {
    up: 9,
  },
  {
    forward: 6,
  },
  {
    down: 1,
  },
  {
    down: 5,
  },
  {
    down: 9,
  },
  {
    down: 4,
  },
  {
    up: 6,
  },
  {
    forward: 9,
  },
  {
    down: 4,
  },
  {
    down: 9,
  },
  {
    down: 5,
  },
  {
    down: 8,
  },
  {
    down: 5,
  },
  {
    down: 4,
  },
  {
    up: 5,
  },
  {
    down: 8,
  },
  {
    up: 8,
  },
  {
    forward: 5,
  },
  {
    down: 9,
  },
  {
    forward: 2,
  },
  {
    up: 2,
  },
  {
    down: 6,
  },
  {
    forward: 2,
  },
  {
    forward: 4,
  },
  {
    forward: 6,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    forward: 8,
  },
  {
    down: 5,
  },
  {
    down: 5,
  },
  {
    forward: 2,
  },
  {
    down: 7,
  },
  {
    down: 5,
  },
  {
    down: 6,
  },
  {
    down: 9,
  },
  {
    forward: 4,
  },
  {
    up: 9,
  },
  {
    down: 3,
  },
  {
    down: 7,
  },
  {
    forward: 3,
  },
  {
    down: 5,
  },
  {
    up: 1,
  },
  {
    forward: 5,
  },
  {
    up: 2,
  },
  {
    down: 2,
  },
  {
    forward: 2,
  },
  {
    up: 3,
  },
  {
    up: 6,
  },
  {
    forward: 2,
  },
  {
    forward: 7,
  },
  {
    down: 8,
  },
  {
    forward: 8,
  },
  {
    forward: 7,
  },
  {
    forward: 6,
  },
  {
    down: 5,
  },
  {
    down: 6,
  },
  {
    down: 6,
  },
  {
    down: 9,
  },
  {
    up: 5,
  },
  {
    down: 3,
  },
  {
    up: 1,
  },
  {
    up: 9,
  },
  {
    up: 5,
  },
  {
    down: 4,
  },
  {
    down: 4,
  },
  {
    down: 8,
  },
  {
    forward: 8,
  },
  {
    up: 5,
  },
  {
    down: 9,
  },
  {
    forward: 1,
  },
  {
    up: 1,
  },
  {
    forward: 2,
  },
  {
    down: 9,
  },
  {
    forward: 5,
  },
  {
    up: 9,
  },
  {
    forward: 7,
  },
  {
    down: 7,
  },
  {
    down: 5,
  },
  {
    up: 1,
  },
  {
    up: 2,
  },
  {
    down: 8,
  },
  {
    down: 7,
  },
  {
    up: 4,
  },
  {
    forward: 9,
  },
  {
    down: 4,
  },
  {
    up: 8,
  },
  {
    down: 5,
  },
  {
    down: 1,
  },
  {
    forward: 9,
  },
  {
    down: 6,
  },
  {
    up: 8,
  },
  {
    down: 6,
  },
  {
    forward: 7,
  },
  {
    up: 6,
  },
  {
    up: 5,
  },
  {
    forward: 2,
  },
  {
    up: 7,
  },
  {
    forward: 7,
  },
  {
    forward: 5,
  },
  {
    down: 1,
  },
  {
    forward: 9,
  },
  {
    down: 8,
  },
  {
    forward: 9,
  },
  {
    down: 3,
  },
  {
    down: 3,
  },
  {
    forward: 9,
  },
  {
    up: 1,
  },
  {
    down: 2,
  },
  {
    forward: 9,
  },
  {
    down: 7,
  },
  {
    forward: 4,
  },
  {
    forward: 3,
  },
  {
    forward: 4,
  },
  {
    down: 5,
  },
  {
    forward: 9,
  },
  {
    forward: 9,
  },
  {
    down: 5,
  },
  {
    forward: 4,
  },
  {
    down: 5,
  },
  {
    down: 2,
  },
  {
    down: 6,
  },
  {
    forward: 5,
  },
  {
    forward: 8,
  },
  {
    forward: 6,
  },
  {
    up: 9,
  },
  {
    down: 9,
  },
  {
    forward: 7,
  },
  {
    down: 6,
  },
  {
    down: 7,
  },
  {
    down: 4,
  },
  {
    forward: 1,
  },
  {
    forward: 3,
  },
  {
    forward: 6,
  },
  {
    forward: 4,
  },
  {
    forward: 3,
  },
  {
    forward: 4,
  },
  {
    down: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 3,
  },
  {
    forward: 9,
  },
  {
    up: 8,
  },
  {
    forward: 6,
  },
  {
    down: 1,
  },
  {
    up: 5,
  },
  {
    down: 1,
  },
  {
    down: 4,
  },
  {
    down: 7,
  },
  {
    down: 5,
  },
  {
    down: 9,
  },
  {
    down: 2,
  },
  {
    down: 9,
  },
  {
    forward: 2,
  },
  {
    down: 2,
  },
  {
    up: 5,
  },
  {
    forward: 2,
  },
  {
    forward: 3,
  },
  {
    forward: 5,
  },
  {
    up: 8,
  },
  {
    up: 1,
  },
  {
    down: 9,
  },
  {
    forward: 2,
  },
  {
    down: 4,
  },
  {
    down: 9,
  },
  {
    down: 6,
  },
  {
    down: 5,
  },
  {
    down: 8,
  },
  {
    forward: 3,
  },
  {
    forward: 8,
  },
  {
    forward: 7,
  },
  {
    up: 3,
  },
  {
    up: 5,
  },
  {
    down: 9,
  },
  {
    down: 5,
  },
  {
    up: 6,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    forward: 4,
  },
  {
    down: 9,
  },
  {
    down: 2,
  },
  {
    down: 7,
  },
  {
    down: 1,
  },
  {
    down: 2,
  },
  {
    down: 4,
  },
  {
    forward: 7,
  },
  {
    down: 9,
  },
  {
    forward: 4,
  },
  {
    forward: 5,
  },
  {
    up: 5,
  },
  {
    forward: 4,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    forward: 5,
  },
  {
    down: 3,
  },
  {
    forward: 1,
  },
  {
    forward: 5,
  },
  {
    up: 9,
  },
  {
    down: 7,
  },
  {
    forward: 7,
  },
  {
    forward: 6,
  },
  {
    down: 2,
  },
  {
    down: 3,
  },
  {
    forward: 9,
  },
  {
    down: 1,
  },
  {
    forward: 4,
  },
  {
    forward: 9,
  },
  {
    up: 7,
  },
  {
    forward: 7,
  },
  {
    down: 5,
  },
  {
    forward: 9,
  },
  {
    forward: 2,
  },
  {
    up: 3,
  },
  {
    down: 3,
  },
  {
    down: 7,
  },
  {
    down: 5,
  },
  {
    up: 7,
  },
  {
    up: 9,
  },
  {
    up: 7,
  },
  {
    forward: 3,
  },
  {
    forward: 3,
  },
  {
    forward: 8,
  },
  {
    up: 9,
  },
  {
    forward: 8,
  },
  {
    forward: 9,
  },
  {
    forward: 4,
  },
  {
    down: 2,
  },
  {
    forward: 7,
  },
  {
    down: 6,
  },
  {
    up: 3,
  },
  {
    up: 9,
  },
  {
    forward: 8,
  },
  {
    forward: 2,
  },
  {
    down: 9,
  },
  {
    down: 7,
  },
  {
    forward: 1,
  },
  {
    up: 4,
  },
  {
    up: 7,
  },
  {
    forward: 2,
  },
  {
    up: 4,
  },
  {
    forward: 4,
  },
  {
    up: 1,
  },
  {
    forward: 3,
  },
  {
    down: 7,
  },
  {
    forward: 5,
  },
  {
    down: 4,
  },
  {
    forward: 2,
  },
  {
    forward: 7,
  },
  {
    up: 4,
  },
  {
    down: 1,
  },
  {
    down: 6,
  },
  {
    forward: 1,
  },
  {
    forward: 9,
  },
  {
    up: 6,
  },
  {
    forward: 7,
  },
  {
    forward: 7,
  },
  {
    down: 8,
  },
  {
    forward: 7,
  },
  {
    down: 8,
  },
  {
    down: 9,
  },
  {
    up: 3,
  },
  {
    forward: 3,
  },
  {
    forward: 3,
  },
  {
    down: 8,
  },
  {
    up: 2,
  },
  {
    down: 2,
  },
  {
    down: 4,
  },
  {
    up: 3,
  },
  {
    down: 3,
  },
  {
    forward: 7,
  },
  {
    down: 4,
  },
  {
    up: 8,
  },
  {
    down: 9,
  },
  {
    down: 9,
  },
  {
    up: 7,
  },
  {
    down: 1,
  },
  {
    forward: 2,
  },
  {
    up: 1,
  },
  {
    down: 3,
  },
  {
    up: 9,
  },
  {
    down: 6,
  },
  {
    up: 2,
  },
  {
    forward: 6,
  },
  {
    up: 8,
  },
  {
    up: 1,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    up: 6,
  },
  {
    up: 4,
  },
  {
    up: 2,
  },
  {
    forward: 6,
  },
  {
    down: 6,
  },
  {
    down: 1,
  },
  {
    forward: 7,
  },
  {
    up: 9,
  },
  {
    up: 1,
  },
  {
    forward: 4,
  },
  {
    forward: 5,
  },
  {
    up: 6,
  },
  {
    forward: 9,
  },
  {
    down: 1,
  },
  {
    down: 9,
  },
  {
    down: 3,
  },
  {
    down: 7,
  },
  {
    forward: 7,
  },
  {
    down: 1,
  },
  {
    down: 4,
  },
  {
    forward: 6,
  },
  {
    down: 5,
  },
  {
    up: 4,
  },
  {
    forward: 9,
  },
  {
    up: 5,
  },
  {
    down: 1,
  },
  {
    down: 2,
  },
  {
    down: 2,
  },
  {
    up: 4,
  },
  {
    forward: 1,
  },
  {
    forward: 3,
  },
  {
    down: 7,
  },
  {
    forward: 4,
  },
  {
    down: 4,
  },
  {
    down: 8,
  },
  {
    down: 5,
  },
  {
    forward: 3,
  },
  {
    up: 4,
  },
  {
    forward: 5,
  },
  {
    down: 2,
  },
  {
    down: 4,
  },
  {
    down: 4,
  },
  {
    down: 1,
  },
  {
    forward: 2,
  },
  {
    forward: 1,
  },
  {
    forward: 8,
  },
  {
    forward: 4,
  },
  {
    up: 4,
  },
  {
    down: 9,
  },
  {
    up: 6,
  },
  {
    forward: 9,
  },
  {
    up: 5,
  },
  {
    down: 5,
  },
  {
    forward: 3,
  },
  {
    up: 1,
  },
  {
    forward: 7,
  },
  {
    down: 4,
  },
  {
    forward: 7,
  },
  {
    down: 9,
  },
  {
    up: 8,
  },
  {
    down: 5,
  },
  {
    forward: 1,
  },
  {
    down: 5,
  },
  {
    down: 8,
  },
  {
    forward: 3,
  },
  {
    up: 6,
  },
  {
    forward: 3,
  },
  {
    up: 7,
  },
  {
    forward: 6,
  },
  {
    forward: 9,
  },
  {
    up: 1,
  },
  {
    down: 3,
  },
  {
    down: 9,
  },
  {
    up: 4,
  },
  {
    up: 6,
  },
  {
    forward: 5,
  },
  {
    down: 6,
  },
  {
    down: 3,
  },
  {
    down: 4,
  },
  {
    up: 1,
  },
  {
    forward: 5,
  },
  {
    down: 5,
  },
  {
    down: 2,
  },
  {
    forward: 6,
  },
  {
    down: 8,
  },
  {
    down: 3,
  },
  {
    up: 8,
  },
  {
    forward: 5,
  },
  {
    forward: 6,
  },
  {
    down: 6,
  },
  {
    down: 6,
  },
  {
    down: 6,
  },
  {
    forward: 7,
  },
  {
    up: 4,
  },
  {
    forward: 7,
  },
  {
    up: 4,
  },
  {
    down: 2,
  },
  {
    forward: 4,
  },
  {
    forward: 2,
  },
  {
    down: 6,
  },
  {
    up: 1,
  },
  {
    down: 1,
  },
  {
    down: 4,
  },
  {
    up: 8,
  },
  {
    down: 6,
  },
  {
    forward: 3,
  },
  {
    forward: 6,
  },
  {
    down: 6,
  },
  {
    forward: 5,
  },
  {
    down: 4,
  },
  {
    up: 2,
  },
  {
    up: 3,
  },
  {
    down: 3,
  },
  {
    up: 1,
  },
  {
    forward: 2,
  },
  {
    up: 1,
  },
  {
    forward: 4,
  },
  {
    up: 5,
  },
  {
    up: 2,
  },
  {
    down: 7,
  },
  {
    forward: 3,
  },
  {
    up: 2,
  },
  {
    forward: 5,
  },
  {
    down: 1,
  },
  {
    down: 3,
  },
  {
    down: 2,
  },
  {
    forward: 5,
  },
  {
    down: 1,
  },
  {
    up: 5,
  },
  {
    forward: 4,
  },
  {
    down: 7,
  },
  {
    up: 8,
  },
  {
    up: 3,
  },
  {
    down: 7,
  },
  {
    down: 7,
  },
  {
    forward: 9,
  },
  {
    forward: 1,
  },
  {
    up: 6,
  },
  {
    down: 4,
  },
  {
    down: 7,
  },
  {
    forward: 1,
  },
  {
    down: 4,
  },
  {
    forward: 9,
  },
  {
    up: 1,
  },
  {
    forward: 3,
  },
  {
    down: 1,
  },
  {
    up: 3,
  },
  {
    down: 6,
  },
  {
    down: 8,
  },
  {
    down: 6,
  },
  {
    forward: 6,
  },
  {
    forward: 6,
  },
  {
    up: 2,
  },
  {
    down: 8,
  },
  {
    forward: 5,
  },
];

const test = [
  {
    forward: 5,
  },
  {
    down: 5,
  },
  {
    forward: 8,
  },
  {
    up: 3,
  },
  {
    down: 8,
  },
  {
    forward: 2,
  },
];

// challenge 2.1
const sumOfXY = (arr) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    const [[key, val]] = Object.entries(arr[i]);
    switch (key) {
      case 'forward': x += val; break;
      case 'down': y += val; break;
      case 'up': y -= val; break;
      default: break;
    }
  }

  return x * y;
};

console.log('c2.1 test case', sumOfXY(test));
console.log('c2.1', sumOfXY(input));


// challenge 2.2
const sumOfXYandAim = (arr) => {
  let x = 0;
  let y = 0;
  let aim = 0

  for (let i = 0; i < arr.length; i++) {
    const [[key, val]] = Object.entries(arr[i]);
    switch (key) {
      case 'forward': {
        x += val
        y += val * aim
      }; break;
      case 'down': aim += val; break;
      case 'up': aim -= val; break;
      default: break;
    }
  }

  return x * y;
};

console.log('c2.2 test case', sumOfXYandAim(test));
console.log('c2.2 ', sumOfXYandAim(input));