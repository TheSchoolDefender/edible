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
}, {
  id: 'enchiladas',
  name: 'Chicken Enchiladas',
  description: 'Cheesy and saucy enchiladas',
  ingredients: ['Tortillas', 'Chicken', 'Cheese', 'Enchilada sauce', 'Sour cream'],
  instructions: ['Cook chicken', 'Fill tortillas with chicken and cheese', 'Roll and place in dish', 'Top with enchilada sauce and more cheese', 'Bake until bubbly'],
  image: 'https://cdn.pixabay.com/photo/2017/08/03/19/56/mexican-2575124_1280.jpg'
},
{
  id: 'pozole',
  name: 'Red Pozole',
  description: 'Traditional Mexican soup with hominy and pork',
  ingredients: ['Pork', 'Hominy', 'Red chiles', 'Onion', 'Garlic', 'Spices'],
  instructions: ['Cook pork until tender', 'Prepare red chile sauce', 'Combine with hominy and spices', 'Simmer until flavours meld', 'Serve with toppings like cabbage and lime'],
  image: 'https://cdn.pixabay.com/photo/2021/11/07/23/03/pozole-6779458_1280.jpg'
},
{
  id: 'tamales',
  name: 'Tamales',
  description: 'Classic corn dough with savoury fillings',
  ingredients: ['Corn husks', 'Masa harina', 'Lard', 'Chicken', 'Salsa'],
  instructions: ['Soak corn husks', 'Prepare masa', 'Fill husks with masa and chicken salsa', 'Steam until cooked'],
  image: 'https://cdn.pixabay.com/photo/2020/01/19/22/11/tamale-4778151_1280.jpg'
},
{
  id: 'sopes',
  name: 'Sopes',
  description: 'Thick corn dough topped with beans and meat',
  ingredients: ['Masa harina', 'Beans', 'Meat', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Shape masa into thick discs', 'Cook on griddle', 'Top with beans, meat, and toppings'],
  image: 'https://cdn.pixabay.com/photo/2018/10/06/15/59/sopes-3730107_1280.jpg'
},
{
  id: 'chiles-rellenos',
  name: 'Chiles Rellenos',
  description: 'Stuffed poblano peppers in tomato sauce',
  ingredients: ['Poblano peppers', 'Cheese', 'Eggs', 'Tomato sauce', 'Flour'],
  instructions: ['Roast and peel peppers', 'Stuff with cheese', 'Dip in egg batter and fry', 'Serve with tomato sauce'],
  image: 'https://cdn.pixabay.com/photo/2019/04/17/19/49/chiles-rellenos-4133814_1280.jpg'
},
{
  id: 'guacamole',
  name: 'Guacamole',
  description: 'Creamy avocado dip',
  ingredients: ['Avocado', 'Tomato', 'Onion', 'Lime', 'Cilantro', 'Salt'],
  instructions: ['Mash avocados', 'Mix in diced tomatoes, onions, and lime juice', 'Season and serve'],
  image: 'https://cdn.pixabay.com/photo/2016/11/22/23/05/avocado-1851421_1280.jpg'
},
{
  id: 'flan',
  name: 'Flan',
  description: 'Creamy caramel custard dessert',
  ingredients: ['Eggs', 'Milk', 'Sugar', 'Vanilla', 'Caramel'],
  instructions: ['Prepare caramel', 'Mix custard ingredients', 'Pour into moulds and bake in water bath', 'Chill before serving'],
  image: 'https://cdn.pixabay.com/photo/2018/01/03/22/12/dessert-3058476_1280.jpg'
},
{
  id: 'mole',
  name: 'Chicken Mole',
  description: 'Rich and flavourful chocolate-based sauce',
  ingredients: ['Chicken', 'Mole paste', 'Chicken broth', 'Chocolate', 'Tortillas'],
  instructions: ['Cook chicken', 'Prepare mole sauce with broth and chocolate', 'Simmer chicken in sauce', 'Serve with tortillas'],
  image: 'https://cdn.pixabay.com/photo/2020/06/13/18/11/mole-5294413_1280.jpg'
},
{
  id: 'fajitas',
  name: 'Beef Fajitas',
  description: 'Sizzling beef with vegetables',
  ingredients: ['Beef', 'Bell peppers', 'Onions', 'Tortillas', 'Seasoning'],
  instructions: ['Marinate beef', 'Cook beef and vegetables', 'Serve with warm tortillas'],
  image: 'https://cdn.pixabay.com/photo/2016/03/05/22/07/fajitas-1236708_1280.jpg'
},
{
  id: 'tostadas',
  name: 'Tostadas',
  description: 'Crispy tortillas topped with beans, meat, and veggies',
  ingredients: ['Tostadas', 'Beans', 'Meat', 'Lettuce', 'Cheese', 'Salsa'],
  instructions: ['Spread beans on tostadas', 'Add meat and toppings', 'Serve immediately'],
  image: 'https://cdn.pixabay.com/photo/2018/09/11/01/46/mexican-food-3669965_1280.jpg'
}, {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts',
    ingredients: ['Chicken', 'Peanuts', 'Bell peppers', 'Soy sauce', 'Chili peppers', 'Garlic'],
    instructions: ['Marinate chicken', 'Sauté garlic and peppers', 'Add chicken and sauce', 'Mix in peanuts and serve'],
    image: 'https://cdn.pixabay.com/photo/2020/09/28/16/45/chicken-5611691_1280.jpg'
  },
  {
    id: 'sweet-sour-pork',
    name: 'Sweet and Sour Pork',
    description: 'Tangy pork with pineapple',
    ingredients: ['Pork', 'Pineapple', 'Bell peppers', 'Vinegar', 'Sugar', 'Ketchup'],
    instructions: ['Fry pork', 'Make sauce with vinegar, sugar, and ketchup', 'Combine with pineapple and peppers', 'Simmer and serve'],
    image: 'https://cdn.pixabay.com/photo/2019/10/21/14/01/food-4567131_1280.jpg'
  },
  {
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    description: 'Spicy tofu in a Sichuan-style sauce',
    ingredients: ['Tofu', 'Ground pork', 'Sichuan peppercorns', 'Chili paste', 'Garlic', 'Soy sauce'],
    instructions: ['Fry pork with garlic', 'Add tofu and spices', 'Simmer in sauce', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2021/08/24/18/37/tofu-6569286_1280.jpg'
  },
  {
    id: 'fried-rice',
    name: 'Yangzhou Fried Rice',
    description: 'Classic Chinese-style fried rice',
    ingredients: ['Rice', 'Shrimp', 'Eggs', 'Peas', 'Soy sauce', 'Carrots'],
    instructions: ['Cook rice', 'Scramble eggs', 'Stir-fry shrimp and vegetables', 'Mix with rice and soy sauce'],
    image: 'https://cdn.pixabay.com/photo/2019/08/16/23/12/fried-rice-4411932_1280.jpg'
  },
  {
    id: 'hot-sour-soup',
    name: 'Hot and Sour Soup',
    description: 'Spicy and tangy Chinese soup',
    ingredients: ['Chicken broth', 'Mushrooms', 'Tofu', 'Soy sauce', 'Vinegar', 'Chili oil'],
    instructions: ['Heat broth', 'Add mushrooms, tofu, and seasonings', 'Simmer and serve hot'],
    image: 'https://cdn.pixabay.com/photo/2017/02/23/14/01/soup-2090022_1280.jpg'
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    description: 'Crispy Chinese appetiser',
    ingredients: ['Spring roll wrappers', 'Cabbage', 'Carrots', 'Soy sauce', 'Oil'],
    instructions: ['Prepare filling with vegetables', 'Wrap in spring roll wrappers', 'Fry until golden'],
    image: 'https://cdn.pixabay.com/photo/2017/10/01/19/39/spring-rolls-2802325_1280.jpg'
  },
  {
    id: 'char-siu',
    name: 'Char Siu',
    description: 'Chinese-style barbecue pork',
    ingredients: ['Pork', 'Hoisin sauce', 'Honey', 'Soy sauce', 'Five-spice powder'],
    instructions: ['Marinate pork', 'Roast in oven', 'Brush with honey glaze and serve'],
    image: 'https://cdn.pixabay.com/photo/2020/06/08/17/41/char-siu-5275158_1280.jpg'
  },
  {
    id: 'dumplings',
    name: 'Chinese Dumplings',
    description: 'Savory dumplings with pork and vegetable filling',
    ingredients: ['Dumpling wrappers', 'Ground pork', 'Cabbage', 'Garlic', 'Soy sauce', 'Ginger'],
    instructions: ['Prepare filling', 'Wrap in dumpling wrappers', 'Steam, boil, or fry until cooked'],
    image: 'https://cdn.pixabay.com/photo/2017/02/17/11/31/dumplings-2076973_1280.jpg'
  },
  {
    id: 'beef-broccoli',
    name: 'Beef and Broccoli',
    description: 'Stir-fried beef and broccoli in savoury sauce',
    ingredients: ['Beef', 'Broccoli', 'Soy sauce', 'Garlic', 'Oyster sauce', 'Cornstarch'],
    instructions: ['Marinate beef', 'Stir-fry beef and broccoli', 'Add sauce and simmer'],
    image: 'https://cdn.pixabay.com/photo/2020/06/15/10/54/beef-5300912_1280.jpg'
  },
  {
    id: 'lo-mein',
    name: 'Vegetable Lo Mein',
    description: 'Chinese stir-fried noodles',
    ingredients: ['Noodles', 'Carrots', 'Cabbage', 'Soy sauce', 'Garlic', 'Sesame oil'],
    instructions: ['Cook noodles', 'Stir-fry vegetables and garlic', 'Combine with noodles and sauce'],
    image: 'https://cdn.pixabay.com/photo/2020/01/06/13/40/noodles-4745708_1280.jpg'
  }, {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Creamy and rich chicken curry',
    ingredients: ['Chicken', 'Tomato puree', 'Cream', 'Butter', 'Garlic', 'Garam masala'],
    instructions: ['Marinate chicken', 'Cook tomato-based sauce', 'Add chicken and cream', 'Simmer and serve with naan'],
    image: 'https://cdn.pixabay.com/photo/2020/03/18/17/28/indian-food-4943840_1280.jpg'
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    description: 'Cottage cheese in spinach curry',
    ingredients: ['Spinach', 'Paneer', 'Garlic', 'Onion', 'Cream', 'Spices'],
    instructions: ['Blanch spinach', 'Blend into a puree', 'Cook with spices', 'Add paneer and simmer'],
    image: 'https://cdn.pixabay.com/photo/2017/08/28/20/07/indian-food-2687276_1280.jpg'
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    description: 'Flavourful rice dish with spices and chicken',
    ingredients: ['Chicken', 'Rice', 'Yogurt', 'Spices', 'Onion', 'Ghee'],
    instructions: ['Marinate chicken', 'Cook rice with spices', 'Layer chicken and rice', 'Steam and serve'],
    image: 'https://cdn.pixabay.com/photo/2021/01/28/19/33/biryani-5958446_1280.jpg'
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    description: 'Lentils tempered with aromatic spices',
    ingredients: ['Yellow lentils', 'Garlic', 'Onion', 'Tomato', 'Cumin', 'Ghee'],
    instructions: ['Cook lentils', 'Prepare tempering with ghee and spices', 'Combine with lentils and simmer'],
    image: 'https://cdn.pixabay.com/photo/2020/04/26/07/30/dal-5093774_1280.jpg'
  },
  {
    id: 'samosa',
    name: 'Samosa',
    description: 'Deep-fried pastry filled with spiced potatoes',
    ingredients: ['Potatoes', 'Peas', 'Flour', 'Spices', 'Oil'],
    instructions: ['Prepare dough', 'Make spiced potato filling', 'Shape and fry samosas', 'Serve with chutney'],
    image: 'https://cdn.pixabay.com/photo/2021/02/15/14/29/samosa-6017697_1280.jpg'
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, grilled to perfection',
    ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lemon juice', 'Garlic', 'Ginger'],
    instructions: ['Marinate chicken', 'Cook in tandoor or oven', 'Serve with mint chutney'],
    image: 'https://cdn.pixabay.com/photo/2020/06/01/20/09/tandoori-chicken-5249332_1280.jpg'
  },
  {
    id: 'chole',
    name: 'Chole',
    description: 'Spiced chickpea curry',
    ingredients: ['Chickpeas', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices'],
    instructions: ['Cook chickpeas', 'Make gravy with onion, tomato, and spices', 'Combine and simmer'],
    image: 'https://cdn.pixabay.com/photo/2021/08/26/06/29/chickpeas-6576760_1280.jpg'
  },
  {
    id: 'naan',
    name: 'Naan',
    description: 'Soft and fluffy Indian flatbread',
    ingredients: ['Flour', 'Yogurt', 'Yeast', 'Milk', 'Ghee'],
    instructions: ['Prepare dough', 'Roll and cook on tawa or oven', 'Brush with ghee and serve'],
    image: 'https://cdn.pixabay.com/photo/2016/11/21/16/02/naan-1840944_1280.jpg'
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji',
    description: 'Spiced mashed vegetables served with buttery bread',
    ingredients: ['Potatoes', 'Tomatoes', 'Peas', 'Capsicum', 'Butter', 'Pav buns'],
    instructions: ['Cook and mash vegetables', 'Prepare masala', 'Serve with buttered pav'],
    image: 'https://cdn.pixabay.com/photo/2020/04/28/06/01/pav-bhaji-5102980_1280.jpg'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Sweet fried dumplings soaked in sugar syrup',
    ingredients: ['Milk powder', 'Flour', 'Sugar', 'Cardamom', 'Ghee'],
    instructions: ['Make dough', 'Shape and fry dumplings', 'Soak in sugar syrup', 'Serve warm'],
    image: 'https://cdn.pixabay.com/photo/2019/11/20/13/34/gulab-jamun-4641158_1280.jpg'
  }, {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'Classic pasta with eggs, cheese, pancetta, and black pepper',
    ingredients: ['Spaghetti', 'Egg yolks', 'Parmesan cheese', 'Pancetta', 'Black pepper'],
    instructions: ['Cook spaghetti', 'Fry pancetta', 'Mix eggs and cheese', 'Combine with pasta and pancetta', 'Serve with black pepper'],
    image: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/spaghetti-3013582_1280.jpg'
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'Simple and fresh pizza with tomato, mozzarella, and basil',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
    instructions: ['Prepare dough', 'Spread tomato sauce', 'Add mozzarella and basil', 'Bake in oven', 'Drizzle with olive oil'],
    image: 'https://cdn.pixabay.com/photo/2017/03/27/13/27/pizza-2178747_1280.jpg'
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    description: 'Layers of pasta, meat sauce, and creamy béchamel',
    ingredients: ['Lasagna sheets', 'Minced beef', 'Tomato sauce', 'Béchamel sauce', 'Parmesan cheese'],
    instructions: ['Cook meat sauce', 'Prepare béchamel', 'Layer pasta, sauces, and cheese', 'Bake in oven', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2020/02/06/20/01/lasagna-4825609_1280.jpg'
  },
  {
    id: 'risotto-alla-milanese',
    name: 'Risotto alla Milanese',
    description: 'Creamy risotto flavoured with saffron',
    ingredients: ['Arborio rice', 'Saffron', 'Chicken stock', 'Butter', 'Parmesan cheese'],
    instructions: ['Sauté rice in butter', 'Add stock gradually', 'Mix in saffron and cheese', 'Cook until creamy'],
    image: 'https://cdn.pixabay.com/photo/2017/03/27/14/44/risotto-2179017_1280.jpg'
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomato, garlic, and basil',
    ingredients: ['Bread', 'Tomatoes', 'Garlic', 'Basil', 'Olive oil'],
    instructions: ['Toast bread', 'Mix chopped tomatoes with garlic and basil', 'Top bread with mixture', 'Drizzle with olive oil'],
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bruschetta-1842067_1280.jpg'
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
    ingredients: ['Ladyfingers', 'Mascarpone cheese', 'Eggs', 'Sugar', 'Coffee', 'Cocoa powder'],
    instructions: ['Dip ladyfingers in coffee', 'Layer with mascarpone mixture', 'Repeat layers', 'Dust with cocoa and chill'],
    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/45/tiramisu-690254_1280.jpg'
  },
  {
    id: 'fettuccine-alfredo',
    name: 'Fettuccine Alfredo',
    description: 'Creamy pasta with butter and Parmesan cheese',
    ingredients: ['Fettuccine', 'Butter', 'Parmesan cheese', 'Heavy cream'],
    instructions: ['Cook pasta', 'Melt butter in a pan', 'Add cream and cheese', 'Toss with pasta', 'Serve warm'],
    image: 'https://cdn.pixabay.com/photo/2017/07/05/16/49/alfredo-2471937_1280.jpg'
  },
  {
    id: 'caprese-salad',
    name: 'Caprese Salad',
    description: 'Fresh salad with tomatoes, mozzarella, and basil',
    ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive oil', 'Balsamic glaze'],
    instructions: ['Slice tomatoes and mozzarella', 'Layer with basil', 'Drizzle with olive oil and balsamic glaze'],
    image: 'https://cdn.pixabay.com/photo/2016/08/06/20/46/tomato-mozzarella-1575066_1280.jpg'
  },
  {
    id: 'osso-buco',
    name: 'Osso Buco',
    description: 'Braised veal shanks in a rich tomato sauce',
    ingredients: ['Veal shanks', 'Carrots', 'Celery', 'Tomato paste', 'White wine', 'Stock'],
    instructions: ['Sear veal shanks', 'Cook vegetables', 'Simmer with wine, stock, and tomato', 'Serve with gremolata'],
    image: 'https://cdn.pixabay.com/photo/2017/01/16/19/04/veal-1987634_1280.jpg'
  },
  {
    id: 'panna-cotta',
    name: 'Panna Cotta',
    description: 'Silky dessert made with cream and vanilla',
    ingredients: ['Heavy cream', 'Sugar', 'Gelatin', 'Vanilla'],
    instructions: ['Heat cream and sugar', 'Dissolve gelatin', 'Pour into moulds and chill', 'Serve with fruit sauce'],
    image: 'https://cdn.pixabay.com/photo/2019/11/17/20/52/dessert-4633976_1280.jpg'
  }, {
    id: 'ratatouille',
    name: 'Ratatouille',
    description: 'Rustic vegetable stew with zucchini, eggplant, and tomatoes',
    ingredients: ['Zucchini', 'Eggplant', 'Tomatoes', 'Onions', 'Garlic', 'Olive oil', 'Herbs de Provence'],
    instructions: ['Slice vegetables', 'Sauté onions and garlic', 'Layer vegetables in a dish', 'Bake until tender', 'Serve warm'],
    image: 'https://cdn.pixabay.com/photo/2015/07/28/16/29/ratatouille-865512_1280.jpg'
  },
  {
    id: 'coq-au-vin',
    name: 'Coq au Vin',
    description: 'Chicken braised in red wine with mushrooms, bacon, and onions',
    ingredients: ['Chicken', 'Red wine', 'Mushrooms', 'Onions', 'Bacon', 'Garlic', 'Thyme'],
    instructions: ['Brown chicken', 'Cook bacon and vegetables', 'Simmer with wine and herbs', 'Serve with crusty bread'],
    image: 'https://cdn.pixabay.com/photo/2019/11/06/16/21/coq-au-vin-4606661_1280.jpg'
  },
  {
    id: 'quiche-lorraine',
    name: 'Quiche Lorraine',
    description: 'Savory tart with eggs, cream, bacon, and cheese',
    ingredients: ['Pie crust', 'Eggs', 'Heavy cream', 'Bacon', 'Gruyère cheese', 'Nutmeg'],
    instructions: ['Prepare crust', 'Cook bacon', 'Mix eggs, cream, and cheese', 'Pour into crust and bake'],
    image: 'https://cdn.pixabay.com/photo/2021/09/24/12/08/quiche-6651550_1280.jpg'
  },
  {
    id: 'bouillabaisse',
    name: 'Bouillabaisse',
    description: 'Traditional Provençal fish stew with a rich saffron broth',
    ingredients: ['Assorted fish', 'Shellfish', 'Tomatoes', 'Garlic', 'Fennel', 'Saffron', 'Olive oil'],
    instructions: ['Sauté garlic and fennel', 'Add tomatoes and saffron', 'Simmer with fish and shellfish', 'Serve with crusty bread'],
    image: 'https://cdn.pixabay.com/photo/2018/06/18/10/42/bouillabaisse-3480838_1280.jpg'
  },
  {
    id: 'croque-monsieur',
    name: 'Croque Monsieur',
    description: 'Toasted ham and cheese sandwich with béchamel sauce',
    ingredients: ['Bread', 'Ham', 'Gruyère cheese', 'Butter', 'Flour', 'Milk', 'Nutmeg'],
    instructions: ['Make béchamel', 'Assemble sandwich with ham and cheese', 'Toast in oven', 'Serve hot'],
    image: 'https://cdn.pixabay.com/photo/2021/08/17/16/37/croque-monsieur-6553075_1280.jpg'
  },
  {
    id: 'souffle-au-chocolat',
    name: 'Soufflé au Chocolat',
    description: 'Fluffy and rich chocolate dessert',
    ingredients: ['Dark chocolate', 'Eggs', 'Sugar', 'Butter', 'Flour', 'Cream'],
    instructions: ['Melt chocolate', 'Whisk egg whites to stiff peaks', 'Fold into chocolate mixture', 'Bake until risen'],
    image: 'https://cdn.pixabay.com/photo/2016/03/05/22/06/souffle-1238390_1280.jpg'
  },
  {
    id: 'boeuf-bourguignon',
    name: 'Boeuf Bourguignon',
    description: 'Beef slow-cooked in red wine with carrots, onions, and mushrooms',
    ingredients: ['Beef', 'Red wine', 'Carrots', 'Onions', 'Mushrooms', 'Garlic', 'Thyme'],
    instructions: ['Brown beef', 'Sauté vegetables', 'Simmer with wine and herbs', 'Cook until tender'],
    image: 'https://cdn.pixabay.com/photo/2018/01/12/19/39/boeuf-bourguignon-3077076_1280.jpg'
  },
  {
    id: 'tarte-tatin',
    name: 'Tarte Tatin',
    description: 'Upside-down caramelised apple tart',
    ingredients: ['Apples', 'Sugar', 'Butter', 'Puff pastry'],
    instructions: ['Caramelise apples with sugar and butter', 'Cover with pastry', 'Bake and flip to serve'],
    image: 'https://cdn.pixabay.com/photo/2017/12/23/09/28/tarte-tatin-3039875_1280.jpg'
  },
  {
    id: 'crepes',
    name: 'Crêpes',
    description: 'Thin French pancakes, perfect for sweet or savoury fillings',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Sugar', 'Salt'],
    instructions: ['Mix batter', 'Cook thin layers in a pan', 'Fill with desired toppings', 'Fold and serve'],
    image: 'https://cdn.pixabay.com/photo/2015/01/30/11/33/crepes-617250_1280.jpg'
  },
  {
    id: 'madeleines',
    name: 'Madeleines',
    description: 'Small shell-shaped sponge cakes',
    ingredients: ['Flour', 'Butter', 'Eggs', 'Sugar', 'Vanilla', 'Lemon zest'],
    instructions: ['Mix batter', 'Chill and fill moulds', 'Bake until golden', 'Serve with tea'],
    image: 'https://cdn.pixabay.com/photo/2021/01/25/18/14/madeleines-5947462_1280.jpg'
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
