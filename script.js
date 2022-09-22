const btn = document.querySelector(".js-theme");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Ok");
    document.body.classList.toggle("dark");
  });
}
