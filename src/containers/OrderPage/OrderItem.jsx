import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import { increaseQuantity, decreaseQuantity, removeProduct } from '../../store/actions/OrderActions';
import "../../../src/assets/css/Order.css";
import { round } from '../../utils';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const OrderItem = ({ item }) => {
    const dispatch = useDispatch();

    const changeQuantity = type => {
        if (type === DECREASE) {
            if (item.quantity >  1)
                dispatch(decreaseQuantity(item.id))
        }
        else if (type === INCREASE) {
            dispatch(increaseQuantity(item.id))
        }
    }

    const deleteProduct = () => {
        dispatch(removeProduct(item.id))
    }

    return(
        <div>
            <Button onClick={(deleteProduct)}>Remove</Button>
            <span>{item.name}</span>
            <span>{round(item.price)}</span>
            <Button onClick={() => changeQuantity(DECREASE)}>-</Button>
                <span>{item.quantity}</span>
            <Button onClick={() => changeQuantity(INCREASE)}>+</Button>
        </div>
    )
}

export default OrderItem;