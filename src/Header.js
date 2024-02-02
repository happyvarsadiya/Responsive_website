import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myimg from './image/logo.png'
import {Row,Col,Container} from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";


function Header()
{
    return(
  <>
    <div className="topheader">
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home"><img src={myimg} className='logoimg'></img></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menus">
            
           <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/">Home page</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Home Image </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home Video</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/about">About Us</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Gallery </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> History </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Features </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Pricing </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Our Team </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> FAQ </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Testimonials </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> 404 Page </NavDropdown.Item>
        </NavDropdown>
            
        <NavDropdown title="Menus" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/menu">Menu Tabs(WooCommerce)</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Menu List (WooCommerce) </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Menu Tabs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Menu list</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Order" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Reservation (Contact Form 7)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Reservation (OpenTable) </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reservation Popup</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href=""><Link to="/blog">Blog</Link></Nav.Link>
        <Nav.Link href=""><Link to="/contact">Contact</Link></Nav.Link>
        <Nav.Link href="">Shop</Nav.Link>
            
        </Nav>
        <Row>
          <Col className='d-none d-xl-block'>
              <button className='t_btn'> RESERVATION <FaAngleRight></FaAngleRight> </button>
          </Col>
        </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  </>
    )
};
export default Header;