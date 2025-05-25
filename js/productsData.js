const categories = [
  {
    category: "Cereals",
    id: "cerealsPage",
    products: [
      { name: "Rice", image: "./assets/images/product-images/rice.jpg" },
      { name: "Millet", image: "./assets/images/product-images/millet.jpg" },
      { name: "Sorghum", image: "./assets/images/product-images/Sorghum.jpg" },
      { name: "Wheat", image: "./assets/images/product-images/wheat.jpg" },
      { name: "Maize", image: "./assets/images/product-images/maize.jpg" }
    ]
  },
  {
    category: "Legumes",
    id: "legumesPage",
    products: [
      { name: "Beans", image: "./assets/images/Legumes.jpg" },
      { name: "Groundnut", image: "./assets/images/product-images/groundnut.jpg" },
      { name: "Soyabeans", image: "./assets/images/product-images/soybean-close-up_9635-3209.jpg" }
    ]
  },
  {
    category: "Tubers",
    id: "tubersPage",
    products: [
      { name: "Cassava", image: "./assets/images/product-images/cassava.jpg" },
      { name: "Potatoes", image: "./assets/images/product-images/potatos.jpg" },
      { name: "Yam", image: "./assets/images/product-images/yam.jpg" }
    ]
  },
  {
    category: "Flour",
    id: "flourPage",
    products: [
      { name: "Yam Flour", image: "./assets/images/yam-flour.jpg" },
      { name: "Cassava Flour", image: "./assets/images/cassava-flour.jpg" },
      { name: "Plantain Flour", image: "./assets/images/plantain-flour.jpg" },
      { name: "Wheat Flour", image: "./assets/images/wheat-flour.jpg" },
      { name: "Corn Flour", image: "./assets/images/corn-flour.jpg" }
    ]
  },
  {
    category: "Oil",
    id: "oilPage",
    products: [
      { name: "Palm Oil", image: "./assets/images/palm-oil.jpg" },
      { name: "Soya Oil", image: "./assets/images/soya-oil.jpg" },
      { name: "Sunflower Oil", image: "./assets/images/sunflower-oil.jpg" },
      { name: "Coconut Oil", image: "./assets/images/coconut-oil.jpg" },
      { name: "Groundnut Oil", image: "./assets/images/groundnut-oil.jpg" }
    ]
  },
  {
    category: "Spices",
    id: "spicesPage",
    products: [
      { name: "Dried Pepper", image: "./assets/images/dried-pepper.jpg" },
      { name: "Ginger Powder", image: "./assets/images/ginger-powder.jpg" },
      { name: "Garlic Powder", image: "./assets/images/garlic-powder.jpg" },
      { name: "Crayfish", image: "./assets/images/crayfish.jpg" }
    ]
  },
  {
    category: "Animal Farm",
    id: "animalFarmPage",
    products: [
      { name: "Cow", image: "./assets/images/cow.jpg" },
      { name: "Goat", image: "./assets/images/product-images/Goat.jpg" },
      { name: "Ram", image: "./assets/images/ram.jpg" },
      { name: "Pig", image: "./assets/images/pig.jpg" },
      { name: "Snails", image: "./assets/images/snails.jpg" },
      { name: "Rabbits", image: "./assets/images/rabbits.jpg" },
      { name: "Grass cutter", image: "./assets/images/grass-cutter.jpg" },
      { name: "Chicken", image: "./assets/images/chicken.jpg" },
      { name: "Turkey", image: "./assets/images/turkey.jpg" },
      { name: "Fish", image: "./assets/images/fish.jpg" }
    ]
  },
  {
    category: "Planting Materials",
    id: "plantingMaterialsPage",
    products: [
      { name: "Pineapple Sucker", image: "./assets/images/pineapple-sucker.jpg" },
      { name: "Banana Sucker", image: "./assets/images/banana-sucker.jpg" },
      { name: "Plantain Sucker", image: "./assets/images/plantain-sucker.jpg" },
      { name: "Cocoa Seedling", image: "./assets/images/product-images/Cocoa-Seedlings.jpg" },
      { name: "Oil Palm Seedling", image: "./assets/images/oil-palm-seedling.jpg" },
      { name: "Citrus Seedling", image: "./assets/images/citrus-seedling.jpg" },
      { name: "Cashew Seedling", image: "./assets/images/cashew-seedling.jpg" },
      { name: "Coconut Seedling", image: "./assets/images/coconut-seedling.jpg" },
      { name: "Tomato Seed", image: "./assets/images/tomato-seed.jpg" },
      { name: "Pepper Seed", image: "./assets/images/pepper-seed.jpg" },
      { name: "Onion Seed", image: "./assets/images/onion-seed.jpg" },
      { name: "Okro Seed", image: "./assets/images/okro-seed.jpg" },
      { name: "Cucumber Seed", image: "./assets/images/cucumber-seed.jpg" },
      { name: "Maize Seed", image: "./assets/images/maize-seed.jpg" },
      { name: "Dongoyaro Seeds", image: "./assets/images/dongoyaro-seeds.jpg" },
      { name: "Cassava Stem", image: "./assets/images/cassava-stem.jpg" },
      { name: "Yam Set", image: "./assets/images/yam-set.jpg" }
    ]
  },
  {
    category: "Special Products",
    id: "specialProductsPage",
    products: [
      { name: "Cocoa Beans", image: "./assets/images/product-images/cocoa-beans.jpg" },
      { name: "Cocoa Shells", image: "./assets/images/product-images/cocoa-shells.jpg"},
      { name: "Cashew Nuts(processed)", image: "./assets/images/product-images/Cashew.jpg" },
      { name: "Cashew Nuts(Raw)", image: "./assets/images/Cashew-raw.jpg"},
      { name: "Sorghum", image: "./assets/images/sorghum.jpg" },
      { name: "Ginger", image: "./assets/images/ginger.jpg" },
      { name: "Hibiscus", image: "./assets/images/product-images/Hibiscus.jpg" },
      { name: "Garlic", image: "./assets/images/garlic.jpg" },
      { name: "Sesame", image: "./assets/images/sesame.jpg" },
      { name: "Sunflower", image: "./assets/images/product-images/sunflower-seeds-537652_640.jpg" },
      { name: "Soyabeans", image: "./assets/images/soyabeans.jpg" },
      { name: "Cotton", image: "./assets/images/cotton.jpg" },
      { name: "Palm Kernel", image: "./assets/images/palm-kernel.jpg" }
    ]
  },
  {
    category: "Grasses",
    id: "grassesPage",
    products: [
      { name: "Bracharia", image: "./assets/images/bracharia.jpg" },
      { name: "Panicum", image: "./assets/images/panicum.jpg" },
      { name: "Napier grass", image: "./assets/images/napier-grass.jpg" }
    ]
  },
  {
    category: "Feeds",
    id: "feedsPage",
    products: [
      { name: "Poultry Feeds", image: "assets/images/feeds2.jpg" },
      { name: "Fish Feeds", image: "./assets/images/fish-feeds.jpg" },
      { name: "Rabbit Feeds", image: "./assets/images/rabbit-feeds.jpg" },
      { name: "Pig Feeds", image: "./assets/images/pig-feeds.jpg" }
    ]
  },
  {
    category: "Fertilizers",
    id: "fertilizersPage",
    products: [
      { name: "Organic Soil", image: "./assets/images/organic-soil.jpg" },
      { name: "Organic Foliar", image: "./assets/images/organic-foliar.jpg" },
      { name: "Inorganic", image: "./assets/images/inorganic-fertilizer.jpg" }
    ]
  },
  {
    category: "Chemicals",
    id: "chemicalsPage",
    products: [
      { name: "Herbicide", image: "./assets/images/herbicide.jpg" },
      { name: "Pesticide", image: "./assets/images/pesticide.jpg" },
      { name: "Insecticide", image: "./assets/images/insecticide.jpg" },
      { name: "Fungicide", image: "./assets/images/fungicide.jpg" }
    ]
  },
  {
    category: "Miscellaneous Products",
    id: "miscellaneousPage",
    products: [
      { name: "Dried Fish", image: "./assets/images/dried-fish.jpg" },
      { name: "Ogbono", image: "./assets/images/ogbono.jpg" },
      { name: "Kilishi", image: "./assets/images/kilishi.jpg" },
      { name: "Parrot", image: "./assets/images/parrot.jpg" },
      { name: "Ostrich", image: "./assets/images/ostrich.jpg" },
      { name: "Pomo", image: "./assets/images/pomo.jpg" },
      { name: "Onions", image: "./assets/images/onions.jpg" },
      { name: "Rodo", image: "./assets/images/rodo.jpg" },
      { name: "Tomatoes", image: "./assets/images/tomatoes.jpg" }
    ]
  }
];


export default categories;