function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

const typing = document.getElementById("typing");
if (typing) {
  let words = ["Bangun Masa Depan Finansialmu", "Trading Cerdas Bersama Kami", "Sinyal, Bot, Edukasi!"];
  let i = 0;
  setInterval(() => {
    typing.textContent = words[i];
    i = (i + 1) % words.length;
  }, 2500);
}

// Tombol nav toggle (untuk mobile)
const navToggle = document.getElementById("navToggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
  });
}

// WhatsApp
function openWhatsApp() {
  window.open("https://wa.me/6281234567890", "_blank");
}
