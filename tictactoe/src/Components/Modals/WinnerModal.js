import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const WinnerModal = (props) => {
    //this modal pops up when the user wins
    const restartClicked = () => {
        props.showWinnerModal(false);
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
                    <h3>Congrats, you won! 🎉</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Try again, and beat the computer the next time as well!</p>
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

export default WinnerModal;
