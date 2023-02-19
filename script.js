const btnBurger = document.querySelector("#btn-burger"),
  dash = document.querySelector(".dash"),
  sidebar = document.querySelector("#sidebar"),
  sembunyi = document.querySelectorAll(".sembunyi"),
  cc = document.querySelector(".cc");

// ketika btnBurger diklik
btnBurger.addEventListener("click", function () {
  dash.classList.toggle("hidden");
  sidebar.classList.toggle("w-60");
  cc.classList.toggle("opacity-0");

  sembunyi.forEach((sembunyi) => {
    if (sembunyi.classList.contains("hidden")) {
      setTimeout(() => {
        sembunyi.classList.toggle("hidden");
      }, 200);
    } else {
      sembunyi.classList.toggle("hidden");
    }
  });
});
