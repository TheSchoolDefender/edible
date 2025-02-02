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
}, {
  id: 'fried-chicken',
  name: 'Fried Chicken',
  description: 'I would eat this chicken if it was the best thing on earth',
  ingredients: ['Chicken Breasts', 'Eggs', 'Milk', 'Seasoning', 'Bread Crumbs', 'Oil'],
  instructions: ['Season chicken', 'Crack the egg and mix with milk', 'Boil Oil and dip the chicken into the sauce and put bread crumbs', 'Put the chicken into the boiling oil and cook'],
  image: 'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_1280.jpg'
}, {
  id: 'lemonade',
  name: 'Lemonade Kool-Aid',
  description: 'Nice Refreshing Beverage',
  ingredients: ['Kool Aid Powder', 'Water', 'Sugar'],
  instructions: ['Combine Kool Aid Powder and water', 'Combine sugar as well and serve'],
  image: 'https://cdn.pixabay.com/photo/2020/06/14/14/44/drink-5298126_1280.jpg'
}, {
  id: 'brownies',
  name: 'Chocolate Brownies',
  description: 'Rich and fudgy brownies',
  ingredients: ['Flour', 'Cocoa powder', 'Butter', 'Sugar', 'Eggs', 'Vanilla'],
  instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake until set'],
  image: 'https://cdn.pixabay.com/photo/2017/08/07/12/49/dessert-2603520_1280.jpg'
}, {
  id: 'cheesecake',
  name: 'Classic Cheesecake',
  description: 'Creamy and smooth cheesecake',
  ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Butter', 'Vanilla'],
  instructions: ['Make crust', 'Mix filling', 'Bake in water bath'],
  image: 'https://cdn.pixabay.com/photo/2023/02/17/16/24/cake-7796383_1280.jpg'
}, {
  id: 'cupcakes',
  name: 'Vanilla Cupcakes',
  description: 'Soft and moist cupcakes',
  ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Vanilla'],
  instructions: ['Mix batter', 'Fill liners', 'Bake and frost'],
  image: 'https://cdn.pixabay.com/photo/2017/08/06/04/16/cupcake-2588646_1280.jpg'
}, {
  id: 'ice-cream',
  name: 'Homemade Ice Cream',
  description: 'No-churn vanilla ice cream',
  ingredients: ['Heavy cream', 'Condensed milk', 'Vanilla'],
  instructions: ['Whip cream', 'Fold in condensed milk', 'Freeze until set'],
  image: 'https://cdn.pixabay.com/photo/2019/11/07/13/05/waffle-4608843_1280.jpg'
}, {
  id: 'banana-bread',
  name: 'Banana Bread',
  description: 'Moist and flavourful banana bread',
  ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking soda'],
  instructions: ['Mash bananas', 'Mix ingredients', 'Bake until golden'],
  image: 'https://cdn.pixabay.com/photo/2015/08/14/19/41/minion-888797_1280.jpg'
}, {
  id: 'fruit-salad',
  name: 'Fruit Salad',
  description: 'Fresh and healthy fruit mix',
  ingredients: ['Strawberries', 'Blueberries', 'Pineapple', 'Kiwi', 'Honey'],
  instructions: ['Chop fruits', 'Mix together', 'Drizzle with honey'],
  image: 'https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg'
}, {
  id: 'carrot-cake',
  name: 'Carrot Cake',
  description: 'Spiced carrot cake with cream cheese frosting',
  ingredients: ['Flour', 'Carrots', 'Sugar', 'Eggs', 'Cinnamon', 'Cream cheese'],
  instructions: ['Mix ingredients', 'Bake cake layers', 'Frost with cream cheese frosting'],
  image: 'https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg'
}, {
  id: 'donuts',
  name: 'Glazed Donuts',
  description: 'Sweet and fluffy homemade donuts',
  ingredients: ['Flour', 'Yeast', 'Sugar', 'Eggs', 'Milk', 'Glaze'],
  instructions: ['Prepare dough', 'Fry donuts', 'Dip in glaze'],
  image: 'https://cdn.pixabay.com/photo/2023/01/09/05/55/bagel-7706691_1280.jpg'
}, {
  id: 'churros',
  name: 'Cinnamon Churros',
  description: 'Crispy churros with cinnamon sugar',
  ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Cinnamon', 'Oil'],
  instructions: ['Make dough', 'Pipe and fry', 'Roll in cinnamon sugar'],
  image: 'https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_1280.jpg'
}, {
  id: 'tiramisu',
  name: 'Tiramisu',
  description: 'Classic Italian dessert',
  ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa powder', 'Sugar', 'Eggs'],
  instructions: ['Make coffee mixture', 'Layer ingredients', 'Chill before serving'],
  image: 'https://cdn.pixabay.com/photo/2024/01/12/04/09/tiramisu-8503073_1280.jpg'
}, {
  id: 'avocado-toast',
  name: 'Avocado Toast',
  description: 'Simple and delicious avocado toast',
  ingredients: ['Bread', 'Avocado', 'Lemon', 'Salt', 'Pepper'],
  instructions: ['Toast bread', 'Mash avocado', 'Spread on toast', 'Season with lemon, salt, and pepper'],
  image: 'https://cdn.pixabay.com/photo/2021/02/13/11/05/toast-6011147_1280.jpg'
}, {
  id: 'breakfast-burrito',
  name: 'Breakfast Burrito',
  description: 'Hearty breakfast burrito',
  ingredients: ['Tortilla', 'Eggs', 'Cheese', 'Sausage', 'Salsa'],
  instructions: ['Scramble eggs', 'Cook sausage', 'Assemble ingredients in tortilla', 'Roll and serve'],
  image: 'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg'
}, {
  id: 'smoothie-bowl',
  name: 'Smoothie Bowl',
  description: 'Refreshing and healthy smoothie bowl',
  ingredients: ['Frozen berries', 'Banana', 'Yogurt', 'Granola', 'Chia seeds'],
  instructions: ['Blend berries, banana, and yogurt', 'Pour into bowl', 'Top with granola and chia seeds'],
  image: 'https://cdn.pixabay.com/photo/2017/06/25/09/43/vegan-2440127_1280.jpg'
}, {
  id: 'omelette',
  name: 'Vegetable Omelette',
  description: 'Classic vegetable-stuffed omelette',
  ingredients: ['Eggs', 'Onion', 'Bell pepper', 'Spinach', 'Cheese'],
  instructions: ['Whisk eggs', 'Sauté vegetables', 'Cook eggs in pan', 'Add vegetables and fold'],
  image: 'https://cdn.pixabay.com/photo/2018/11/16/13/20/egg-3819386_1280.jpg'
}, {
  id: 'breakfast-parfait',
  name: 'Breakfast Parfait',
  description: 'Layers of yogurt, granola, and fruit',
  ingredients: ['Yogurt', 'Granola', 'Berries', 'Honey'],
  instructions: ['Layer yogurt, granola, and berries in a glass', 'Drizzle with honey'],
  image: 'https://cdn.pixabay.com/photo/2019/03/26/18/29/yogurt-4083358_1280.jpg'
}, {
  id: 'eggs-benedict',
  name: 'Eggs Benedict',
  description: 'Classic poached eggs with hollandaise sauce',
  ingredients: ['English muffins', 'Eggs', 'Ham', 'Hollandaise sauce', 'Butter'],
  instructions: ['Toast muffins', 'Poach eggs', 'Add ham and eggs on muffins', 'Top with hollandaise sauce'],
  image: 'https://cdn.pixabay.com/photo/2017/10/12/00/13/cafe-2843009_1280.jpg'
}, {
  id: 'breakfast-pizza',
  name: 'Breakfast Pizza',
  description: 'Pizza topped with eggs, cheese, and bacon',
  ingredients: ['Pizza dough', 'Eggs', 'Cheese', 'Bacon', 'Tomato sauce'],
  instructions: ['Roll out dough', 'Spread tomato sauce', 'Add cheese, bacon, and cracked eggs', 'Bake until set'],
  image: 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg'
}, {
  id: 'hash-browns',
  name: 'Crispy Hash Browns',
  description: 'Golden, crispy hash browns',
  ingredients: ['Potatoes', 'Salt', 'Pepper', 'Oil'],
  instructions: ['Grate potatoes', 'Season with salt and pepper', 'Fry until crispy'],
  image: 'https://cdn.pixabay.com/photo/2017/03/16/23/01/english-breakfast-2150514_1280.jpg'
}, {
  id: 'granola-bars',
  name: 'Homemade Granola Bars',
  description: 'Healthy and chewy granola bars',
  ingredients: ['Oats', 'Honey', 'Peanut butter', 'Dried fruit', 'Nuts'],
  instructions: ['Mix ingredients', 'Press into pan', 'Chill and slice'],
  image: 'https://cdn.pixabay.com/photo/2017/04/04/17/31/food-2202344_1280.jpg'
}, {
  id: 'shakshuka',
  name: 'Shakshuka',
  description: 'Spicy eggs poached in tomato sauce',
  ingredients: ['Eggs', 'Tomatoes', 'Onion', 'Garlic', 'Spices'],
  instructions: ['Sauté onion and garlic', 'Add tomatoes and spices', 'Crack eggs into sauce', 'Cook until eggs set'],
  image: 'https://cdn.pixabay.com/photo/2021/05/08/16/13/shakshuka-6238787_1280.jpg'
}, {
  id: 'waffles',
  name:'Waffles',
  description: 'Fluffy on the inside and crispy on the outside',
  ingredients: ['Flour', 'Eggs', 'Butter', 'Sugar', 'Milk'],
  instructions: ['Mix all the ingredients','Open waffle maker and poor the mixture', 'Once finished,grab our waffle out of the waffle maker and enjoy'],
  image: 'https://cdn.pixabay.com/photo/2015/07/27/20/29/food-863484_1280.jpg'
}, {
  id: 'fried-rice',
  name: 'Fried Rice',
  description: 'Quick stir-fried rice',
  ingredients: ['Rice', 'Vegetables', 'Soy sauce', 'Eggs', 'Garlic'],
  instructions: ['Cook rice', 'Stir-fry vegetables', 'Add rice and sauce'],
  image: 'https://cdn.pixabay.com/photo/2021/04/20/10/14/fried-rice-6183903_1280.jpg'
}, {
  id: 'garlic-shrimp',
  name: 'Garlic Shrimp',
  description: 'Garlic-flavored shrimp',
  ingredients: ['Shrimp', 'Garlic', 'Butter', 'Lemon', 'Parsley'],
  instructions: ['Sauté garlic', 'Add shrimp', 'Cook until pink'],
  image: 'https://cdn.pixabay.com/photo/2020/07/28/14/45/garlic-shrimp-5443733_1280.jpg'
}, {
  id: 'meatballs',
  name: 'Spaghetti and Meatballs',
  description: 'Classic spaghetti with meatballs',
  ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Garlic', 'Parmesan'],
  instructions: ['Form meatballs', 'Cook spaghetti', 'Simmer meatballs in sauce'],
  image: 'https://cdn.pixabay.com/photo/2016/01/05/15/21/spaghetti-1120892_1280.jpg'
}, {
  id: 'bbq-ribs',
  name: 'BBQ Ribs',
  description: 'Tender BBQ ribs',
  ingredients: ['Ribs', 'BBQ sauce', 'Spices'],
  instructions: ['Season ribs', 'Grill or bake with sauce'],
  image: 'https://cdn.pixabay.com/photo/2020/06/23/03/03/barbecue-5339043_1280.jpg'
}, {
  id: 'blueberry-muffins',
  name: 'Blueberry Muffins',
  description: 'Soft and fluffy muffins filled with blueberries',
  ingredients: ['Flour', 'Sugar', 'Blueberries', 'Egg', 'Baking Powder'],
  instructions: ['Mix ingredients', 'Fill muffin tin', 'Bake until golden'],
  image: 'https://cdn.pixabay.com/photo/2017/03/12/10/30/blueberry-2136750_1280.jpg'
}, {
  id: 'corn-on-the-cob',
  name: 'Corn on the Cob',
  description: 'Sweet and juicy corn boiled or grilled to perfection',
  ingredients: ['Corn', 'Butter', 'Salt', 'Water'],
  instructions: ['Boil or grill corn', 'Spread butter on top', 'Sprinkle with salt and serve'],
  image: 'https://cdn.pixabay.com/photo/2023/05/15/04/45/corn-7994121_1280.jpg'
}, {
  id: 'baked-potatoes',
  name: 'Baked Potatoes',
  description: 'Fluffy potatoes with a crispy skin, perfect with toppings',
  ingredients: ['Potatoes', 'Butter', 'Salt', 'Sour Cream', 'Cheese'],
  instructions: ['Bake potatoes until tender', 'Cut open and add butter', 'Top with sour cream and cheese'],
  image: 'https://cdn.pixabay.com/photo/2020/01/27/16/46/potato-4797670_1280.jpg'
}, {
  id: 'greek-salad',
  name: 'Greek Salad',
  description: 'A refreshing salad with cucumbers, tomatoes, and feta cheese',
  ingredients: ['Cucumber', 'Tomato', 'Feta Cheese', 'Olives', 'Olive Oil'],
  instructions: ['Chop vegetables', 'Add feta and olives', 'Drizzle with olive oil and serve'],
  image: 'https://cdn.pixabay.com/photo/2014/12/28/13/18/feta-cheese-581848_1280.jpg'
}, {
  id: 'ratatouille',
  name: 'Ratatouille',
  description: 'A colorful French vegetable dish baked to perfection',
  ingredients: ['Zucchini', 'Eggplant', 'Tomato', 'Bell Pepper', 'Olive Oil'],
  instructions: ['Slice vegetables', 'Layer in a baking dish', 'Drizzle with olive oil and bake'],
  image: 'https://cdn.pixabay.com/photo/2020/06/19/08/25/ratatouille-5316194_1280.jpg'
}, {
  id: 'miso-soup',
  name: 'Miso Soup',
  description: 'A light and savory Japanese soup with tofu and seaweed',
  ingredients: ['Miso Paste', 'Tofu', 'Green Onion', 'Seaweed', 'Dashi'],
  instructions: ['Dissolve miso in dashi', 'Add tofu and seaweed', 'Simmer and serve'],
  image: 'https://cdn.pixabay.com/photo/2015/05/02/01/04/miso-soup-749368_1280.jpg'
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
