'use strict';

/**
 * Add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Header active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

reveal();
addEventOnElem(window, "scroll", reveal);

/**
 * Fitness Tracker JavaScript code
 */
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const activityLevelSelect = document.getElementById('activity-level');
const calculateBmiButton = document.getElementById('calculate-bmi');
const calculateCaloriesButton = document.getElementById('calculate-calories');
const bmiResultElement = document.getElementById('bmi-result');
const caloriesResultElement = document.getElementById('calories-result');

// Function to calculate BMI
function calculateBmi(weight, height) {
  const bmi = weight / (height / 100) ** 2;
  return bmi.toFixed(2);
}

// Function to calculate daily calories
function calculateDailyCalories(weight, height, age, activityLevel) {
  let dailyCalories;
  switch (activityLevel) {
    case 'sedentary':
      dailyCalories = 66 + (6.2 * weight) + (12.7 * height) - (6.8 * age);
      break;
    case 'lightly-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.375;
      break;
    case 'moderately-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.55;
      break;
    case 'very-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.725;
      break;
    case 'extra-active':
      dailyCalories = (66 + (6.2 * weight) + (12.7 * height) - (6.8 * age)) * 1.9;
      break;
    default:
      dailyCalories = 0;
      break;
  }
  return dailyCalories.toFixed(2);
}

// Event listeners for calculate buttons
calculateBmiButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = calculateBmi(weight, height);
  bmiResultElement.textContent = `Your BMI is: ${bmi}`;
});

calculateCaloriesButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const age = parseFloat(ageInput.value);
  const activityLevel = activityLevelSelect.value;
  const dailyCalories = calculateDailyCalories(weight, height, age, activityLevel);
  caloriesResultElement.textContent = `Your daily calories are: ${dailyCalories}`;
});


