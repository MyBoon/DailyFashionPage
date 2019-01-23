import React from 'react';
import { shallow } from 'enzyme';

import { OptionSelector } from './';

const mockOption = {
  label: 'Size',
  options: ['S', 'M', 'L', 'XL'],
  info:
    'These are sized a little small. We advise ordering the next size up from what you normally wear.'
};

describe('OptionSelector component', () => {
  const wrapper = shallow(
    <OptionSelector
      optionLabel={mockOption.label}
      options={mockOption.options}
      info={mockOption.info}
      onChange={() => {}}
    />
  );

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('has all the options', () => {
    expect(wrapper.find('input[type="radio"]').length).toBe(
      mockOption.options.length
    );
  });

  test('has a default options', () => {
    expect(wrapper.find('.selected').length).toBe(1);
  });

  test('display info', () => {
    expect(wrapper.find('.info').exists()).toBe(true);
  });
});
