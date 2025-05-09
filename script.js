// Cooking Tips Array
const cookingTips = [
  "Always read the entire recipe before starting to cook.",
  "Use a sharp knife for better and safer cutting.",
  "Let meat rest after cooking to retain its juices.",
  "Preheat your oven or pan before cooking.",
  "Season your food in layers for more depth of flavor.",
  "Keep your workspace clean as you cook.",
  "Use a meat thermometer to ensure proper cooking temperature.",
  "Rest your dough when making bread or pastries.",
  "Use fresh ingredients whenever possible.",
  "Learn to balance flavors: sweet, sour, salty, bitter, and umami."
];

// Background Music Functionality
let backgroundMusic = null;

function toggleBackgroundMusic(isEnabled) {
  if (isEnabled) {
    if (!backgroundMusic) {
      backgroundMusic = new Audio('https://ediblefood.vercel.app/soundtrack/soundtraporiginal1.mp3');
      backgroundMusic.loop = true;
    }
    backgroundMusic.play().catch(error => {
      console.error('Error playing background music:', error);
    });
  } else {
    if (backgroundMusic) {
      backgroundMusic.pause();
    }
  }
}

// Cooking Tips Popup Functionality
function showCookingTip() {
  // Check if tips are enabled in accessibility settings
  const tipsEnabled = localStorage.getItem('cookingTipsEnabled') !== 'false';
  
  if (tipsEnabled) {
    const tipPopup = document.getElementById('cooking-tips-popup');
    const tipText = document.getElementById('cooking-tip-text');
    
    // Select a random tip
    const randomTip = cookingTips[Math.floor(Math.random() * cookingTips.length)];
    tipText.textContent = randomTip;
    
    tipPopup.classList.add('show');
    
    // Automatically hide after 10 seconds
    setTimeout(() => {
      tipPopup.classList.remove('show');
    }, 10000);
  }
}

// Update accessibility menu initialization
function initializeAccessibilityOptions() {
  // Cooking Tips Toggle
  const cookingTipsToggle = document.getElementById('cooking-tips-toggle');
  cookingTipsToggle.checked = localStorage.getItem('cookingTipsEnabled') !== 'false';
  cookingTipsToggle.addEventListener('change', function() {
    localStorage.setItem('cookingTipsEnabled', this.checked);
  });

  // Background Music Toggle
  const backgroundMusicToggle = document.getElementById('background-music-toggle');
  backgroundMusicToggle.addEventListener('change', function() {
    toggleBackgroundMusic(this.checked);
  });

  // Close Popup Button
  const closeTipsPopup = document.querySelector('.close-tips-popup');
  closeTipsPopup.addEventListener('click', () => {
    document.getElementById('cooking-tips-popup').classList.remove('show');
  });
}