document.getElementById("get-diet-recommendation").addEventListener("click", function() {
  // Capture input values
  const vitaminD = document.getElementById("vitamin-d").value;
  const vitaminB12 = document.getElementById("vitamin-b12").value;
  const iron = document.getElementById("iron").value;
  const calcium = document.getElementById("calcium").value;

  // Initialize recommendations
  let recommendations = "";

  // Process the data and generate recommendations
  if (vitaminD < 20) {
      recommendations += "<p>Increase your Vitamin D intake with foods like:</p><ul>";
      recommendations += "<li>Fish like salmon and mackerel</li>";
      recommendations += "<li>Eggs (especially the yolk)</li>";
      recommendations += "<li>Fortified foods like milk or yogurt</li>";
      recommendations += "<li>Sunlight exposure is also important!</li>";
      recommendations += "</ul>";
  } else {
      recommendations += "<p>Your Vitamin D levels are adequate.</p>";
  }

  if (vitaminB12 < 250) {
      recommendations += "<p>Consider consuming more Vitamin B12-rich foods such as:</p><ul>";
      recommendations += "<li>Dairy products (milk, paneer, yogurt)</li>";
      recommendations += "<li>Eggs</li>";
      recommendations += "<li>Fortified cereals</li>";
      recommendations += "<li>Non-vegetarian options like chicken and fish</li>";
      recommendations += "</ul>";
  } else {
      recommendations += "<p>Your Vitamin B12 levels are adequate.</p>";
  }

  if (iron < 60) {
      recommendations += "<p>Include more iron-rich foods in your diet, such as:</p><ul>";
      recommendations += "<li>Red meat (mutton, beef)</li>";
      recommendations += "<li>Pulses (dal, chickpeas, kidney beans)</li>";
      recommendations += "<li>Leafy greens (palak, methi)</li>";
      recommendations += "<li>Nuts and seeds (pumpkin seeds, cashews)</li>";
      recommendations += "<li>Fortified cereals</li>";
      recommendations += "</ul>";
  } else {
      recommendations += "<p>Your iron levels are adequate.</p>";
  }

  if (calcium < 8.5) {
      recommendations += "<p>Incorporate more calcium-rich foods like:</p><ul>";
      recommendations += "<li>Dairy products (milk, cheese, yogurt)</li>";
      recommendations += "<li>Leafy greens (sarson, kale)</li>";
      recommendations += "<li>Fortified foods (fortified soy milk)</li>";
      recommendations += "<li>Fish with bones (sardines)</li>";
      recommendations += "<li>Tofu</li>";
      recommendations += "</ul>";
  } else {
      recommendations += "<p>Your calcium levels are adequate.</p>";
  }

  // Display the results
  document.getElementById("diet-results").innerHTML = recommendations;
});
  // Get the theme toggle button and body element
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved user preference in localStorage and apply it
  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      themeToggleBtn.querySelector('ion-icon').setAttribute('name', 'sunny-outline'); // Change icon to 'sunny' for dark mode
  } else {
      themeToggleBtn.querySelector('ion-icon').setAttribute('name', 'moon-outline'); // Default icon for light mode
  }

  // Add event listener for the theme toggle button
  themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode'); // Toggle the dark mode class

      // Save the current theme preference in localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark'); // Save dark mode preference
          themeToggleBtn.querySelector('ion-icon').setAttribute('name', 'sunny-outline'); // Change icon to 'sunny'
      } else {
          localStorage.setItem('theme', 'light'); // Save light mode preference
          themeToggleBtn.querySelector('ion-icon').setAttribute('name', 'moon-outline'); // Change icon to 'moon'
      }
  });
  document.getElementById('blood-test-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const vitaminD = parseFloat(document.getElementById('vitamin-d').value);
    const vitaminB12 = parseFloat(document.getElementById('vitamin-b12').value);
    const iron = parseFloat(document.getElementById('iron').value);
    const calcium = parseFloat(document.getElementById('calcium').value);

    let recommendations = '';

    // Simple recommendation logic based on input levels
    if (vitaminD < 20) {
        recommendations += '<p>Increase your Vitamin D intake. Consider foods like fatty fish, egg yolks, and fortified dairy products.</p>';
    }
    if (vitaminB12 < 300) {
        recommendations += '<p>Increase your Vitamin B12 intake. Include more meat, fish, dairy, and fortified cereals in your diet.</p>';
    }
    if (iron < 60) {
        recommendations += '<p>Consider adding iron-rich foods such as red meat, beans, lentils, and spinach.</p>';
    }
    if (calcium < 8.5) {
        recommendations += '<p>Boost your calcium intake with dairy products, leafy greens, and fortified foods.</p>';
    }

    if (recommendations === '') {
        recommendations = '<p>Your vitamin and mineral levels are within normal ranges. Keep up the good work!</p>';
    }

    document.getElementById('diet-results').innerHTML = recommendations;
});


// Include Chart.js library in your HTML
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.getElementById('blood-test-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const vitaminD = parseFloat(document.getElementById('vitamin-d').value);
  const vitaminB12 = parseFloat(document.getElementById('vitamin-b12').value);
  const iron = parseFloat(document.getElementById('iron').value);
  const calcium = parseFloat(document.getElementById('calcium').value);

  // Calculate average health score based on vitamin levels
  const healthScore = (vitaminD + vitaminB12 + iron + calcium) / 4;
  const ctx = document.getElementById('health-speedometer').getContext('2d');

  // Clear previous chart
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Create a speedometer chart
  const speedometer = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Health Score'],
          datasets: [{
              label: 'Health Score',
              data: [healthScore, 100 - healthScore],
              backgroundColor: ['#4caf50', '#e0e0e0'],
              borderWidth: 0,
          }]
      },
      options: {
          responsive: false,
          cutout: '70%', // Adjust cutout for a speedometer effect
          plugins: {
              tooltip: {
                  enabled: false
              }
          }
      }
  });

  // Display health status based on score
  let healthStatus = '';
  if (healthScore < 20) {
      healthStatus = 'Poor';
  } else if (healthScore < 50) {
      healthStatus = 'Fair';
  } else if (healthScore < 80) {
      healthStatus = 'Good';
  } else {
      healthStatus = 'Excellent';
  }
  document.getElementById('health-status').innerText = healthStatus;
});


