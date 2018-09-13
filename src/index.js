const form = document.querySelector("form");
const textArea = document.querySelector("#areaText");
let lastTweet = document.querySelector(".dummy");
const counter = document.querySelector(".counter");


textArea.addEventListener("change", function(event) {
  const tweet = document.createElement("li");
  const tweetText = document.createTextNode(event.target.value);
  tweet.appendChild(tweetText);
  const parentNode = document.querySelector(".timeLine");
  lastTweet = parentNode.insertBefore(tweet, lastTweet);
  form.reset();
});

textArea.addEventListener("input", function(event) {
  counter.textContent = event.target.value.length;
  if (counter.textContent > 280) counter.style.color = "red";
  if (counter.textContent <= 280) counter.style.color = "black";
  }
);



form.addEventListener("submit", function(event) {
  event.preventDefault();
  counter.textContent = 0;
});






// form.forEach( item => {
//   item.addEventListener("submit", function() {
//     item.preventDefault();
//   })
// });
