require('./database')
const Product = require('../models/product')

const products = [
  {
    name: 'Product 1',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'engine',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 2',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'transmission',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 3',
    price: 5.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'suspension',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 4',
    price: 8.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'brakes',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 5',
    price: 12.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exhaust',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 6',
    price: 6.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'interior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 7',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exterior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 8',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'engine',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 9',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'transmission',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 10',
    price: 5.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'suspension',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 11',
    price: 8.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'brakes',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 12',
    price: 12.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exhaust',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 13',
    price: 6.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'interior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 14',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exterior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 15',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'engine',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 16',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'transmission',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 17',
    price: 5.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'suspension',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 18',
    price: 8.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'brakes',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 19',
    price: 12.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exhaust',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 20',
    price: 6.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'interior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 21',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exterior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 22',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'engine',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 23',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'transmission',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 24',
    price: 5.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'suspension',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 25',
    price: 8.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'brakes',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 26',
    price: 12.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exhaust',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 27',
    price: 6.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'interior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
  {
    name: 'Product 28',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    category: 'exterior',
    imageUrl: 'https://placewaifu.com/image/350?blur',
    relatedProducts: []
  },
]

Product.deleteMany({})
.then(() => {
  console.log('products deleted')
  console.log('inserted products')
  return Product.insertMany(products)
})
.catch(err => console.error(err))
.finally(() =>  {
  process.exit()
})