// Modify existing initialization to include new functions
document.addEventListener('DOMContentLoaded', function() {
  initializeAccessibilityOptions();
  
  // Show cooking tip when page loads
  showCookingTip();
});

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
  image: 'https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_1280.jpg'
}, {
  id: 'garlic-shrimp',
  name: 'Garlic Shrimp',
  description: 'Garlic-flavored shrimp',
  ingredients: ['Shrimp', 'Garlic', 'Butter', 'Lemon', 'Parsley'],
  instructions: ['Sauté garlic', 'Add shrimp', 'Cook until pink'],
  image: 'https://cdn.pixabay.com/photo/2020/03/21/04/00/shrimp-4952607_1280.jpg'
}, {
  id: 'meatballs',
  name: 'Spaghetti and Meatballs',
  description: 'Classic spaghetti with meatballs',
  ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Garlic', 'Parmesan'],
  instructions: ['Form meatballs', 'Cook spaghetti', 'Simmer meatballs in sauce'],
  image: 'https://cdn.pixabay.com/photo/2017/06/29/21/14/meatball-2456234_1280.jpg'
}, {
  id: 'bbq-ribs',
  name: 'BBQ Ribs',
  description: 'Tender BBQ ribs',
  ingredients: ['Ribs', 'BBQ sauce', 'Spices'],
  instructions: ['Season ribs', 'Grill or bake with sauce'],
  image: 'https://cdn.pixabay.com/photo/2017/06/05/18/46/pork-ribs-2374889_1280.jpg'
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
}, {
  id: 'enchiladas',
  name: 'Chicken Enchiladas',
  description: 'Cheesy and saucy enchiladas',
  ingredients: ['Tortillas', 'Chicken', 'Cheese', 'Enchilada sauce', 'Sour cream'],
  instructions: ['Cook chicken', 'Fill tortillas with chicken and cheese', 'Roll and place in dish', 'Top with enchilada sauce and more cheese', 'Bake until bubbly'],
  image: 'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_1280.jpg'
},
{
  id: 'pozole',
  name: 'Red Pozole',
  description: 'Traditional Mexican soup with hominy and pork',
  ingredients: ['Pork', 'Hominy', 'Red chiles', 'Onion', 'Garlic', 'Spices'],
  instructions: ['Cook pork until tender', 'Prepare red chile sauce', 'Combine with hominy and spices', 'Simmer until flavours meld', 'Serve with toppings like cabbage and lime'],
  image: 'https://cdn.pixabay.com/photo/2019/01/04/02/44/cominda-christmas-3912359_1280.jpg'
},
{
  id: 'tamales',
  name: 'Tamales',
  description: 'Classic corn dough with savoury fillings',
  ingredients: ['Corn husks', 'Masa harina', 'Lard', 'Chicken', 'Salsa'],
  instructions: ['Soak corn husks', 'Prepare masa', 'Fill husks with masa and chicken salsa', 'Steam until cooked'],
  image: 'https://cdn.pixabay.com/photo/2020/01/10/18/22/food-4755914_1280.jpg'
},
{
  id: 'sopes',
  name: 'Sopes',
  description: 'Thick corn dough topped with beans and meat',
  ingredients: ['Masa harina', 'Beans', 'Meat', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Shape masa into thick discs', 'Cook on griddle', 'Top with beans, meat, and toppings'],
  image: 'https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg'
},
{
  id: 'chiles-rellenos',
  name: 'Chiles Rellenos',
  description: 'Stuffed poblano peppers in tomato sauce',
  ingredients: ['Poblano peppers', 'Cheese', 'Eggs', 'Tomato sauce', 'Flour'],
  instructions: ['Roast and peel peppers', 'Stuff with cheese', 'Dip in egg batter and fry', 'Serve with tomato sauce'],
  image: 'https://cdn.pixabay.com/photo/2017/09/23/18/54/cayenne-peppers-2779828_1280.jpg'
},
{
  id: 'guacamole',
  name: 'Guacamole',
  description: 'Creamy avocado dip',
  ingredients: ['Avocado', 'Tomato', 'Onion', 'Lime', 'Cilantro', 'Salt'],
  instructions: ['Mash avocados', 'Mix in diced tomatoes, onions, and lime juice', 'Season and serve'],
  image: 'https://cdn.pixabay.com/photo/2020/02/03/02/38/chips-and-guacamole-4814576_1280.jpg'
},
{
  id: 'flan',
  name: 'Flan',
  description: 'Creamy caramel custard dessert',
  ingredients: ['Milk powder', 'Flour', 'Sugar', 'Cardamom', 'Ghee'],
  instructions: ['Make dough', 'Shape and fry dumplings', 'Soak in sugar syrup', 'Serve warm'],
  image: 'https://cdn.pixabay.com/photo/2014/08/08/11/24/flan-413223_1280.jpg'
},
{
  id: 'mole',
  name: 'Chicken Mole',
  description: 'Rich and flavourful chocolate-based sauce',
  ingredients: ['Chicken', 'Mole paste', 'Chicken broth', 'Chocolate', 'Tortillas'],
  instructions: ['Cook chicken', 'Prepare mole sauce with broth and chocolate', 'Simmer chicken in sauce', 'Serve with tortillas'],
  image: 'https://cdn.pixabay.com/photo/2020/02/13/23/57/mexican-food-4847184_1280.jpg'
},
{
  id: 'fajitas',
  name: 'Beef Fajitas',
  description: 'Sizzling beef with vegetables',
  ingredients: ['Beef', 'Bell peppers', 'Onions', 'Tortillas', 'Seasoning'],
  instructions: ['Marinate beef', 'Cook beef and vegetables', 'Serve with warm tortillas'],
  image: 'https://cdn.pixabay.com/photo/2020/06/01/15/37/tortilla-5247120_1280.jpg'
},
{
  id: 'tostadas',
  name: 'Tostadas',
  description: 'Crispy tortillas topped with beans, meat, and veggies',
  ingredients: ['Tostadas', 'Beans', 'Meat', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Spread beans on tostadas', 'Add meat and toppings', 'Serve immediately'],
  image: 'https://cdn.pixabay.com/photo/2018/12/05/00/46/avocado-toast-3856950_1280.jpg'
}, {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts',
    ingredients: ['Chicken', 'Peanuts', 'Bell peppers', 'Soy sauce', 'Chili peppers', 'Garlic'],
    instructions: ['Marinate chicken', 'Sauté garlic and peppers', 'Add chicken and sauce', 'Mix in peanuts and serve'],
    image: 'https://cdn.pixabay.com/photo/2019/03/14/19/03/chicken-4055653_1280.jpg'
  },
  {
    id: 'sweet-sour-pork',
    name: 'Sweet and Sour Pork',
    description: 'Tangy pork with pineapple',
    ingredients: ['Pork', 'Pineapple', 'Bell peppers', 'Vinegar', 'Sugar', 'Ketchup'],
    instructions: ['Fry pork', 'Make sauce with vinegar, sugar, and ketchup', 'Combine with pineapple and peppers', 'Simmer and serve'],
    image: 'https://cdn.pixabay.com/photo/2022/10/12/21/28/roast-pork-7517549_1280.jpg'
  },
  {
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    description: 'Spicy tofu in a Sichuan-style sauce',
    ingredients: ['Tofu', 'Ground pork', 'Sichuan peppercorns', 'Chili paste', 'Garlic', 'Soy sauce'],
    instructions: ['Fry pork with garlic', 'Add tofu and spices', 'Simmer in sauce', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2017/08/02/06/51/mapo-tofu-2570173_1280.jpg'
  },
  {
    id: 'egg-fried-rice',
    name: 'Yangzhou Fried Rice',
    description: 'Classic Chinese-style fried rice',
    ingredients: ['Rice', 'Shrimp', 'Eggs', 'Peas', 'Soy sauce', 'Carrots'],
    instructions: ['Cook rice', 'Scramble eggs', 'Stir-fry shrimp and vegetables', 'Mix with rice and soy sauce'],
    image: 'https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_1280.jpg'
  },
  {
    id: 'hot-sour-soup',
    name: 'Hot and Sour Soup',
    description: 'Spicy and tangy Chinese soup',
    ingredients: ['Chicken broth', 'Mushrooms', 'Tofu', 'Soy sauce', 'Vinegar', 'Chili oil'],
    instructions: ['Heat broth', 'Add mushrooms, tofu, and seasonings', 'Simmer and serve hot'],
    image: 'https://cdn.pixabay.com/photo/2021/08/29/08/03/soup-6582610_1280.jpg'
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    description: 'Crispy Chinese appetiser',
    ingredients: ['Spring roll wrappers', 'Cabbage', 'Carrots', 'Soy sauce', 'Oil'],
    instructions: ['Prepare filling with vegetables', 'Wrap in spring roll wrappers', 'Fry until golden'],
    image: 'https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_1280.jpg'
  },
  {
    id: 'char-siu',
    name: 'Char Siu',
    description: 'Chinese-style barbecue pork',
    ingredients: ['Pork', 'Hoisin sauce', 'Honey', 'Soy sauce', 'Five-spice powder'],
    instructions: ['Marinate pork', 'Roast in oven', 'Brush with honey glaze and serve'],
    image: 'https://cdn.pixabay.com/photo/2020/04/01/17/34/char-siu-4992042_1280.jpg'
  },
  {
    id: 'dumplings',
    name: 'Chinese Dumplings',
    description: 'Savory dumplings with pork and vegetable filling',
    ingredients: ['Dumpling wrappers', 'Ground pork', 'Cabbage', 'Garlic', 'Soy sauce', 'Ginger'],
    instructions: ['Prepare filling', 'Wrap in dumpling wrappers', 'Steam, boil, or fry until cooked'],
    image: 'https://cdn.pixabay.com/photo/2017/06/11/17/03/dumplings-2392893_1280.jpg'
  },
  {
    id: 'beef-broccoli',
    name: 'Beef and Broccoli',
    description: 'Stir-fried beef and broccoli in savoury sauce',
    ingredients: ['Beef', 'Broccoli', 'Soy sauce', 'Garlic', 'Oyster sauce', 'Cornstarch'],
    instructions: ['Marinate beef', 'Stir-fry beef and broccoli', 'Add sauce and simmer'],
    image: 'https://cdn.pixabay.com/photo/2017/09/03/15/12/brocolli-2710624_1280.jpg'
  },
  {
    id: 'lo-mein',
    name: 'Vegetable Lo Mein',
    description: 'Chinese stir-fried noodles',
    ingredients: ['Noodles', 'Carrots', 'Cabbage', 'Soy sauce', 'Garlic', 'Sesame oil'],
    instructions: ['Cook noodles', 'Stir-fry vegetables and garlic', 'Combine with noodles and sauce'],
    image: 'https://cdn.pixabay.com/photo/2020/03/31/01/57/beef-4985993_1280.jpg'
  }, {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Creamy and rich chicken curry',
    ingredients: ['Chicken', 'Tomato puree', 'Cream', 'Butter', 'Garlic', 'Garam masala'],
    instructions: ['Marinate chicken', 'Cook tomato-based sauce', 'Add chicken and cream', 'Simmer and serve with naan'],
    image: 'https://cdn.pixabay.com/photo/2021/07/14/09/29/food-6465556_1280.jpg'
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    description: 'Cottage cheese in spinach curry',
    ingredients: ['Spinach', 'Paneer', 'Garlic', 'Onion', 'Cream', 'Spices'],
    instructions: ['Blanch spinach', 'Blend into a puree', 'Cook with spices', 'Add paneer and simmer'],
    image: 'https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043097_1280.jpg'
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    description: 'Flavourful rice dish with spices and chicken',
    ingredients: ['Chicken', 'Rice', 'Yogurt', 'Spices', 'Onion', 'Ghee'],
    instructions: ['Marinate chicken', 'Cook rice with spices', 'Layer chicken and rice', 'Steam and serve'],
    image: 'https://cdn.pixabay.com/photo/2021/09/25/18/54/dish-6655595_1280.jpg'
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    description: 'Lentils tempered with aromatic spices',
    ingredients: ['Yellow lentils', 'Garlic', 'Onion', 'Tomato', 'Cumin', 'Ghee'],
    instructions: ['Cook lentils', 'Prepare tempering with ghee and spices', 'Combine with lentils and simmer'],
    image: 'https://cdn.pixabay.com/photo/2013/07/25/12/03/chana-166987_1280.jpg'
  },
  {
    id: 'samosa',
    name: 'Samosa',
    description: 'Deep-fried pastry filled with spiced potatoes',
    ingredients: ['Potatoes', 'Peas', 'Flour', 'Spices', 'Oil'],
    instructions: ['Prepare dough', 'Make spiced potato filling', 'Shape and fry samosas', 'Serve with chutney'],
    image: 'https://cdn.pixabay.com/photo/2023/10/09/04/19/samosa-8303211_1280.jpg'
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, grilled to perfection',
    ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lemon juice', 'Garlic', 'Ginger'],
    instructions: ['Marinate chicken', 'Cook in tandoor or oven', 'Serve with mint chutney'],
    image: 'https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494_1280.jpg'
  },
  {
    id: 'chole',
    name: 'Chole',
    description: 'Spiced chickpea curry',
    ingredients: ['Chickpeas', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices'],
    instructions: ['Cook chickpeas', 'Make gravy with onion, tomato, and spices', 'Combine and simmer'],
    image: 'https://cdn.pixabay.com/photo/2016/03/21/21/33/chana-masala-1271639_1280.jpg'
  },
  {
    id: 'naan',
    name: 'Naan',
    description: 'Soft and fluffy Indian flatbread',
    ingredients: ['Flour', 'Yogurt', 'Yeast', 'Milk', 'Ghee'],
    instructions: ['Prepare dough', 'Roll and cook on tawa or oven', 'Brush with ghee and serve'],
    image: 'https://cdn.pixabay.com/photo/2022/04/25/06/10/pakistani-plain-naan-7155154_1280.jpg'
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji',
    description: 'Spiced mashed vegetables served with buttery bread',
    ingredients: ['Potatoes', 'Tomatoes', 'Peas', 'Capsicum', 'Butter', 'Pav buns'],
    instructions: ['Cook and mash vegetables', 'Prepare masala', 'Serve with buttered pav'],
    image: 'https://cdn.pixabay.com/photo/2024/06/03/10/18/bhaji-8806044_1280.jpg'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Sweet fried dumplings soaked in sugar syrup',
    ingredients: ['Milk powder', 'Flour', 'Sugar', 'Cardamom', 'Ghee'],
    instructions: ['Make dough', 'Shape and fry dumplings', 'Soak in sugar syrup', 'Serve warm'],
    image: 'https://cdn.pixabay.com/photo/2017/05/06/19/20/indian-2290593_1280.jpg'
}, {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'Classic pasta with eggs, cheese, pancetta, and black pepper',
    ingredients: ['Spaghetti', 'Egg yolks', 'Parmesan cheese', 'Pancetta', 'Black pepper'],
    instructions: ['Cook spaghetti', 'Fry pancetta', 'Mix eggs and cheese', 'Combine with pasta and pancetta', 'Serve with black pepper'],
    image: 'https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_1280.jpg'
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'Simple and fresh pizza with tomato, mozzarella, and basil',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
    instructions: ['Prepare dough', 'Spread tomato sauce', 'Add mozzarella and basil', 'Bake in oven', 'Drizzle with olive oil'],
    image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    description: 'Layers of pasta, meat sauce, and creamy béchamel',
    ingredients: ['Lasagna sheets', 'Minced beef', 'Tomato sauce', 'Béchamel sauce', 'Parmesan cheese'],
    instructions: ['Cook meat sauce', 'Prepare béchamel', 'Layer pasta, sauces, and cheese', 'Bake in oven', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg'
  },
  {
    id: 'risotto-alla-milanese',
    name: 'Risotto alla Milanese',
    description: 'Creamy risotto flavoured with saffron',
    ingredients: ['Arborio rice', 'Saffron', 'Chicken stock', 'Butter', 'Parmesan cheese'],
    instructions: ['Sauté rice in butter', 'Add stock gradually', 'Mix in saffron and cheese', 'Cook until creamy'],
    image: 'https://cdn.pixabay.com/photo/2019/09/06/19/29/rice-4457143_1280.jpg'
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomato, garlic, and basil',
    ingredients: ['Bread', 'Tomatoes', 'Garlic', 'Basil', 'Olive oil'],
    instructions: ['Toast bread', 'Mix chopped tomatoes with garlic and basil', 'Top bread with mixture', 'Drizzle with olive oil'],
    image: 'https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg'
  },
  {
    id: 'fettuccine-alfredo',
    name: 'Fettuccine Alfredo',
    description: 'Creamy pasta with butter and Parmesan cheese',
    ingredients: ['Fettuccine', 'Butter', 'Parmesan cheese', 'Heavy cream'],
    instructions: ['Cook pasta', 'Melt butter in a pan', 'Add cream and cheese', 'Toss with pasta', 'Serve warm'],
    image: 'https://cdn.pixabay.com/photo/2020/09/17/12/38/pasta-5579058_1280.jpg'
  },
  {
    id: 'caprese-salad',
    name: 'Caprese Salad',
    description: 'Fresh salad with tomatoes, mozzarella, and basil',
    ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive oil', 'Balsamic glaze'],
    instructions: ['Slice tomatoes and mozzarella', 'Layer with basil', 'Drizzle with olive oil and balsamic glaze'],
    image: 'https://cdn.pixabay.com/photo/2020/06/03/08/53/mozzarella-5254110_1280.jpg'
  },
  {
    id: 'osso-buco',
    name: 'Osso Buco',
    description: 'Braised veal shanks in a rich tomato sauce',
    ingredients: ['Veal shanks', 'Carrots', 'Celery', 'Tomato paste', 'White wine', 'Stock'],
    instructions: ['Sear veal shanks', 'Cook vegetables', 'Simmer with wine, stock, and tomato', 'Serve with gremolata'],
    image: 'https://cdn.pixabay.com/photo/2017/07/24/13/08/meat-2534580_1280.jpg'
  },
  {
    id: 'panna-cotta',
    name: 'Panna Cotta',
    description: 'Silky dessert made with cream and vanilla',
    ingredients: ['Heavy cream', 'Sugar', 'Gelatin', 'Vanilla'],
    instructions: ['Heat cream and sugar', 'Dissolve gelatin', 'Pour into moulds and chill', 'Serve with fruit sauce'],
    image: 'https://cdn.pixabay.com/photo/2017/06/18/18/49/panna-cotta-2416749_1280.jpg'
}, {
    id: 'coq-au-vin',
    name: 'Coq au Vin',
    description: 'Chicken braised in red wine with mushrooms, bacon, and onions',
    ingredients: ['Chicken', 'Red wine', 'Mushrooms', 'Onions', 'Bacon', 'Garlic', 'Thyme'],
    instructions: ['Brown chicken', 'Cook bacon and vegetables', 'Simmer with wine and herbs', 'Serve with crusty bread'],
    image: 'https://cdn.pixabay.com/photo/2017/09/03/00/53/cream-2709035_1280.jpg'
  },
  {
    id: 'quiche-lorraine',
    name: 'Quiche Lorraine',
    description: 'Savory tart with eggs, cream, bacon, and cheese',
    ingredients: ['Pie crust', 'Eggs', 'Heavy cream', 'Bacon', 'Gruyère cheese', 'Nutmeg'],
    instructions: ['Prepare crust', 'Cook bacon', 'Mix eggs, cream, and cheese', 'Pour into crust and bake'],
    image: 'https://cdn.pixabay.com/photo/2017/11/09/16/43/food-2934024_1280.jpg'
  },
  {
    id: 'bouillabaisse',
    name: 'Bouillabaisse',
    description: 'Traditional Provençal fish stew with a rich saffron broth',
    ingredients: ['Assorted fish', 'Shellfish', 'Tomatoes', 'Garlic', 'Fennel', 'Saffron', 'Olive oil'],
    instructions: ['Sauté garlic and fennel', 'Add tomatoes and saffron', 'Simmer with fish and shellfish', 'Serve with crusty bread'],
    image: 'https://cdn.pixabay.com/photo/2016/04/15/09/03/food-1330531_1280.jpg'
  },
  {
    id: 'croque-monsieur',
    name: 'Croque Monsieur',
    description: 'Toasted ham and cheese sandwich with béchamel sauce',
    ingredients: ['Bread', 'Ham', 'Gruyère cheese', 'Butter', 'Flour', 'Milk', 'Nutmeg'],
    instructions: ['Make béchamel', 'Assemble sandwich with ham and cheese', 'Toast in oven', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2016/10/05/05/46/bread-1716102_1280.jpg'
  },
  {
    id: 'souffle-au-chocolat',
    name: 'Soufflé au Chocolat',
    description: 'Fluffy and rich chocolate dessert',
    ingredients: ['Dark chocolate', 'Eggs', 'Sugar', 'Butter', 'Flour', 'Cream'],
    instructions: ['Melt chocolate', 'Whisk egg whites to stiff peaks', 'Fold into chocolate mixture', 'Bake until risen'],
    image: 'https://cdn.pixabay.com/photo/2017/08/01/02/10/dark-2562840_1280.jpg'
  },
  {
    id: 'boeuf-bourguignon',
    name: 'Boeuf Bourguignon',
    description: 'Beef slow-cooked in red wine with carrots, onions, and mushrooms',
    ingredients: ['Beef', 'Red wine', 'Carrots', 'Onions', 'Mushrooms', 'Garlic', 'Thyme'],
    instructions: ['Brown beef', 'Sauté vegetables', 'Simmer with wine and herbs', 'Cook until tender'],
    image: 'https://cdn.pixabay.com/photo/2017/08/27/14/18/winter-2686120_1280.jpg'
  },
  {
    id: 'tarte-tatin',
    name: 'Tarte Tatin',
    description: 'Upside-down caramelised apple tart',
    ingredients: ['Apples', 'Sugar', 'Butter', 'Puff pastry'],
    instructions: ['Caramelise apples with sugar and butter', 'Cover with pastry', 'Bake and flip to serve'],
    image: 'https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822_1280.jpg'
  },
  {
    id: 'crepes',
    name: 'Crêpes',
    description: 'Thin French pancakes, perfect for sweet or savoury fillings',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Sugar', 'Salt'],
    instructions: ['Mix batter', 'Cook thin layers in a pan', 'Fill with desired toppings', 'Fold and serve'],
    image: 'https://cdn.pixabay.com/photo/2019/07/07/12/45/crepe-4322435_1280.jpg'
  },
  {
    id: 'madeleines',
    name: 'Madeleines',
    description: 'Small shell-shaped sponge cakes',
    ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla', 'Lemon zest'],
    instructions: ['Mix batter', 'Chill and fill moulds', 'Bake until golden', 'Serve with tea'],
    image: 'https://cdn.pixabay.com/photo/2015/03/21/14/31/madeleine-683743_1280.jpg'

}];

let currentLanguage = 'en';
let translateInit = false;

let foodQuizQuestions = [
  {
    question: "Which country is known for originating sushi?",
    choices: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 1
  },
  {
    question: "What is the primary ingredient in guacamole?",
    choices: ["Tomato", "Avocado", "Lime", "Onion"],
    correctAnswer: 1
  },
  {
    question: "What type of pasta is traditionally used in a classic spaghetti bolognese?",
    choices: ["Penne", "Spaghetti", "Fusilli", "Farfalle"],
    correctAnswer: 1
  },
  {
    question: "Which fruit is known as the \"king of fruits\" and has a very strong smell?",
    choices: ["Durian", "Mango", "Pineapple", "Banana"],
    correctAnswer: 0
  },
  {
    question: "What does the French term \"mirepoix\" refer to?",
    choices: ["A type of sauce", "A vegetable-based stock", "A combination of onions, carrots, and celery", "A way to cook fish"],
    correctAnswer: 2
  },
  {
    question: "Which country is the birthplace of the croissant?",
    choices: ["France", "Austria", "Italy", "Germany"],
    correctAnswer: 1
  },
  {
    question: "What is the main ingredient in the Italian dish \"risotto\"?",
    choices: ["Rice", "Pasta", "Polenta", "Bread"],
    correctAnswer: 0
  },
  {
    question: "Which type of cheese is traditionally used in a Greek salad?",
    choices: ["Mozzarella", "Feta", "Cheddar", "Gouda"],
    correctAnswer: 1
  },
  {
    question: "What is the key flavor in the Indian dish \"curry\"?",
    choices: ["Garlic", "Cinnamon", "Turmeric", "Ginger"],
    correctAnswer: 2
  },
  {
    question: "In which country would you find the dish \"paella\"?",
    choices: ["Mexico", "Italy", "Spain", "Greece"],
    correctAnswer: 2
  }
];

let currentQuizQuestion = 0;
let foodQuizScore = 0;

function initializeTranslationAndAccessibility() {
  // Initialize language selector
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      currentLanguage = this.value;
      // Add translation logic here if needed
    });
  }

  // Initialize accessibility options
  const fontOption = document.getElementById('font-option');
  if (fontOption) {
    fontOption.addEventListener('change', function() {
      toggleDyslexicFont(this.value);
    });
  }

  const contrastOption = document.getElementById('contrast-option');
  if (contrastOption) {
    contrastOption.addEventListener('change', function() {
      toggleHighContrast(this.value);
    });
  }

  const textSizeOption = document.getElementById('text-size');
  if (textSizeOption) {
    textSizeOption.addEventListener('input', function() {
      adjustTextSize(this.value);
    });
  }

  // Add any other initialization logic for translation or accessibility
}

function toggleDyslexicFont(fontType) {
  const body = document.body;
  if (fontType === 'dyslexic') {
    body.classList.add('dyslexic-font');
  } else {
    body.classList.remove('dyslexic-font');
  }
}

function toggleHighContrast(contrastMode) {
  const body = document.body;
  if (contrastMode === 'high') {
    body.classList.add('high-contrast');
  } else {
    body.classList.remove('high-contrast');
  }
}

function adjustTextSize(size) {
  document.body.style.fontSize = `${size}%`;
}

// Ensure the function is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeTranslationAndAccessibility);

// Call initialization on page load
document.addEventListener('DOMContentLoaded', function() {
  showQuestion(1);
});

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

function generateIngredientCheckboxes() {
  const allIngredients = new Set();
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      allIngredients.add(ingredient);
    });
  });

  const ingredientContainer = document.getElementById('ingredient-checkboxes');
  ingredientContainer.innerHTML = Array.from(allIngredients)
    .sort()
    .map(ingredient => `
      <label>
        <input type="checkbox" name="ingredient" value="${ingredient}">
        ${ingredient}
      </label>
    `).join('');
}

