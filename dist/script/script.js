function toogleMenu() {
  document.getElementById("menu-list").classList.toggle("hidden");
  document.getElementById("menu-show").classList.toggle("hidden");
  document.getElementById("menu-hide").classList.toggle("hidden");
}

document.getElementById("menu-show").addEventListener("click", () => {
  toogleMenu();
});

document.getElementById("menu-hide").addEventListener("click", () => {
  toogleMenu();
});
