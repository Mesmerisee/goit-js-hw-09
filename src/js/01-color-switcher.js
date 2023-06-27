const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

let setIntervalEl = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
stopBtnEl.setAttribute('disabled', '');

startBtnEl.addEventListener('click', el => {
  el.target.setAttribute('disabled', 'true');
  stopBtnEl.removeAttribute('disabled');
  setIntervalEl = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtnEl.addEventListener('click', el => {
  el.target.setAttribute('disabled', true);
  startBtnEl.removeAttribute('disabled');
  clearInterval(setIntervalEl);
});