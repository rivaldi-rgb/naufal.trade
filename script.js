function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Efek ketik otomatis
const teks = "Bangun Masa Depan Finansialmu";
let i = 0;
const target = document.querySelector("h1");
if (target) {
  target.textContent = "";
  function ketik() {
    if (i < teks.length) {
      target.textContent += teks.charAt(i);
      i++;
      setTimeout(ketik, 100);
    }
  }
  ketik();
}
