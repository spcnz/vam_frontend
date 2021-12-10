import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increaseQuantity, decreaseQuantity, addToOrder, removeProduct } from '../../store/actions/OrderItemActions';
import "../../../src/assets/css/ProductDetail.css";

const QuantityButtons = ( { 
    increaseCallbak , 
    decreaseCallbak, 
    quantity, 
    id, 
    product,
    allowRemove = false
 }) => {
    const dispatch = useDispatch();
    const ordered = useSelector(state => state.orderItem?.all.find(el => el.id === id));

    const setIncreaseCallback = () => {
        return increaseCallbak ? increaseCallbak : increase;
    }
    const setDecreaseCallback = () => {
        return decreaseCallbak ? decreaseCallbak : decrease;
    }
    const increase = () => {
        if (!ordered)
            dispatch(addToOrder({ ...product, quantity: 1}));
        else
            dispatch(increaseQuantity(id))
    }
    const decrease = () => {
        if ((quantity && quantity >  1) || (ordered?.quantity && ordered?.quantity > 1))
            dispatch(decreaseQuantity(id))
        else if (ordered?.quantity === 1 && allowRemove)
            dispatch(removeProduct(id));
    }

    return(
        <div className="orderQuantity">
            <Button 
                className="minusQuantity" 
                onClick={setDecreaseCallback()}
            >
                <span>-</span>
            </Button>
            <span>{quantity ? quantity: ordered ? ordered.quantity: 0}</span>
            <Button 
                className="plusQuantity" 
                onClick={setIncreaseCallback()}
            >
                <span>+</span>
            </Button>
      </div>
    )
}

export default QuantityButtons;