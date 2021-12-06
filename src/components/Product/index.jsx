import { useState } from "react";
import ProductDetail from "../../containers/ProductDetail";
import "../../../src/assets/css/Product.css";
import { round } from '../../utils';
import QuantityButtons from "../../containers/QuantityButtons";

const DESCRIPTION_LENGTH = 20;

const Product = ( { product }) => {
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <div onClick={() => setShow(true)} className="productContainer">
                <h2 className="productName">{product.name}</h2>
                <div className="productInformation">
                    <div className="col-8 productDescription">
                        <div>{product.description.slice(0, DESCRIPTION_LENGTH)}..</div>
                        <div className="price">{round(product.price)}€</div>
                    </div>
                    <div className="col-4 productImageContainer">
                        <img src={product.image} alt="Food" className="productImage"/>
                    </div>
                </div>
                <hr className="col-12 divider"></hr>
            </div>
            <QuantityButtons 
                id={product.id} 
                product={product}
                allowRemove={true}
            />
            {show && <ProductDetail active={show} setActive={setShow} product={product}/>}
        </div>
    )
}

export default Product;