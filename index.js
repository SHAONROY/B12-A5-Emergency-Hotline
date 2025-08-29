// Create a heard Function to click and update 1++

let heartCount = 0;
const hearts = document.querySelectorAll(".heart-btn");
const updateHeart = document.getElementById("heard-increase");
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
    if (coinCount <= 0) {
      alert(
        "Not enough coins to make a call! you need at least 20 Coin to make this Call"
      );
      updateCoinBtn.innerText = "0";
      return;
    }
    alert("Calling " + nationalName + " at " + nationalNumber);
    coinCount = coinCount - 20;
    updateCoinBtn.innerText = coinCount;

    // Get current local time
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Create History Section
    const outerDiv = document.createElement("div");

    outerDiv.classList.add("history-parent");

    const innerDiv1 = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.innerText = nationalName;

    h4.classList.add("national-name-element");
    innerDiv1.appendChild(h4);

    const p1 = document.createElement("p");
    p1.innerText = nationalNumber;

    p1.classList.add("national-number-element");
    innerDiv1.appendChild(p1);

    outerDiv.appendChild(innerDiv1);

    const innerDiv2 = document.createElement("div");
    const p2 = document.createElement("p");
    p2.innerText = timeString;

    p2.classList.add("current-time-element");
    innerDiv2.appendChild(p2);

    outerDiv.appendChild(innerDiv2);

    let container = document.getElementById("history-list");
    container.appendChild(outerDiv);
  });
}
// Clear History
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
//  Add Copy Button Function
let copyCount = 0;

const copyButton = document.querySelectorAll(".copy-button");

const updateCopyElement = document.getElementById("copy-element");

for (let k = 0; k < copyButton.length; k++) {
  copyButton[k].addEventListener("click", function () {
    const nationalNumber =
      document.querySelectorAll(".hotline-number")[k].innerText;
    navigator.clipboard.writeText(nationalNumber);
    alert("The Number has Copied: " + nationalNumber);
    copyCount++;
    updateCopyElement.innerText = copyCount;
  });
}
