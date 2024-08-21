import placeholder from "./assets/placeholder.png";

const build_home= (container) => {
    const image = document.createElement("img");
    const title = document.createElement("h1");

    image.src = placeholder;
    title.textContent = "Welcome to Gregory's Pizza!";

    container.appendChild(title);
    container.appendChild(image);
};

export default build_home;