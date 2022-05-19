console.log("Hello world");

const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Pseudocode
// Get the value we want to animate and transform (origin = 0)
// animate the value with random Numbers
// after a specific time this value is changed into the target value.
// The target value is either an integer or a float following by a "k"

// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//   var count = document.querySelectorAll(".count");
//   count.innerHTML = ++upto;
//   if (upto === 1000) {
//     clearInterval(counts);
//   }
// }
