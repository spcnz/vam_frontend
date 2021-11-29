import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

const  ErrorAlert = ({ errorMsg, errorTitle }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            { show && 
            <Alert 
                variant="danger" 
                onClose={() => setShow(false)} 
                dismissible
                transition={false}
            >
                <Alert.Heading>{errorTitle}</Alert.Heading>
                <p>
                    {errorMsg}
                </p>
            </Alert>}
        </>
    );
}

export default ErrorAlert;