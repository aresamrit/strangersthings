import {
  Navbar,
  Home,
  Posts,
  Login,
  Logout,
  Register,
  Create,
  About,
} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register' element={<Create />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
