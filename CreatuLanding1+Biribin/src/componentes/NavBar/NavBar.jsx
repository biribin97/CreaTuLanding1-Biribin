import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() { 
  return (
    <header>
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="colorNav" href="#home">Inicio</Nav.Link>
            <Nav.Link className="colorNav" href="#features">Catalogo</Nav.Link>
            <Nav.Link className="colorNav" href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* ...rest of your navbar code... */}
    </>
    <CartWidget />
    </header>
  );
}

export default NavBar;