const html = document.documentElement;
const btn = document.getElementById("themeBtn");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // troca o ícone (primeiro nó de texto do botão)
  btn.firstChild.textContent = theme === "dark" ? "☀️" : "🌙";
}

const saved = localStorage.getItem("theme");
if (saved === "dark" || saved === "light") setTheme(saved);
else setTheme("light");

btn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});
