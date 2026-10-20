let count = 0;
const counterBtn = document.getElementById('increment-btn');
const counterDisplay = document.getElementById('counter-value');

counterBtn.addEventListener('click', () => {
    count++;
    console.log(count);
    counterDisplay.innerText = count;
});