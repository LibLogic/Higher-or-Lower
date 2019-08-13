function processRound (drawCard,  guess) {
  let matchCard = Math.floor(Math.random() * (13 - 2 + 1) ) + 2;
  let generateSuit = Math.floor(Math.random() * 4);
  let suitArr = ['s', 'c', 'h', 'd'];
  matchCardSuit = suitArr[generateSuit];

  let currentCard = drawCard.value;
  let currentSuit = drawCard.suit;

  if (matchCard === currentCard && matchCardSuit === currentSuit) {
    return 'Houston, we have a problem';
  }

  if (currentCard < 2 || currentCard > 13) {
    return "Only numbers between 2-13 allowed";
  }

  if (currentCard === matchCard) {
    return 'Draw!';
  } else if (currentCard < matchCard  && guess === 'l'
    || currentCard > matchCard && guess === 'h') {
        return 'Win!';
  } else {
    return 'Lose';
  }
}

console.log(
  processRound({suit: 's', value: 9}, 'h')
);