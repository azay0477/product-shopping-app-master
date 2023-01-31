import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProductModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order Placed
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Thank you for order.
          </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;