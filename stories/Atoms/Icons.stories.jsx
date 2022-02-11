import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { CustomIcons, IconProps } from './Icons';

export default {
  title: 'Atoms/Icons',
  component: CustomIcons,
}

const Template = args => <CustomIcons {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  iconNames: [
    'ArrowRight',
    'ArrowLeft',
  ],
};
