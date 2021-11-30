import { useSelector } from 'react-redux';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const OrderAlert = () => {

  const total = useSelector(state => state.order.total)
  console.log(total);
  return (
    <ToastContainer className="p-4" position={"bottom-center"}>
      <Toast animation={false}>
        <Toast.Header closeButton={false}>
          <Container>
            <Row>
              <Col>Check your order</Col>
              <Col>{total}</Col>
            </Row>
          </Container>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  )
}

export default OrderAlert;