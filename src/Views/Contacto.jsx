import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contacto() {
  return (
    <div>
      <h2>Cuentanos ¿En que te podemos ayudar?</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
