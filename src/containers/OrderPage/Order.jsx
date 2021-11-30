import { useSelector } from "react-redux";

import Button from "@restart/ui/esm/Button";
import Nav from 'react-bootstrap/Nav'

import { OrderContainer, Root, StyledContainer } from "../../styles/OrderStyles";
import { MENU } from '../../routes';

const Order = () => {
  
    const order = useSelector(state => state.order)
    console.log(order);
    return(
           <div>ordeerr</div>
    )

}


export default Order;
