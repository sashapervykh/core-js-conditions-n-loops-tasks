/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (queen.x + queen.y === king.x + king.y) return true;
  if (queen.x - king.x === queen.y - king.y) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if ((a === b || b === c || a === c) && a + b > c && b + c > a && c + a > b)
    return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  if (num >= 10) {
    switch (Math.floor(num / 10)) {
      case 1:
        res += 'X';
        break;
      case 2:
        res += 'XX';
        break;
      case 3:
        res += 'XXX';
        break;
      default:
        res += '';
    }
  }

  switch (num % 10) {
    case 1:
      res += 'I';
      break;
    case 2:
      res += 'II';
      break;
    case 3:
      res += 'III';
      break;
    case 4:
      res += 'IV';
      break;
    case 5:
      res += 'V';
      break;
    case 6:
      res += 'VI';
      break;
    case 7:
      res += 'VII';
      break;
    case 8:
      res += 'VIII';
      break;
    case 9:
      res += 'IX';
      break;
    default:
      res += '';
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; ) {
    if (i !== 0) res += ' ';
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case ',':
      case '.':
        res += 'point';
        break;
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      default:
        res += '';
    }
    i += 1;
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2) - 1; ) {
    if (str[i] !== str[str.length - 1 - i]) return false;
    i += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; ) {
    if (str[i] === letter) return i;
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let i = 1;
  while (num > 10 ** (i - 1)) {
    const digit1 = Math.floor((num % 10 ** i) / 10 ** (i - 1));
    if (digit === digit1) return true;
    i += 1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function getSum(array, start, end) {
    let res = 0;
    for (let i = start; i <= end; ) {
      res += array[i];
      i += 1;
    }
    return res;
  }

  for (let j = 1; j < arr.length - 1; ) {
    if (getSum(arr, 0, j - 1) === getSum(arr, j + 1, arr.length - 1)) return j;
    j += 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let counter = 1;
  for (let i = 0; i < size; ) {
    matrix[matrix.length] = [];
    for (let j = 0; j < size; ) {
      matrix[i][j] = 0;
      j += 1;
    }
    i += 1;
  }

  function getOneCircle(startX, startY, circleSize) {
    let x = startX;
    let y = startY;
    for (x; x < startX + circleSize; ) {
      matrix[y][x] = counter;
      counter += 1;
      x += 1;
    }
    y += 1;
    if (y === startY + circleSize) return;
    for (y; y < startY + circleSize; ) {
      matrix[y][x - 1] = counter;
      counter += 1;
      y += 1;
    }
    x -= 2;
    for (x; x >= startX; ) {
      matrix[y - 1][x] = counter;
      counter += 1;
      x -= 1;
    }
    y -= 2;
    for (y; y > startY; ) {
      matrix[y][x + 1] = counter;
      counter += 1;
      y -= 1;
    }
    if (circleSize - 2 > 0) {
      getOneCircle(startX + 1, startY + 1, circleSize - 2);
    }
  }
  getOneCircle(0, 0, size);
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const res = matrix;
  function spinOneCircle(startX, startY, circleLength) {
    for (let i = 0; i < circleLength - 1; ) {
      const storage = matrix[startX][i + startY];
      res[startX][i + startY] = res[startY + circleLength - 1 - i][startX];

      res[startY + circleLength - 1 - i][startX] =
        res[startY + circleLength - 1][startX + circleLength - 1 - i];

      res[startY + circleLength - 1][startX + circleLength - 1 - i] =
        res[startY + i][startX + circleLength - 1];

      res[startY + i][startX + circleLength - 1] = storage;
      i += 1;
    }
    if (circleLength - 2 > 1) {
      spinOneCircle(startX + 1, startY + 1, circleLength - 2);
    }
  }
  spinOneCircle(0, 0, res.length);

  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  for (let i = 1; i < res.length; ) {
    const checkElem = res[i];
    let j = i;

    while (j > 0 && res[j - 1] > checkElem) {
      res[j] = res[j - 1];
      j -= 1;
      res[j] = checkElem;
    }
    i += 1;
  }
  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  function changeStr() {
    let odd = '';
    let pos = '';
    for (let i = 1; i < res.length; ) {
      if (res[i]) {
        odd += res[i];
      }
      pos += res[i - 1];
      i += 2;
    }
    res = pos + odd;
  }

  changeStr();
  const arr = [res];
  let counter = iterations - 1;
  while (res !== str && counter > 0) {
    changeStr();
    arr[arr.length] = res;
    counter -= 1;
  }

  if (counter > 0) {
    res = arr[(iterations % arr.length) - 1];
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let example = number;
  let res = 0;
  let check = true;
  while (check && example > 1) {
    arr[arr.length] = example % 10;
    example = Math.floor(example / 10);
    const next = example % 10;

    if (next < arr[arr.length - 1]) {
      check = false;
    }
  }

  if (example < 1 && check) {
    return number;
  }

  let digitToChange = example % 10;
  let smallestDigitIndex = 0;
  arr.sort();
  while (arr[smallestDigitIndex] < digitToChange) {
    smallestDigitIndex += 1;
  }
  example = Math.floor(example / 10);
  const k = digitToChange;

  digitToChange = arr[smallestDigitIndex];
  arr[smallestDigitIndex] = k;

  arr.sort();
  res = example * 10 ** (arr.length + 1) + digitToChange * 10 ** arr.length;
  let pow = 0;
  for (let i = arr.length - 1; i >= 0; ) {
    res += arr[i] * 10 ** pow;
    pow += 1;
    i -= 1;
  }

  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
