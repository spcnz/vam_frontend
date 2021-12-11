import { useDispatch } from "react-redux";
import { removeProduct } from '../../store/actions/OrderItemActions';
import "../../../src/assets/css/Order.css";
import "../../../src/assets/css/ProductDetail.css";
import { round } from '../../utils';
import QuantityButtons from "../QuantityButtons";
import { Container, Row, Col, Button } from "react-bootstrap";


const OrderItem = ({ item, readOnly }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(removeProduct(item.id))
    }

    return(
        <Container fluid className="orderItemContainer">
            <Row className="orderItemRow">
                <div className="col-1 removeProductContainer">
                    {!readOnly && <Button onClick={(deleteProduct)} className="removeProduct"><span>-</span></Button>}
                </div>

                <div className="col-11">
                    <span className="itemName">{item.name}</span>
                    <span className="itemPrice">{round(item.price)}</span>
                </div>

                {/* <div className="col-4 itemQuantityContainer">
                    {readOnly? <span>{item.quantity}</span> :
                    <QuantityButtons
                        quantity={item.quantity}
                        id={item.id}
                        product={item}
                    /> }
                </div> */}
            </Row>
        </Container>
    )
}

export default OrderItem;