import { Link } from 'react-router-dom';

//Navigation component containing navigation section
const Navigation = () => {
    return (
        <nav className='topnav'>
			  <Link to="/">Home</Link>{" "}
			  <Link to="/jobs">Jobs</Link>{" "}
			  <Link to="/login">Login</Link>{" "}
		</nav>
    );
};

export default Navigation;