import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { DetailsContainer, Image, Modal } from "../../styles/MenuStyles";


function ProductDetail({ active, setActive, product}) {
  const [quantity, setQuantity] = useState(1) 

  const decrease = () => {
    setQuantity(prevState => prevState > 1 ? prevState - 1: 1)
  }
  const increase = () => {
    setQuantity(prevState => prevState + 1)
  }

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
            <Button>
              Add to order
            </Button>
          </Col>
        </Row>
      </DetailsContainer>
    </Modal>
    );
  }

export default ProductDetail;