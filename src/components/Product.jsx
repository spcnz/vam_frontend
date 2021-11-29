const Product = ( { product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <div>{product.description}</div>
            <img src={product.image} />
            <div>{product.price}€</div>
        </div>
    )
}

export default Product;