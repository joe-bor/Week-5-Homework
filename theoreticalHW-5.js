let str =
  "Theoretical HW: Most Frequent Word in a Paragraph. In this coding challenge, you will use frequency counters to determine the most frequently used word in a given paragraph. Your task is to create a function called mostFrequentWord(paragraph)that takes a string as input and returns the most frequently used word, regardless of capitalization.";

//console.log(str.toLowerCase().split(' '))

//input = string
//return = string

function mostFrequentWord(str) {
  /*--- EDGE CASE---*/
  if (str.length === 0) return;

  let wordArr = str.toLowerCase().split(" "); //outputs array of words in lowercase

  //obj to hold counters
  let freqCounter = {};

  //initialize variables to hold largest value and corresponding word
  let maxValue = 0;
  let maxIndex;

  //loop thru arr
  for (let i = 0; i < wordArr.length; i++) {
    //create frequency counter for each word in array
    if (freqCounter[wordArr[i]]) {
      freqCounter[wordArr[i]] += 1;
    } else {
      freqCounter[wordArr[i]] = 1;
    }

    //compare and grab the value and index of the current max as we populate our frequency counter
    if (freqCounter[wordArr[i]] > maxValue) {
      maxValue = freqCounter[wordArr[i]];
      maxIndex = i;
    }
  }
  return wordArr[maxIndex];
}

console.log(mostFrequentWord(str));

//TODO: Check for edge cases. blank strings? 1 word inputs?
//TODO: Make it so punctuations are not counted as part of words that end the sentences

//TODO: Try using array iteration methods
