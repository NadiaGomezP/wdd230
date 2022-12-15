import data from "./fetchFruits.js";

const setIngredients = async () => {
  const fruits = data;

  fruits.forEach((fruit) => {
    const ingredients1 = document.querySelector("#ingredient1");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients1.append(option);
  });

  fruits.forEach((fruit) => {
    const ingredients2 = document.querySelector("#ingredient2");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients2.append(option);
  });

  fruits.forEach((fruit) => {
    const ingredients3 = document.querySelector("#ingredient3");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients3.append(option);
  });
};

setIngredients();