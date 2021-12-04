import { useState } from "react";
import ProductDetail from "../../containers/ProductDetail";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../../../src/assets/css/Product.css";

const Product = ( { product }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div onClick={() => setShow(true)} className="productContainer">
                <h2 className="productName">{product.name}</h2>
                <div className="productInformation">
                    <div className="col-8 productDescription">
                        <div>{product.description}</div>
                        <div className="price">{product.price}€</div>
                    </div>
                    <div className="col-4 productImageContainer">
                        <img src={product.image} alt="Food" className="productImage"/>
                    </div>
                </div>
                <hr className="col-12 divider"></hr>
            </div>
            <ProductDetail active={show} setActive={setShow} product={product}/>
        </div>
    )
}

export default Product;