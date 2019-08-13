function gameControl() {
  let deck =[];
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function createDeck() {
    for (let i = 2; deck.length < 52; i++) {
      deck.push(100 + i);
      deck.push(200 + i);
      deck.push(300 + i);
      deck.push(400 + i);
    }
  }

  createDeck();

  let startCard = drawCard();
  let score = 0;
  var recursiveAsyncReadLine = function () {
    console.log(`\nHouse card is now: "${convertCardToObj(startCard).cardValue} of ${convertCardToObj(startCard).suit}"`);
    rl.question(`What's your guess, 'h' for higher or 'l' for lower? `, function (guess) {

      if (!(guess === 'l' || guess === 'h')) {
        console.log(`PLEASE ONLY USE 'l' AND 'h' KEYS`);
        recursiveAsyncReadLine();
      } else {
        let drawnCard = drawCard();
        if (drawnCard % 100 > startCard % 100 && guess === 'l'
        || drawnCard % 100 < startCard % 100 && guess === 'h') {
          console.log(`\n\nYou drew a "${convertCardToObj(drawnCard).cardValue} of ${convertCardToObj(drawnCard).suit}"`);
          console.log('Sorry, game over. \nYour score is:', score);
          console.log('---------------------------------------------------')
          console.log(deck);
          console.log('---------------------------------------------------')
          return rl.close();
        }
        score++;
        console.log('\nExcellent! Your score is:', score);
        console.log(`You drew a "${convertCardToObj(drawnCard).cardValue} of ${convertCardToObj(drawnCard).suit}"`);
        startCard = drawnCard
        recursiveAsyncReadLine();
      }
    });
  };

  recursiveAsyncReadLine();

  function drawCard() {
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[random];
    deck.splice(random, 1);
    return card;
  }

  function convertCardToObj(card) {
    let drawCard = {};
    let suitArr = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    let faceCards = ['Jack', 'Queen', 'King', 'Ace'];
    drawCard.cardValue = card % 100;
    if (drawCard.cardValue > 10) {
      drawCard.cardValue -= 10;
      drawCard.cardValue = faceCards[drawCard.cardValue - 1];
    }
    drawCard.suit = suitArr[Math.floor(card / 100) - 1];
    return drawCard;
  }
}

console.log(
  gameControl()
);