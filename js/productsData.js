const categories = [
  {
    category: "Cereals",
    id: "cerealsPage",
    products: [
      { name: "Rice", image: "./assets/images/product-images/rice.jpg", description: "Premium long grain rice for all dishes." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Millet", image: "./assets/images/product-images/millet.jpg", description: "Nutritious grain perfect for porridge." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Sorghum", image: "./assets/images/product-images/Sorghum.jpg", description: "Wholesome grain rich in fiber." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Wheat", image: "./assets/images/product-images/wheat.jpg", description: "Essential grain for baking and meals." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Maize", image: "./assets/images/product-images/maize.jpg", description: "Versatile corn for food and feed." , quantityTypes: ["Bag", "Tonne"]}
    ]
  },
  {
    category: "Legumes",
    id: "legumesPage",
    products: [
      { name: "Beans", image: "./assets/images/Legumes.jpg", description: "Protein-rich legume for balanced meals." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Groundnut", image: "./assets/images/product-images/groundnut.jpg", description: "Crunchy and healthy groundnuts." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Soyabeans", image: "./assets/images/product-images/soybean-close-up_9635-3209.jpg", description: "Great source of plant-based protein." , quantityTypes: ["Bag", "Tonne"]}
    ]
  },
  {
    category: "Tubers",
    id: "tubersPage",
    products: [
      { name: "Cassava", image: "./assets/images/product-images/cassava.jpg", description: "Starchy root ideal for garri and fufu." , quantityTypes: ["Tonne"]},
      { name: "Potatoes", image: "./assets/images/product-images/potatos.jpg", description: "Soft and tasty tuber for any recipe." , quantityTypes: ["Basket", "Bag"]},
      { name: "Yam", image: "./assets/images/product-images/yam.jpg", description: "Staple tuber, perfect for boiling or pounding." , quantityTypes: ["Tuber"]}
    ]
  },
  {
    category: "Flour",
    id: "flourPage",
    products: [
      { name: "Yam Flour", image: "./assets/images/product-images/yam-flour.jpg", description: "Smooth flour for instant pounded yam." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cassava Flour", image: "./assets/images/product-images/cassava-flour.jpg", description: "Gluten-free flour from cassava." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Plantain Flour", image: "./assets/images/plantain-flour.jpg", description: "Nutritious and low-carb flour option." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Wheat Flour", image: "./assets/images/wheat-flour.jpg", description: "All-purpose flour for baking and cooking." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Corn Flour", image: "./assets/images/corn-flour.jpg", description: "Fine yellow flour for pap and more." , quantityTypes: ["Bag", "Tonne"]}
    ]
  },
  {
    category: "Oil",
    id: "oilPage",
    products: [
      { name: "Palm Oil", image: "./assets/images/palm-oil.jpg", description: "Rich red oil, great for stews and soups." , quantityTypes: ["Litre"]},
      { name: "Soya Oil", image: "./assets/images/soya-oil.jpg", description: "Light and heart-healthy cooking oil." , quantityTypes: ["Litre"]},
      { name: "Sunflower Oil", image: "./assets/images/sunflower-oil.jpg", description: "Mild-flavored oil rich in vitamin E." , quantityTypes: ["Litre"]},
      { name: "Coconut Oil", image: "./assets/images/coconut-oil.jpg", description: "Fragrant oil ideal for frying and skin care." , quantityTypes: ["Litre"]},
      { name: "Groundnut Oil", image: "./assets/images/groundnut-oil.jpg", description: "Tasty oil for deep frying and cooking." , quantityTypes: ["Litre"]}
    ]
  },
  {
    category: "Spices",
    id: "spicesPage",
    products: [
      { name: "Dried Pepper", image: "./assets/images/dried-pepper.jpg", description: "Hot and aromatic pepper blend." , quantityTypes: ["Bag"]},
      { name: "Ginger Powder", image: "./assets/images/ginger-powder.jpg", description: "Spicy and zesty ground ginger." , quantityTypes: ["Bag"]},
      { name: "Garlic Powder", image: "./assets/images/garlic-powder.jpg", description: "Savory powder for seasoning." , quantityTypes: ["Bag"]},
      { name: "Crayfish", image: "./assets/images/crayfish.jpg", description: "Ground dried crayfish for rich flavor." , quantityTypes: ["Paint"]}
    ]
  },
  {
    category: "Animal Farm",
    id: "animalFarmPage",
    products: [
      { name: "Cow", image: "./assets/images/cow.jpg", description: "Freshly sourced beef cattle." , quantityTypes: ["Quantity"]},
      { name: "Goat", image: "./assets/images/product-images/Goat.jpg", description: "Tasty and tender goat meat." , quantityTypes: ["Quantity"]},
      { name: "Ram", image: "./assets/images/ram.jpg", description: "Ideal for festive feasts." , quantityTypes: ["Quantity"]},
      { name: "Pig", image: "./assets/images/pig.jpg", description: "Quality pork for various dishes." , quantityTypes: ["Quantity"]},
      { name: "Snails", image: "./assets/images/snails.jpg", description: "Nutritious and delicious mollusks." , quantityTypes: ["Quantity"]},
      { name: "Rabbits", image: "./assets/images/rabbits.jpg", description: "Lean meat option, rich in protein." , quantityTypes: ["Quantity"]},
      { name: "Grass cutter", image: "./assets/images/grass-cutter.jpg", description: "Flavorful bush meat delicacy." , quantityTypes: ["Quantity"]},
      { name: "Chicken", image: "./assets/images/chicken.jpg", description: "Farm-raised chicken for all meals." , quantityTypes: ["Quantity"]},
      { name: "Turkey", image: "./assets/images/turkey.jpg", description: "Big bird, great for celebrations." , quantityTypes: ["Quantity"]},
      { name: "Fish", image: "./assets/images/fish.jpg", description: "Fresh or smoked fish varieties." , quantityTypes: ["Quantity"]}
    ]
  },
  {
    category: "Planting Materials",
    id: "plantingMaterialsPage",
    products: [
      { name: "Pineapple Sucker", image: "./assets/images/pineapple-sucker.jpg", description: "Starter plant for growing pineapples." , quantityTypes: ["Quantity"]},
      { name: "Banana Sucker", image: "./assets/images/banana-sucker.jpg", description: "Healthy shoot for banana farming." , quantityTypes: ["Quantity"]},
      { name: "Plantain Sucker", image: "./assets/images/plantain-sucker.jpg", description: "Reliable sprout for plantain growth." , quantityTypes: ["Quantity"]},
      { name: "Cocoa Seedling", image: "./assets/images/product-images/Cocoa-Seedlings.jpg", description: "High-yield cocoa tree seedling." , quantityTypes: ["Quantity"]},
      { name: "Oil Palm Seedling", image: "./assets/images/oil-palm-seedling.jpg", description: "For sustainable palm oil production." , quantityTypes: ["Quantity"]},
      { name: "Citrus Seedling", image: "./assets/images/citrus-seedling.jpg", description: "Sweet orange or lemon tree starter." , quantityTypes: ["Quantity"]},
      { name: "Cashew Seedling", image: "./assets/images/cashew-seedling.jpg", description: "Grow your own cashew trees." , quantityTypes: ["Quantity"]},
      { name: "Coconut Seedling", image: "./assets/images/coconut-seedling.jpg", description: "Hardy coconut tree starter." , quantityTypes: ["Quantity"]},
      { name: "Tomato Seed", image: "./assets/images/tomato-seed.jpg", description: "Quality seeds for juicy tomatoes." , quantityTypes: ["Quantity"]},
      { name: "Pepper Seed", image: "./assets/images/pepper-seed.jpg", description: "Vibrant seeds for hot pepper crops." , quantityTypes: ["Quantity"]},
      { name: "Onion Seed", image: "./assets/images/onion-seed.jpg", description: "High-germination onion seeds." , quantityTypes: ["Quantity"]},
      { name: "Okro Seed", image: "./assets/images/okro-seed.jpg", description: "Fast-growing okro variety." , quantityTypes: ["Quantity"]},
      { name: "Cucumber Seed", image: "./assets/images/cucumber-seed.jpg", description: "Seeds for crisp, juicy cucumbers." , quantityTypes: ["Quantity"]},
      { name: "Maize Seed", image: "./assets/images/maize-seed.jpg", description: "Hybrid maize seeds for high yield." , quantityTypes: ["Quantity"]},
      { name: "Dongoyaro Seeds", image: "./assets/images/dongoyaro-seeds.jpg", description: "Neem tree seeds for natural remedy." , quantityTypes: ["Quantity"]},
      { name: "Cassava Stem", image: "./assets/images/cassava-stem.jpg", description: "Cuttings for cassava planting." , quantityTypes: ["Quantity"]},
      { name: "Yam Set", image: "./assets/images/yam-set.jpg", description: "Pre-cut yam seed for cultivation." , quantityTypes: ["Quantity"]}
    ]
  },
  {
    category: "Special Products",
    id: "specialProductsPage",
    products: [
      { name: "Cocoa Beans", image: "./assets/images/product-images/cocoa-beans.jpg", description: "Fermented beans for chocolate or export." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cocoa Shells", image: "./assets/images/product-images/cocoa-shells.jpg", description: "By-product used for mulch or feed." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cashew Nuts(processed)", image: "./assets/images/product-images/Cashew.jpg", description: "Roasted cashews ready to eat." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cashew Nuts(Raw)", image: "./assets/images/product-images/Cashew-raw.jpg", description: "Unprocessed nuts for trade or roasting." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cashew shells", image: "./assets/images/product-images/Cashew shells.jpg", description: "Shells for oil extraction or fuel." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Ginger", image: "./assets/images/ginger.jpg", description: "Fresh root with strong aroma." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Hibiscus", image: "./assets/images/product-images/Hibiscus.jpg", description: "Dry petals for tea and export." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Garlic", image: "./assets/images/garlic.jpg", description: "Strong aromatic bulb for cooking." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Sesame", image: "./assets/images/sesame.jpg", description: "Seeds used for oil or snack topping." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Sunflower", image: "./assets/images/product-images/sunflower-seeds-537652_640.jpg", description: "High-oil seed for processing." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Soyabeans", image: "./assets/images/soyabeans.jpg", description: "Protein-rich seed for food and feed." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Cotton", image: "./assets/images/product-images/cotton.jpg", description: "Raw fiber for textiles and lint." , quantityTypes: ["Bag", "Tonne"]},
      { name: "Palm Kernel", image: "./assets/images/palm-kernel.jpg", description: "Nut used for palm kernel oil." , quantityTypes: ["Bag", "Tonne"]}
    ]
  },
  {
    category: "Grasses",
    id: "grassesPage",
    products: [
      { name: "Bracharia", image: "./assets/images/bracharia.jpg", description: "High-yield pasture grass for livestock." , quantityTypes: ["Kg"]},
      { name: "Panicum", image: "./assets/images/panicum.jpg", description: "Nutritious tropical grazing grass." , quantityTypes: ["Kg"]},
      { name: "Napier grass", image: "./assets/images/napier-grass.jpg", description: "Fast-growing fodder grass." , quantityTypes: ["Kg"]}
    ]
  },
  {
    category: "Feeds",
    id: "feedsPage",
    products: [
      { name: "Poultry Feeds", image: "assets/images/feeds2.jpg", description: "Balanced feed for chickens." , quantityTypes: ["Kg", "Bag", "Tonne"]},
      { name: "Fish Feeds", image: "./assets/images/fish-feeds.jpg", description: "Pellets for healthy fish growth." , quantityTypes: ["Kg", "Bag", "Tonne"]},
      { name: "Rabbit Feeds", image: "./assets/images/rabbit-feeds.jpg", description: "Custom feed mix for rabbits." , quantityTypes: ["Kg", "Bag", "Tonne"]},
      { name: "Pig Feeds", image: "./assets/images/pig-feeds.jpg", description: "Nutrient-rich swine feed." , quantityTypes: ["Kg", "Bag", "Tonne"]}
    ]
  },
  {
    category: "Fertilizers",
    id: "fertilizersPage",
    products: [
      { name: "Organic Soil", image: "./assets/images/organic-soil.jpg", description: "Enriched compost for better growth." , quantityTypes: ["Litre"]},
      { name: "Organic Foliar", image: "./assets/images/organic-foliar.jpg", description: "Spray-on fertilizer for fast action." , quantityTypes: ["Litre"]},
      { name: "Inorganic", image: "./assets/images/inorganic-fertilizer.jpg", description: "Commercial fertilizer for quick boost." , quantityTypes: ["Litre"]}
    ]
  },
  {
    category: "Chemicals",
    id: "chemicalsPage",
    products: [
      { name: "Herbicide", image: "./assets/images/herbicide.jpg", description: "Kills unwanted weeds effectively." , quantityTypes: ["Litre"]},
      { name: "Pesticide", image: "./assets/images/pesticide.jpg", description: "Protects crops from harmful pests." , quantityTypes: ["Litre"]},
      { name: "Insecticide", image: "./assets/images/insecticide.jpg", description: "Stops insects from damaging produce." , quantityTypes: ["Litre"]},
      { name: "Fungicide", image: "./assets/images/fungicide.jpg", description: "Prevents and treats fungal infections." , quantityTypes: ["Litre"]}
    ]
  },
  {
    category: "Miscellaneous Products",
    id: "miscellaneousPage",
    products: [
      { name: "Dried Fish", image: "./assets/images/dried-fish.jpg", description: "Traditional sun-dried protein." , quantityTypes: ["Carton", "Kg"]},
      { name: "Ogbono", image: "./assets/images/ogbono.jpg", description: "Seeds for making draw soup." , quantityTypes: ["Paint"]},
      { name: "Kilishi", image: "./assets/images/kilishi.jpg", description: "Spicy dried beef snack." , quantityTypes: ["Pack"]},
      { name: "Parrot", image: "./assets/images/parrot.jpg", description: "Colorful talking bird pet." , quantityTypes: ["Quantity"]},
      { name: "Ostrich", image: "./assets/images/ostrich.jpg", description: "Large bird for meat and feathers." , quantityTypes: ["Quantity"]},
      { name: "Pomo", image: "./assets/images/pomo.jpg", description: "Cow skin delicacy for soups." , quantityTypes: ["Kg"]},
      { name: "Onions", image: "./assets/images/onions.jpg", description: "Sharp and flavorful kitchen staple." , quantityTypes: ["Basket"]},
      { name: "Rodo", image: "./assets/images/rodo.jpg", description: "Small but fiery hot pepper." , quantityTypes: ["Basket"]},
      { name: "Tomatoes", image: "./assets/images/tomatoes.jpg", description: "Juicy and ripe red fruits." , quantityTypes: ["Basket"]}
    ]
  }
];

export default categories;
