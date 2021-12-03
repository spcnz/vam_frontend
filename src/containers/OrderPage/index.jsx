import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@restart/ui/esm/Button";
import Nav from 'react-bootstrap/Nav'
import Spinner from 'react-bootstrap/Spinner'

import { OrderContainer, Root, StyledContainer } from "../../styles/OrderStyles";
import { MENU } from '../../routes';
import Order from "./Order";
import Dialog from "../../components/Dialog";
import ErrorAlert from "../../components/ErrorAlert";
import { confirmOrder } from '../../store/actions/OrderActions';
import "../../../src/assets/css/Order.css";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Container, Row, Col } from "react-bootstrap";

const OrderPage = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order)
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const error = useSelector(state => state.order.error);

    const onConfirmClick = () => {
        console.log('hehe')
        dispatch(confirmOrder(order))
        setShowModal(false);
        setLoading(true);
    }

    useEffect(() => setLoading(false),[error])

    useEffect(() => {
        if(order.success)
            setLoading(false);
        },[order])

    return(
        <Root>

            <StyledContainer>
                <Nav.Link href={MENU} >Back</Nav.Link>

                <OrderContainer>
                    <Order />
                    {loading && <Spinner animation="border" variant="success" />}
                    {error && <ErrorAlert 
                        errorTitle={"Sorry something went wrong!"} 
                        errorMsg={"Can't confirm order right now. Please try again later."}
                    />}
                </OrderContainer>

                <div className="orderToastContainer">
                    <ToastContainer>
                        <Toast animation={false} className="orderToast">
                            <Toast.Body className="orderToastBody">
                                <Container>
                                    <Row>
                                        <Col className="orderConfirmation">
                                            <Nav.Link className="orderConfirmationLink">Potvrdi porudžbinu</Nav.Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            
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