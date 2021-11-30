const OrderItem = ({ item }) => {

    return(
        <div>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
        </div>
    )
}

export default OrderItem;