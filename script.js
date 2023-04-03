setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(hourHand, hoursRatio)

  const dateWindow = document.querySelector('.date-window');
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const dateString = `${month}/${day}`;
  dateWindow.textContent = dateString;
}

function setRotation(element, rotationRatio){
element.style.setProperty('--rotation', rotationRatio * 360 )
}

setClock();