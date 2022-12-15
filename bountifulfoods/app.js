function openDrawerMenu(){
    let x = document.getElementById("mainNavBar");
    if (x.className === "navBar"){
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = oLastModif;

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

