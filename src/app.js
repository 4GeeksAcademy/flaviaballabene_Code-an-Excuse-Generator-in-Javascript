/* eslint-disable */



    const who = ['John', 'Alice', 'Bob', 'Emma'];
    const action = ['is eating', 'is reading', 'is playing', 'is coding'];
    const what = ['a pizza', 'a book', 'a game', 'JavaScript'];
    const when = ['right now', 'at noon', 'this evening', 'tomorrow'];

    function shuffleArray(array) {
      const shuffledIndex = Math.floor(Math.random() * array.length);
      const shuffledElement = array[shuffledIndex];
      return shuffledElement;
    }
    
    function generateRandomSentence () {
      const shuffledWho = shuffleArray(who);
      const shuffledAction = shuffleArray(action);
      const shuffledWhat = shuffleArray(what);
      const shuffledWhen = shuffleArray(when);

      const randomSentence = `${shuffledWho} ${shuffledAction} ${shuffledWhat} ${shuffledWhen}`;
      return {
        sentence: randomSentence,
        hasPizza: shuffledWhat === 'a pizza',
        hasBook: shuffledWhat === 'a book',
        hasGame: shuffledWhat === 'a game',
        hasJavaScript: shuffledWhat === 'JavaScript',
      };
  };

  window.onload = function () {
    const excuseElement = document.getElementById('excuse');
  const emojiElement = document.getElementById('emoji');

  const { sentence, hasPizza, hasBook, hasGame, hasJavaScript } = generateRandomSentence();

  excuseElement.textContent = sentence;

  emojiElement.textContent = '';

  if (hasPizza) {
    emojiElement.textContent += '🍕';
  }

  if (hasBook) {
    emojiElement.textContent += '📚';
  }

  if (hasGame) {
    emojiElement.textContent += '🎮';
  }

  if (hasJavaScript) {
    emojiElement.textContent += '💻';
  }
};