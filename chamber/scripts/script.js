let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let fulldate =
    dayName +
    ", " +
    monthName +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear();

  document.querySelector(".currentyear").innerHTML = d.getFullYear();

  let oLastModif = new Date(document.lastModified);
  document.getElementById("lastModified").textContent = oLastModif;

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const ahora = hoy.toDateString();

    document.getElementById("today-date").textContent = ahora;


  function openDrawerMenu(){
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar"){
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }
  
  
    let n = new Date();
    let q = n.getDay();
  
    if (q === 1 || q === 2) {
      document.getElementById("announcement").style.display="block";
    }
    else{
      document.getElementById("announcement").style.display="none";
    }

    const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});


const countDisplay = document.querySelector(".visits");
const lastVisit = Number(window.localStorage.getItem("last-visit"));


  const day= Date.now();

  let difference = day - lastVisit;

  let roundedDays = (difference/1000/60/60/24).toFixed(0);

  localStorage.setItem("last-visit", day);

    
	countDisplay.textContent = roundedDays

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");

  
  gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
  
  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
  }
  

const requestURL = './json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const cards = jsonObject["cards"];
    cards.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let phonenumber = document.createElement("p");
  let portrait = document.createElement("img");

  h2.textContent = `${cards.name}`;
  address.textContent = `Address: ${cards.address}`;
  phonenumber.textContent = `Phone number: ${cards.phonenumber}`;

  portrait.setAttribute("src", cards.imageurl);
  portrait.setAttribute("alt", `Information of ${cards.name}`);
  card.append(h2, address, phonenumber, portrait);
  document.querySelector("article.cards").appendChild(card);
}