function searchRecipes() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const skillLevelFilter = document.getElementById('skill-level-filter').value;
  const sortFilter = document.getElementById('sort-filter').value;

  const selectedIngredients = Array.from(
    document.querySelectorAll('input[name="ingredient"]:checked')
  ).map(checkbox => checkbox.value);

  let filteredRecipes = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(searchTerm) || 
                      recipe.description.toLowerCase().includes(searchTerm);

    const skillLevelMatch = !skillLevelFilter || 
        getRecipeSkillLevel(recipe) === skillLevelFilter;

    const ingredientMatch = selectedIngredients.length === 0 || 
        selectedIngredients.every(ing => recipe.ingredients.includes(ing));

    return nameMatch && skillLevelMatch && ingredientMatch;
  });

  // Sort recipes
  switch(sortFilter) {
    case 'name':
      filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'difficulty':
      filteredRecipes.sort((a, b) => {
        const difficultyOrder = {
          'Beginner': 1,
          'Intermediate': 2,
          'Master': 3
        };
        return difficultyOrder[getRecipeSkillLevel(a)] - difficultyOrder[getRecipeSkillLevel(b)];
      });
      break;
    case 'ingredients':
      filteredRecipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
      break;
  }

  const recipesDiv = document.getElementById('recipe-list');
  recipesDiv.innerHTML = filteredRecipes.map(recipe => `
    <div class="dish-box">
      <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <p><strong>Skill Level:</strong> ${getRecipeSkillLevel(recipe)}</p>
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

function getRecipeSkillLevel(recipe) {
  const ingredientCount = recipe.ingredients.length;
  const instructionComplexity = recipe.instructions.reduce((complexity, instruction) => {
    return complexity + (instruction.split(' ').length > 5 ? 1 : 0);
  }, 0);

  if (ingredientCount <= 3 && instructionComplexity <= 1) return 'Beginner';
  if (ingredientCount <= 6 && instructionComplexity <= 3) return 'Intermediate';
  return 'Master';
}

function showRecipes() {
  generateIngredientCheckboxes(); 

  let recipesDiv = document.getElementById('recipe-list');
  recipesDiv.innerHTML = recipes.map(recipe => `
    <div class="dish-box">
      <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <p><strong>Skill Level:</strong> ${getRecipeSkillLevel(recipe)}</p>
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
    <p><strong>Skill Level:</strong> ${getRecipeSkillLevel(recipe)}</p>
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

function toggleAccessibilityMenu() {
  const menu = document.getElementById('accessibility-menu');
  const button = document.querySelector('.accessibility-button');
  
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    button.classList.remove('active');
  } else {
    menu.classList.add('show');
    button.classList.add('active');
  }
}

