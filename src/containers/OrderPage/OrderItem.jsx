import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button'

import { increaseQuantity, decreaseQuantity } from '../../store/actions/OrderActions';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const OrderItem = ({ item }) => {
    const dispatch = useDispatch();

    const changeQuantity = type => {
        console.log(item.id, 'iz orderitem')
        if (type === DECREASE) {
            if (item.quantity >  1)
                dispatch(decreaseQuantity(item.id))
        }
        else if (type == INCREASE) {
            dispatch(increaseQuantity(item.id))
        }
    }



    return(
        <div>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <Button onClick={() => changeQuantity(DECREASE)}>-</Button>
                <span>{item.quantity}</span>
            <Button onClick={() => changeQuantity(INCREASE)}>+</Button>
        </div>
    )
}

export default OrderItem;