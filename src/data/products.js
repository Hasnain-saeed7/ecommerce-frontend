export const products = [
  {
    id: 'f1',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f1.jpg', '/img/products/f2.jpg', '/img/products/f3.jpg', '/img/products/f4.jpg'],
  },
  {
    id: 'f2',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f2.jpg', '/img/products/f1.jpg', '/img/products/f3.jpg', '/img/products/f4.jpg'],
  },
  {
    id: 'f3',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f3.jpg', '/img/products/f1.jpg', '/img/products/f2.jpg', '/img/products/f4.jpg'],
  },
  {
    id: 'f4',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f4.jpg', '/img/products/f1.jpg', '/img/products/f2.jpg', '/img/products/f3.jpg'],
  },
  {
    id: 'f5',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f5.jpg', '/img/products/f6.jpg', '/img/products/f7.jpg', '/img/products/f8.jpg'],
  },
  {
    id: 'f6',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f6.jpg', '/img/products/f5.jpg', '/img/products/f7.jpg', '/img/products/f8.jpg'],
  },
  {
    id: 'f7',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f7.jpg', '/img/products/f5.jpg', '/img/products/f6.jpg', '/img/products/f8.jpg'],
  },
  {
    id: 'f8',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/f8.jpg', '/img/products/f5.jpg', '/img/products/f6.jpg', '/img/products/f7.jpg'],
  },
  {
    id: 'n1',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n1.jpg', '/img/products/n2.jpg', '/img/products/n3.jpg', '/img/products/n4.jpg'],
  },
  {
    id: 'n2',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n2.jpg', '/img/products/n1.jpg', '/img/products/n3.jpg', '/img/products/n4.jpg'],
  },
  {
    id: 'n3',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n3.jpg', '/img/products/n1.jpg', '/img/products/n2.jpg', '/img/products/n4.jpg'],
  },
  {
    id: 'n4',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n4.jpg', '/img/products/n1.jpg', '/img/products/n2.jpg', '/img/products/n3.jpg'],
  },
  {
    id: 'n5',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n5.jpg', '/img/products/n6.jpg', '/img/products/n7.jpg', '/img/products/n8.jpg'],
  },
  {
    id: 'n6',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n6.jpg', '/img/products/n5.jpg', '/img/products/n7.jpg', '/img/products/n8.jpg'],
  },
  {
    id: 'n7',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n7.jpg', '/img/products/n5.jpg', '/img/products/n6.jpg', '/img/products/n8.jpg'],
  },
  {
    id: 'n8',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    images: ['/img/products/n8.jpg', '/img/products/n5.jpg', '/img/products/n6.jpg', '/img/products/n7.jpg'],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || products[0];
}

