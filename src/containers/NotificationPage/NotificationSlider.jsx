import { useDispatch } from "react-redux";
import { updateStatus } from "../../store/actions/OrderActions";
import Slider from "react-slick";
import Notification from "./Notification";
import "../../assets/css/NotificationPage.css";
import { statusLabels, orderNextState} from "../../utils";

const  NotificationSlider = ({ order }) => {
  const dispatch = useDispatch();

  const changeStatus = () => {
      const nextState = orderNextState(order.status);
      dispatch(updateStatus({ id: order.id, status : nextState }));
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div>
        <Slider {...settings}>
          <Notification order={order} />
          <div style={{textAlign: "center", width: '100%', height: '70px'}}>
            <div className="btnWrapper">
              <button className="statusBtn" onClick={changeStatus}>{statusLabels(orderNextState(order.status))}</button>
            </div>
            <div className="btnWrapper">
              <button className="statusBtn">Vidi detalje</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }


export default NotificationSlider;