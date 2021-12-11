import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { DetailsContainer, Image, Modal } from "../../styles/MenuStyles";
import { addToOrder, updateQuantity } from '../../store/actions/OrderItemActions';
import "../../../src/assets/css/ProductDetail.css";
import { round } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import QuantityButtons from '../QuantityButtons';

function ProductDetail({ active, setActive, product}) {
  const dispatch = useDispatch();
  const ordered = useSelector(state => state.orderItem?.all.find(el => el.id === product.id))
  const [quantity, setQuantity] = useState(ordered? ordered.quantity : 1);

  const decrease = () => {
      setQuantity(prevState => prevState > 1 ? prevState - 1: 1)
  }
  const increase = () => {
      setQuantity(prevState => prevState + 1);
  }

  const onAdd = () => {
    dispatch(addToOrder({ ...product, quantity}));
    setActive(false);
  }
  
  const onUpdate = () => {
    dispatch(updateQuantity({ id: product.id, quantity}))
    setActive(false);
  }

  return (
    <Modal active={active}>
      <DetailsContainer>
        <Row>
          <div className="col productDetailHeader">
            <Image className="productDetailImage" src={product.image} />
            <Button onClick={() => setActive(false)} className="col closeDetails">
            <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </div>
        </Row>
        <h1 className="productDetailName">{product.name}</h1>
        <div className="productDetailInformation">
          <p className="productDetailDescription">{product.description}</p>
          <Row className="orderInformation">
            <Col><h2 className="productDetailPrice">{round(product.price * quantity)}€</h2></Col>
            <Col>
              <QuantityButtons 
                increaseCallbak={increase}
                decreaseCallbak={decrease}
                quantity={quantity}
                product={product}
              />
            </Col>
          </Row>
          <Row>
            <Button onClick={ordered? onUpdate : onAdd} className="col-9 addToOrderButton">
              {ordered? "Ažuriraj porudžbinu": "Dodaj u porudžbinu"}
            </Button>
          </Row>
        </div>
      </DetailsContainer>
    </Modal>
    );
  }

export default ProductDetail;