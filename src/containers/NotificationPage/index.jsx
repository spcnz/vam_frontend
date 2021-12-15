import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllOrder, openWaiterWs } from "../../store/actions/OrderActions";
import Notification from "./Notification";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHandHoldingUsd, faSpinner, faConciergeBell,faCheck } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';
import { RECEIVED, IN_PROGRESS, PREPARED, SERVED, PAID } from "../../orderStatus";

import "../../assets/css/NotificationPage.css";
import NotificationSlider from "./NotificationSlider";

const NotificationPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.all);
    const [data, setData] = useState([])
    console.log('Data u page je ', data)
    console.log("orders u page je ", orders);

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
            <Container className="content">
            {data.map(order => (
                <Row>
                    <NotificationSlider key={order.id} order={order} />
                </Row>
            ))}
            </Container>
             <Navbar bg="light" variant="light" fixed="bottom">
                <Nav className="navbar">
                    <Container fluid >
                        <Row className="navbarRow justify-content-md-center">
                            <Col className="statusCategory receivedStatus" onClick={() => setData(orders)}>
                                <FontAwesomeIcon icon={faBell} />
                            </Col>
                            <Col  className="statusCategory" onClick={() => filter(IN_PROGRESS)}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </Col>
                            <Col className="statusCategory" onClick={() => filter(PREPARED)}>
                                <FontAwesomeIcon icon={faConciergeBell} />
                            </Col>
                            <Col className="statusCategory" onClick={() => filter(SERVED)}>
                                <FontAwesomeIcon icon={faCheck} />
                            </Col>
                            <Col className="statusCategory" onClick={() => filter(PAID)}>
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                            </Col>
                        </Row>
                    </Container>
                </Nav>
            </Navbar>
        </div>
    )
}


export default NotificationPage;