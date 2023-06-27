import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minsEl = document.querySelector('[data-minutes]');
const secsEl = document.querySelector('[data-seconds]');

let timerEl = null;

btnEl.disabled = true;

flatpickr(dateEL, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      Notiflix.Notify.success('Start your countdown!');
    }
  },
});

btnEl.addEventListener('click', onClick);

function onClick() {
  btnEl.disabled = true;
  dateEl.disabled = true;
  timerEL = setInterval(() => {
    const datePicked = new Date(date.value);
    const timeLeft = datePicked - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minsEl.textContent = addLeadingZero(minutes);
    secsEl.textContent = addLeadingZero(seconds);
  }, 1000);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
