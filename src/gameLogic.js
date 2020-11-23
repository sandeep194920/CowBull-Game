export default function GameLogic(hidden, guessed) {
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
