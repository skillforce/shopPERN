import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

export const CreateBrand = ({show,onHide}) => {
    const {device} = useContext(Context)

    const [newBrand, setNewBrand] = useState('')

    const changeBrandName = (e) => {
        setNewBrand(e.target.value)
    }


    const createNewBrand = async () => {
        await device.createBrand(newBrand)
        onHide()
    }



    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD NEW BRAND
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={newBrand}
                        onChange={changeBrandName}
                        placeholder={"Enter new type"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={createNewBrand}>ADD</Button>
            </Modal.Footer>
        </Modal>
    );
};
