import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

import { DetailsContainer, Image, Modal } from "../../styles/MenuStyles";
import { addToOrder } from '../../store/actions/OrderActions';

function ProductDetail({ active, setActive, product}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity(prevState => prevState > 1 ? prevState - 1: 1)
  }
  const increase = () => {
    setQuantity(prevState => prevState + 1)
  }

  const onAdd = () => {
    dispatch(addToOrder({ ...product, quantity}))
    setActive(false)
  }

  useEffect(() => {
    setQuantity(1);
  }, [active])

  return (
    <Modal active={active}>
      <DetailsContainer>
        <Button onClick={() => setActive(false)}>
            Close
        </Button>
        <Image src={product.image} />
        <h1>{product.name}</h1>
        <h2>{product.price}€</h2>
        <p>{product.description}</p>
        <Row>
          <Col>
            <Button onClick={decrease}>-</Button>
            {quantity}
            <Button onClick={increase}>+</Button>
          </Col>
          <Col>
            <Button onClick={onAdd}>
              Add to order
            </Button>
          </Col>
        </Row>
      </DetailsContainer>
    </Modal>
    );
  }

export default ProductDetail;