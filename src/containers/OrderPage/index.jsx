import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Nav from 'react-bootstrap/Nav'
import Spinner from 'react-bootstrap/Spinner'

import { OrderContainer, Root, StyledContainer } from "../../styles/OrderStyles";
import Order from "./Order";
import Dialog from "../../components/Dialog";
import ErrorAlert from "../../components/ErrorAlert";
import { confirmOrder } from '../../store/actions/OrderActions';
import "../../../src/assets/css/Order.css";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Container, Row, Col } from "react-bootstrap";
import { ORDER_STATUS } from "../../routes";

const OrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { backRoute, readOnly } = state;
    const order = useSelector(state => state.orderItem);
    const facilityName = useSelector(state => state.menu.name);
    const table = useSelector(state => state.facility.table);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const error = useSelector(state => state.order.error);
    console.log('here ', backRoute);

    const onConfirmClick = () => {
        dispatch(confirmOrder({ order, table }))
        setShowModal(false);
        setLoading(true);
    }

    useEffect(() => setLoading(false),[error])

    // useEffect(() => {
    //     if(order.success) {
    //         setLoading(false);
    //         // navigate(ORDER_STATUS);
    //     }
    //     },[order])

    const onOrderClick = () => {
        dispatch(confirmOrder(order))
        navigate(ORDER_STATUS);

    }

    return(
        <Root>

            <StyledContainer>
                <Nav.Link href={backRoute} >Back</Nav.Link>

                <OrderContainer>
                    <h1>{facilityName}</h1>
                    <Order readOnly={readOnly} />
                    {loading && <Spinner animation="border" variant="success" />}
                    {error && <ErrorAlert 
                        errorTitle={"Sorry something went wrong!"} 
                        errorMsg={"Can't confirm order right now. Please try again later."}
                    />}
                </OrderContainer>

                { !readOnly && <div className="orderToastContainer">
                    <ToastContainer>
                        <Toast animation={false} className="orderToast">
                            <Toast.Body className="orderToastBody">
                                <Container>
                                    <Row onClick={onOrderClick} >
                                        <Col className="orderConfirmation">
                                            <Nav.Link className="orderConfirmationLink">Potvrdi porudžbinu</Nav.Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div> }
            
            </StyledContainer>

            <Dialog
                show={showModal}
                handleClose={() => setShowModal(false)}
                title="Confirm your order"
                message="neka porukica mozda malo duza hehe"
                yesCallback={onConfirmClick}
            />

        </Root>
    )
}

export default OrderPage;