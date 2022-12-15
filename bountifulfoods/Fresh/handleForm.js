import openModal from "./handleModal.js";
import data from "./fetchFruits.js";
import { addSumittedDrinksCounter } from "./script.js";

const form = document.querySelector("#fresh-form");

const getTotalCarbohydrates = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  let totalCarbohydrates = 0;

  fruits.forEach((element) => {
    totalCarbohydrates += element.nutritions.carbohydrates;
  });
  return Math.trunc(totalCarbohydrates * 100) / 100;
};

const getTotalProtein = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  let totalProtein = 0;

  fruits.forEach((element) => {
    totalProtein += element.nutritions.protein;
  });

  return Math.trunc(totalProtein * 100) / 100;
};

const getTotalfat = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  let totalFat = 0;

  fruits.forEach((element) => {
    totalFat += element.nutritions.fat;
  });

  return Math.trunc(totalFat * 100) / 100;
};

const getTotalCalories = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  let totalCalories = 0;

  fruits.forEach((element) => {
    totalCalories += element.nutritions.calories;
  });

  return Math.trunc(totalCalories * 100) / 100;
};

const getTotalSugar = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  let totalSugar = 0;

  fruits.forEach((element) => {
    totalSugar += element.nutritions.sugar;
  });

  return Math.trunc(totalSugar * 100) / 100;
};

const setModalContent = ({
  firstName,
  email,
  PhoneNumber,
  ingredient1,
  ingredient2,
  ingredient3,
  specialInstructions,
}) => {
  // Get inputs value
  document.querySelector("#firstNameModal").textContent = firstName;

  document.querySelector("#emailModal").textContent = email;

  document.querySelector("#PhoneNumberModal").textContent = PhoneNumber;

  document.querySelector("#ingredient1Modal").textContent = ingredient1;

  document.querySelector("#ingredient2Modal").textContent = ingredient2;

  document.querySelector("#ingredient3Modal").textContent = ingredient3;

  document.querySelector("#specialInstructionsModal").textContent =
    specialInstructions;

  document.querySelector("#orderDateModal").textContent =
    new Date().toDateString();

  const totalCarbohydrates = getTotalCarbohydrates(
    ingredient1,
    ingredient2,
    ingredient3
  );

  const totalProtein = getTotalProtein(ingredient1, ingredient2, ingredient3);

  const totalFat = getTotalfat(ingredient1, ingredient2, ingredient3);

  const totalSugar = getTotalSugar(ingredient1, ingredient2, ingredient3);

  const totalCalories = getTotalCalories(ingredient1, ingredient2, ingredient3);

  document.querySelector("#totalcarbohydratesModal").textContent =
    totalCarbohydrates;

  document.querySelector("#totalProteinModal").textContent = totalProtein;

  document.querySelector("#totalFatModal").textContent = totalFat;

  document.querySelector("#totalSugarModal").textContent = totalSugar;

  document.querySelector("#totalCaloriesModal").textContent = totalCalories;

  addSumittedDrinksCounter();

  openModal();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get inputs value
  const firstName = document.querySelector("#firstName").value;

  const email = document.querySelector("#email").value;

  const PhoneNumber = document.querySelector("#PhoneNumber").value;

  const ingredient1 = document.querySelector("#ingredient1").value;

  const ingredient2 = document.querySelector("#ingredient2").value;

  const ingredient3 = document.querySelector("#ingredient3").value;

  const specialInstructions = document.querySelector(
    "#specialInstructions"
  ).value;

  setModalContent({
    firstName,
    email,
    PhoneNumber,
    ingredient1,
    ingredient2,
    ingredient3,
    specialInstructions,
  });
});