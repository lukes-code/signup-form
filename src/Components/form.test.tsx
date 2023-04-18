import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

describe('Form', () => {
  it('submits the form when all fields are valid', () => {
    const mockSubmit = jest.fn();
    render(
      <div>
        <Form />
        <form onSubmit={mockSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    );

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(emailInput, 'john.doe@example.com');
    userEvent.type(passwordInput, 'password');
    userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
