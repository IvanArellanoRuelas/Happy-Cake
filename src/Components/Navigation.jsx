/* components/Navigation.jsx */
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link
          to="/Views/Contacto"
          className="text-white ms-3 text-decoration-none"
        >
          Contacto
        </Link>
      </Container>
      <Container className="justify-content-end">
        <Navbar.Brand>
          <Link to="/" className="text-white">
            Happy Cake
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
