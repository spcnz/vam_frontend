import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { DetailsContainer, Image, Modal } from "../../styles/MenuStyles";
import { addToOrder, increaseQuantity, decreaseQuantity } from '../../store/actions/OrderActions';
import "../../../src/assets/css/ProductDetail.css";

function ProductDetail({ active, setActive, product}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const ordered = useSelector(state => state.order?.products.find(el => el.id === product.id))

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
        <Row>
          <div className="col productDetailHeader">
            <Image className="productDetailImage" src={product.image} />
            <Button onClick={() => setActive(false)} className="col closeDetails">
            <i className="glyphicon glyphicon-arrow-left"></i>
            </Button>
          </div>
        </Row>
        <h1 className="productDetailName">{product.name}</h1>
        <div className="productDetailInformation">
          <p className="productDetailDescription">{product.description}</p>
          <Row className="orderInformation">
            <Col><h2 className="productDetailPrice">{product.price}€</h2></Col>
            <Col>
              <div className="orderQuantity">
                <Button className="minusQuantity" onClick={decrease}><span>-</span></Button>
                <span>{ordered? ordered.quantity : quantity}</span>
                <Button className="plusQuantity" onClick={increase}><span>+</span></Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Button onClick={onAdd} disabled={ordered} className="col-9 addToOrderButton">
              {ordered? "Ažuriraj porudžbinu": "Dodaj u porudžbinu"}
            </Button>
          </Row>
        </div>
      </DetailsContainer>
    </Modal>
    );
  }

export default ProductDetail;