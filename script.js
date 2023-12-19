const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  var newText = "Please don't hate me🥺 <br/>  I'm sorry🥺 <br/> I❤️U <p/>";
  question.innerHTML = "<p>" + newText + "</p>";
  gif.src =
    "https://media3.giphy.com/media/l0Iy8m9yd2pBk5NXW/giphy.gif?cid=ecf05e47oc6jq183ua00iz3blgufbyy4tjln88p2lzupmdwi&ep=v1_stickers_search&rid=giphy.gif&ct=s";
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