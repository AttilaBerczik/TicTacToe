import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const LoserModal = (props) => {
    //this modal pops up when the user loses
    const restartClicked = () => {
        props.showLoserModal(false);
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
                    <h3>Unfortunately, you lost! 😥</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Try again, and don't give up! 😎</p>
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

export default LoserModal;
