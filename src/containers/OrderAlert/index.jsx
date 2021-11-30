import { useSelector } from 'react-redux';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

import { ORDER } from '../../routes';

const OrderAlert = () => {
  const total = useSelector(state => state.order.total)

  return (
    <ToastContainer className="p-4" position={"bottom-center"}>
      <Toast animation={false}>
        <Toast.Header closeButton={false}>
          <Container>
            <Row>
              <Col>
                <Nav.Link href={ORDER}>Check your order</Nav.Link>
              </Col>
              <Col>{total}</Col>
            </Row>
          </Container>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  )
}

export default OrderAlert;