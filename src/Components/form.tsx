import React, { useState, FormEvent, ChangeEvent } from 'react';
import Button from './Button';

function Form() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    firstNameError: false,
    lastNameError: false,
    emailError: {
      isError: false,
      message: 'Email Address cannot be empty'
    },
    passwordError: false
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
      [`${name}Error`]: false
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = formValues;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const newFormValues = {
      firstNameError: firstName === '',
      lastNameError: lastName === '',
      emailError: {
        isError: email === '' || !emailRegex.test(email),
        message: email === '' ? 'Email Address cannot be empty' : 'Looks like this is not an email'
      },
      passwordError: password === ''
    };

    setFormValues(prevState => ({
      ...prevState,
      ...newFormValues
    }));

    // If all input fields are not empty, submit form
    if (!Object.values(newFormValues).some(error => error)) {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <form name="test-form" onSubmit={handleSubmit}>
      <label>
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleInputChange}
            className={formValues.firstNameError ? 'error' : ''}
        />
        {formValues.firstNameError && <p className="error">First Name cannot be empty</p>}
      </label>
      <br />
      <label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleInputChange}
          className={formValues.lastNameError ? 'error' : ''}
        />
        {formValues.lastNameError && <p className="error">Last Name cannot be empty</p>}
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleInputChange}
          className={formValues.emailError.isError ? 'error' : ''}
        />
        {formValues.emailError.isError && <p className="error">{formValues.emailError.message}</p>}
    </label>
    <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleInputChange}
          className={formValues.passwordError ? 'error' : ''}
        />
        {formValues.passwordError && <p className="error">Password cannot be empty</p>}
    </label>
    <Button boldText="CLAIM YOUR FREE TRIAL" color="green" type="submit" />
      {/* a href="#" throws a TypeScript error, so I have placed a . also for temp use*/}
      <p className="legal">By clicking the button, you are agreeing to our <a href="#." id="terms">Terms and Services</a></p>
    </form>
  );
}

export default Form;