function toggleTTS(value) {
  const ttsElements = document.querySelectorAll('p, h1, h2, h3, h4, button, a, li');
  
  if (value === 'on') {
    ttsElements.forEach(element => {
      element.addEventListener('mouseover', (event) => {
        speakTextWithGoogle(event.target.textContent, currentLanguage);
      });
      
      // Add click event for interactive elements
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        element.addEventListener('click', handleTTSClick);
      }
    });
  } else {
    ttsElements.forEach(element => {
      element.removeEventListener('mouseover', speakTextWithGoogle);
      
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        element.removeEventListener('click', handleTTSClick);
      }
    });
  }
}

function handleTTSClick(event) {
  const utterance = new SpeechSynthesisUtterance(`You clicked on ${event.target.textContent}`);
  utterance.lang = currentLanguage;
  window.speechSynthesis.speak(utterance);
  
  // Preserve original click functionality
  if (event.target.onclick) {
    event.target.onclick(event);
  }
}

function speakTextWithGoogle(text, language = 'en') {
  // Fallback to browser speech synthesis if Google API fails
  function fallbackTextToSpeech(text, language) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  }

  // Check for Google Cloud Text-to-Speech API key
  const apiKey = 'YOUR_API_KEY'; // Replace with actual key
  if (!apiKey || apiKey === 'YOUR_API_KEY') {
    console.warn('No valid Google TTS API key. Using browser speech synthesis.');
    fallbackTextToSpeech(text, language);
    return;
  }

  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      input: { text: text },
      voice: { languageCode: language, ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' }
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('TTS API request failed');
    }
    return response.json();
  })
  .then(data => {
    const audioContent = data.audioContent;
    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
    audio.play().catch(error => {
      console.warn('Audio playback failed, using fallback:', error);
      fallbackTextToSpeech(text, language);
    });
  })
  .catch(error => {
    console.error('TTS API error:', error);
    fallbackTextToSpeech(text, language);
  });
}

