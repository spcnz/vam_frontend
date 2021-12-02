import { useSelector } from 'react-redux';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import "../../../src/assets/css/OrderAlert.css";

import { ORDER } from '../../routes';

const OrderAlert = () => {
  const total = useSelector(state => state.order.total)

  return (
    <div className="orderToastContainer">
      <ToastContainer position={"bottom-center"}>
          <Toast animation={false} className="orderToast">
            <Toast.Body className="orderToastBody">
              <Container>
                  <Row>
                    <Col>
                      <Nav.Link href={ORDER} className="orderConfirmation">Naruči</Nav.Link>
                    </Col>
                    <Col className="orderTotal">
                      <span>{total}€</span>
                    </Col>
                  </Row>
              </Container>
            </Toast.Body>
          </Toast>
      </ToastContainer>
    </div>
  )
}

export default OrderAlert;