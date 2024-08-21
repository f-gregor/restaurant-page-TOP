import placeholder from "./assets/placeholder.png";

class Entry {
    constructor (name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

const build_menu = (container) => {
    const menu = [
        "Pizzas",
        new Entry("Margherita", "Tomato sauce, mozzarella, basil leaves, parmesan"),
        new Entry("Prosciutto cotto", "Tomato sauce, mozzarella, cooked ham"),
        new Entry("Prosciutto crudo", "Tomato sauce, mozzarella, raw ham"),
        "Special Pizzas",
        new Entry("Cent'anni", "Tomato sauce, mozzarella, cooked ham, ricotta cheese, basil pesto"),
        new Entry("Intenso inverno", "Tomato sauce, mozzarella, kale, sausage, pecorino cheese"),
        new Entry("Bosco delle meraviglie", "Mozzarella, stracciatella, coppa, hazelnuts, raspberries and blueberries"),
        "Desserts",
        new Entry("Tiramisù", "Savoiardi, coffee, mascarpone cream, dark chocolate")
    ]

    for(let item of menu) {
        if (item instanceof Entry) {
            const entry = document.createElement("div");
            const image = document.createElement("img");
            const name = document.createElement("h2");
            const ingredients = document.createElement("p");

            image.src = placeholder;
            name.textContent = item.name;
            ingredients.textContent = item.ingredients;

            entry.classList.add("entry");
            entry.appendChild(image);
            entry.appendChild(name);
            entry.appendChild(ingredients);
            container.appendChild(entry);

        } else {
            const separator = document.createElement("h1");
            separator.textContent = item;
            container.appendChild(separator);
        }
    }         
};

export default build_menu;