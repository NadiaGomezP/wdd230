
function getSubmittedDrinksCounter() {
    const submittedDrinksCounter = localStorage.getItem("drinks-counter");
  
    if (submittedDrinksCounter) {
      return submittedDrinksCounter;
    }
    return 0;
  }
  
  function addSumittedDrinksCounter() {
    let submittedDrinksCounter = localStorage.getItem("drinks-counter");
  
    if (submittedDrinksCounter) {
      const add = parseInt(submittedDrinksCounter) + 1;
  
      localStorage.setItem("drinks-counter", add);
    } else {
      localStorage.setItem("drinks-counter", 1);
    }
  }
  
  export { getSubmittedDrinksCounter, addSumittedDrinksCounter };
