import { RECEIVED, IN_PROGRESS, PREPARED, SERVED, PAID } from "../orderStatus";

export const round = price => {
    return typeof(price) === 'number'? price.toFixed(2) : price;
}

export const calcTotal = products => {
    return products.reduce((res,item) => res + item.price * item.quantity ,0)
}
  
export const formatDate = dateTime => {
    try {
        const arr = dateTime.split("T");
        const date = arr[0].split('-');
        
        return `${date[2]}.${date[1]}.${date[0]}.`
    } catch(err) {
        return ""
    }
}

export const formatTime = dateTime => {
    try {
        const arr = dateTime.split("T");
        const time = arr[1].split(':');

        return `${time[0]}:${time[1]}`
    } catch(err) {
        return ""
    }
}

export const orderNextState = status => {
    switch(status) {
        case RECEIVED : return IN_PROGRESS;
        case IN_PROGRESS: return PREPARED;
        case PREPARED: return SERVED;
        case SERVED: return PAID;
        default: return "";
    }
}

export const statusLabels = status => {
    switch(status) {
        case RECEIVED : return "Nova";
        case IN_PROGRESS: return "U pripremi";
        case PREPARED: return "Gotovo";
        case SERVED: return "Servirano";
        default: return "";
    }
}