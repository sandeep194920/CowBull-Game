const randomWords = require("random-words");
const noRepeatedLetters = require("no-repeated-letters");

export function GameLogic(hidden, guessed) {
  // hidden word - sky
  // guessed word - ink  -- 1c

  // hidden word - sky
  // guessed word - sat   -- 1b

  // hidden word - sky
  // guessed word - pat   -- 00

  const hiddenLetters = [...hidden]; // S  K  Y
  const guessedLetters = [...guessed]; // P  S  T
  let cow = 0;
  let bull = 0;
  hiddenLetters.forEach((hiddenLetter, hiddenIndex) => {
    // got the first letter of hidden and this should be compared with all the letters in guessed to find the cow and bull count
    guessedLetters.forEach((guessedLetter, guessedInex) => {
      if (hiddenLetter === guessedLetter) {
        if (hiddenIndex === guessedInex) bull++;
        else cow++;
      }
    });
  });
  return { cow, bull };
}

//gets the word or number for the game based on game type and letters length
export async function getLetters(gameType = "Word", letters = 3) {
  // this function returns word / number
  if (gameType === "Word") {
    let word = randomWords();
    while (word.length !== Number(letters) || !noRepeatedLetters(word)) {
      // the word shoild not exceed the length selected and it should not have repeated characters
      word = randomWords();
    }
    // console.log("I got my word and it is " + word);
    return word;
  } else if (gameType === "Number") {
    const numberSet = "0123456789";
    var stringLength = Number(letters);

    function pickRandom() {
      return numberSet[Math.floor(Math.random() * numberSet.length)];
    }

    let number = Array.apply(null, Array(stringLength))
      .map(pickRandom)
      .join("");

    while (number.length !== Number(letters) || !noRepeatedLetters(number)) {
      // the word shoild not exceed the length selected and it should not have repeated characters
      number = Array.apply(null, Array(stringLength)).map(pickRandom).join("");
    }

    console.log(`The random number ${number}`);
    return number;
  }
}
