const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let dateofbirth = document.createElement("p");
  let placeofbrith = document.createElement("p");
  let portrait = document.createElement("img");

  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  dateofbirth.textContent = `Date of Birth: ${prophet.birthdate}`;
  placeofbrith.textContent = `Place of Birth: ${prophet.birthplace}`;

  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - Latter-day President number ${prophet.order}`);
  card.append(h2, dateofbirth, placeofbrith, portrait);
  document.querySelector("div.cards").appendChild(card);
}
