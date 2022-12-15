const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function fetchFruits() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("can not fetch fruits");
    }
  } catch (error) {
    console.log(error);
  }
}

const data = await fetchFruits();

export default data;