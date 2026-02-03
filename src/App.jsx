import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  Clock, 
  Users, 
  Flame, 
  ArrowLeft, 
  Search, 
  Heart, 
  Menu, 
  X,
  Leaf,
  Info
} from 'lucide-react';
import biteImage from './assets/bite.png';

// --- Mock Data ---
const RECIPES = [
  {
    id: 1,
    title: "Hot Butter Mushroom",
    description: "ලොකු කුඩා කවුරුත් ආසාවෙන් කන බිම්මල් බයිට්",
    category: "බිම්මල් බයිට්",
    prepTime: "විනාඩි 10",
    cookTime: "විනාඩි 10",
    servings: 4,
    calories: 450,
    difficulty: "Easy",
    image: biteImage,
    icon: "🍄",
    ingredients: [
      "බිම්මල් 🍄 - 200g",
      "ලුණු කුඩු🧂- තේ හැදි 1/4",
      "කහ කුඩු 🌿 - තේ හැදි 1/2 ",
      "මිරිස් කුඩු 🌶️ - තේ හැදි 1/2 ",
      "ගම්මිරිස් කුඩු ⚫ - තේ හැදි 1/4",
      "ගසාගත් බිත්තර 🥚 - 1ක් ",
      "ඉරිඟු පිටි 🌽 - මේස හැදි 2",
      "පාන් පිටි 🍞 - මේස හැදි 1 ",
      "පොල් තෙල් 🥥 ",
      "ඉඟුරු සුදුලුනු පේස්ට් 🫚🧄 - මේස හැදි 1 1/2",
      "වියලි මිරිස් 🌶️ - කරල් 4 ",
      "මාළු මිරිස් 🌶️ - කරල් 2 ",
      "බටර් 🧈 - මේස හැදි 2 ",
      "මිරිස් පේස්ට් (Chili paste) 🌶️ - මේස හැදි 2",
      "සෝයා සෝස් 🍶 - මේස හැදි 1",
      "තක්කාලි සෝස් 🍅 - මේස හැදි 1",
      "සීනි 🍬 - තේ හැදි 1",
    ],
    instructions: [
      "බිම්මල් සිහින්ව ඉරන්න.",
      "බෝල් එකක් ගෙන ලුණු කුඩු තේ හැදි 1/4, කහ කුඩු තේ හැදි 1/2, මිරිස් කුඩු තේ හැදි 1/2, ගම්මිරිස් කුඩු තේ හැදි 1/4 එකතු කර හොදීන් මික්ස් කර ගන්න.",
      "ගසාගත් බිත්තර ටිකක් එකතු කර හොදීන් මික්ස් කර ගන්න.",
      "ඉරිඟු පිටි මේස හැදි 2 සහ පාන් පිටි මේස හැදි 1 එකතු කර හොදීන් මික්ස් කර ගන්න.",
      "තච්චියට (pan එකට) තෙල් දමා fry කිරීමට අවශ්‍ය ප්‍රමාණයට තෙල් රත් කර ගන්න.",
      "සිහින්ව ඉර ගත් බිම්මල් ටික ටික එකතු කර ගන්න, විනාඩියක් පමණ fry කරන්න, පසුව මික්ස් කරන ගමන් fry කරන්න, රන්වන් වර්ණය උනු පසු ඉවත් කර ගන්න.",
      "පෑන් එකකට පොල් තෙල් මේස හැදි 1 එකතු කර රත් වීගෙන එද්දී ඉඟුරු සුදුලුනු පේස්ට් මේස හැදි 1 1/2 එකතු කර විනාඩියක් පමණ මික්ස් කර ගන්න.",
      "කපාගත් වියලි මිරිස් කරල් 4 සහ මාළු මිරිස් කරල් 2 එකතු කර විනාඩියක් පමණ මික්ස් කර ගන්න, බටර් මේස හැදි 2 එකතු කර දිය වන තුරු මික්ස් කර ගන්න.",
      "Chili paste මේස හැදි 2 එකතු කර තත්පර 30ක් මික්ස් කර ගන්න, සෝයා සෝස් මේස හැදි 1 සහ තක්කාලි සෝස් මේස හැදි 1 සහ සීනි තේ හැදි 1 විනාඩියක් පමණ මික්ස් කර ගන්න.",
      "fry කරගත් බිම්මල් එකතු කර ගන්න සහ සිහින්ව කපාගත් ලුණු කොළ 3 එකතු කර ගන්න අවසානයේ ලිප නිවා විනාඩියක් පමණ මික්ස් කර ගන්න.",
      "අවශ්‍ය පරිදි ලුණු එක් කර ගන්න",
    ]
  },
  /*{
    id: 2,
    title: "Garlic Butter Stuffed Portobellos",
    description: "Juicy portobello caps stuffed with a savory mix of spinach, cheese, and breadcrumbs.",
    category: "Appetizer",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    difficulty: "Easy",
    calories: 220,
    imageColor: "bg-orange-100",
    icon: "🥘",
    ingredients: [
      "4 large Portobello mushrooms, stems removed",
      "3 tbsp butter, melted",
      "2 cloves garlic, minced",
      "1 cup fresh spinach, chopped",
      "1/2 cup mozzarella cheese",
      "1/4 cup panko breadcrumbs",
      "1 tbsp parsley"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Brush mushroom caps with garlic butter and place gill-side up on baking sheet.",
      "Mix spinach, cheese, and breadcrumbs in a bowl.",
      "Fill mushroom caps with the mixture.",
      "Bake for 15-20 minutes until cheese is bubbly and mushrooms are tender.",
      "Garnish with parsley and serve warm."
    ]
  },
  {
    id: 3,
    title: "Crispy Enoki Mushroom Pancakes",
    description: "Crunchy, golden bites perfect for dipping. A popular East Asian snack.",
    category: "Snack",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: 2,
    difficulty: "Easy",
    calories: 180,
    imageColor: "bg-yellow-100",
    icon: "🥞",
    ingredients: [
      "2 packs Enoki mushrooms",
      "1 large egg",
      "1/2 cup all-purpose flour",
      "2 tbsp cornstarch",
      "1 tsp sesame oil",
      "Salt and pepper",
      "Vegetable oil for frying",
      "Soy sauce for dipping"
    ],
    instructions: [
      "Trim the roots of the Enoki mushrooms and separate into small bunches.",
      "Whisk egg, flour, cornstarch, sesame oil, salt, and pepper into a batter.",
      "Dip mushroom bunches into the batter.",
      "Heat oil in a pan over medium heat.",
      "Fry mushrooms until golden brown and crispy (about 2-3 mins per side).",
      "Serve immediately with dipping sauce."
    ]
  },
  {
    id: 4,
    title: "Classic Mushroom Stroganoff",
    description: "A hearty vegetarian twist on the Russian classic, served over egg noodles.",
    category: "Main Course",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    calories: 380,
    imageColor: "bg-red-50",
    icon: "🍝",
    ingredients: [
      "12 oz egg noodles",
      "2 tbsp butter",
      "1 lb cremini mushrooms, sliced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tbsp flour",
      "1 cup vegetable broth",
      "1 tbsp Worcestershire sauce (vegetarian)",
      "1/2 cup sour cream",
      "Paprika"
    ],
    instructions: [
      "Cook noodles according to package instructions.",
      "Sauté mushrooms in butter until browned. Add onions and garlic, cook until soft.",
      "Stir in flour and cook for 1 minute.",
      "Slowly add broth and Worcestershire sauce. Simmer until thickened.",
      "Remove from heat and stir in sour cream.",
      "Serve over noodles and dust with paprika."
    ]
  },
  {
    id: 5,
    title: "Spicy Oyster Mushroom Tacos",
    description: "Meaty pulled oyster mushrooms tossed in chipotle sauce.",
    category: "Main Course",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 3,
    difficulty: "Medium",
    calories: 310,
    imageColor: "bg-green-50",
    icon: "🌮",
    ingredients: [
      "1 lb oyster mushrooms, shredded",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp chili powder",
      "6 corn tortillas",
      "Lime wedges",
      "Cilantro",
      "Pickled onions"
    ],
    instructions: [
      "Shred oyster mushrooms with a fork to resemble pulled meat.",
      "Toss mushrooms with oil and spices.",
      "Roast at 400°F (200°C) for 15-20 minutes until crispy edges form.",
      "Warm the tortillas.",
      "Assemble tacos with mushrooms, onions, and cilantro.",
      "Squeeze lime juice over top before serving."
    ]
  },
  {
    id: 6,
    title: "Mushroom & Thyme Bruschetta",
    description: "Elegant appetizer with creamy ricotta and balsamic glaze.",
    category: "Appetizer",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: 6,
    difficulty: "Easy",
    calories: 150,
    imageColor: "bg-stone-200",
    icon: "🥖",
    ingredients: [
      "1 baguette, sliced and toasted",
      "1 cup ricotta cheese",
      "8 oz button mushrooms, finely chopped",
      "2 cloves garlic",
      "1 tbsp fresh thyme",
      "Balsamic glaze",
      "Salt and pepper"
    ],
    instructions: [
      "Sauté mushrooms and garlic in olive oil until moisture evaporates and they brown.",
      "Stir in fresh thyme, salt, and pepper.",
      "Spread ricotta cheese on toasted baguette slices.",
      "Top with mushroom mixture.",
      "Drizzle with balsamic glaze and serve."
    ]
  }*/
];

