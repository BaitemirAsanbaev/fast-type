let inp = document.querySelector('.inp');
let wordsDiv = document.querySelector('.words');
let result = document.querySelector('result');
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
let givenWord
words.forEach(element => {
    wordsDiv.innerText = element;
    givenWord = element;
});
inp.addEventListener('input', () => {
    currentWord = inp.value;
})
document.body.addEventListener('keydown', (event) => {
    if(event.key == " "){
        event.preventDefault();
        if (currentWord == givenWord){
            words.pop();
            words.forEach(element => {
                wordsDiv.innerText = element;
                givenWord = element;
            });
            inp.value = '';
        }
    }
})