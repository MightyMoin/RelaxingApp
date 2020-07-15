var container = document.querySelector('.container');
var text = document.querySelector('.text');
var totalTime = 8000;
var breathingTime = (totalTime / 8) * 3;
var holdTime = totalTime - 2 * breathingTime;

textAnimation();

function textAnimation() {
  text.innerHTML = 'Breathe In!';
  container.classList = 'container grow';
  setTimeout(() => {
    text.innerHTML = 'Hold';
    container.classList = 'container hold';

    setTimeout(() => {
      text.innerHTML = 'Breathe Out!';
      container.classList = 'container shrink';
    }, holdTime);
  }, breathingTime);
}

setInterval(() => {
  textAnimation();
}, totalTime);
