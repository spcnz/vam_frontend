import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import { removeProduct } from '../../store/actions/OrderActions';
import "../../../src/assets/css/Order.css";
import "../../../src/assets/css/ProductDetail.css";
import { round } from '../../utils';
import QuantityButtons from "../QuantityButtons";


const OrderItem = ({ item, readOnly }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(removeProduct(item.id))
    }

    return(
        <div>
            {!readOnly && <Button onClick={(deleteProduct)}>Remove</Button>}
            <span>{item.name}</span>
            <span>{round(item.price)}</span>
            {readOnly? <span>{item.quantity}</span> :
            <QuantityButtons 
                quantity={item.quantity}
                id={item.id}
                product={item}
              /> }
        </div>
    )
}

export default OrderItem;