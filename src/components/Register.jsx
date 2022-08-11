// IMPORTS
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { register } from '../api';

// CONSTS
const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await register(username, password);

    navigate('/posts');
  };

  // RENDERS register
  return (
    <>
      <div className='register'>
        <h3>Register an account</h3>
        <br></br>
        <form>
          <div className='input'>
            <input
              type='text'
              placeholder='New Username'
              value={username}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <br></br>
            <input
              type='password'
              placeholder='New Password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br></br>
            <button onClick={handleSubmit} type='submit'>
              Register
            </button>
          </div>
        </form>
        <p>
          <br></br>
          <Link to='/login'>Go back and Sign in</Link>!
        </p>
      </div>
    </>
  );
};

export default Register;
