import React from 'react';
import { shallow } from 'enzyme';

import { CartItem } from './';
import { ProductGalery } from '../ProductGalery';

const mockItem = {
  size: 'S',
  quantity: 2,
  item: {
    name: 'The Special Pantsuit',
    description:
      "This is the coolest pantsuit you've ever seen. Fits like a dream. Wear this everywhere, and nowhere.",
    images: [{ order: 0, url: '/assets/jumpsuit-1.jpg' }]
  }
};

describe('CartItem component', () => {
  const wrapper = shallow(
    <CartItem
      size={mockItem.size}
      item={mockItem.item}
      quantity={mockItem.quantity}
    />
  );

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('picture renders', () => {
    expect(wrapper.find(ProductGalery).exists()).toEqual(true);
  });

  test('title renders', () => {
    expect(wrapper.find('.item-title').text()).toEqual(
      mockItem.item.name + ' - Size ' + mockItem.size
    );
  });

  test('description renders', () => {
    expect(wrapper.find('.item-description').text()).toEqual(
      mockItem.item.description
    );
  });

  test('quantity renders', () => {
    expect(wrapper.find('.item-quantity').text()).toEqual(
      mockItem.quantity + ''
    );
  });
});
