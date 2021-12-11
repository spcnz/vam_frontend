import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";


import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap";

import { MENU, ORDER, ORDER_STATUS } from "../../routes";
import Employee from "./Employee";
import { openCustomerWs } from "../../store/actions/OrderActions";
import StatusStepper from "./StatusStepper";
import "../../assets/css/OrderStatusPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Btn = ( { showOrderPage } ) => {
    return (
        <Container className="buttonRow">
        <Row>
            <div>
                <Button onClick={showOrderPage} variant="contained" className="confirmOrderButton">Pregledaj račun</Button>
            </div>
        </Row>
    </Container>
    )
}


const Back = ({ backRoute }) => {
    return (
        <Container>
            <Row>
                <Button href={backRoute} className="col-1 backToMenu">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    {/* <span>Menu</span> */}
                </Button>
            </Row>
        </Container>
    )
}


const OrderStatusPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id, table } = useSelector(state => state.facility);
    const orderId = useSelector(state => state.order?.id);

    useEffect(() => {
        dispatch(openCustomerWs(orderId))
    },[])

    const showOrderPage = () => {
        navigate(ORDER, { state: { 
            readOnly : true, 
            backRoute: ORDER_STATUS
        }})
    }
    const menuPath = () => MENU.replace(":facilityId", id).replace(":table", table);

    return (
        <div>
            <Back backRoute={menuPath()} />
            <Employee />
            <h1 style={{marginLeft: '10%'}}>Vaša porudžbina je : </h1>
            <StatusStepper />
            <Btn showOrderPage={showOrderPage}/>




        </div>
    )


}




export default OrderStatusPage;