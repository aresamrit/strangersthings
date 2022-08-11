import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <h3>About this site</h3>
      <br></br>
      <p>This is a React app created to help people find or sell items.</p>
      <br></br>
      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </div>
  );
};

export default About;
