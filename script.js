let currentQuestion = 1;
let answers = {};
let recipes = [
  {
    id: 'pasta',
    name: 'Simple Pasta',
    description: 'Very nice pasta to eat at 3 am',
    ingredients: [
      'Water',
      'Pot',
      'Saucepan',
      'Marinara or Tomato Passata (paste)',
      'Spaghetti'
    ],
    instructions: [
      'Add water to a pot and wait for it to boil',
      'Add some spaghetti, it doesn\'t matter how much',
      'Cook until the spaghetti is soft and transfer to the saucepan',
      'Add the tomato paste and mix repeatedly until spaghetti is covered in the tomato',
      'Empty into a bowl and eat'
    ],
    image: 'assets/Pasta.jpeg'
  },
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    description: 'I love grilled cheese, you should too. CHEESE',
    ingredients: [
      '2 slices of bread',
      '2-3 slices of cheese',
      'Butter'
    ],
    instructions: [
      'Butter one side of each slice of bread',
      'Place cheese between the non-buttered sides of the bread',
      'Heat a pan over medium heat',
      'Place the sandwich in the pan, butter side down',
      'Cook until golden brown, then flip and cook the other side',
      'Remove from pan, let cool slightly, then enjoy!'
    ],
    image: 'assets/Grilledcheese.jpeg'
  },
  {
    id: 'smoothie',
    name: 'Fruit Smoothie',
    description: 'Fruit Smoothie, more like Loot...er...Doozy. Yeah, Loot Doozy',
    ingredients: [
      '1 banana',
      '1 cup mixed frozen berries',
      '1 cup milk (or alternative)',
      '1 tablespoon honey (optional)'
    ],
    instructions: [
      'Add all ingredients to a blender',
      'Blend until smooth',
      'Pour into a glass and enjoy!'
    ],
    image: 'assets/FruitSmoothie.jpeg'
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    description: 'Hamborgor taste yum',
    ingredients: [
      'Hamburger patty',
      'Hamburger bun',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
      'Ketchup',
      'Seasoning',
      'Butter'
    ],
    instructions: [
      'Lay the hamburger patty on a cooking board and coat with seasonings on both sides',
      'Add butter to pan and heat until melted',
      'Cook burger patty on medium heat for 4 minutes both sides',
      'While Patty is cooking chop up the lettuce into slices and chop up the tomatos',
      'Chop up the onions and add it to the pan and let it sizzle',
      'Remove both the patty and onions and lay it on the hamburger bun.',
      'Now start eating'
    ],
    image: 'assets/hamburger.jpeg'
  },
  {
    id: 'taco',
    name: 'Tacos from MEXICO',
    description: 'These Tacos taste authentic',
    ingredients: [
      'Taco Shell',
      'Lean Ground Beef',
      'Taco Seasoning mix',
      'BUTTER',
      'Lettuce',
      'Tomato',
      'Guacamole',
      'Sour Cream',
    ],
    instructions: [
      'Add the beef to a skillet, with butter on medium high heat',
      'Break the meat apart with a spoon',
      'Add the seasoning and cook for 10 minutes',
      'Take out the meat and put it into the taco shell',
      'Add all the other ingrediants into the shell',
      'Enjoy'
    ],
    image: 'https://th.bing.com/th/id/OIP.F9GpiCW7GP3bgbtCIrg6IQHaHa?rs=1&pid=ImgDetMain'
  }
];

function nextQuestion(questionNumber, answer) {
  answers[questionNumber] = answer;
  gsap.to(`#q${questionNumber}`, {
    opacity: 0, y: -20, duration: 0.5, onComplete: () => {
      document.querySelector(`#q${questionNumber}`).style.display = 'none';
      if (questionNumber < 5) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        showResult();
      }
    }
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
  recommendedDishes.innerHTML = recipes.map(recipe => `
        <div class="dish-box">
            <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
        </div>
    `).join('');

  gsap.to('#quiz', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector('#quiz').style.display = 'none';
    }
  });

  let resultContainer = document.querySelector('#result-container');
  resultContainer.style.display = 'block';
  gsap.fromTo(resultContainer,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );

  gsap.fromTo('.dish-box',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, delay: 0.5 }
  );

  resultContainer.scrollIntoView({ behavior: 'smooth' });
}

function calculateScore() {
  let score = 0;
  if (answers[1] === 'yes') score += 2;
  if (answers[2] === 'yes') score += 2;
  score += parseInt(answers[3]) + parseInt(answers[4]) + parseInt(answers[5]);
  return score;
}

function getRating(score) {
  if (score < 5) return 'Starter';
  if (score < 15) return 'Aspiring';
  if (score < 25) return 'Promising';
  return 'Master';
}

function showSection(sectionId) {
  document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
  if (sectionId === 'recipes') {
    showRecipes();
  }
  document.querySelector('#result-container').style.display = 'none';
  document.querySelector('#recipe-container').style.display = 'none';
}

function showRecipes() {
  let recipesDiv = document.getElementById('recipe-list');
  recipesDiv.innerHTML = recipes.map(recipe => `
        <div class="dish-box">
            <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
        </div>
    `).join('');
  gsap.fromTo('.dish-box',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
  );
}

function showRecipe(recipeId) {
  let recipe = recipes.find(r => r.id === recipeId);
  let recipeContent = `
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="300" style="object-fit: cover; border-radius: 10px;">
        <h4>Ingredients:</h4>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h4>Instructions:</h4>
        <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>
        <button class="nav-btn back-btn" onclick="hideRecipe()">Back to Recipes</button>
    `;

  let recipeContainer = document.querySelector('#recipe-container');
  recipeContainer.innerHTML = `
        <div class="recipe">
            ${recipeContent}
        </div>
    `;

  recipeContainer.style.display = 'block';
  gsap.fromTo(recipeContainer,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );

  recipeContainer.scrollIntoView({ behavior: 'smooth' });
}

function hideRecipe() {
  gsap.to('#recipe-container', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector('#recipe-container').style.display = 'none';
      showRecipes();
    }
  });
}

function searchRecipes() {
  let searchTerm = document.getElementById('search-input').value.toLowerCase();
  let filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm)
  );

  let recipesDiv = document.getElementById('recipe-list');
  recipesDiv.innerHTML = filteredRecipes.map(recipe => `
        <div class="dish-box">
            <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
        </div>
    `).join('');

  gsap.fromTo('.dish-box',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
  );
}

showQuestion(1);

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});