function showResult() {
  let adventurousness = parseInt(answers[3] || 5);
  let cookingLikelihood = parseInt(answers[4] || 5);
  let confidence = parseInt(answers[5] || 5);

  let totalScore = adventurousness + cookingLikelihood + confidence;
  
  let skillLevels = {
    0: 'Beginner',
    15: 'Novice',
    25: 'Intermediate', 
    35: 'Advanced',
    45: 'Master',
    55: 'GOD'
  };

  let userSkillLevel = Object.keys(skillLevels)
    .reverse()
    .find(threshold => totalScore >= parseInt(threshold)) || 'Beginner';

  let recommendedRecipes = recipes.filter(recipe => 
    getRecipeSkillLevel(recipe) === skillLevels[Object.keys(skillLevels).find(threshold => 
      userSkillLevel === skillLevels[threshold]
    )]
  );

  recommendedRecipes = recommendedRecipes.slice(0, 5);

  let resultContainer = document.getElementById('result-container');
  let resultDiv = document.getElementById('result');
  let recommendedDishesDiv = document.getElementById('recommended-dishes');

  resultDiv.innerHTML = `
    <h2>Your Cooking Skill Level: ${userSkillLevel}</h2>
    <p>Based on your survey results, here are some recommended recipes:</p>
  `;

  recommendedDishesDiv.innerHTML = recommendedRecipes.map(recipe => `
    <div class="dish-box">
      <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
    </div>
  `).join('');

  document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
  resultContainer.style.display = 'block';

  gsap.fromTo('.dish-box', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2
  });

  resultDiv.innerHTML += `
    <button class="nav-btn" onclick="startFoodQuiz()">Take Food Quiz</button>
  `;
}

