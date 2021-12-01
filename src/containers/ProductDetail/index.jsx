import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

import { DetailsContainer, Image, Modal } from "../../styles/MenuStyles";
import { addToOrder, increaseQuantity, decreaseQuantity } from '../../store/actions/OrderActions';

function ProductDetail({ active, setActive, product}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const ordered = useSelector(state => state.order?.products.find(el => el.id == product.id))

  const decrease = () => {
    if (!ordered)
      setQuantity(prevState => prevState > 1 ? prevState - 1: 1)
    else
      if (ordered.quantity > 1)
        dispatch(decreaseQuantity(product.id));
  }
  const increase = () => {
    if (ordered)
      dispatch(increaseQuantity(product.id));
    else
      setQuantity(prevState => prevState + 1);
  }

  const onAdd = () => {
    dispatch(addToOrder({ ...product, quantity}));
    setActive(false);
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
            {ordered? ordered.quantity : quantity}
            <Button onClick={increase}>+</Button>
          </Col>
          <Col>
            <Button 
              onClick={onAdd} 
              disabled={ordered}
            >
              {ordered? "Already in the order!": "Add to order"}
            </Button>
          </Col>
        </Row>
      </DetailsContainer>
    </Modal>
    );
  }

export default ProductDetail;