// --- Components ---

const Header = ({ onNavigate, currentView, toggleMobileMenu, isMobileMenuOpen }) => (
  <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div 
        className="flex items-center space-x-2 cursor-pointer" 
        onClick={() => onNavigate('home')}
      >
        <div className="bg-amber-600 p-2 rounded-lg">
          <ChefHat size={24} className="text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-amber-50">Shroom<span className="text-amber-500">Chef</span></span>
      </div>

      <nav className="hidden md:flex space-x-8 font-medium">
        <button 
          onClick={() => onNavigate('home')} 
          className={`hover:text-amber-500 transition-colors ${currentView === 'home' ? 'text-amber-500' : ''}`}
        >
          Recipes
        </button>
        <button 
          onClick={() => onNavigate('favorites')} 
          className={`hover:text-amber-500 transition-colors ${currentView === 'favorites' ? 'text-amber-500' : ''}`}
        >
          Favorites
        </button>
        <button className="hover:text-amber-500 transition-colors">Techniques</button>
        <button className="hover:text-amber-500 transition-colors">About</button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-stone-100" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-stone-800 border-t border-stone-700">
        <div className="flex flex-col p-4 space-y-4">
          <button onClick={() => { onNavigate('home'); toggleMobileMenu(); }} className="text-left py-2 border-b border-stone-700">Recipes</button>
          <button onClick={() => { onNavigate('favorites'); toggleMobileMenu(); }} className="text-left py-2 border-b border-stone-700">Favorites</button>
          <button className="text-left py-2 border-b border-stone-700">Techniques</button>
          <button className="text-left py-2">About</button>
        </div>
      </div>
    )}
  </header>
);

