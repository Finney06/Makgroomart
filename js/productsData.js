const categories = [
  {
    category: "Cereals",
    id: "cerealsPage",
    products: [
      { name: "Rice", image: "./assets/images/product-images/rice.jpg", description: "Premium long grain rice for all dishes." },
      { name: "Millet", image: "./assets/images/product-images/millet.jpg", description: "Nutritious grain perfect for porridge." },
      { name: "Sorghum", image: "./assets/images/product-images/Sorghum.jpg", description: "Wholesome grain rich in fiber." },
      { name: "Wheat", image: "./assets/images/product-images/wheat.jpg", description: "Essential grain for baking and meals." },
      { name: "Maize", image: "./assets/images/product-images/maize.jpg", description: "Versatile corn for food and feed." }
    ]
  },
  {
    category: "Legumes",
    id: "legumesPage",
    products: [
      { name: "Beans", image: "./assets/images/Legumes.jpg", description: "Protein-rich legume for balanced meals." },
      { name: "Groundnut", image: "./assets/images/product-images/groundnut.jpg", description: "Crunchy and healthy groundnuts." },
      { name: "Soyabeans", image: "./assets/images/product-images/soybean-close-up_9635-3209.jpg", description: "Great source of plant-based protein." }
    ]
  },
  {
    category: "Tubers",
    id: "tubersPage",
    products: [
      { name: "Cassava", image: "./assets/images/product-images/cassava.jpg", description: "Starchy root ideal for garri and fufu." },
      { name: "Potatoes", image: "./assets/images/product-images/potatos.jpg", description: "Soft and tasty tuber for any recipe." },
      { name: "Yam", image: "./assets/images/product-images/yam.jpg", description: "Staple tuber, perfect for boiling or pounding." }
    ]
  },
  {
    category: "Flour",
    id: "flourPage",
    products: [
      { name: "Yam Flour", image: "./assets/images/product-images/yam-flour.jpg", description: "Smooth flour for instant pounded yam." },
      { name: "Cassava Flour", image: "./assets/images/product-images/cassava-flour.jpg", description: "Gluten-free flour from cassava." },
      { name: "Plantain Flour", image: "./assets/images/plantain-flour.jpg", description: "Nutritious and low-carb flour option." },
      { name: "Wheat Flour", image: "./assets/images/wheat-flour.jpg", description: "All-purpose flour for baking and cooking." },
      { name: "Corn Flour", image: "./assets/images/corn-flour.jpg", description: "Fine yellow flour for pap and more." }
    ]
  },
  {
    category: "Oil",
    id: "oilPage",
    products: [
      { name: "Palm Oil", image: "./assets/images/palm-oil.jpg", description: "Rich red oil, great for stews and soups." },
      { name: "Soya Oil", image: "./assets/images/soya-oil.jpg", description: "Light and heart-healthy cooking oil." },
      { name: "Sunflower Oil", image: "./assets/images/sunflower-oil.jpg", description: "Mild-flavored oil rich in vitamin E." },
      { name: "Coconut Oil", image: "./assets/images/coconut-oil.jpg", description: "Fragrant oil ideal for frying and skin care." },
      { name: "Groundnut Oil", image: "./assets/images/groundnut-oil.jpg", description: "Tasty oil for deep frying and cooking." }
    ]
  },
  {
    category: "Spices",
    id: "spicesPage",
    products: [
      { name: "Dried Pepper", image: "./assets/images/dried-pepper.jpg", description: "Hot and aromatic pepper blend." },
      { name: "Ginger Powder", image: "./assets/images/ginger-powder.jpg", description: "Spicy and zesty ground ginger." },
      { name: "Garlic Powder", image: "./assets/images/garlic-powder.jpg", description: "Savory powder for seasoning." },
      { name: "Crayfish", image: "./assets/images/crayfish.jpg", description: "Ground dried crayfish for rich flavor." }
    ]
  },
  {
    category: "Animal Farm",
    id: "animalFarmPage",
    products: [
      { name: "Cow", image: "./assets/images/cow.jpg", description: "Freshly sourced beef cattle." },
      { name: "Goat", image: "./assets/images/product-images/Goat.jpg", description: "Tasty and tender goat meat." },
      { name: "Ram", image: "./assets/images/ram.jpg", description: "Ideal for festive feasts." },
      { name: "Pig", image: "./assets/images/pig.jpg", description: "Quality pork for various dishes." },
      { name: "Snails", image: "./assets/images/snails.jpg", description: "Nutritious and delicious mollusks." },
      { name: "Rabbits", image: "./assets/images/rabbits.jpg", description: "Lean meat option, rich in protein." },
      { name: "Grass cutter", image: "./assets/images/grass-cutter.jpg", description: "Flavorful bush meat delicacy." },
      { name: "Chicken", image: "./assets/images/chicken.jpg", description: "Farm-raised chicken for all meals." },
      { name: "Turkey", image: "./assets/images/turkey.jpg", description: "Big bird, great for celebrations." },
      { name: "Fish", image: "./assets/images/fish.jpg", description: "Fresh or smoked fish varieties." }
    ]
  },
  {
    category: "Planting Materials",
    id: "plantingMaterialsPage",
    products: [
      { name: "Pineapple Sucker", image: "./assets/images/pineapple-sucker.jpg", description: "Starter plant for growing pineapples." },
      { name: "Banana Sucker", image: "./assets/images/banana-sucker.jpg", description: "Healthy shoot for banana farming." },
      { name: "Plantain Sucker", image: "./assets/images/plantain-sucker.jpg", description: "Reliable sprout for plantain growth." },
      { name: "Cocoa Seedling", image: "./assets/images/product-images/Cocoa-Seedlings.jpg", description: "High-yield cocoa tree seedling." },
      { name: "Oil Palm Seedling", image: "./assets/images/oil-palm-seedling.jpg", description: "For sustainable palm oil production." },
      { name: "Citrus Seedling", image: "./assets/images/citrus-seedling.jpg", description: "Sweet orange or lemon tree starter." },
      { name: "Cashew Seedling", image: "./assets/images/cashew-seedling.jpg", description: "Grow your own cashew trees." },
      { name: "Coconut Seedling", image: "./assets/images/coconut-seedling.jpg", description: "Hardy coconut tree starter." },
      { name: "Tomato Seed", image: "./assets/images/tomato-seed.jpg", description: "Quality seeds for juicy tomatoes." },
      { name: "Pepper Seed", image: "./assets/images/pepper-seed.jpg", description: "Vibrant seeds for hot pepper crops." },
      { name: "Onion Seed", image: "./assets/images/onion-seed.jpg", description: "High-germination onion seeds." },
      { name: "Okro Seed", image: "./assets/images/okro-seed.jpg", description: "Fast-growing okro variety." },
      { name: "Cucumber Seed", image: "./assets/images/cucumber-seed.jpg", description: "Seeds for crisp, juicy cucumbers." },
      { name: "Maize Seed", image: "./assets/images/maize-seed.jpg", description: "Hybrid maize seeds for high yield." },
      { name: "Dongoyaro Seeds", image: "./assets/images/dongoyaro-seeds.jpg", description: "Neem tree seeds for natural remedy." },
      { name: "Cassava Stem", image: "./assets/images/cassava-stem.jpg", description: "Cuttings for cassava planting." },
      { name: "Yam Set", image: "./assets/images/yam-set.jpg", description: "Pre-cut yam seed for cultivation." }
    ]
  },
  {
    category: "Special Products",
    id: "specialProductsPage",
    products: [
      { name: "Cocoa Beans", image: "./assets/images/product-images/cocoa-beans.jpg", description: "Fermented beans for chocolate or export." },
      { name: "Cocoa Shells", image: "./assets/images/product-images/cocoa-shells.jpg", description: "By-product used for mulch or feed." },
      { name: "Cashew Nuts(processed)", image: "./assets/images/product-images/Cashew.jpg", description: "Roasted cashews ready to eat." },
      { name: "Cashew Nuts(Raw)", image: "./assets/images/product-images/Cashew-raw.jpg", description: "Unprocessed nuts for trade or roasting." },
      { name: "Cashew shells", image: "./assets/images/product-images/Cashew shells.jpg", description: "Shells for oil extraction or fuel." },
      { name: "Sorghum", image: "./assets/images/sorghum.jpg", description: "Versatile grain for flour or brewing." },
      { name: "Ginger", image: "./assets/images/ginger.jpg", description: "Fresh root with strong aroma." },
      { name: "Hibiscus", image: "./assets/images/product-images/Hibiscus.jpg", description: "Dry petals for tea and export." },
      { name: "Garlic", image: "./assets/images/garlic.jpg", description: "Strong aromatic bulb for cooking." },
      { name: "Sesame", image: "./assets/images/sesame.jpg", description: "Seeds used for oil or snack topping." },
      { name: "Sunflower", image: "./assets/images/product-images/sunflower-seeds-537652_640.jpg", description: "High-oil seed for processing." },
      { name: "Soyabeans", image: "./assets/images/soyabeans.jpg", description: "Protein-rich seed for food and feed." },
      { name: "Cotton", image: "./assets/images/product-images/cotton.jpg", description: "Raw fiber for textiles and lint." },
      { name: "Palm Kernel", image: "./assets/images/palm-kernel.jpg", description: "Nut used for palm kernel oil." }
    ]
  },
  {
    category: "Grasses",
    id: "grassesPage",
    products: [
      { name: "Bracharia", image: "./assets/images/bracharia.jpg", description: "High-yield pasture grass for livestock." },
      { name: "Panicum", image: "./assets/images/panicum.jpg", description: "Nutritious tropical grazing grass." },
      { name: "Napier grass", image: "./assets/images/napier-grass.jpg", description: "Fast-growing fodder grass." }
    ]
  },
  {
    category: "Feeds",
    id: "feedsPage",
    products: [
      { name: "Poultry Feeds", image: "assets/images/feeds2.jpg", description: "Balanced feed for chickens." },
      { name: "Fish Feeds", image: "./assets/images/fish-feeds.jpg", description: "Pellets for healthy fish growth." },
      { name: "Rabbit Feeds", image: "./assets/images/rabbit-feeds.jpg", description: "Custom feed mix for rabbits." },
      { name: "Pig Feeds", image: "./assets/images/pig-feeds.jpg", description: "Nutrient-rich swine feed." }
    ]
  },
  {
    category: "Fertilizers",
    id: "fertilizersPage",
    products: [
      { name: "Organic Soil", image: "./assets/images/organic-soil.jpg", description: "Enriched compost for better growth." },
      { name: "Organic Foliar", image: "./assets/images/organic-foliar.jpg", description: "Spray-on fertilizer for fast action." },
      { name: "Inorganic", image: "./assets/images/inorganic-fertilizer.jpg", description: "Commercial fertilizer for quick boost." }
    ]
  },
  {
    category: "Chemicals",
    id: "chemicalsPage",
    products: [
      { name: "Herbicide", image: "./assets/images/herbicide.jpg", description: "Kills unwanted weeds effectively." },
      { name: "Pesticide", image: "./assets/images/pesticide.jpg", description: "Protects crops from harmful pests." },
      { name: "Insecticide", image: "./assets/images/insecticide.jpg", description: "Stops insects from damaging produce." },
      { name: "Fungicide", image: "./assets/images/fungicide.jpg", description: "Prevents and treats fungal infections." }
    ]
  },
  {
    category: "Miscellaneous Products",
    id: "miscellaneousPage",
    products: [
      { name: "Dried Fish", image: "./assets/images/dried-fish.jpg", description: "Traditional sun-dried protein." },
      { name: "Ogbono", image: "./assets/images/ogbono.jpg", description: "Seeds for making draw soup." },
      { name: "Kilishi", image: "./assets/images/kilishi.jpg", description: "Spicy dried beef snack." },
      { name: "Parrot", image: "./assets/images/parrot.jpg", description: "Colorful talking bird pet." },
      { name: "Ostrich", image: "./assets/images/ostrich.jpg", description: "Large bird for meat and feathers." },
      { name: "Pomo", image: "./assets/images/pomo.jpg", description: "Cow skin delicacy for soups." },
      { name: "Onions", image: "./assets/images/onions.jpg", description: "Sharp and flavorful kitchen staple." },
      { name: "Rodo", image: "./assets/images/rodo.jpg", description: "Small but fiery hot pepper." },
      { name: "Tomatoes", image: "./assets/images/tomatoes.jpg", description: "Juicy and ripe red fruits." }
    ]
  }
];

export default categories;
