import { getSubmittedDrinksCounter } from "./script.js";

const sumittedCounter = document.querySelector(".submitted_drinks_counter");

const sumittedDrinksCounter = getSubmittedDrinksCounter();

sumittedCounter.textContent = sumittedDrinksCounter;