const Hero = () => (
  <div className="relative bg-stone-800 text-stone-100 py-20 px-4 overflow-hidden">
    {/* Abstract Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 text-9xl">🍄</div>
      <div className="absolute bottom-10 right-10 text-9xl">🥘</div>
      <div className="absolute top-20 right-1/4 text-8xl transform rotate-45">🥬</div>
    </div>
    
    <div className="container mx-auto text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
        Earth's Hidden <span className="text-amber-500">Treasures</span>
      </h1>
      <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-2xl mx-auto">
        Discover the art of cooking with fungi. From rustic risottos to modern mushroom steaks.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-900/50">
          Explore Recipes
        </button>
        <button className="bg-stone-700 hover:bg-stone-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
          Mushroom Guide
        </button>
      </div>
    </div>
  </div>
);

const RecipeCard = ({ recipe, onClick, isFavorite, toggleFavorite }) => (
  <div 
    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden cursor-pointer flex flex-col h-full"
    onClick={onClick}
  >
    <div className={`h-48 ${recipe.image ? '' : recipe.imageColor} flex items-center justify-center text-7xl relative overflow-hidden`}>
      {recipe.image ? (
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{recipe.icon}</span>
      )}
      <div className="absolute top-3 right-3">
         <button 
           onClick={(e) => { e.stopPropagation(); toggleFavorite(recipe.id); }}
           className={`p-2 rounded-full backdrop-blur-sm ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-white/50 text-stone-400 hover:text-red-400'} transition-colors`}
         >
           <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
         </button>
      </div>
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 uppercase tracking-wide">
        {recipe.category}
      </div>
    </div>
    
    <div className="p-5 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-stone-800 leading-tight group-hover:text-amber-600 transition-colors">
          {recipe.title}
        </h3>
      </div>
      
      <p className="text-stone-500 text-sm mb-4 line-clamp-2 flex-grow">
        {recipe.description}
      </p>
      
      <div className="flex items-center justify-between text-green-500 text-sm border-t border-stone-100 pt-4 mt-auto">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{recipe.cookTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Flame size={16} className={recipe.difficulty === "Easy" ? "text-green-500" : recipe.difficulty === "Medium" ? "text-amber-500" : "text-red-500"} />
          <span>{recipe.difficulty}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>{recipe.servings}</span>
        </div>
      </div>
    </div>
  </div>
);

const RecipeDetail = ({ recipe, onBack, isFavorite, toggleFavorite }) => (
  <div className="container mx-auto px-4 py-8 animate-fade-in">
    <button 
      onClick={onBack}
      className="flex items-center text-stone-500 hover:text-amber-600 mb-6 transition-colors font-medium group"
    >
      <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
      Back to Recipes
    </button>

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
      {/* Banner */}
      <div className={`${recipe.image ? '' : recipe.imageColor} py-16 flex flex-col items-center justify-center relative`}>
        {recipe.image && (
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {!recipe.image && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/500 via-black/700 to-black/900"></div>
        )}
        <div className="relative z-10">
          {!recipe.image && (
            <div className="text-9xl mb-4 drop-shadow-md animate-bounce-slow">{recipe.icon}</div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 mb-4">
            {recipe.title}
          </h1>
          <div className="flex flex-wrap gap-5 justify-center">
               <span className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-800 font-semibold text-sm flex items-center gap-2">
                  <Clock size={16} /> Prep: {recipe.prepTime}
               </span>
               <span className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-800 font-semibold text-sm flex items-center gap-2">
                  <Flame size={16} /> Cook: {recipe.cookTime}
               </span>
               <span className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-800 font-semibold text-sm flex items-center gap-2">
                  <Info size={16} /> {recipe.calories} kcal
               </span>
          </div>
        </div>
        
        <button 
          onClick={() => toggleFavorite(recipe.id)}
          className={`absolute top-6 right-6 p-3 rounded-full shadow-lg ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-stone-400 hover:text-red-500'} transition-all`}
        >
          <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
        {/* Ingredients Column */}
        <div className="md:col-span-1 space-y-8">
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Leaf className="text-green-600" size={20} /> Ingredients
            </h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start text-stone-600 text-sm md:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
             <h4 className="font-bold text-amber-900 mb-2 text-sm uppercase tracking-wider">Chef's Tip</h4>
             <p className="text-amber-800 text-sm italic">
               <a href="https://youtu.be/OPnChfoP9vo?si=IcHXMeTyp0zXiXHm" target="_blank" rel="noopener noreferrer">
                👉 Watch the video tutorial here
               </a>
             </p>
          </div>
        </div>

        {/* Instructions Column */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
            <ChefHat className="text-amber-600" size={24} /> Instructions
          </h3>
          <div className="space-y-8">
            {recipe.instructions.map((step, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 text-stone-500 font-bold flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  {idx + 1}
                </div>
                <div className="pt-2 pb-6 border-b border-stone-100 last:border-0 w-full">
                  <p className="text-stone-700 text-lg leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-stone-900 rounded-2xl text-stone-300 text-center">
             <h4 className="text-xl font-bold text-white mb-2">Enjoy your meal!</h4>
             <p>Did you make this recipe? Share it with #ShroomChef</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState('home'); // home, detail, favorites
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter recipes logic
  const filteredRecipes = RECIPES.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    
    if (view === 'favorites') {
       return matchesSearch && matchesCategory && favorites.includes(recipe.id);
    }
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(RECIPES.map(r => r.category))];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setView('detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page) => {
    setView(page);
    setActiveCategory('All');
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-200">
      <Header 
        onNavigate={handleNavigate} 
        currentView={view} 
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {view === 'home' && <Hero />}

      <main className="pb-20">
        {view === 'detail' && selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setView('home')} 
            isFavorite={favorites.includes(selectedRecipe.id)}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <div className="container mx-auto px-4 py-12">
            
            {/* View Title */}
            <div className="mb-8 text-center">
               <h2 className="text-3xl font-bold text-stone-800">
                 {view === 'favorites' ? 'Your Favorite Recipes' : 'Latest Creations'}
               </h2>
               <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat 
                        ? 'bg-stone-800 text-white shadow-lg' 
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="text"
                  placeholder="Search mushrooms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-stone-700 placeholder-stone-400"
                />
              </div>
            </div>

            {/* Empty State */}
            {filteredRecipes.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 border-dashed">
                <div className="text-6xl mb-4">🍄</div>
                <h3 className="text-xl font-bold text-stone-700 mb-2">No recipes found</h3>
                <p className="text-stone-500">
                  {view === 'favorites' 
                    ? "You haven't saved any favorites yet. Go explore!" 
                    : "Try adjusting your search terms."}
                </p>
                {view === 'favorites' && (
                  <button 
                    onClick={() => handleNavigate('home')}
                    className="mt-6 text-amber-600 font-medium hover:underline"
                  >
                    Browse Recipes
                  </button>
                )}
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={() => handleRecipeClick(recipe)}
                  isFavorite={favorites.includes(recipe.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
           <div className="col-span-1 md:col-span-2">
             <div className="flex items-center space-x-2 mb-4">
               <ChefHat className="text-amber-500" size={24} />
               <span className="text-xl font-bold text-white">ShroomChef</span>
             </div>
             <p className="max-w-xs text-sm leading-relaxed">
               Dedicated to the wonderful world of fungi cooking. Healthy, sustainable, and absolutely delicious.
             </p>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4">Explore</h4>
             <ul className="space-y-2 text-sm">
               <li className="hover:text-amber-500 cursor-pointer">Seasonal Guide</li>
               <li className="hover:text-amber-500 cursor-pointer">Foraging Tips</li>
               <li className="hover:text-amber-500 cursor-pointer">Mushroom Health</li>
             </ul>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4">Newsletter</h4>
             <div className="flex">
               <input type="email" placeholder="Email" className="bg-stone-800 border-none rounded-l-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-amber-500" />
               <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 rounded-r-lg">
                 <ArrowLeft size={16} className="rotate-180" />
               </button>
             </div>
           </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} ShroomChef. All rights reserved.
        </div>
      </footer>
    </div>
  );
}