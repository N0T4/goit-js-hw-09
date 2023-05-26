
const body = document.querySelector('body')
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


let TimerId = null;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;

    TimerId = setInterval(event => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
})

btnStop.addEventListener('click', () => {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(TimerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}