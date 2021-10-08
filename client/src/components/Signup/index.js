import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../../utils/mutations';

// import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  // const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="signup">
      <p>Welcome!</p>
      <h1>Sign Up</h1>
        {/* <form onSubmit={handleFormSubmit}> */}
        <form>
          <label htmlFor="name">Name:</label>
          <input
            className='form-input'
            placeholder='Your name'
            name='name'
            type='name'
            id='name'
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Zipcode:</label>
          <input
            className='form-input'
            placeholder='Zipcode'
            name='zipcode'
            type='zipcode'
            id='zipcode'
            value={formState.zipcode}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            className='form-input'
            placeholder='Your email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            className='form-input'
            placeholder='******'
            name='password'
            type='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button className='btn d-block w-100' type='submit'>
            Submit
          </button>
        </form>
        {/* {error && <div>Signup failed</div>} */}
    </div>
  );
};

export default Signup;
