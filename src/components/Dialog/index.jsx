import Modal from 'react-bootstrap/Modal';
import Button from "@restart/ui/esm/Button";

const Dialog = ({ title, message, yesCallback, show, handleClose}) => {
    return(
        <Modal 
            show={show} 
            onHide={handleClose}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={yesCallback}>Order</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Dialog;