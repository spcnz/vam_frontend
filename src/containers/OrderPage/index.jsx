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
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const OrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { backRoute, readOnly } = state;
    const order = useSelector(state => state.orderItem);
    const facilityName = useSelector(state => state.menu.name);
    const table = useSelector(state => state.facility.table);
    const [showModal, setShowModal] = useState(false);

    const onConfirmClick = () => {
        dispatch(confirmOrder({ order, table }))
        navigate(ORDER_STATUS);
    }
    return(
        <Root>
            {/* <Nav.Link href={backRoute} >Back</Nav.Link> */}

            <Container>
                <Row>
                    <Button href={backRoute} className="col-1 backToMenu">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        {/* <span>Menu</span> */}
                    </Button>
                </Row>
            </Container>
            
            <Container className="orderContainer">
                <Row className="orderRow">
                    {/* <h1 className="orderFacilityName">{facilityName}</h1> */}
                    <Order readOnly={readOnly} />
                </Row>
            </Container>

            { !readOnly &&
            <Container className="buttonRow">
                <Row>
                    <div>
                        <Button onClick={onConfirmClick} variant="contained" className="confirmOrderButton">Potvrdi porudžbinu</Button>
                    </div>
                </Row>
            </Container>
            }
        </Root>
    )
}

export default OrderPage;