import React from 'react';
import { shallow } from 'enzyme';

import { Chat } from './';

describe('Chat component', () => {
  const wrapper = shallow(<Chat open={false} onClose={() => {}} />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('chat window is hidden by default', () => {
    expect(wrapper.find('.grid-x').exists()).toBe(false);
  });

  test('floating bubble renders', () => {
    expect(wrapper.find('.floating-bubble').exists()).toBe(true);
  });
});
