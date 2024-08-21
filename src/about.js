const build_about= (container) => {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = "About";
    description.textContent = "Gregory's pizza is the result of our passion for pizza.";

    container.appendChild(title);
    container.appendChild(description)
};;

export default build_about;