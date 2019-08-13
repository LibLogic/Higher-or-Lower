function gameController() {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`What's your guess, 'h' for high or 'l' for low?`, guess => {
    console.log(processRound(generateDrawCard(), guess));
    rl.close();
    process.stdin.destroy();
  });


  function generateDrawCard () {
    let drawCardValue = Math.floor(Math.random() * (13 - 2 + 1) ) + 2;
    let generateSuit = Math.floor(Math.random() * 4);
    let suitArr = ['of clubs', 'of diamonds', 'of hearts', 'of spades'];
    drawCardSuit = suitArr[generateSuit];
    let drawCard = {
      value: drawCardValue,
      suit: drawCardSuit
    };
    return drawCard;
  }
}

function processRound (drawCard,  guess) {
  // generates the match card
  let matchCard = {};
  (function () {
    let suitArr = ['of clubs', 'of diamonds', 'of hearts', 'of spades'];
    matchCard.value = Math.floor(Math.random() * (13 - 2 + 1) ) + 2;
    matchCard.suit = suitArr[Math.floor(Math.random() * 4)];
  })();

  let currentCard = drawCard.value;
  let currentSuit = drawCard.suit;

  if (matchCard.value === currentCard && matchCard.suit === currentSuit) {
    return 'Houston, we have a problem';
  }

  if (currentCard === matchCard.value) {
    console.log(matchCard.value, matchCard.suit, '-', currentCard, currentSuit, '\tguessed =', guess);
    return 'Draw!';
  } else if (currentCard < matchCard.value  && guess === 'l'
    || currentCard > matchCard.value && guess === 'h') {
      console.log(matchCard.value, matchCard.suit, '-', currentCard, currentSuit, '\tguessed =', guess);
        return 'Win!';
  } else {
    console.log(matchCard.value, matchCard.suit, '-', currentCard, currentSuit, '\tguessed =', guess);
    return 'Lose';
  }
}

console.log(
  gameController()
);