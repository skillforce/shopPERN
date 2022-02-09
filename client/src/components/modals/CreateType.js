import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

export const CreateType = ({show, onHide}) => {
    const {device} = useContext(Context)

    const [newType, setNewType] = useState('')

    const changeType = (e) => {
        setNewType(e.target.value)
    }


    const createNewType = async () => {
        await device.createType(newType)
        onHide()
    }


    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD NEW TYPE
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={newType}
                                  onChange={changeType}
                                  placeholder={"Enter new type"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={createNewType}>ADD</Button>
            </Modal.Footer>
        </Modal>
    );
};

