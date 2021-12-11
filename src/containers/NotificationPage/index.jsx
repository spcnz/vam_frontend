import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllOrder, openWaiterWs } from "../../store/actions/OrderActions";
import Notification from "./Notification";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import { RECEIVED, IN_PROGRESS, PREPARED, SERVED, PAID } from "../../orderStatus";

const NotificationPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.all);
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(openWaiterWs(1))
        dispatch(getAllOrder());
    },[])

    useEffect(() => {
        setData(orders)
    },[orders])

    const filter = status => {
        setData(orders.filter(order => order.status == status));
    }

    return (
        <div>
            {data.map(order => (
                <Notification key={order.id} order={order} />
            ))}
             <Navbar bg="light" variant="light" fixed="bottom">
                <Container>
                    <Nav className="me-auto">
                        <Button onClick={() => filter(RECEIVED)}>Received</Button>
                        <Button onClick={() => filter(IN_PROGRESS)} >In progress</Button>
                        <Button onClick={() => filter(PREPARED)}>Prepared</Button>
                        <Button onClick={() => filter(SERVED)}>Served</Button>
                        <Button onClick={() => filter(PAID)}>Paid</Button>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


export default NotificationPage;