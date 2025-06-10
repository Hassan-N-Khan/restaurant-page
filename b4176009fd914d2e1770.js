import "./styles.css";
import burgerImage from "../images/chickenBurger.jpg";
import { menuItems } from "./menu.js";
import { contactUs } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  content.innerHTML = `
    <div>
      <h1>Los Pollos Hermanos</h1>
      <h2>Today's Special</h2>
      <p>Enjoy our delicious special of the day!</p>
    </div>
    <div>
      <img src="${burgerImage}" alt="Chicken Burger" style="width: 500px; height: auto;" />
    </div>
  `;

  const homeButton = document.getElementById("homeButton");
  const menuButton = document.getElementById("menuButton");
  const contactButton = document.getElementById("contactButton");

  homeButton.addEventListener("click", () => {
    content.innerHTML = `
      <div>
        <h1>Los Pollos Hermanos</h1>
        <h2>Today's Special</h2>
        <p>Enjoy our delicious special of the day!</p>
      </div>
      <div>
        <img src="${burgerImage}" alt="Chicken Burger" style="width: 500px; height: auto;" />
      </div>
    `;
  });

  menuButton.addEventListener("click", () => {
    content.innerHTML = menuItems;
  });

  contactButton.addEventListener("click", () => {
    content.innerHTML = contactUs;
    });
});
