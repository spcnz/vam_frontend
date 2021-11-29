import { useState } from "react";

import ProductDetail from "../../containers/ProductDetail";

const Product = ( { product }) => {
    const [show, setShow] = useState(false);

    return (
        <>
        <div onClick={() => setShow(true)}>
            <h2>{product.name}</h2>
            <div>{product.description}</div>
            <img src={product.image} alt="Food"/>
            <div>{product.price}€</div>
        </div>
        <ProductDetail active={show} setActive={setShow} product={product}/>
        </>
    )
}

export default Product;