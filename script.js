let currentQuestion = 1;
let answers = {};
let questions = [{
  question: "How do I make perfect scrambled eggs?",
  answer: "Use low heat and stir constantly for creamy eggs."
}, {
  question: "What's the secret to crispy fries?",
  answer: "Double fry them! First at a lower temperature, then at a higher one."
}, {
  question: "How can I improve my knife skills?",
  answer: "Practice proper grip and technique, and use a sharp knife."
}, {
  question: "What's an easy dessert for beginners?",
  answer: "Try making a no-bake cheesecake or chocolate mousse."
}];

let recipes = [{
  id: 'smoothie',
  name: 'Fruit Smoothie',
  description: 'Refreshing fruit smoothie',
  ingredients: ['Banana', 'Berries', 'Yogurt', 'Milk', 'Honey'],
  instructions: ['Add fruits', 'Add yogurt and milk', 'Blend until smooth', 'Add honey to taste'],
  image: 'assets/smoothie.jpeg'
}, {
  id: 'grilled-cheese',
  name: 'Grilled Cheese',
  description: 'Classic grilled cheese sandwich',
  ingredients: ['Bread', 'Cheese', 'Butter'],
  instructions: ['Butter bread', 'Add cheese', 'Grill until golden'],
  image: 'assets/grilled-cheese.jpeg'
}, {
  id: 'scrambled-eggs',
  name: 'Scrambled Eggs',
  description: 'Perfect scrambled eggs',
  ingredients: ['Eggs', 'Milk', 'Salt', 'Pepper', 'Butter'],
  instructions: ['Beat eggs with milk', 'Heat pan', 'Add eggs', 'Stir until done'],
  image: 'assets/eggs.jpeg'
}, {
  id: 'pasta',
  name: 'Simple Pasta',
  description: 'Easy pasta dish',
  ingredients: ['Pasta', 'Sauce', 'Cheese'],
  instructions: ['Boil pasta', 'Heat sauce', 'Combine', 'Add cheese'],
  image: 'assets/pasta.jpeg'
}, {
  id: 'taco',
  name: 'Basic Tacos',
  description: 'Simple beef tacos',
  ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Cook beef', 'Warm tortillas', 'Assemble tacos'],
  image: 'assets/taco.jpeg'
}, {
  id: 'cookies',
  name: 'Chocolate Chip Cookies',
  description: 'Classic chocolate chip cookies',
  ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Chocolate chips'],
  instructions: ['Mix ingredients', 'Make dough balls', 'Bake until golden'],
  image: 'assets/cookies.jpeg'
}, {
  id: 'hamburger',
  name: 'Classic Hamburger',
  description: 'Juicy beef hamburger',
  ingredients: ['Ground beef', 'Buns', 'Lettuce', 'Tomato', 'Onion'],
  instructions: ['Form patty', 'Grill beef', 'Assemble burger'],
  image: 'assets/burger.jpeg'
}, {
  id: 'steak',
  name: 'Pan-Seared Steak',
  description: 'Restaurant quality steak',
  ingredients: ['Steak', 'Salt', 'Pepper', 'Butter', 'Herbs'],
  instructions: ['Season steak', 'Heat pan', 'Sear both sides', 'Rest meat'],
  image: 'assets/steak.jpeg'
}, {
  id: 'mac-cheese',
  name: 'Homemade Mac & Cheese',
  description: 'Creamy macaroni and cheese',
  ingredients: ['Macaroni', 'Cheddar', 'Milk', 'Butter', 'Flour'],
  instructions: ['Cook pasta', 'Make cheese sauce', 'Combine', 'Bake until bubbly'],
  image: 'assets/mac.jpeg'
}, {
  id: 'pancakes',
  name: 'Fluffy Pancakes',
  description: 'Light and fluffy breakfast pancakes',
  ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Sugar'],
  instructions: ['Mix batter', 'Heat griddle', 'Cook until bubbles form', 'Flip and finish'],
  image: 'assets/pancakes.jpeg'
}, {
  id: 'chicken-parm',
  name: 'Chicken Parmesan',
  description: 'Classic Italian-American dish',
  ingredients: ['Chicken breast', 'Breadcrumbs', 'Marinara', 'Mozzarella', 'Parmesan'],
  instructions: ['Bread chicken', 'Fry until golden', 'Add sauce and cheese', 'Bake until melted'],
  image: 'assets/chicken-parm.jpeg'
}, {
  id: 'french-toast',
  name: 'Cinnamon French Toast',
  description: 'Sweet breakfast classic',
  ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Vanilla'],
  instructions: ['Make egg mixture', 'Dip bread', 'Cook until golden', 'Top with syrup'],
  image: 'assets/french-toast.jpeg'
}];

