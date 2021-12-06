export const round = price => {
    return typeof(price) === 'number'? price.toFixed(2) : price;
}