import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap';
import OrderItem from "./OrderItem";
import "../../../src/assets/css/Order.css";
import { round } from '../../utils';

const Order = ({ readOnly }) => {
    const products = useSelector(state => state.order?.products || [])
    const total = useSelector(state => state.order?.total || null)

    const formatDate = date => {
        const year = date.getYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${day}.${month}.${year}`
    }
  
    const formatTime = date => {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${hours}:${minutes}`
    }

    return(
        <Container>
            <div>
                <span>{formatDate(new Date())}</span>
                <span>{formatTime(new Date())}</span>
            </div>
            <div>
                {products.map((el, idx) => (
                <OrderItem key={idx} item={el} readOnly={readOnly} />
                ))}
                <div>Total <span>{round(total)}</span></div>
            </div>
        </Container>
    )
}

export default Order;