const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newYearBtn = document.createElement("button");

// Function to reset the position of the no button
function resetNoButtonPosition() {
  noBtn.style.left = "";
  noBtn.style.top = "";
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeeeaaaaaa! I am so happy!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  yesBtn.style.display = "none";
  resetNoButtonPosition();

  // Create and append the new button
  newYearBtn.innerHTML = "Happy new year 2024";
  newYearBtn.className = "new-year-btn";
  wrapper.appendChild(newYearBtn);

  // Add click event to the new button
  newYearBtn.addEventListener("click", () => {
    question.innerHTML = "Happy new year 2024";
    gif.src ="https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif"; // Replace with the actual URL
    newYearBtn.style.display = "none";
    resetNoButtonPosition();
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
