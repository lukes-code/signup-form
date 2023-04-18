import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders learn to code text', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Learn to code by watching others/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the button component with correct props', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Try it free 7 days/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('blue');
    expect(button).toHaveAttribute('type', 'button');
  });
});
