import { useDispatch } from "react-redux";
import { updateStatus } from "../../store/actions/OrderActions";
import { formatDate, formatTime, statusLabels, orderNextState} from "../../utils";

const Notification = ({ order }) => {
    const dispatch = useDispatch();

    const changeStatus = () => {
        const nextState = orderNextState(order.status);
        dispatch(updateStatus({ id: order.id, status : nextState }));
    }

    return(
        <div style={{margin: '20px', borderStyle: 'solid'}}>
            <h1>Narudzbina  </h1>
            <div>{formatDate(order.date)}</div>
            <div>{formatTime(order.date)}</div>
            <div>{order.status}</div>
            <button onClick={changeStatus}>{statusLabels(orderNextState(order.status))}</button>
        </div>
    )
}

export default Notification;