import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const ModiModal = (props) => {
    //this modal pops up when the user clicks on an existing square, or when they click on a square when it's not their turn

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>{props.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.text}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModiModal;
