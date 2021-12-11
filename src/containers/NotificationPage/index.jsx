import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrder, openWaiterWs, updateStatus } from "../../store/actions/OrderActions";
import Notification from "./Notification";

const NotificationPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.all);
    console.log(orders)

    useEffect(() => {
        dispatch(openWaiterWs(1))
        dispatch(getAllOrder());
    },[])

    return (
        <div>
            {orders.map(order => (
                <Notification key={order.id} order={order} />
            ))}
        </div>
    )
}


export default NotificationPage;