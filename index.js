let inp = document.querySelector('.inp');
let words = document.querySelector('.words');
let result = document.querySelector('result');
let correntWord;
let givenWord;
words.innerHTML = givenWord;
inp.addEventListener('input', () => {
    correntWord = inp.value;
})
document.body.addEventListener('keydown', () => {
    if (correntWord == givenWord){

    }
})