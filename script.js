let currentQuestion = 1;
let answers = {};
let questions = [{
  question: "FAQ: So How do you like your cheese sir?",
  answer: "drippy"
}];
let recipes = [{
  id: 'smoothie',
  name: 'Fruit Smoothie',
  description: 'Refreshing fruit smoothie',
  ingredients: ['Banana', 'Berries', 'Yogurt', 'Milk', 'Honey'],
  instructions: ['Add fruits', 'Add yogurt and milk', 'Blend until smooth', 'Add honey to taste'],
  image: 'assets/smoothie.webp'
}, {
  id: 'grilled-cheese',
  name: 'Grilled Cheese',
  description: 'Classic grilled cheese sandwich',
  ingredients: ['Bread', 'Cheese', 'Butter'],
  instructions: ['Butter bread', 'Add cheese', 'Grill until golden'],
  image: 'https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg'
}, {
  id: 'scrambled-eggs',
  name: 'Scrambled Eggs',
  description: 'Perfect scrambled eggs',
  ingredients: ['Eggs', 'Milk', 'Salt', 'Pepper', 'Butter'],
  instructions: ['Beat eggs with milk', 'Heat pan', 'Add eggs', 'Stir until done'],
  image: 'https://cdn.pixabay.com/photo/2021/08/29/11/00/scrambled-eggs-6582990_1280.jpg'
}, {
  id: 'pasta',
  name: 'Simple Pasta',
  description: 'Easy pasta dish',
  ingredients: ['Pasta', 'Sauce', 'Cheese'],
  instructions: ['Boil pasta', 'Heat sauce', 'Combine', 'Add cheese'],
  image: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg'
}, {
  id: 'taco',
  name: 'Basic Tacos',
  description: 'Simple beef tacos',
  ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Cook beef', 'Warm tortillas', 'Assemble tacos'],
  image: 'https://cdn.pixabay.com/photo/2019/12/20/21/17/taco-4709325_1280.jpg'
}, {
  id: 'cookies',
  name: 'Chocolate Chip Cookies',
  description: 'Classic chocolate chip cookies',
  ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Chocolate chips'],
  instructions: ['Mix ingredients', 'Make dough balls', 'Bake until golden'],
  image: 'https://cdn.pixabay.com/photo/2023/06/22/22/29/cookies-8082386_1280.jpg'
}, {
  id: 'hamburger',
  name: 'Classic Hamburger',
  description: 'Juicy beef hamburger',
  ingredients: ['Ground beef', 'Buns', 'Lettuce', 'Tomato', 'Onion'],
  instructions: ['Form patty', 'Grill beef', 'Assemble burger'],
  image: 'https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_1280.jpg'
}, {
  id: 'steak',
  name: 'Pan-Seared Steak',
  description: 'Restaurant quality steak',
  ingredients: ['Steak', 'Salt', 'Pepper', 'Butter', 'Herbs'],
  instructions: ['Season steak', 'Heat pan', 'Sear both sides', 'Rest meat'],
  image: 'https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg'
}, {
  id: 'mac-cheese',
  name: 'Homemade Mac & Cheese',
  description: 'Creamy macaroni and cheese',
  ingredients: ['Macaroni', 'Cheddar', 'Milk', 'Butter', 'Flour'],
  instructions: ['Cook pasta', 'Make cheese sauce', 'Combine', 'Bake until bubbly'],
  image: 'https://cdn.pixabay.com/photo/2020/05/03/13/23/cheese-5125021_1280.jpg'
}, {
  id: 'pancakes',
  name: 'Fluffy Pancakes',
  description: 'Light and fluffy breakfast pancakes',
  ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Sugar'],
  instructions: ['Mix batter', 'Heat griddle', 'Cook until bubbles form', 'Flip and finish'],
  image: 'https://cdn.pixabay.com/photo/2017/09/19/08/52/pancake-2764589_1280.jpg'
}, {
  id: 'chicken-parm',
  name: 'Chicken Parmesan',
  description: 'Classic Italian-American dish',
  ingredients: ['Chicken breast', 'Breadcrumbs', 'Marinara', 'Mozzarella', 'Parmesan'],
  instructions: ['Bread chicken', 'Fry until golden', 'Add sauce and cheese', 'Bake until melted'],
  image: 'https://cdn.pixabay.com/photo/2020/02/15/04/19/chicken-4849979_1280.jpg'
}, {
  id: 'french-toast',
  name: 'Cinnamon French Toast',
  description: 'Sweet breakfast classic',
  ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Vanilla'],
  instructions: ['Make egg mixture', 'Dip bread', 'Cook until golden', 'Top with syrup'],
  image: 'https://cdn.pixabay.com/photo/2020/11/21/08/46/french-toast-5763429_1280.jpg'
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
  } else if (sectionId === 'questions') {
    showQuestions();
  } else if (sectionId === 'cooks') {
    showCooks();
  }
}
function showDocumentation() {
  showSection('documentation');
  document.getElementById('documentation').innerHTML = `
                <h2>Documentation</h2>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRQVW5HriT-ggSWD8nPClE2x41raBzSf9JFR1fxUWqky7LrLL7tHankodr89jNXBUt-gOYzyGuJdty6/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            `;
}
function showQuestions() {
  const form = document.getElementById('question-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
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
  gsap.fromTo('.dish-box', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2
  });
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
  gsap.fromTo(recipeContainer, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });
  recipeContainer.scrollIntoView({
    behavior: 'smooth'
  });
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
  let filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm));
  let recipesDiv = document.getElementById('recipe-list');
  recipesDiv.innerHTML = filteredRecipes.map(recipe => `
                <div class="dish-box">
                    <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
                </div>
            `).join('');
  gsap.fromTo('.dish-box', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2
  });
}
function toggleAccessibilityMenu() {
  const menu = document.getElementById('accessibility-menu');
  menu.classList.toggle('show');
  const button = document.querySelector('.accessibility-button');
  button.classList.toggle('active');
}
function toggleTTS(value) {
  window.speechSynthesis.cancel();
  if (value === 'on') {
    document.querySelectorAll('p, h1, h2, h3, h4, button, a').forEach(element => {
      element.onmouseenter = function() {
        const utterance = new SpeechSynthesisUtterance(this.textContent);
        utterance.lang = currentLanguage;
        window.speechSynthesis.speak(utterance);
      };
      element.onmouseleave = function() {
        window.speechSynthesis.cancel();
      };
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        element.onclick = function() {
          const utterance = new SpeechSynthesisUtterance(this.textContent);
          utterance.lang = currentLanguage;
          window.speechSynthesis.speak(utterance);
        };
      }
    });
  } else {
    document.querySelectorAll('p, h1, h2, h3, h4, button, a').forEach(element => {
      element.onmouseenter = null;
      element.onmouseleave = null;
      element.onclick = null;
    });
  }
}
function toggleDyslexicFont(value) {
  if (value === 'dyslexic') {
    document.body.classList.add('dyslexic-font');
  } else {
    document.body.classList.remove('dyslexic-font');
  }
}
function toggleHighContrast(value) {
  if (value === 'high') {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }
}
function adjustTextSize(value) {
  document.body.style.fontSize = `${value}%`;
}
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const question = document.getElementById('question').value;
  const mailtoLink = `mailto:ediblecooking@cooking.com?subject=Question from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AQuestion:%0D%0A${question}`;
  window.location.href = mailtoLink;
  e.target.reset();
}
function showCooks() {
  const chefs = [{
    name: "Remy",
    title: "Head Chef",
    bio: "A small rat with big dreams who revolutionized French cuisine. Known for his exceptional ratatouille.",
    icon: `<svg viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="40" r="25"/>
        <ellipse cx="50" cy="80" rx="25" ry="15"/>
        <circle cx="40" cy="35" r="5" fill="#FFC72C"/>
        <circle cx="60" cy="35" r="5" fill="#FFC72C"/>
      </svg>`
  }, {
    name: "Gordon Ramsay",
    title: "Executive Chef",
    bio: "WHERE'S THE LAMB SAUCE?! Known for his passionate approach to cooking and colorful vocabulary.",
    icon: `<svg viewBox="0 0 100 100" fill="currentColor">
        <rect x="25" y="20" width="50" height="60" rx="5"/>
        <circle cx="50" cy="35" r="15"/>
        <rect x="35" y="60" width="30" height="5"/>
      </svg>`
  }, {
    name: "Swedish Chef",
    title: "Culinary Experimenter",
    bio: "Bork bork bork! Turning kitchen chaos into culinary masterpieces, one flying ingredient at a time.",
    icon: `<svg viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="35" r="20"/>
        <rect x="30" y="55" width="40" height="30"/>
        <rect x="25" y="15" width="50" height="15" rx="5"/>
      </svg>`
  }];
  const cooksSection = document.getElementById('cooks');
  const chefGrid = document.createElement('div');
  chefGrid.className = 'chef-grid';
  chefGrid.innerHTML = chefs.map(chef => `
    <div class="chef-card">
      <div class="chef-avatar">
        ${chef.icon}
      </div>
      <h3 class="chef-name">${chef.name}</h3>
      <div class="chef-title">${chef.title}</div>
      <p class="chef-bio">${chef.bio}</p>
    </div>
  `).join('');
  cooksSection.innerHTML = `
    <h2>Meet Our Chefs</h2>
    <p>The culinary masterminds behind our recipes!</p>
  `;
  cooksSection.appendChild(chefGrid);
}
function googleTranslateInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,es,zh-CN,fr,hi,ru',
    autoDisplay: false
  }, 'google_translate_element');
  translateInit = true;
}
document.addEventListener('DOMContentLoaded', function() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateInit';
  document.body.appendChild(script);
  document.getElementById('language-select').addEventListener('change', function(e) {
    const lang = e.target.value;
    if (translateInit) {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event('change'));
        currentLanguage = lang;
      }
    }
  });
});
showQuestion(1);
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
