
import Button from "@restart/ui/esm/Button";
import Nav from 'react-bootstrap/Nav'

import { OrderContainer, Root, StyledContainer } from "../../styles/OrderStyles";
import { MENU } from '../../routes';
import Order from "./Order";

const OrderPage = () => {
  

    return(
            <Root>
                <StyledContainer>
                    <Nav.Link href={MENU} >Back</Nav.Link>
                    <OrderContainer>
                        <Order />
                    </OrderContainer>
                    <Button>Confirm your order</Button>
                </StyledContainer>
            </Root>
    )

}


export default OrderPage;