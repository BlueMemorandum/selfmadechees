document.addEventListener("DOMContentLoaded", () => {
  const happyClientsCounter = document.getElementById("happy-clients");
  const robotsSoldCounter = document.getElementById("robots-sold");

  // Function to animate the counters
  function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100; // Adjust speed by changing denominator

    const updateCounter = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(updateCounter);
      }
      element.textContent = Math.ceil(count);
    }, 20);
  }

  // Start counters
  animateCounter(happyClientsCounter, 1200); // Example target
  animateCounter(robotsSoldCounter, 2);   // Example target
});
