import "./style.css";
import build_menu from "./menu.js";
import build_home from "./home.js";
import build_about from "./about.js";

const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => {button.classList.remove("selected")});
        e.target.classList.add("selected");
        content.innerHTML = "";

        switch (e.target.textContent) {
            case "Home":
                build_home(content);
                break;
            case "Menu":
                build_menu(content);
                break;
            case "About":
                build_about(content);
            default:
                console.log(e.target.textContent);
                break;
        }
    })
})

buttons[0].click();



