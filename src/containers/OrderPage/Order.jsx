import { useSelector } from "react-redux";

import Dropdown from 'react-bootstrap/Dropdown';

import OrderItem from "./OrderItem";

const Order = () => {
    const order = useSelector(state => state.order)

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

    console.log(order);
    return(
        <>
        <Dropdown.Divider />
        <div>
            <span>
                {formatDate(new Date())}
            </span>
            <span>
                {formatTime(new Date())}
            </span>
        </div>
        <Dropdown.Divider />
        <div>
            {order.products.map((el, idx) => (
               <OrderItem key={idx} item={el} />
            ))}
            <div>
                Total <span>{order.total}</span>
            </div>
        </div>
        </>
    )

}


export default Order;
