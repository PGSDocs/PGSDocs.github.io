
let countdownNumber = 5;
const countdownElement = document.querySelector(".countdown");

function updateCountdown() {
  countdownNumber--;
  countdownElement.textContent = countdownNumber;
  if (countdownNumber === 0) {
    window.location.href = getNewURL();
  }
}

function getNewURL() {
  let newURL = "https://pgsdocs.netlify.app" + window.location.pathname;
  document.getElementById("redirect-link").href = newURL;
  return newURL;
}

setTimeout(() => {
  window.location.href = getNewURL();
}, 5000);

setInterval(updateCountdown, 1000);