function gameControl() {
  let deck =[];
  function createDeck() {
    for (let i = 2; deck.length < 52; i++) {
      deck.push(100 + i); // clubs
      deck.push(200 + i); // diamonds
      deck.push(300 + i); // hearts
      deck.push(400 + i); // spades
    }
  }

  createDeck();

  let startCard = drawCard(), score = 0;
  console.clear();
  function recurseRL () {
    console.log(`\nHouse card is now: "${convertCardToObj(startCard).cardValue} of ${convertCardToObj(startCard).suit}"`);
    var rl = require('readline').createInterface(process.stdin, process.stdout, null);
    rl.question(`What's your guess, 'h' for higher or 'l' for lower? `, function (guess) {
    if (!(guess === 'l' || guess === 'h')) {
      console.log(`\nPLEASE ONLY USE 'l' AND 'h' KEYS`);
      recurseRL();
    } else {
      let drawnCard = drawCard();
      if (drawnCard % 100 > startCard % 100 && guess === 'l'
      || drawnCard % 100 < startCard % 100 && guess === 'h') {
        console.clear();
        console.log(`\nSorry, game over.`);
        console.log(`You drew the "${convertCardToObj(drawnCard).cardValue} of ${convertCardToObj(drawnCard).suit}"`);
        console.log(`Your final score was:`, score);
        console.log('\n\n');
        // // For testing the deck
        // console.log('---------------------------------------------------')
        // console.log(deck);
        // console.log('---------------------------------------------------')
        return rl.close();
      }
      if (drawnCard % 100 !== startCard % 100) {
        score++;
        console.clear();
        console.log(`\nExcellent! Your score is:`, score);
        console.log(`You drew a "${convertCardToObj(drawnCard).cardValue} of ${convertCardToObj(drawnCard).suit}"`);
        startCard = drawnCard;
        recurseRL();
      } else {
        console.clear();
        console.log(`\nYou drew a "${convertCardToObj(drawnCard).cardValue} of ${convertCardToObj(drawnCard).suit}"`);
        console.log(`That was a draw! Your don't get any points\nbut you get another try.\nYour score stays at:`, score);
        startCard = drawnCard;
        recurseRL();
      }
    }
  });
};

  recurseRL();

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

gameControl();
