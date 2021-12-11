import { formatDate, formatTime } from "../../utils";

const Notification = ({ order }) => {

    return(
        <div style={{margin: '20px'}}>
            <h1>Narudzbina  </h1>
            <div>{formatDate(order.date)}</div>
            <div>{formatTime(order.date)}</div>
            <div>{order.status}</div>
        </div>
    )
}

export default Notification;