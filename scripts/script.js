// function definition
// Initialization of Variables
// an Array of denominations, result and initialise i=0
// loop through tha Array containing the notes
// divide each element by the amount
// take the remender and keep looping till amount = 0
// return result
// print

// funtion def
function calculateBanknotesWhile (amount) {
  // initialisation of variables
  const denominations = [10000, 5000, 2000, 1000, 500, 100]
  const result = {}
  let i = 0
  // while 23700 > 0 and i < legth of array loop
  while (amount > 0 && i < denominations.length) {
  // store value of index position into denom
    const denom = denominations[i]
    // condition
    if (amount >= denom) {
      // logic
      const count = Math.floor(amount / denom) // divides
      result[denom] = count
      amount %= denom // get the remainder
    }
    i++ // keep looping
  }

  return result
}

// function call
const amount = 23700
const output = calculateBanknotesWhile(amount)
console.log(output)

// Start
// Take in the phrase and splite each word
// declare Variables and initialise longest-word and it length = 0
// loop through each word
// if the current word is longer than the longest-word update it or swap
// return longest-word
// end

function findLongestWord (sentence) {
  // Split the sentence into words using spaces as the delimiter
  const words = sentence.split(' ')

  // Initialize variables to store the longest-word and its length
  let longestWord = ''
  let maxLength = 0

  // loop through each word in the array
  for (const word of words) {
  // If the current word is longer than the longest-word, update it
    if (word.length > maxLength) {
      longestWord = word
      maxLength = word.length
    }
  }

  return longestWord
}

// Example usage
const sentence = 'The quick brown fox jumps over the lazy dog'
const longestWord = findLongestWord(sentence)
console.log(longestWord)

// Start
// Initialise e initialbalance and transacrtion = []
// loop throught the array and return the sum of it content in a variable = x
// final balance = initialbalance + x
// return final balance
// end

function calcateBalance (initBalance, transactions) {
  let finalBalance = 0
  for (let i = 0; i < transactions.length; i++) {
    finalBalance += transactions[i]
  }
  finalBalance += initBalance
  return finalBalance
}

// Example usage
const listOfTransactions = [3000, -2000, -1500, 5000]
const initialBlance = 10000
const total = calcateBalance(initialBlance, listOfTransactions)
console.log(total)
