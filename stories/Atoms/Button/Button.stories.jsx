import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import  CustomButton  from './Button';

export default {
  title: 'Atoms/Button',
  component: CustomButton,
}

const Template = args => <CustomButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children:"Button",
  variant:"primary",
  onClick:()=>{console.log("clicked")},
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children:"Button",
  variant:"secondary",
  onClick:()=>{console.log("clicked")},
};