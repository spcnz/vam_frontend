import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import "../../../src/assets/css/OrderAlert.css";
import { round } from '../../utils';

import { MENU, ORDER } from '../../routes';

const OrderAlert = () => {
  const total = useSelector(state => state.orderItem?.total);
  const { id, table } = useSelector(state => state.facility);
  const navigate = useNavigate();
  console.log(id, table, 'iz order alert ')
  const showOrderPage = () => {

    navigate(ORDER, { state: { 
        readOnly : false, 
        backRoute: MENU.replace(":facilityId", id).replace(":table", table)
    }})
}


  return (
    <div className="orderToastContainer">
      <ToastContainer position={"bottom-center"}>
          <Toast animation={false} className="orderToast">
            <Toast.Body className="orderToastBody">
              <Container>
                  <Row onClick={showOrderPage}>
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