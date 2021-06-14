let inp = document.querySelector('.inp');
let wordsDiv = document.querySelector('.words');
let result = document.querySelector('.result');
let time = document.querySelector('.time');
let btn = document.querySelector('.start');
let wordsCount = 0;
let num;
let interval;
let isStarted = false;
let words = ['level',
  'shave',
  'revoke',
  'quit',
  'sandwich',
  'splurge',
  'promise',
  'problem',
  'damn',
  'bait',
  'tendency',
  'rape',
  'edition',
  'stable',
  'federation',
  'hard',
  'choke',
  'marine',
  'pit',
  'slam',]
let currentWord;
let givenWord;
words.forEach(element => {
  wordsDiv.innerText = element;
  givenWord = element;
});

inp.addEventListener('input', () => {
  currentWord = inp.value;

})
btn.addEventListener('click', () => {
  isStarted = true;
  num = 4;
  setTimeout(() => {
    result.innerText = wordsCount;
  }, 4000);
  interval = setInterval(() => {
    num--;
    time.innerText = num;
    if (num <= 0) {
      clearInterval(interval)
    }
  }, 1000);

})


document.body.addEventListener('keydown', (event) => {
  if (isStarted) {
    if (event.key == " ") {
      event.preventDefault();
      if (currentWord != givenWord) {
        wordsDiv.style.color = "red"
      }
      if (currentWord == givenWord) {
        wordsDiv.style.color = "#000"
        wordsCount++;
        words.pop();
        words.forEach(element => {
          wordsDiv.innerText = element;
          givenWord = element;
        });
        inp.value = '';
      }

    }
  }
})