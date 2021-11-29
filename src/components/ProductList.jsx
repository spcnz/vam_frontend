import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Product from "./Product";

const ProductList = ({ data }) => {

    return(
        <Container>
            {data.map((el, idx) => (
                <Row key={idx}>
                    <Product product={el} />
                </Row>
            ))}
        </Container>
    )


}


export default ProductList;