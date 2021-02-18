import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const DrawModal = (props) => {
    //this modal pops up when the result is draw
    const restartClicked = () => {
        props.showDrawModal(false);
        props.restartGame();
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>The result is draw! 🙌</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Try again, and beat the comouter next time! 😉</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={restartClicked} variant="success">
                    Restart game
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DrawModal;
