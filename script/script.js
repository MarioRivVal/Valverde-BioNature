"use-strict";

// DOM`S  ELEMENTS

const navList = document.querySelector(".navigation_list");
const navCheckBtn = document.querySelector(".navigation_checkbox");

// EVENTS

navList.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("navigation_link")) {
    const sect = e.target.getAttribute("href");
    document.querySelector(sect).scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      navCheckBtn.checked = false;
    }, 300);
  }
});

const test = "hola";
