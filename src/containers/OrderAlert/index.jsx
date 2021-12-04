import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Nav } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import "../../../src/assets/css/OrderAlert.css";
import { round } from '../../utils';

import { ORDER } from '../../routes';

const OrderAlert = () => {
  const total = useSelector(state => state.order.total)
  const navigate = useNavigate();

  return (
    <div className="orderToastContainer">
      <ToastContainer position={"bottom-center"}>
          <Toast animation={false} className="orderToast">
            <Toast.Body className="orderToastBody">
              <Container>
                  <Row onClick={() => navigate(ORDER)}>
                    <Col>
                      <span className="orderConfirmation">Naruči</span>
                    </Col>
                    <Col className="orderTotal">
                      <span>{round(total)}€</span>
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