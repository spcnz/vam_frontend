const Product = ( { product }) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <div>{product.description}</div>
            <img src={product.image} />
            <div>{product.price}€</div>
        </div>
    )
}

export default Product;