// Create a heard Function to click and update 1++

var heartCount = 0;
var hearts = document.querySelectorAll(".heart-btn");
var updateHeart = document.getElementById("heard-increase");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    heartCount++;
    updateHeart.innerText = heartCount;
  });
}
let coinCount = 100;
const CallButton = document.querySelectorAll(".call-btn");
const updateCoinBtn = document.getElementById("coin-btn");
const nationalName = document.getElementById("national-service").innerText;
const nationalNumber = document.getElementById("national-number").innerText;
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

for (let j = 0; j < CallButton.length; j++) {
  CallButton[j].addEventListener("click", function () {
    //  decrease The Coin Value
    alert("Calling " + nationalName + " at " + nationalNumber);
    coinCount = coinCount - 20;
    updateCoinBtn.innerText = coinCount;
    if (coinCount < 0) {
      alert("Not enough coins to make a call!");
      updateCoinBtn.innerText = "0";
      return;
    }
    // Add history
    var li = document.createElement("li");
    li.innerText = nationalName + " - " + nationalNumber;
    historyList.appendChild(li);
  });
}
// Clear History
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
