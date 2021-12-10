import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { Container } from 'react-bootstrap';
import OrderItem from "./OrderItem";
import "../../../src/assets/css/Order.css";
import { round } from '../../utils';
import { getOrder } from "../../store/actions/OrderActions";

const Order = ({ readOnly }) => {
    const dispatch = useDispatch();
    const orderId = useSelector(state => state.order.id);
    const order = useSelector(state => {
        return readOnly? state.order.ordered : state.orderItem
    })
   
    useEffect((() => {
        if (orderId)
            dispatch(getOrder(orderId));
    }), [orderId])

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
                {order?.all.map((el, idx) => (
                <OrderItem key={idx} item={el} readOnly={readOnly} />
                ))}
                <div>Total <span>{round(order?.total)}</span></div>
            </div>
        </Container>
    )
}

export default Order;