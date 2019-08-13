function processRound (currentCard,  guess) {
  let previousCard = 8;
  if (currentCard < 2 || currentCard > 13) {
    return "Only numbers between 2-13 allowed";
  }

  if (currentCard === previousCard) {
    return 'Draw!';
  } else if (currentCard < previousCard  && guess === 'l'
    || currentCard > previousCard && guess === 'h') {
      return 'Win!';
  } else {
    return 'Lose';
  }
}


console.log(
  processRound (1, 'l')
);