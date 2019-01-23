import React from 'react';
import { shallow } from 'enzyme';

import { ProductGalery } from './';

const mockImages = [
  { order: 0, url: '/assets/jumpsuit-1.jpg' },
  { order: 1, url: '/assets/jumpsuit-2.jpg' },
  { order: 2, url: '/assets/jumpsuit-3.jpg' },
  { order: 3, url: '/assets/jumpsuit-4.jpg' },
  { order: 4, url: '/assets/jumpsuit-5.jpg' }
];

describe('ProductGalery component', () => {
  const wrapper = shallow(<ProductGalery images={mockImages} />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('has at least a picture', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });

  test('has the first picture when it renders', () => {
    expect(wrapper.find('img').prop('src')).toEqual(mockImages[0].url);
  });
});
