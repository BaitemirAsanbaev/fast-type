let inp = document.querySelector('.inp');
let words = document.querySelector('.words');
let result = document.querySelector('result');

inp.addEventListener('input', (event) => {
    words.innerText = this.value;
})