function startFoodQuiz() {
  const quizContainer = document.getElementById('result-container');
  quizContainer.innerHTML = `
    <div id="food-quiz">
      <h2>Food Quiz</h2>
      <div id="quiz-question"></div>
      <div id="quiz-choices"></div>
      <div id="quiz-feedback"></div>
    </div>
  `;
  
  currentQuizQuestion = 0;
  foodQuizScore = 0;
  showFoodQuizQuestion();
}

function showFoodQuizQuestion() {
  const quizQuestion = foodQuizQuestions[currentQuizQuestion];
  const questionDiv = document.getElementById('quiz-question');
  const choicesDiv = document.getElementById('quiz-choices');
  
  questionDiv.innerHTML = `<h3>${quizQuestion.question}</h3>`;
  
  choicesDiv.innerHTML = quizQuestion.choices.map((choice, index) => `
    <button class="quiz-choice-btn" onclick="checkFoodQuizAnswer(${index})">
      ${choice}
    </button>
  `).join('');
}

function checkFoodQuizAnswer(selectedIndex) {
  const quizQuestion = foodQuizQuestions[currentQuizQuestion];
  const feedbackDiv = document.getElementById('quiz-feedback');
  
  if (selectedIndex === quizQuestion.correctAnswer) {
    foodQuizScore++;
    feedbackDiv.innerHTML = `<p style="color: green;">Correct!</p>`;
  } else {
    feedbackDiv.innerHTML = `<p style="color: red;">Incorrect. The correct answer is: ${quizQuestion.choices[quizQuestion.correctAnswer]}</p>`;
  }
  
  currentQuizQuestion++;
  
  if (currentQuizQuestion < foodQuizQuestions.length) {
    setTimeout(() => {
      feedbackDiv.innerHTML = '';
      showFoodQuizQuestion();
    }, 2000);
  } else {
    setTimeout(completeFoodQuiz, 2000);
  }
}

