// IMPORTS
import '../styles/index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../api';

// CONSTS
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await login(username, password);
    navigate('/posts');
  };

  // RENDERS login
  return (
    <>
      <div className='login'>
        <h3>Sign into your Profile</h3>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br></br>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br></br>
            <button onClick={handleSubmit} type='submit'>
              Submit
            </button>
          </div>
        </form>

        <p>
          <br></br>
          Need to sign up for an account?
          <Link to='/register'> Register here</Link>!
        </p>
      </div>
    </>
  );
};

export default Login;
