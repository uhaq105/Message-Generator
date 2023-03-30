let randomQuote = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Strive not to be a success, but rather to be of value.",
  "The best way to predict the future is to create it.",
  "Don't wait for opportunity. Create it.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "The only way to do great work is to love what you do.",
  "Believe in the power of your dreams.",
  "Dream big and dare to fail.",
  "Be the change you wish to see in the world.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The best way to find yourself is to lose yourself in the service of others.",
];

const myButton = document.getElementById("myBtn");
const mySpan = document.getElementById("mySpan");

function getRandomItem() {
  let randomIndex = Math.floor(Math.random() * randomQuote.length);
  return randomQuote[randomIndex];
}

myButton.addEventListener("click", () => {
  let randomItem = getRandomItem();
  mySpan.innerHTML = randomItem;
});
