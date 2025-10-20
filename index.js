document.getElementById("dateText").textContent = "23.10.2025";

const confettiContainer = document.getElementById("confetti-container");
function makeConfetti() {
  const colors = ["#ff4081", "#ffa500", "#7ef0c7", "#7cc8ff", "#c59bff"];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = Math.random() * 100 + "%";
    el.style.top = Math.random() * 20 - 10 + "%";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    el.style.opacity = "1";
    el.style.width = 6 + Math.random() * 12 + "px";
    el.style.height = 8 + Math.random() * 18 + "px";
    confettiContainer.appendChild(el);
    animateConfetti(el);
  }
}
function animateConfetti(el) {
  const dur = 2000 + Math.random() * 2000;
  el.animate(
    [
      {
        transform: el.style.transform + " translateY(0px) rotate(0deg)",
        opacity: 1,
      },
      {
        transform:
          el.style.transform +
          " translateY(" +
          (300 + Math.random() * 300) +
          "px) rotate(720deg)",
        opacity: 0,
      },
    ],
    { duration: dur, easing: "cubic-bezier(.2,.8,.2,1)" }
  );
  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, dur + 50);
}
const citati = document.querySelector(".citati");
citati.style.display = "none";
function switchFunction() {
  const badges = document.querySelector(".badges");
  const mssg = document.querySelector(".message");

  const isHidden = badges.style.display === "none";

  citati.style.display = 'flex';

  badges.style.display = isHidden ? "" : "none";
  mssg.style.display = isHidden ? "" : "none";
  citati.style.display = isHidden ? "none" : "";
}
document.getElementById("celebrateBtn").addEventListener("click", makeConfetti);
document
  .getElementById("downloadBtn")
  .addEventListener("click", switchFunction);
