import { useSelector } from "react-redux";

import Dropdown from 'react-bootstrap/Dropdown';

import OrderItem from "./OrderItem";

const Order = () => {
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
            {products.map((el, idx) => (
               <OrderItem key={idx} item={el} />
            ))}
            <div>
                Total <span>{total}</span>
            </div>
        </div>
        </>
    )

}


export default Order;
