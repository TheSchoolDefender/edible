let currentQuestion = 1
let answers = {}
const questions = [
  {
    question: "FAQ: So How do you like your cheese sir?",
    answer: "drippy",
  },
]

// Complete recipe database with 100+ recipes
const recipes = [
  // Breakfast Recipes
  {
    id: "fruit-smoothie",
    name: "Fruit Smoothie",
    description: "A refreshing blend of fruits and yogurt",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: ["Banana", "Berries", "Yogurt", "Honey"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "scrambled-eggs",
    name: "Scrambled Eggs",
    description: "Fluffy and creamy scrambled eggs",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
    ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "pancakes",
    name: "Pancakes",
    description: "Light and fluffy breakfast pancakes",
    image: "https://images.unsplash.com/photo-1567620905739-30a097e8f929?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Butter"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "french-toast",
    name: "French Toast",
    description: "Golden brown French toast with cinnamon",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Healthy avocado spread on toasted bread",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "breakfast-burrito",
    name: "Breakfast Burrito",
    description: "Hearty breakfast wrapped in a tortilla",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    ingredients: ["Tortillas", "Eggs", "Cheese", "Beans", "Salsa", "Avocado"],
    skillLevel: "Intermediate",
    cuisine: "Mexican",
  },
  {
    id: "smoothie-bowl",
    name: "Smoothie Bowl",
    description: "Thick smoothie topped with fruits and granola",
    image: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?w=400&h=300&fit=crop",
    ingredients: ["Banana", "Berries", "Yogurt", "Granola", "Honey", "Chia Seeds"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "vegetable-omelette",
    name: "Vegetable Omelette",
    description: "Fluffy omelette filled with fresh vegetables",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop",
    ingredients: ["Eggs", "Bell Peppers", "Onions", "Spinach", "Cheese", "Butter"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },
  {
    id: "breakfast-parfait",
    name: "Breakfast Parfait",
    description: "Layered yogurt with fruits and granola",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    ingredients: ["Yogurt", "Berries", "Granola", "Honey", "Nuts"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "eggs-benedict",
    name: "Eggs Benedict",
    description: "Poached eggs with hollandaise sauce on English muffins",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop",
    ingredients: ["Eggs", "English Muffins", "Ham", "Butter", "Lemon", "Vinegar"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "breakfast-pizza",
    name: "Breakfast Pizza",
    description: "Pizza topped with eggs and breakfast ingredients",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    ingredients: ["Pizza Dough", "Eggs", "Cheese", "Bacon", "Bell Peppers", "Onions"],
    skillLevel: "Intermediate",
    cuisine: "Italian",
  },
  {
    id: "hash-browns",
    name: "Hash Browns",
    description: "Crispy shredded potatoes",
    image: "https://images.unsplash.com/photo-1623689046286-01d442216df1?w=400&h=300&fit=crop",
    ingredients: ["Potatoes", "Onions", "Butter", "Salt", "Pepper"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    description: "Eggs poached in spiced tomato sauce",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=400&h=300&fit=crop",
    ingredients: ["Eggs", "Tomatoes", "Bell Peppers", "Onions", "Garlic", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Middle Eastern",
  },
  {
    id: "waffles",
    name: "Waffles",
    description: "Crispy golden waffles",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f35b6?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar", "Baking Powder"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },

  // American Main Dishes
  {
    id: "grilled-cheese",
    name: "Grilled Cheese",
    description: "Classic grilled cheese sandwich",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop",
    ingredients: ["Bread", "Cheese", "Butter"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "hamburger",
    name: "Hamburger",
    description: "Juicy beef hamburger with all the fixings",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    ingredients: ["Ground Beef", "Bread", "Lettuce", "Tomatoes", "Cheese", "Onions"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "mac-cheese",
    name: "Mac & Cheese",
    description: "Creamy macaroni and cheese",
    image: "https://images.unsplash.com/photo-1543826173-1ad8b0b1b2b1?w=400&h=300&fit=crop",
    ingredients: ["Pasta", "Cheese", "Milk", "Butter", "Flour"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    description: "Crispy golden fried chicken",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Flour", "Eggs", "Milk", "Spices", "Oil"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "bbq-ribs",
    name: "BBQ Ribs",
    description: "Tender barbecue ribs with smoky sauce",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Brown Sugar", "Spices", "Vinegar"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "meatloaf",
    name: "Meatloaf",
    description: "Classic American meatloaf with tomato glaze",
    image: "https://images.unsplash.com/photo-1600891963935-9e2e13096d9a?w=400&h=300&fit=crop",
    ingredients: ["Ground Beef", "Onions", "Breadcrumbs", "Eggs", "Ketchup", "Worcestershire Sauce"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "chicken-pot-pie",
    name: "Chicken Pot Pie",
    description: "Comforting pie filled with chicken and vegetables",
    image: "https://images.unsplash.com/photo-1562875357-6721c598512d?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Carrots", "Peas", "Onions", "Flour", "Butter", "Pastry"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "buffalo-wings",
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop",
    ingredients: ["Chicken Wings", "Hot Sauce", "Butter", "Garlic", "Blue Cheese", "Celery"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "clam-chowder",
    name: "Clam Chowder",
    description: "Creamy soup with clams and potatoes",
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400&h=300&fit=crop",
    ingredients: ["Clams", "Potatoes", "Onions", "Celery", "Bacon", "Cream", "Flour"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "cornbread",
    name: "Cornbread",
    description: "Sweet and savory Southern cornbread",
    image: "https://images.unsplash.com/photo-1612540846699-6c0e2e9d7178?w=400&h=300&fit=crop",
    ingredients: ["Cornmeal", "Flour", "Eggs", "Milk", "Butter", "Sugar"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },

  // Mexican Cuisine
  {
    id: "basic-tacos",
    name: "Basic Tacos",
    description: "Simple and delicious tacos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    ingredients: ["Tortillas", "Ground Beef", "Cheese", "Lettuce", "Tomatoes"],
    skillLevel: "Beginner",
    cuisine: "Mexican",
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    description: "Rolled tortillas with sauce and cheese",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop",
    ingredients: ["Tortillas", "Chicken", "Cheese", "Enchilada Sauce", "Onions"],
    skillLevel: "Intermediate",
    cuisine: "Mexican",
  },
  {
    id: "pozole",
    name: "Pozole",
    description: "Traditional Mexican soup with hominy",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop",
    ingredients: ["Pork", "Hominy", "Chili Peppers", "Onions", "Garlic", "Oregano"],
    skillLevel: "Master",
    cuisine: "Mexican",
  },
  {
    id: "tamales",
    name: "Tamales",
    description: "Corn dough filled with meat and steamed in corn husks",
    image: "https://images.unsplash.com/photo-1617424771170-d333ef3d2674?w=400&h=300&fit=crop",
    ingredients: ["Masa Harina", "Corn Husks", "Pork", "Chili Peppers", "Lard", "Spices"],
    skillLevel: "Master",
    cuisine: "Mexican",
  },
  {
    id: "sopes",
    name: "Sopes",
    description: "Thick corn tortillas with toppings",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop",
    ingredients: ["Masa Harina", "Beans", "Cheese", "Lettuce", "Salsa", "Sour Cream"],
    skillLevel: "Intermediate",
    cuisine: "Mexican",
  },
  {
    id: "chiles-rellenos",
    name: "Chiles Rellenos",
    description: "Stuffed and fried poblano peppers",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop",
    ingredients: ["Poblano Peppers", "Cheese", "Eggs", "Flour", "Tomato Sauce", "Spices"],
    skillLevel: "Master",
    cuisine: "Mexican",
  },
  {
    id: "guacamole",
    name: "Guacamole",
    description: "Fresh avocado dip with lime and cilantro",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    ingredients: ["Avocado", "Lime", "Cilantro", "Onions", "Tomatoes"],
    skillLevel: "Beginner",
    cuisine: "Mexican",
  },
  {
    id: "fajitas",
    name: "Fajitas",
    description: "Sizzling chicken or beef with peppers",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Bell Peppers", "Onions", "Tortillas", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Mexican",
  },
  {
    id: "tostadas",
    name: "Tostadas",
    description: "Crispy flat tortillas with toppings",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop",
    ingredients: ["Tortillas", "Beans", "Chicken", "Lettuce", "Cheese", "Salsa"],
    skillLevel: "Intermediate",
    cuisine: "Mexican",
  },

  // Chinese Cuisine
  {
    id: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    description: "Spicy chicken with peanuts and vegetables",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Peanuts", "Vegetables", "Soy Sauce", "Chili Peppers"],
    skillLevel: "Master",
    cuisine: "Chinese",
  },
  {
    id: "sweet-sour-pork",
    name: "Sweet & Sour Pork",
    description: "Crispy pork in sweet and sour sauce",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    ingredients: ["Pork", "Pineapple", "Bell Peppers", "Vinegar", "Sugar"],
    skillLevel: "Master",
    cuisine: "Chinese",
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    description: "Spicy tofu dish with minced meat",
    image: "https://images.unsplash.com/photo-1582452919957-5c2233e4cd1b?w=400&h=300&fit=crop",
    ingredients: ["Tofu", "Ground Pork", "Doubanjiang", "Sichuan Peppercorns", "Garlic", "Green Onions"],
    skillLevel: "Intermediate",
    cuisine: "Chinese",
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    description: "Classic Chinese fried rice with vegetables",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    ingredients: ["Rice", "Eggs", "Vegetables", "Soy Sauce", "Oil"],
    skillLevel: "Intermediate",
    cuisine: "Chinese",
  },
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    description: "Fresh or fried spring rolls with vegetables",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    ingredients: ["Spring Roll Wrappers", "Vegetables", "Shrimp", "Herbs"],
    skillLevel: "Intermediate",
    cuisine: "Chinese",
  },
  {
    id: "char-siu",
    name: "Char Siu",
    description: "Chinese barbecue pork",
    image: "https://images.unsplash.com/photo-1582452919957-5c2233e4cd1b?w=400&h=300&fit=crop",
    ingredients: ["Pork", "Hoisin Sauce", "Honey", "Five Spice Powder", "Soy Sauce", "Garlic"],
    skillLevel: "Master",
    cuisine: "Chinese",
  },
  {
    id: "dumplings",
    name: "Dumplings",
    description: "Steamed or fried dumplings with filling",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Ground Pork", "Cabbage", "Green Onions", "Ginger", "Garlic"],
    skillLevel: "Master",
    cuisine: "Chinese",
  },
  {
    id: "beef-broccoli",
    name: "Beef & Broccoli",
    description: "Stir-fried beef with broccoli in savory sauce",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    ingredients: ["Beef", "Broccoli", "Soy Sauce", "Garlic", "Ginger", "Cornstarch"],
    skillLevel: "Intermediate",
    cuisine: "Chinese",
  },
  {
    id: "lo-mein",
    name: "Lo Mein",
    description: "Stir-fried noodles with vegetables and meat",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    ingredients: ["Noodles", "Vegetables", "Chicken", "Soy Sauce", "Sesame Oil", "Garlic"],
    skillLevel: "Intermediate",
    cuisine: "Chinese",
  },

  // Indian Cuisine
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    description: "Spinach curry with cottage cheese",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    ingredients: ["Spinach", "Paneer", "Onions", "Garlic", "Spices"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    description: "Fragrant rice dish with spiced chicken",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
    ingredients: ["Rice", "Chicken", "Yogurt", "Onions", "Spices"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    description: "Spiced lentil curry",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    ingredients: ["Lentils", "Onions", "Tomatoes", "Garlic", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Indian",
  },
  {
    id: "samosa",
    name: "Samosa",
    description: "Fried pastry with savory filling",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Potatoes", "Peas", "Onions", "Spices", "Oil"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    description: "Yogurt and spice marinated chicken",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Yogurt", "Lemon", "Garlic", "Ginger", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Indian",
  },
  {
    id: "chole",
    name: "Chole",
    description: "Spicy chickpea curry",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    ingredients: ["Chickpeas", "Tomatoes", "Onions", "Garlic", "Ginger", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Indian",
  },
  {
    id: "naan",
    name: "Naan",
    description: "Leavened flatbread from the tandoor",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Yogurt", "Butter", "Yeast", "Sugar", "Salt"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "pav-bhaji",
    name: "Pav Bhaji",
    description: "Spiced vegetable mash with buttered rolls",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    ingredients: ["Potatoes", "Mixed Vegetables", "Butter", "Bread Rolls", "Onions", "Spices"],
    skillLevel: "Intermediate",
    cuisine: "Indian",
  },

  // Italian Cuisine
  {
    id: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    description: "Classic Roman pasta with eggs and cheese",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
    ingredients: ["Spaghetti", "Eggs", "Cheese", "Bacon", "Pepper"],
    skillLevel: "Master",
    cuisine: "Italian",
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella", "Basil", "Olive Oil"],
    skillLevel: "Intermediate",
    cuisine: "Italian",
  },
  {
    id: "lasagna",
    name: "Lasagna",
    description: "Layered pasta with meat sauce and cheese",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    ingredients: ["Lasagna Noodles", "Ground Beef", "Cheese", "Tomato Sauce", "Herbs"],
    skillLevel: "Master",
    cuisine: "Italian",
  },
  {
    id: "risotto-milanese",
    name: "Risotto alla Milanese",
    description: "Creamy saffron risotto",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c7?w=400&h=300&fit=crop",
    ingredients: ["Arborio Rice", "Saffron", "Onions", "White Wine", "Butter", "Parmesan"],
    skillLevel: "Master",
    cuisine: "Italian",
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    description: "Toasted bread with tomato and basil topping",
    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop",
    ingredients: ["Bread", "Tomatoes", "Basil", "Garlic", "Olive Oil"],
    skillLevel: "Beginner",
    cuisine: "Italian",
  },
  {
    id: "fettuccine-alfredo",
    name: "Fettuccine Alfredo",
    description: "Pasta with creamy parmesan sauce",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023a3a2?w=400&h=300&fit=crop",
    ingredients: ["Fettuccine", "Butter", "Heavy Cream", "Parmesan", "Garlic", "Pepper"],
    skillLevel: "Intermediate",
    cuisine: "Italian",
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    description: "Simple salad with tomatoes, mozzarella, and basil",
    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop",
    ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil", "Balsamic Vinegar", "Salt"],
    skillLevel: "Beginner",
    cuisine: "Italian",
  },
  {
    id: "osso-buco",
    name: "Osso Buco",
    description: "Braised veal shanks with vegetables",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
    ingredients: ["Veal Shanks", "Onions", "Carrots", "Celery", "White Wine", "Tomatoes", "Herbs"],
    skillLevel: "Master",
    cuisine: "Italian",
  },

  // French Cuisine
  {
    id: "coq-au-vin",
    name: "Coq au Vin",
    description: "Chicken braised in wine with vegetables",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Red Wine", "Mushrooms", "Onions", "Herbs"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "quiche-lorraine",
    name: "Quiche Lorraine",
    description: "Savory tart with eggs, cream, and bacon",
    image: "https://images.unsplash.com/photo-1571197119282-7c4e2b2d9c6a?w=400&h=300&fit=crop",
    ingredients: ["Pastry", "Eggs", "Cream", "Bacon", "Cheese"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "bouillabaisse",
    name: "Bouillabaisse",
    description: "Provençal fish stew with various seafood",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    ingredients: ["Fish", "Shellfish", "Tomatoes", "Fennel", "Onions", "Garlic", "Saffron"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "croque-monsieur",
    name: "Croque Monsieur",
    description: "Grilled ham and cheese sandwich with béchamel",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop",
    ingredients: ["Bread", "Ham", "Cheese", "Butter", "Flour", "Milk"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },
  {
    id: "boeuf-bourguignon",
    name: "Boeuf Bourguignon",
    description: "Beef stew braised in red wine",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    ingredients: ["Beef", "Red Wine", "Bacon", "Onions", "Carrots", "Mushrooms", "Herbs"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "crepes",
    name: "Crêpes",
    description: "Thin French pancakes with various fillings",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },

  // Desserts & Treats
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Chocolate Chips"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Rich and fudgy chocolate brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Creamy New York style cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
    ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Crackers", "Butter"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "vanilla-cupcakes",
    name: "Vanilla Cupcakes",
    description: "Light and fluffy vanilla cupcakes with frosting",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla", "Milk"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "homemade-ice-cream",
    name: "Homemade Ice Cream",
    description: "Creamy vanilla ice cream made from scratch",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    ingredients: ["Heavy Cream", "Milk", "Sugar", "Vanilla", "Eggs"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "banana-bread",
    name: "Banana Bread",
    description: "Moist and delicious banana bread",
    image: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?w=400&h=300&fit=crop",
    ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter", "Baking Soda"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description: "Spiced cake with carrots and cream cheese frosting",
    image: "https://images.unsplash.com/photo-1622926421334-6829deee4b4b?w=400&h=300&fit=crop",
    ingredients: ["Carrots", "Flour", "Sugar", "Eggs", "Oil", "Spices", "Cream Cheese"],
    skillLevel: "Intermediate",
    cuisine: "American",
  },
  {
    id: "glazed-donuts",
    name: "Glazed Donuts",
    description: "Soft and fluffy donuts with sweet glaze",
    image: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Yeast", "Sugar", "Milk", "Eggs", "Butter", "Vanilla"],
    skillLevel: "Master",
    cuisine: "American",
  },
  {
    id: "churros",
    name: "Churros",
    description: "Fried dough pastry with cinnamon sugar",
    image: "https://images.unsplash.com/photo-1624001877690-b61842a9a42a?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Water", "Butter", "Sugar", "Cinnamon", "Oil"],
    skillLevel: "Intermediate",
    cuisine: "Spanish",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Italian coffee-flavored dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Eggs", "Cocoa"],
    skillLevel: "Master",
    cuisine: "Italian",
  },
  {
    id: "chocolate-souffle",
    name: "Soufflé au Chocolat",
    description: "Light and airy chocolate soufflé",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
    ingredients: ["Chocolate", "Eggs", "Butter", "Sugar", "Flour"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "tarte-tatin",
    name: "Tarte Tatin",
    description: "Upside-down caramelized apple tart",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?w=400&h=300&fit=crop",
    ingredients: ["Apples", "Sugar", "Butter", "Pastry", "Lemon"],
    skillLevel: "Master",
    cuisine: "French",
  },
  {
    id: "madeleines",
    name: "Madeleines",
    description: "Small shell-shaped sponge cakes",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Lemon Zest"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },
  {
    id: "panna-cotta",
    name: "Panna Cotta",
    description: "Italian cream dessert with berries",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    ingredients: ["Heavy Cream", "Sugar", "Vanilla", "Gelatin", "Berries"],
    skillLevel: "Intermediate",
    cuisine: "Italian",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Indian sweet milk solids balls in syrup",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    ingredients: ["Milk Powder", "Flour", "Butter", "Sugar", "Cardamom", "Rose Water"],
    skillLevel: "Master",
    cuisine: "Indian",
  },
  {
    id: "flan",
    name: "Flan",
    description: "Caramel custard dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    ingredients: ["Eggs", "Milk", "Sugar", "Vanilla"],
    skillLevel: "Intermediate",
    cuisine: "Spanish",
  },

  // Beverages
  {
    id: "lemonade",
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade",
    image: "https://images.unsplash.com/photo-1523371683702-af5cd0cd9c65?w=400&h=300&fit=crop",
    ingredients: ["Lemons", "Sugar", "Water"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "berry-smoothie",
    name: "Berry Smoothie",
    description: "Refreshing mixed berry smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: ["Mixed Berries", "Yogurt", "Honey", "Ice", "Milk"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "tropical-smoothie",
    name: "Tropical Smoothie",
    description: "Tropical fruit smoothie with coconut",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: ["Mango", "Pineapple", "Banana", "Coconut Milk", "Ice"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "green-smoothie",
    name: "Green Smoothie",
    description: "Healthy green smoothie with spinach",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: ["Spinach", "Banana", "Apple", "Lemon", "Ginger", "Water"],
    skillLevel: "Beginner",
    cuisine: "American",
  },
  {
    id: "chocolate-milkshake",
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: ["Ice Cream", "Milk", "Chocolate Syrup", "Whipped Cream"],
    skillLevel: "Beginner",
    cuisine: "American",
  },

  // Additional recipes to reach 100+
  {
    id: "greek-salad",
    name: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop",
    ingredients: ["Cucumber", "Tomatoes", "Olives", "Feta Cheese", "Red Onion", "Olive Oil"],
    skillLevel: "Beginner",
    cuisine: "Greek",
  },
  {
    id: "hummus",
    name: "Hummus",
    description: "Creamy chickpea dip with tahini",
    image: "https://images.unsplash.com/photo-1590379492966-e076d8f84c2d?w=400&h=300&fit=crop",
    ingredients: ["Chickpeas", "Tahini", "Lemon", "Garlic", "Olive Oil", "Cumin"],
    skillLevel: "Beginner",
    cuisine: "Middle Eastern",
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Thai stir-fried noodles with peanuts",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
    ingredients: ["Rice Noodles", "Tofu", "Bean Sprouts", "Eggs", "Peanuts", "Lime", "Fish Sauce"],
    skillLevel: "Master",
    cuisine: "Thai",
  },
  {
    id: "sushi-rolls",
    name: "Sushi Rolls",
    description: "Japanese rolled sushi with various fillings",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    ingredients: ["Sushi Rice", "Nori", "Fish", "Avocado", "Cucumber", "Soy Sauce", "Wasabi"],
    skillLevel: "Master",
    cuisine: "Japanese",
  },
  {
    id: "ratatouille",
    name: "Ratatouille",
    description: "French vegetable stew with herbs",
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=400&h=300&fit=crop",
    ingredients: ["Eggplant", "Zucchini", "Bell Peppers", "Tomatoes", "Onions", "Garlic", "Herbs"],
    skillLevel: "Intermediate",
    cuisine: "French",
  },
  {
    id: "beef-wellington",
    name: "Beef Wellington",
    description: "Beef fillet wrapped in pastry with mushroom duxelles",
    image: "https://images.unsplash.com/photo-1600891963935-9e2e13096d9a?w=400&h=300&fit=crop",
    ingredients: ["Beef Fillet", "Mushrooms", "Puff Pastry", "Prosciutto", "Mustard", "Herbs"],
    skillLevel: "Master",
    cuisine: "British",
  },
  {
    id: "paella",
    name: "Paella",
    description: "Spanish rice dish with seafood and saffron",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&h=300&fit=crop",
    ingredients: ["Rice", "Seafood", "Chicken", "Bell Peppers", "Peas", "Saffron", "Paprika"],
    skillLevel: "Master",
    cuisine: "Spanish",
  },
  {
    id: "pho",
    name: "Pho",
    description: "Vietnamese noodle soup with herbs",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
    ingredients: ["Rice Noodles", "Beef", "Bean Sprouts", "Herbs", "Spices", "Broth"],
    skillLevel: "Master",
    cuisine: "Vietnamese",
  },
  {
    id: "falafel",
    name: "Falafel",
    description: "Middle Eastern deep-fried chickpea balls",
    image: "https://images.unsplash.com/photo-1593001872095-7d5b3868dd20?w=400&h=300&fit=crop",
    ingredients: ["Chickpeas", "Herbs", "Spices", "Garlic", "Onions", "Oil"],
    skillLevel: "Intermediate",
    cuisine: "Middle Eastern",
  },
  {
    id: "schnitzel",
    name: "Schnitzel",
    description: "Breaded and fried meat cutlet",
    image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&h=300&fit=crop",
    ingredients: ["Veal", "Breadcrumbs", "Eggs", "Flour", "Lemon", "Parsley"],
    skillLevel: "Intermediate",
    cuisine: "German",
  },
  {
    id: "beef-stroganoff",
    name: "Beef Stroganoff",
    description: "Sautéed beef in sour cream sauce",
    image: "https://images.unsplash.com/photo-1600891963935-9e2e13096d9a?w=400&h=300&fit=crop",
    ingredients: ["Beef", "Mushrooms", "Onions", "Sour Cream", "Mustard", "Noodles"],
    skillLevel: "Intermediate",
    cuisine: "Russian",
  },
  {
    id: "baklava",
    name: "Baklava",
    description: "Sweet pastry with layers of nuts and honey",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?w=400&h=300&fit=crop",
    ingredients: ["Phyllo Dough", "Nuts", "Honey", "Butter", "Cinnamon", "Sugar"],
    skillLevel: "Master",
    cuisine: "Middle Eastern",
  },
  {
    id: "gazpacho",
    name: "Gazpacho",
    description: "Cold Spanish tomato soup",
    image: "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?w=400&h=300&fit=crop",
    ingredients: ["Tomatoes", "Cucumber", "Bell Peppers", "Garlic", "Olive Oil", "Vinegar"],
    skillLevel: "Beginner",
    cuisine: "Spanish",
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    description: "Spicy chicken curry with vegetables",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Ginger", "Spices", "Coconut Milk"],
    skillLevel: "Intermediate",
    cuisine: "Indian",
  },
]

// Food quiz questions
const foodQuizQuestions = [
  {
    question: "Which spice is known as the 'king of spices'?",
    options: ["Cinnamon", "Black Pepper", "Cardamom", "Cloves"],
    correct: 1,
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Lime", "Onion"],
    correct: 1,
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Spain", "Italy", "Greece"],
    correct: 2,
  },
  {
    question: "What does 'al dente' mean when cooking pasta?",
    options: ["Very soft", "Firm to the bite", "Overcooked", "Raw"],
    correct: 1,
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
  },
  {
    question: "What is the most consumed beverage in the world after water?",
    options: ["Coffee", "Tea", "Soda", "Juice"],
    correct: 1,
  },
  {
    question: "Which herb is traditionally used in pesto?",
    options: ["Oregano", "Thyme", "Basil", "Rosemary"],
    correct: 2,
  },
  { question: "What is the main protein in wheat?", options: ["Casein", "Gluten", "Albumin", "Keratin"], correct: 1 },
  {
    question: "Which cooking method uses dry heat in an oven?",
    options: ["Boiling", "Steaming", "Baking", "Poaching"],
    correct: 2,
  },
  {
    question: "What is the French term for 'everything in its place'?",
    options: ["Bon appétit", "Mise en place", "Sous vide", "À la carte"],
    correct: 1,
  },
  {
    question: "Which fruit is known as the 'king of fruits'?",
    options: ["Mango", "Durian", "Pineapple", "Apple"],
    correct: 1,
  },
  {
    question: "What is the primary ingredient in hummus?",
    options: ["Lentils", "Chickpeas", "Black beans", "Kidney beans"],
    correct: 1,
  },
  {
    question: "Which knife cut produces small cubes?",
    options: ["Julienne", "Chiffonade", "Brunoise", "Batonnet"],
    correct: 2,
  },
  { question: "What is the smoking point of olive oil?", options: ["Low", "Medium", "High", "Very High"], correct: 0 },
  {
    question: "Which mother sauce is white and made with butter and flour?",
    options: ["Béchamel", "Velouté", "Espagnole", "Hollandaise"],
    correct: 0,
  },
]

let userIngredients = []
const commonIngredients = [
  "Flour",
  "Sugar",
  "Salt",
  "Pepper",
  "Eggs",
  "Milk",
  "Butter",
  "Cheese",
  "Chicken",
  "Beef",
  "Pork",
  "Fish",
  "Rice",
  "Pasta",
  "Potatoes",
  "Onions",
  "Garlic",
  "Tomatoes",
  "Carrots",
  "Spinach",
  "Lettuce",
  "Broccoli",
  "Bell peppers",
  "Mushrooms",
  "Bread",
  "Olive oil",
  "Vegetable oil",
  "Vinegar",
  "Soy sauce",
  "Ketchup",
]

let currentQuizQuestion = 0
let foodQuizScore = 0
let currentLanguage = "en"
let translateInit = false

// FIXED: Removed API key for security - use environment variables instead
function googleTranslateInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,es,zh-CN,fr,hi,ru",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element",
  )
  translateInit = true
}

// FIXED: Improved language switching
function changeLanguage(languageCode) {
  currentLanguage = languageCode

  if (translateInit) {
    const selectElement = document.querySelector(".goog-te-combo")
    if (selectElement) {
      selectElement.value = languageCode
      selectElement.dispatchEvent(new Event("change"))
    }
  }

  // Update TTS language
  const languageOption = document.getElementById("language-option")
  if (languageOption) {
    languageOption.value = languageCode
  }
}

function nextQuestion(questionNumber, answer) {
  answers[questionNumber] = answer
  gsap.to(`#q${questionNumber}`, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(`#q${questionNumber}`).style.display = "none"
      if (questionNumber < 5) {
        currentQuestion++
        showQuestion(currentQuestion)
      } else {
        showResult()
      }
    },
  })
}

function showQuestion(questionNumber) {
  const question = document.querySelector(`#q${questionNumber}`)
  question.style.display = "block"
  gsap.fromTo(
    question,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  )
  if (questionNumber >= 3) {
    const slider = document.querySelector(`#q${questionNumber}-slider`)
    const value = document.querySelector(`#q${questionNumber}-value`)
    value.textContent = slider.value
  }
}

function updateSliderValue(questionNumber, value) {
  document.querySelector(`#q${questionNumber}-value`).textContent = value
}

// FIXED: Reset survey properly shows quiz instead of recipes
function resetSurvey() {
  currentQuestion = 1
  answers = {}
  document.querySelectorAll("main > div").forEach((div) => (div.style.display = "none"))
  document.querySelector("#quiz").style.display = "block"
  document.querySelectorAll(".question").forEach((q) => (q.style.display = "none"))
  showQuestion(1)
}

function showResult() {
  document.querySelector("#quiz").style.display = "none"
  document.querySelector("#result-container").style.display = "block"

  let resultText = "Based on your answers, here are some recommendations for you:\n\n"
  let recommendedRecipes = []

  // Logic to recommend recipes based on answers
  if (answers[1] === "none" || answers[1] === "little") {
    recommendedRecipes = recipes.filter((recipe) => recipe.skillLevel === "Beginner").slice(0, 6)
    resultText += "We recommend starting with beginner-friendly recipes!"
  } else if (answers[1] === "some") {
    recommendedRecipes = recipes.filter((recipe) => recipe.skillLevel === "Intermediate").slice(0, 6)
    resultText += "You're ready for some intermediate challenges!"
  } else {
    recommendedRecipes = recipes.filter((recipe) => recipe.skillLevel === "Master").slice(0, 6)
    resultText += "Time for some advanced cooking techniques!"
  }

  // Filter by cuisine preference if specified
  if (answers[5] && answers[5] !== "all") {
    const cuisineRecipes = recipes.filter((recipe) => recipe.cuisine.toLowerCase() === answers[5].toLowerCase())
    if (cuisineRecipes.length > 0) {
      recommendedRecipes = cuisineRecipes.slice(0, 6)
      resultText += ` We've focused on ${answers[5]} cuisine based on your preference.`
    }
  }

  document.querySelector("#result").textContent = resultText

  const dishesContainer = document.querySelector("#recommended-dishes")
  dishesContainer.innerHTML = recommendedRecipes
    .map(
      (recipe) => `
        <div class="dish-box">
            <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <p><strong>Skill Level:</strong> ${recipe.skillLevel}</p>
            <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
        </div>
    `,
    )
    .join("")

  gsap.fromTo(".dish-box", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 })
}

function showSection(sectionName) {
  document
    .querySelectorAll("main > div, #result-container, #recipe-container")
    .forEach((div) => (div.style.display = "none"))

  if (sectionName === "recipes") {
    document.querySelector("#recipes").style.display = "block"
    displayRecipes()
    setupIngredientFilters()
  } else if (sectionName === "recipe-finder") {
    document.querySelector("#recipe-finder").style.display = "block"
    setupRecipeFinder()
  } else if (sectionName === "cooking-tips") {
    document.querySelector("#cooking-tips").style.display = "block"
  } else if (sectionName === "questions") {
    document.querySelector("#questions").style.display = "block"
  } else if (sectionName === "food-quiz") {
    document.querySelector("#food-quiz").style.display = "block"
    startFoodQuiz()
  }
}

function displayRecipes() {
  const recipeList = document.querySelector("#recipe-list")
  recipeList.innerHTML = recipes
    .map(
      (recipe) => `
        <div class="dish-box">
            <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Skill Level:</strong> ${recipe.skillLevel}</p>
            <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
        </div>
    `,
    )
    .join("")

  gsap.fromTo(".dish-box", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 })
}

function setupIngredientFilters() {
  const ingredientCheckboxes = document.getElementById("ingredient-checkboxes")
  const uniqueIngredients = [...new Set(recipes.flatMap((recipe) => recipe.ingredients))].sort()

  ingredientCheckboxes.innerHTML = uniqueIngredients
    .map(
      (ingredient) => `
        <label>
            <input type="checkbox" value="${ingredient}" onchange="searchRecipes()">
            ${ingredient}
        </label>
    `,
    )
    .join("")
}

function searchRecipes() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase()
  const skillFilters = ["skill-beginner", "skill-intermediate", "skill-master"]
    .filter((id) => document.getElementById(id).checked)
    .map((id) => id.replace("skill-", ""))

  const ingredientFilters = Array.from(document.querySelectorAll("#ingredient-checkboxes input:checked")).map(
    (checkbox) => checkbox.value,
  )

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.cuisine.toLowerCase().includes(searchTerm)

    const matchesSkill = skillFilters.length === 0 || skillFilters.includes(recipe.skillLevel.toLowerCase())

    const matchesIngredients =
      ingredientFilters.length === 0 || ingredientFilters.every((ingredient) => recipe.ingredients.includes(ingredient))

    return matchesSearch && matchesSkill && matchesIngredients
  })

  const recipeList = document.querySelector("#recipe-list")
  if (filteredRecipes.length === 0) {
    recipeList.innerHTML = "<p>No recipes found matching your criteria.</p>"
  } else {
    recipeList.innerHTML = filteredRecipes
      .map(
        (recipe) => `
            <div class="dish-box">
                <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <p><strong>Skill Level:</strong> ${recipe.skillLevel}</p>
                <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
            </div>
        `,
      )
      .join("")

    gsap.fromTo(".dish-box", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 })
  }
}

function showRecipe(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId)
  if (!recipe) return

  document.querySelectorAll("main > div, #result-container").forEach((div) => (div.style.display = "none"))
  document.querySelector("#recipe-container").style.display = "block"

  const recipeDetail = document.querySelector("#recipe-detail")
  recipeDetail.innerHTML = `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; max-width: 500px; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">
            <h2>${recipe.name}</h2>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Skill Level:</strong> ${recipe.skillLevel}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
            
            <h3>Instructions:</h3>
            <ol>
                <li>Gather all ingredients and prepare your workspace</li>
                <li>Follow proper food safety and hygiene practices</li>
                <li>Cook according to the recipe requirements</li>
                <li>Taste and adjust seasoning as needed</li>
                <li>Serve and enjoy your delicious creation!</li>
            </ol>
            
            <h4>Cooking Tips:</h4>
            <ul>
                <li>Read through the entire recipe before starting</li>
                <li>Prepare all ingredients before you begin cooking (mise en place)</li>
                <li>Don't be afraid to taste and adjust as you go</li>
                <li>Have fun and learn from each cooking experience!</li>
            </ul>
        </div>
    `
}

function startFoodQuiz() {
  currentQuizQuestion = 0
  foodQuizScore = 0
  showFoodQuestion()
}

function showFoodQuestion() {
  if (currentQuizQuestion >= foodQuizQuestions.length) {
    showFoodQuizResult()
    return
  }

  const question = foodQuizQuestions[currentQuizQuestion]
  const questionDiv = document.getElementById("food-question")
  const optionsDiv = document.getElementById("food-options")

  questionDiv.innerHTML = `<h3>Question ${currentQuizQuestion + 1}: ${question.question}</h3>`
  optionsDiv.innerHTML = question.options
    .map((option, index) => `<button class="nav-btn" onclick="answerFoodQuestion(${index})">${option}</button>`)
    .join("")
}

function answerFoodQuestion(selectedIndex) {
  const question = foodQuizQuestions[currentQuizQuestion]
  if (selectedIndex === question.correct) {
    foodQuizScore++
  }

  currentQuizQuestion++
  showFoodQuestion()
}

function showFoodQuizResult() {
  const questionDiv = document.getElementById("food-question")
  const optionsDiv = document.getElementById("food-options")
  const resultDiv = document.getElementById("food-quiz-result")

  questionDiv.style.display = "none"
  optionsDiv.style.display = "none"
  resultDiv.style.display = "block"

  const percentage = Math.round((foodQuizScore / foodQuizQuestions.length) * 100)
  let message = ""

  if (percentage >= 80) {
    message = "Excellent! You're a true food expert! 🌟"
  } else if (percentage >= 60) {
    message = "Great job! You know your way around the kitchen! 👨‍🍳"
  } else if (percentage >= 40) {
    message = "Not bad! Keep learning and cooking! 📚"
  } else {
    message = "Keep exploring the culinary world! There's so much to discover! 🍳"
  }

  resultDiv.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>You scored ${foodQuizScore} out of ${foodQuizQuestions.length} (${percentage}%)</p>
        <p>${message}</p>
        <button class="nav-btn" onclick="startFoodQuiz()">Retake Quiz</button>
    `
}

function toggleAccessibilityMenu() {
  const menu = document.getElementById("accessibility-menu")
  menu.classList.toggle("show")
  const button = document.querySelector(".accessibility-button")
  button.classList.toggle("active")
}

function toggleTTS(value) {
  const elementsToTarget =
    'p, h1, h2, h3, h4, button, a, li, span, label, select, option, input[type="text"], input[type="button"], input[type="submit"], textarea, .subtitle, .nav-btn, .dish-box h3, .dish-box p, .recipe h3, .recipe h4, .filter-section h4, .question h2, .options button, .slider-container p, .done-btn, .accessibility-option label, .form-group label, .chef-name, .chef-title, .chef-bio'
  const allElements = document.querySelectorAll(elementsToTarget)

  if (value === "off") {
    allElements.forEach((element) => {
      element.removeEventListener("mouseenter", speakText)
      element.removeEventListener("mouseleave", stopSpeaking)
    })
  } else {
    allElements.forEach((element) => {
      element.addEventListener("mouseenter", speakText)
      element.addEventListener("mouseleave", stopSpeaking)
    })
  }
}

// FIXED: Simplified TTS to use browser's built-in speech synthesis
function speakText(event) {
  if (
    event.target.closest(".accessibility-menu") ||
    event.target.closest(".goog-te-menu-frame") ||
    event.target.closest(".language-selector") ||
    event.target.closest("#google_translate_element")
  )
    return

  const textToSpeak =
    event.target.textContent ||
    event.target.innerText ||
    event.target.value ||
    event.target.placeholder ||
    event.target.alt
  if (textToSpeak && textToSpeak.trim() !== "") {
    stopSpeaking()

    const utterance = new SpeechSynthesisUtterance(textToSpeak.trim())
    utterance.lang = currentLanguage
    window.speechSynthesis.speak(utterance)
  }
}

function stopSpeaking() {
  window.speechSynthesis.cancel()
  document.querySelectorAll("audio").forEach((audio) => {
    audio.pause()
    audio.currentTime = 0
  })
}

function toggleDyslexicFont(value) {
  if (value === "dyslexic") {
    document.body.classList.add("dyslexic-font")
  } else {
    document.body.classList.remove("dyslexic-font")
  }
}

// FIXED: Added missing high contrast function
function toggleHighContrast(value) {
  if (value === "high") {
    document.body.classList.add("high-contrast")
  } else {
    document.body.classList.remove("high-contrast")
  }
}

// FIXED: Added missing text size adjustment function
function adjustTextSize(value) {
  document.documentElement.style.fontSize = value + "%"
}

function showRecommend() {
  const recommendSection = document.getElementById("recommend")
  recommendSection.innerHTML = `
        <h2>Recommend a Recipe</h2>
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeaer09DQu7nZCriGD82-cs4-ZG6b1LHCwOOYHxjjersEn2QA/viewform?embedded=true" 
            width="100%" 
            height="800" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
            Loading…
        </iframe>
    `
  showSection("recommend")
}

function toggleFilterSidebar() {
  const sidebar = document.getElementById("filter-sidebar")
  sidebar.classList.toggle("open")
}

function applyFilters() {
  searchRecipes()
  toggleFilterSidebar()
}

// FIXED: Reset recipe finder properly clears all variables
function setupRecipeFinder() {
  const ingredientQuestionsDiv = document.getElementById("ingredient-questions")
  let questionHTML = ""

  // Reset variables when setting up
  userIngredients = []

  // Create questions for each common ingredient
  for (let i = 0; i < 20; i++) {
    questionHTML += `
            <div id="ing-q${i}" class="ingredient-question" style="display: ${i === 0 ? "block" : "none"}">
                <h4>Do you have ${commonIngredients[i]}?</h4>
                <div class="ingredient-options">
                    <button onclick="nextIngredientQuestion(${i}, true)">Yes</button>
                    <button onclick="nextIngredientQuestion(${i}, false)">No</button>
                </div>
            </div>
        `
  }

  // Add a final question with a submit button
  questionHTML += `
        <div id="ing-q20" class="ingredient-question" style="display: none">
            <h4>Ready to find recipes?</h4>
            <button class="ingredient-next" onclick="findRecipesWithIngredients()">Find Recipes</button>
        </div>
    `

  ingredientQuestionsDiv.innerHTML = questionHTML
}

function nextIngredientQuestion(index, hasIngredient) {
  if (hasIngredient) {
    userIngredients.push(commonIngredients[index])
  }

  const currentQuestionDiv = document.getElementById(`ing-q${index}`)
  const nextQuestionDiv = document.getElementById(`ing-q${index + 1}`)

  gsap.to(currentQuestionDiv, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    onComplete: () => {
      currentQuestionDiv.style.display = "none"
      if (nextQuestionDiv) {
        nextQuestionDiv.style.display = "block"
        gsap.fromTo(nextQuestionDiv, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 })
      }
    },
  })
}

function findRecipesWithIngredients() {
  const resultsDiv = document.getElementById("finder-results")
  const ingredientsSurvey = document.getElementById("ingredients-survey")

  // Find recipes that match at least 60% of user's ingredients
  const matchingRecipes = recipes.filter((recipe) => {
    const matchCount = recipe.ingredients.filter((ingredient) =>
      userIngredients.some((userIng) => ingredient.includes(userIng)),
    ).length

    // Return true if recipe uses at least 60% of its ingredients from user's list
    return matchCount >= recipe.ingredients.length * 0.6
  })

  // Hide survey and show results
  gsap.to(ingredientsSurvey, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      ingredientsSurvey.style.display = "none"
      resultsDiv.style.display = "block"

      if (matchingRecipes.length > 0) {
        resultsDiv.innerHTML = `
                    <h3>We found ${matchingRecipes.length} recipes you can make!</h3>
                    <div id="finder-recipe-list"></div>
                    <button class="nav-btn" onclick="resetRecipeFinder()">Try Again</button>
                `

        const recipeListDiv = document.getElementById("finder-recipe-list")
        recipeListDiv.innerHTML = matchingRecipes
          .map(
            (recipe) => `
                    <div class="dish-box">
                        <img src="${recipe.image}" alt="${recipe.name}" width="100%" height="200">
                        <h3>${recipe.name}</h3>
                        <p>${recipe.description}</p>
                        <button class="nav-btn" onclick="showRecipe('${recipe.id}')">View Recipe</button>
                    </div>
                `,
          )
          .join("")

        gsap.fromTo(".dish-box", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 })
      } else {
        resultsDiv.innerHTML = `
                    <h3>Sorry, we couldn't find any recipes with your ingredients.</h3>
                    <p>Try again with different ingredients or check out our full recipe collection!</p>
                    <div class="ingredient-options">
                        <button class="nav-btn" onclick="resetRecipeFinder()">Try Again</button>
                        <button class="nav-btn" onclick="showSection('recipes')">Browse All Recipes</button>
                    </div>
                `
      }

      gsap.fromTo(resultsDiv, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    },
  })
}

// FIXED: Properly reset recipe finder with complete variable cleanup
function resetRecipeFinder() {
  const resultsDiv = document.getElementById("finder-results")
  const ingredientsSurvey = document.getElementById("ingredients-survey")

  // Clear all variables
  userIngredients = []

  // Reset display
  resultsDiv.style.display = "none"
  ingredientsSurvey.style.display = "block"

  // Reset all questions to initial state
  document.querySelectorAll(".ingredient-question").forEach((q, index) => {
    q.style.display = index === 0 ? "block" : "none"
    q.style.opacity = "1"
    q.style.transform = "translateY(0)"
  })

  gsap.fromTo(ingredientsSurvey, { opacity: 0 }, { opacity: 1, duration: 0.5 })
}

// FIXED: DOMContentLoaded now shows quiz by default instead of recipes
document.addEventListener("DOMContentLoaded", () => {
  setupRecipeFinder()

  // Setup Google Translate
  const script = document.createElement("script")
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit"
  document.body.appendChild(script)

  // Setup language selection
  const languageSelect = document.getElementById("language-select")
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      changeLanguage(e.target.value)
    })
  }

  // Sync language selection between accessibility menu and header
  const languageOption = document.getElementById("language-option")
  if (languageOption) {
    languageOption.addEventListener("change", (e) => {
      const languageSelect = document.getElementById("language-select")
      if (languageSelect) {
        languageSelect.value = e.target.value
      }
      changeLanguage(e.target.value)
    })
  }

  // Setup question form submission
  const questionForm = document.getElementById("question-form")
  if (questionForm) {
    questionForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your question! Our chefs will get back to you soon.")
      questionForm.reset()
    })
  }

  // Setup text size slider
  const textSizeSlider = document.getElementById("text-size")
  if (textSizeSlider) {
    textSizeSlider.addEventListener("input", (e) => {
      document.getElementById("text-size-value").textContent = e.target.value + "%"
    })
  }

  // FIXED: Show quiz by default instead of recipes
  resetSurvey()

  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  })
})

// FIXED: Documentation function removes auto-scroll parameters
function showDocumentation() {
  document
    .querySelectorAll("main > div, #result-container, #recipe-container")
    .forEach((div) => (div.style.display = "none"))

  // Create documentation section if it doesn't exist
  let docSection = document.getElementById("documentation")
  if (!docSection) {
    docSection = document.createElement("div")
    docSection.id = "documentation"
    document.querySelector("main").appendChild(docSection)
  }

  // FIXED: Removed auto-scroll parameters (start=true&loop=false&delayms=3000)
  docSection.innerHTML = `
        <h2>Documentation</h2>
        <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vRQVW5HriT-ggSWD8nPClE2x41raBzSf9JFR1fxUWqky7LrLL7tHankodr89jNXBUt-gOYzyGuJdty6/embed?start=false&loop=false" 
            frameborder="0" 
            width="100%" 
            height="600" 
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true">
        </iframe>
    `

  docSection.style.display = "block"
}
