import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Stranger's Things</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/register'>Register</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
