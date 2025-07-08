// ... sebelumnya tetap ...

// Dummy login logic
function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "admin") {
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah.");
  }
}

// Contoh render artikel blog
const blogData = [
  { title: "Cara Memulai Trading untuk Pemula", content: "Pelajari dasar-dasar analisa teknikal dan fundamental..." },
  { title: "Apa Itu Leverage dalam Trading?", content: "Leverage memungkinkan Anda mengontrol posisi besar..." }
];

const blogContainer = document.getElementById("blogContainer");
if (blogContainer) {
  blogData.forEach(post => {
    const div = document.createElement("div");
    div.className = "blog-card";
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    blogContainer.appendChild(div);
  });
}
