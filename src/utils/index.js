export const round = price => {
    return typeof(price) === 'number'? price.toFixed(2) : price;
}

export const calcTotal = products => {
    return products.reduce((res,item) => res + item.price * item.quantity ,0)
}
  