let currentLanguage = 'en';
let translateInit = false;

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
    }
  });
}

function showQuestion(questionNumber) {
  let question = document.querySelector(`#q${questionNumber}`);
  question.style.display = 'block';
  gsap.fromTo(question, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });
  if (questionNumber >= 3) {
    let slider = document.querySelector(`#q${questionNumber}-slider`);
    let value = document.querySelector(`#q${questionNumber}-value`);
    value.textContent = slider.value;
  }
}

function updateSliderValue(questionNumber, value) {
  document.querySelector(`#q${questionNumber}-value`).textContent = value;
}

function resetSurvey() {
  currentQuestion = 1;
  answers = {};
  document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
  document.querySelector('#quiz').style.display = 'block';
  document.querySelectorAll('.question').forEach(q => q.style.display = 'none');
  showQuestion(1);
}

function showResult() {
  let score = calculateScore();
  let rating = getRating(score);
  let result = document.querySelector('#result');
  result.innerHTML = `<h2>Your Edible Rating</h2><p>You are a ${rating} chef!</p>`;

  let recommendedDishes = document.querySelector('#recommended-dishes');
  let filteredRecipes;
  if (rating === 'Beginner') {
    filteredRecipes = recipes.filter(recipe => ['smoothie', 'grilled-cheese', 'scrambled-eggs'].includes(recipe.id));
  } else if (rating === 'Intermediate') {
    filteredRecipes = recipes.filter(recipe => ['pasta', 'taco', 'cookies'].includes(recipe.id));
  } else {
    filteredRecipes = recipes.filter(recipe => ['hamburger', 'steak'].includes(recipe.id));
  }

  recommendedDishes.innerHTML = filteredRecipes.map(recipe => `
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
  gsap.fromTo(resultContainer, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });

  gsap.fromTo('.dish-box', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.5
  });

  resultContainer.scrollIntoView({
    behavior: 'smooth'
  });
}

function calculateScore() {
  let score = 0;
  if (answers[1] === 'yes') score += 2;
  if (answers[2] === 'yes') score += 2;
  score += parseInt(answers[3]) + parseInt(answers[4]) + parseInt(answers[5]);
  return score;
}

function getRating(score) {
  if (score < 10) return 'Beginner';
  if (score < 20) return 'Intermediate';
  return 'Master';
}

function showSection(sectionId) {
  document.querySelectorAll('main > div, #result-container, #recipe-container, #documentation').forEach(div => div.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
  if (sectionId === 'recipes') {
    showRecipes();
  } else if (sectionId === 'documentation') {
    loadDocumentation();
  }
}

function showRecipe(recipeId) {
  let recipe = recipes.find(r => r.id === recipeId);
  let recipeContainer = document.querySelector('#recipe-container');
  recipeContainer.innerHTML = `
    <h2>${recipe.name}</h2>
    <p>${recipe.description}</p>
    <h3>Ingredients</h3>
    <ul>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Instructions</h3>
    <ol>
      ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
    </ol>
    <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="300">
    <button class="nav-btn" onclick="showSection('recipes')">Back to Recipes</button>
  `;
  showSection('recipe-container');
}

function showRecipes() {
  let recipesContainer = document.querySelector('#recipes');
  recipesContainer.innerHTML = recipes.map(recipe => `
    <div class="dish-box">
      <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
    </div>
  `).join('');
}

function loadDocumentation() {
  let documentationContainer = document.querySelector('#documentation');
  documentationContainer.innerHTML = `
    <h2>How to Use This Recipe App</h2>
    <p>This app helps you find recipes and also guides you through a quick quiz to find your cooking level. Once completed, we suggest recipes based on your skill.</p>
    <button class="nav-btn" onclick="showSection('home')">Back to Home</button>
  `;
}

function setupLanguage() {
  if (!translateInit) {
    translateInit = true;
    // Assuming you're using a translation library, you'd initialize it here
  }
}
