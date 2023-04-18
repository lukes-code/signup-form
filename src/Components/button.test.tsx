import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders a button with text', () => {
    render(<Button text="Click me" color="blue" type="button" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });
});
