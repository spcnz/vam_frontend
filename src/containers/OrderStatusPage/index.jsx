import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";


import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

import { MENU, ORDER, ORDER_STATUS } from "../../routes";
import Employee from "./Employee";
import { openCustomerWs } from "../../store/actions/OrderActions";
import StatusStepper from "./StatusStepper";
import "../../assets/css/OrderStatusPage.css";

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
            <Nav.Link href={menuPath()} >Menu</Nav.Link>
            <Employee />
            <h1 style={{marginLeft: '10%'}}>Vaša porudžbina je : </h1>
            <StatusStepper />
            <div className="orderBtnContainer">
                <button onClick={showOrderPage} className="orderBtn">
                    Pregledaj račun
                </button>
            </div>
        </div>
    )


}


export default OrderStatusPage;