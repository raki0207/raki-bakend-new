/**
 * Seed data for products
 * This file contains sample product data to populate your database
 */

const products = [
  // Just Arrived Products
  {
    name: 'Midnight Belgian Chocolate Cake',
    category: 'Cakes',
    originalPrice: 3099,
    price: 1799,
    discount: 14,
    rating: 4.9,
    reviews: 189,
    image: '/Midnight-Belgian-Chocolate-Cake.png',
    shortDescription: 'Velvety dark chocolate sponge layered with espresso-infused ganache and cocoa nib crunch.',
    fullDescription: 'Our pastry chefs finish this showstopper with a glossy Belgian chocolate mirror glaze, gold-dusted cocoa nibs, and a hazelnut praline base for an irresistible texture contrast.',
    features: ['Single-origin Belgian cocoa', 'Eggless option available', 'Complimentary chocolate plaque', 'Delivered in insulated packaging', 'Perfect for celebrations'],
    specifications: {
      'Size': '1.8 kg',
      'Serves': '14 people',
      'Allergens': 'Gluten, Dairy, Nuts',
      'Best Before': '48 hours refrigerated'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Baked Today',
    featured: true,
    productType: 'just-arrived',
    inStock: true
  },
  {
    name: 'Pistachio Raspberry Entremet',
    category: 'Dessert',
    originalPrice: 1899,
    price: 1599,
    discount: 16,
    rating: 4.8,
    reviews: 121,
    image: '/Almond-Pain-au-Chocolat.jpg',
    shortDescription: 'Layers of pistachio sponge, raspberry confit, and vanilla bean bavarois finished with a velvet spray.',
    fullDescription: 'Inspired by French patisserie, this entremet combines nutty pistachio mousse, tart raspberry gel, and crunchy pistachio feuilletine for a refined dessert experience.',
    features: ['Gluten-light sponge', 'Vibrant raspberry heart', 'Natural colouring only', 'Gift-ready magnetic box', 'Ideal for fine dining menus'],
    specifications: {
      'Size': '1.2 kg',
      'Serves': '10 people',
      'Allergens': 'Nuts, Dairy, Eggs',
      'Best Before': '36 hours refrigerated'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Chef\'s pick',
    featured: true,
    productType: 'just-arrived',
    inStock: true
  },
  {
    name: 'Salted Caramel Éclair Box',
    category: 'Pastries',
    originalPrice: 899,
    price: 749,
    discount: 17,
    rating: 4.7,
    reviews: 96,
    image: '/Almond-Pain-au-Chocolat.jpg',
    shortDescription: 'Six choux éclairs filled with Madagascar vanilla cream and topped with salted caramel glaze.',
    fullDescription: 'Each éclair is piped to order, dipped in amber caramel, and garnished with house-made almond brittle for a delightful crunch in every bite.',
    features: ['Madagascar vanilla beans', 'Small batch caramel', 'Crunchy almond brittle topping', 'Delivered chilled', 'Perfect for gifting'],
    specifications: {
      'Pieces': '6 éclairs',
      'Allergens': 'Gluten, Dairy, Eggs, Nuts',
      'Best Before': '24 hours refrigerated',
      'Serving Suggestion': 'Best enjoyed chilled'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Hand-piped',
    featured: true,
    productType: 'just-arrived',
    inStock: true
  },
  {
    name: 'Pumpkin Spice Basque Cheesecake',
    category: 'Dessert',
    originalPrice: 3899,
    price: 1499,
    discount: 18,
    rating: 4.6,
    reviews: 87,
    image: '/Pumpkin-Spice-Basque-Cheesecake.png',
    shortDescription: 'Silky Basque cheesecake with roasted pumpkin purée, warming spices, and torched sugar crust.',
    fullDescription: 'We slow-bake our seasonal cheesecake for a rustic caramelised finish, pairing autumn spices with locally sourced pumpkin for a melt-in-the-mouth texture.',
    features: ['Roasted heirloom pumpkin', 'Cinnamon-ginger spice blend', 'Naturally gluten-free base', 'Caramelised sugar top', 'Autumn limited release'],
    specifications: {
      'Size': '1.3 kg',
      'Serves': '12 people',
      'Allergens': 'Dairy, Eggs',
      'Best Before': '48 hours refrigerated'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Seasonal drop',
    featured: true,
    productType: 'just-arrived',
    inStock: true
  },

  // Just Baked Products
  {
    name: 'Heirloom Tomato Focaccia',
    category: 'Bread',
    originalPrice: 599,
    price: 499,
    discount: 17,
    rating: 4.9,
    reviews: 142,
    image: '/Heirloom-Tomato-Focaccia.png',
    shortDescription: 'Olive oil infused focaccia topped with heirloom tomatoes, sea salt flakes, and garden rosemary.',
    fullDescription: 'Fermented for 30 hours for maximum flavour, this focaccia boasts a crisp crust and pillowy crumb, finished with extra virgin olive oil right out of the oven.',
    features: ['Cold-pressed olive oil', 'Naturally leavened dough', 'Seasonal tomato medley', 'Vegan friendly', 'Baked on stone deck'],
    specifications: {
      'Size': '12 x 12 inches',
      'Allergens': 'Gluten',
      'Best Before': '24 hours',
      'Serving Suggestion': 'Serve warm with dips'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Oven Hot',
    featured: true,
    productType: 'just-baked',
    inStock: true
  },
  {
    name: 'Butter Croissant Box',
    category: 'Pastries',
    originalPrice: 699,
    price: 579,
    discount: 17,
    rating: 4.9,
    reviews: 176,
    image: '/All-Butter-French-Croissant.jpg',
    shortDescription: 'Six flaky, hand-laminated croissants made with French butter and slow-fermented dough.',
    fullDescription: 'Our signature croissants are rolled over three days to achieve 81 layers of buttery perfection. Each batch is baked every morning for the crispiest exterior and custard-soft interior.',
    features: ['Imported French butter', 'Three-day lamination', 'Light, honeycomb crumb', 'Delivered warm every morning', 'Free mini jam jars', 'Eggless option on request'],
    specifications: {
      'Pieces': '6 croissants',
      'Allergens': 'Gluten, Dairy',
      'Serving Suggestion': 'Best warm',
      'Best Before': '12 hours'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Baked at dawn',
    featured: true,
    productType: 'just-baked',
    inStock: true
  },
  {
    name: 'Garlic Herb Knotted Rolls',
    category: 'Bread',
    originalPrice: 349,
    price: 289,
    discount: 17,
    rating: 4.7,
    reviews: 102,
    image: '/Almond-Pain-au-Chocolat.jpg',
    shortDescription: 'Twelve pillowy dinner rolls brushed with garlic herb butter and sprinkled with smoked sea salt.',
    fullDescription: 'Each knot is hand-rolled, proofed to perfection, and basted with clarified butter infused with roasted garlic, thyme, and parsley.',
    features: ['Hand-shaped knots', 'Roasted garlic butter', 'Smoked sea salt finish', 'Reheat-friendly packaging', 'Ideal for family dinners'],
    specifications: {
      'Pieces': '12 rolls',
      'Allergens': 'Gluten, Dairy',
      'Best Before': '24 hours',
      'Serving Suggestion': 'Warm before serving'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Batch of the day',
    featured: true,
    productType: 'just-baked',
    inStock: true
  },
  {
    name: 'Classic Brioche Loaf',
    category: 'Bread',
    originalPrice: 449,
    price: 379,
    discount: 16,
    rating: 4.8,
    reviews: 118,
    image: '/Classic-Peanut-Butter-Spread.png',
    shortDescription: 'Rich, buttery brioche loaf with a tender crumb and glossy crust, perfect for French toast.',
    fullDescription: 'Made with cultured butter and free-range eggs, our brioche loaf is slow-fermented overnight for delicate sweetness and aroma.',
    features: ['Cultured butter', 'Overnight fermentation', 'Perfect for French toast', 'Keeps moist for 48 hours', 'Available sliced on request'],
    specifications: {
      'Weight': '600 g',
      'Allergens': 'Gluten, Dairy, Eggs',
      'Best Before': '48 hours',
      'Serving Suggestion': 'Toast lightly and serve with jam'
    },
    arrivalDate: new Date(),
    isFresh: true,
    freshnessTag: 'Chef\'s bake',
    featured: true,
    productType: 'just-baked',
    inStock: true
  },

  // Regular Products
  {
    name: 'Signature Chocolate Truffle Cake',
    category: 'Cakes',
    originalPrice: 2800,
    price: 1500,
    discount: 17,
    rating: 4.9,
    reviews: 365,
    image: '/Signature-Chocolate-Truffle-Cake.jpg',
    shortDescription: 'Decadent chocolate sponge layered with silky dark truffle ganache.',
    fullDescription: 'Our Signature Chocolate Truffle Cake is made with three layers of moist Belgian chocolate sponge, filled and coated with a rich chocolate ganache. Finished with chocolate curls and gold dust, it is the ultimate celebration centerpiece.',
    features: ['Belgian chocolate ganache', 'Freshly baked to order', 'Hand-decorated finish', 'Egg-based sponge', 'Contains nuts', '12-14 servings'],
    specifications: {
      'Weight': '1.5 kg',
      'Serves': '12-14 slices',
      'Storage': 'Refrigerated',
      'Shelf Life': '48 hours'
    },
    arrivalDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    isFresh: false,
    featured: false,
    productType: 'regular',
    inStock: true
  },
  {
    name: 'Velvet Berry Celebration Cake',
    category: 'Cakes',
    originalPrice: 2000,
    price: 1650,
    discount: 18,
    rating: 4.8,
    reviews: 298,
    image: '/red-violute.png',
    shortDescription: 'Classic red velvet cake layered with cream cheese frosting and fresh berries.',
    fullDescription: 'The Velvet Berry Celebration Cake combines luscious red velvet sponge with tangy cream cheese frosting and seasonal berries. Perfect for birthdays, anniversaries, or any special occasion.',
    features: ['Red velvet sponge', 'Premium cream cheese frosting', 'Fresh berry topping', 'Natural food colors', 'Eggless option available', '12 servings'],
    specifications: {
      'Weight': '1.4 kg',
      'Serves': '12 slices',
      'Storage': 'Refrigerated',
      'Shelf Life': '36 hours'
    },
    arrivalDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    isFresh: false,
    featured: false,
    productType: 'regular',
    inStock: true
  },
  {
    name: 'All-Butter French Croissant',
    category: 'Pastries',
    originalPrice: 699,
    price: 579,
    discount: 17,
    rating: 4.9,
    reviews: 176,
    image: '/All-Butter-French-Croissant.jpg',
    shortDescription: 'Six flaky, hand-laminated croissants made with French butter.',
    fullDescription: 'Our signature croissants are rolled over three days to achieve 81 layers of buttery perfection.',
    features: ['Imported French butter', 'Three-day lamination', 'Light, honeycomb crumb'],
    specifications: {
      'Pieces': '6 croissants',
      'Allergens': 'Gluten, Dairy',
      'Best Before': '12 hours'
    },
    arrivalDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    isFresh: false,
    featured: false,
    productType: 'regular',
    inStock: true
  }
];

// Add default weight options for every product so the frontend can display
// weight-specific pricing (e.g., 250g/500g/1kg). We scale the base price to
// create realistic variant pricing while keeping the original price as-is.
const productsWithWeights = products.map((product) => {
  const basePrice = product.price;
  const weightOptions = [
    { label: '250g', price: Math.round(basePrice * 0.6) },
    { label: '500g', price: Math.round(basePrice) },
    { label: '1kg', price: Math.round(basePrice * 1.8) }
  ];

  return {
    ...product,
    weightOptions
  };
});

module.exports = productsWithWeights;

