var progress = document.querySelector('.progress');
var progressLabel = document.querySelector('.progressLabel');
var startButton = document.querySelector('.start');

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

startButton.addEventListener('click', () => {
  handleClick();
});
