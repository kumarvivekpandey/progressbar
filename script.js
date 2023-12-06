// Throttle function to limit the rate of execution
function throttle(func, delay) {
  let lastExecution = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecution >= delay) {
      func.apply(this, args);
      lastExecution = now;
    }
  };
}

var progress = document.querySelector('.progress');
var progressLabel = document.querySelector('.progressLabel');
var startButton = document.querySelector('.start');

// Throttle the handleClick function to be executed once per second
const throttledHandleClick = throttle(handleClick, 1000);

startButton.addEventListener('click', () => {
  throttledHandleClick();
});

function handleClick() {
  let value = 0;
  let interval;

  interval = setInterval(() => {
    value += 10;
    progress.style.width = `${value}%`;
    progressLabel.innerText = `${value}%`;

    // Clear the interval when the value reaches 100
    if (value >= 100) {
      clearInterval(interval);
    }
  }, 1000);
}