function completeFoodQuiz() {
  const quizContainer = document.getElementById('food-quiz');
  const maxScore = foodQuizQuestions.length;
  const scorePercentage = (foodQuizScore / maxScore) * 100;
  
  let userSkillLevel = 'Beginner';
  
  if (scorePercentage === 100) {
    userSkillLevel = 'GOD';
  } else if (scorePercentage >= 80) {
    userSkillLevel = 'Master';
  } else if (scorePercentage >= 60) {
    userSkillLevel = 'Advanced';
  } else if (scorePercentage >= 40) {
    userSkillLevel = 'Intermediate';
  } else if (scorePercentage >= 20) {
    userSkillLevel = 'Novice';
  }
  
  quizContainer.innerHTML = `
    <h2>Food Quiz Results</h2>
    <p>You scored ${foodQuizScore} out of ${maxScore}</p>
    <p>Your Culinary Knowledge Level: ${userSkillLevel}</p>
    <button class="nav-btn" onclick="showRecommendedRecipes('${userSkillLevel}')">See Recommended Recipes</button>
  `;
}

function showRecommendedRecipes(skillLevel) {
  let recommendedRecipes = recipes.filter(recipe => 
    getRecipeSkillLevel(recipe) === skillLevel
  );
  
  recommendedRecipes = recommendedRecipes.slice(0, 5);
  
  const recipesContainer = document.getElementById('result-container');
  const recommendedDiv = document.getElementById('recommended-dishes');
  
  recommendedDiv.innerHTML = recommendedRecipes.map(recipe => `
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

window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled Promise Rejection:', event.reason);
  // Optionally show a user-friendly error message
  alert('An unexpected error occurred. Please try again later.');
});

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
