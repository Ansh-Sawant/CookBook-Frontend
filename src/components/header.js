import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import logo from './img/cookbook.jpeg';
import AboutUs from './Aboutus';
import ContactUs from './Contactus';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ShareRecipe from '../ShareRecipe';

function Header() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-container">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='cookbook-header'>
                <img
                src={logo}
                width="80"
                height="70"
                className="d-inline-block align-top"
                alt='Cookbook'
                />
                <div className='cookbook-logo'>CookBook</div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <Link to="/" className='nav-links'>
                        Home
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/sharerecipe" className='nav-links'>
                        Share a Recipe
                    </Link>
                </Nav.Link>
                <NavDropdown title="Check More" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to='/about' className='nav-links'>
                        About Us
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to='/contact' className='nav-links'>
                        Contact Us
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link>
                    <Link to='/login' className='nav-links'>
                        Login
                    </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                    <Link to='/register' className='nav-links'>
                        Register
                    </Link>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/sharerecipe" element={<ShareRecipe/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default Header;