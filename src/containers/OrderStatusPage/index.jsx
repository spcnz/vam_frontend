import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import Nav from 'react-bootstrap/Nav';

import { MENU, ORDER, ORDER_STATUS } from "../../routes";
import Employee from "./Employee";

const OrderStatusPage = () => {
    const navigate = useNavigate();
    const { id, table } = useSelector(state => state.facility);

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
            <Button onClick={showOrderPage}>
                Pregledaj racun
            </Button>
        </div>
    )


}


export default OrderStatusPage;