import { Row } from "react-bootstrap";
import Product from "../Product";

const ProductList = ({ data }) => {
    return(
        <div>
            {data.map((el, idx) => (
                <Row key={idx}>
                    <Product product={el} />
                </Row>
            ))}
        </div>
    )
}

export default ProductList;