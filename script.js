
const boldWords = document.querySelectorAll("strong");
function highlight() {
  boldWords.forEach(word => {
    word.style.color = "rgb(0, 128, 0)"; // green
  });
}

function return_normal() {
  boldWords.forEach(word => {
    word.style.color = "rgb(0, 0, 0)"; // black
  });
}
