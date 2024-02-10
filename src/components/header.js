import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './img/cookbook.jpeg';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" className='cookbook-header'>
            <img
              src={logo}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt='Cookbook'
            />
            <div className='cookbook-logo'>CookBook</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#sharerecipe">Share a Recipe</Nav.Link>
                <NavDropdown title="Check More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#contactus">
                    Contact Us
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#register">
                    Register
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;