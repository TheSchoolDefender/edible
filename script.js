let currentQuestion = 1;
let answers = {};

function nextQuestion(questionNumber, answer) {
  answers[questionNumber] = answer;
  gsap.to(`#q${questionNumber}`, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(`#q${questionNumber}`).style.display = 'none';
      if (questionNumber < 5) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        showResult();
      }
    },
  });
}

function showQuestion(questionNumber) {
  let question = document.querySelector(`#q${questionNumber}`);
  question.style.display = 'block';
  gsap.fromTo(question, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });

  if (questionNumber >= 3) {
    let slider = document.querySelector(`#q${questionNumber}-slider`);
    let value = document.querySelector(`#q${questionNumber}-value`);
    value.textContent = slider.value;
  }
}

function updateSliderValue(questionNumber, value) {
  document.querySelector(`#q${questionNumber}-value`).textContent = value;
}

function showResult() {
  let score = calculateScore();
  let rating = getRating(score);
  let result = document.querySelector('#result');
  result.innerHTML = `<h2>Your Edible Rating</h2><p>You are a ${rating} chef!</p>`;

  let recommendedDishes = document.querySelector('#recommended-dishes');
  recommendedDishes.innerHTML = `
        <div class="dish-box">
            <h3>Simple Pasta</h3>
            <p>A quick and easy pasta dish perfect for beginners!</p>
            <button class="nav-btn" onclick="showRecipe('pasta')">View Recipe</button>
        </div>
        <div class="dish-box">
            <h3>Grilled Cheese</h3>
            <p>A classic comfort food that's simple to make.</p>
            <button class="nav-btn" onclick="showRecipe('grilled-cheese')">View Recipe</button>
        </div>
        <div class="dish-box">
            <h3>Fruit Smoothie</h3>
            <p>A refreshing drink that's both healthy and delicious.</p>
            <button class="nav-btn" onclick="showRecipe('smoothie')">View Recipe</button>
        </div>
    `;

  gsap.to('#quiz', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector('#quiz').style.display = 'none';
    },
  });

  gsap.to('#result-container', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.fromTo(
    '.dish-box',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, delay: 0.5 }
  );
}

function calculateScore() {
  let score = 0;
  if (answers[1] === 'yes') score += 3;
  if (answers[2] === 'yes') score += 3;
  score += parseInt(answers[3]) + parseInt(answers[4]) + parseInt(answers[5]);
  return score;
}

function getRating(score) {
  if (score < 15) return 'Aspiring';
  if (score < 25) return 'Promising';
  return 'Master';
}

function showSection(sectionId) {
  document.querySelectorAll('main > div').forEach((div) => (div.style.display = 'none'));
  document.getElementById(sectionId).style.display = 'block';
  if (sectionId === 'recipes') {
    showRecipes();
  }
}

function showRecipes() {
  showResult(); 
}

function showRecipe(recipeId) {
  let recipesDiv = document.getElementById('recipes');
  let recipeContent = '';

  switch (recipeId) {
    case 'pasta':
      recipeContent = `
                <div class="recipe">
                    <h3>Simple Pasta</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        <li>Water</li>
                        <li>Pot</li>
                        <li>Saucepan</li>
                        <li>Marinara or Tomato Passata (paste)</li>
                        <li>Spaghetti</li>
                    </ul>
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Add water to a pot and wait for it to boil</li>
                        <li>Add some spaghetti, it doesn't matter how much</li>
                        <li>Cook until the spaghetti is soft and transfer to the saucepan</li>
                        <li>Add the tomato paste and mix repeatedly until spaghetti is covered in the tomato</li>
                        <li>Empty into a bowl and eat</li>
                    </ol>
                </div>
            `;
      break;
    case 'grilled-cheese':
      recipeContent = `
                <div class="recipe">
                    <h3>Grilled Cheese</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        <li>2 slices of bread</li>
                        <li>2-3 slices of cheese</li>
                        <li>Butter</li>
                    </ul>
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Butter one side of each slice of bread</li>
                        <li>Place cheese between the non-buttered sides of the bread</li>
                        <li>Heat a pan over medium heat</li>
                        <li>Place the sandwich in the pan, butter side down</li>
                        <li>Cook until golden brown, then flip and cook the other side</li>
                        <li>Remove from pan, let cool slightly, then enjoy!</li>
                    </ol>
                </div>
            `;
      break;
    case 'smoothie':
      recipeContent = `
                <div class="recipe">
                    <h3>Fruit Smoothie</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        <li>1 banana</li>
                        <li>1 cup mixed frozen berries</li>
                        <li>1 cup milk (or alternative)</li>
                        <li>1 tablespoon honey (optional)</li>
                    </ul>
                    <h4>Instructions:</h4>
                    <ol>
                        <li>Add all ingredients to a blender</li>
                        <li>Blend until smooth</li>
                        <li>Pour into a glass and enjoy!</li>
                    </ol>
                </div>
            `;
      break;
  }

  recipesDiv.innerHTML =
    recipeContent +
    '<button class="nav-btn back-btn" onclick="showRecipes()">Back to Recipes</button>';

  gsap.fromTo(
    '.recipe',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
}

document.addEventListener('DOMContentLoaded', function() {
  // Add an onclick function for the "Done" button in question 5
  const q5Slider = document.querySelector('#q5-slider');
  if (q5Slider) {
    q5Slider.addEventListener('change', () => {
      let value = q5Slider.value;
      nextQuestion(5, value);
    });
  } else {
    console.error("Element with ID #q5-slider not found.");
  }

  // Start the quiz
  showQuestion(1);

  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
        image: { src: 'img/github.svg', width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});
