import { useDispatch } from "react-redux";

import { formatDate, formatTime, statusLabels, orderNextState} from "../../utils";

import "../../assets/css/NotificationPage.css";
import { Container, Row, Col } from "react-bootstrap";


const Notification = ({ order }) => {


    return(
            <Container className="notificationContainer">
                <Row>
                    <Col className="time">
                        {formatTime(order.date)}
                    </Col>
                    <Col xs={3} className="status">
                        {statusLabels(order.status)}
                    </Col>
                    <Col xs={2}/>
                </Row>
                <Row>
                    <Col className="date">
                        {formatDate(order.date)}
                    </Col>         
                </Row>
            </Container>
    )
}

export default Notification;