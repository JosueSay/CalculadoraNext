import Button from './Button';
import { fn } from '@storybook/test';

export default {
  component: Button
};

export const ButtonDefault = {
  args: {
    title: 'Click Me!',
    className: 'button-text',
    onClick: fn()
  }
};

export const ButtonWhitoutText = {
  args: {
    title: '',
    className: 'button-text',
    onClick: fn()
  }
};

export const ButtonWhitTextLarge = {
  args: {
    title: 'ABCDEFGHIJKLMÑOPQRSTUVWXYZ',
    className: 'button-text',
    onClick: fn()
  }
};

export const ButtonWithNumber = {
  args: {
    title: '9',
    className: 'button-number',
    onClick: fn()
  }
};

export const ButtonWithOperator = {
  args: {
    title: '=',
    className: 'button-operator',
    onClick: fn()
  }
};
