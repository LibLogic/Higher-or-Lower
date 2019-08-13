function processRound (drawCard,  guess) {
  let matchCard = Math.floor(Math.random() * (13 - 2 + 1) ) + 2;
  let generateSuit = Math.floor(Math.random() * 4);
  let suitArr = ['s', 'c', 'h', 'd'];
  matchCardSuit = suitArr[generateSuit];

  let currentCard = drawCard.value;
  let currentSuit = drawCard.suit;

  if (matchCard === currentCard && matchCardSuit === currentSuit) {
    console.log(matchCard, matchCardSuit, '-', currentCard, currentSuit, guess);
    return 'Houston, we have a problem';
  }

  if (currentCard < 2 || currentCard > 13) {
    console.log(matchCard, matchCardSuit, '-', currentCard, currentSuit, guess);
    return "Only numbers between 2-13 allowed";
  }

  if (currentCard === matchCard) {
    console.log(matchCard, matchCardSuit, '-', currentCard, currentSuit, guess);
    return 'Draw!';
  } else if (currentCard < matchCard  && guess === 'l'
    || currentCard > matchCard && guess === 'h') {
      console.log(matchCard, matchCardSuit, '-', currentCard, currentSuit, guess);
        return 'Win!';
  } else {
    console.log(matchCard, matchCardSuit, '-', currentCard, currentSuit, guess);
    return 'Lose';
  }
}

console.log(
  processRound ({suit: 's', value: 9}, 'h')
);