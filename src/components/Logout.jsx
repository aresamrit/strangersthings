import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div>
      <h1>You are logged out!</h1>
      Please sign in <Link to='/login'>here</Link>
    </div>
  );
};

export default Logout;
