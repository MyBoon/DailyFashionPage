const ProductAPI = {
  getDailyFreshLook: function() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: 890,
          sizes: [
            { id: 123, name: 'Small', abbreviation: 'S', quantity: 57 },
            { id: 234, name: 'Medium', abbreviation: 'M', quantity: 43 },
            { id: 345, name: 'Large', abbreviation: 'L', quantity: 1 },
            { id: 456, name: 'X-Large', abbreviation: 'XL', quantity: 0 }
          ],
          name: 'The Special Pantsuit',
          description:
            "This is the coolest pantsuit you've ever seen. Fits like a dream. Wear this everywhere, and nowhere.",
          bullets: [
            'So baggy and yet hugs all the right places',
            'Big hidden pockets',
            'Front zipper so you can zip yourself in',
            'Silk material, reinforced stitching'
          ],
          images: [
            { order: 0, url: '/assets/jumpsuit-1.jpg' },
            { order: 1, url: '/assets/jumpsuit-2.jpg' },
            { order: 2, url: '/assets/jumpsuit-3.jpg' },
            { order: 3, url: '/assets/jumpsuit-4.jpg' },
            { order: 4, url: '/assets/jumpsuit-5.jpg' }
          ],
          materials: ['silk'],
          price: 12000,
          sizeInfo:
            'These are sized a little small. We advise ordering the next size up from what you normally wear.',
          materialInfo:
            '100% silk which feels very nice. These are meant to be warn slightly baggy so that they are comfortable. Zipper front with rolled up sleeves. Hip pockets on the front.'
        });
      }, 1000);
    });
  }
};

export { ProductAPI };
