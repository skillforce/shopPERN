import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

export const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context);

    const [type, setType] = useState({})
    const [brand, setBrand] = useState({})
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');


    const changeSelectedType = (newType) => {
        setType(newType)
    }
    const changeSelectedBrand = (newBrand) => {
        setBrand(newBrand)
    }
    const changeDeviceParams = (e, type) => {
        switch (type) {
            case 'name':
                setName(e.target.value)
                break;
            case 'price':
                setPrice(e.target.value)
                break;
            case 'img':
                setImg(e.target.files[0])
                break;
            default:
                break;
        }
    }


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }

    const deleteSpecification = (id) => {
        const filteredInfo = info.filter(t => t.id !== id)
        setInfo(filteredInfo)
    }

    const changeNewSpecificationParams = (e, id, params) => {
        const index = info.findIndex(t => t.id === id)
        const temp = [...info];
        temp[index][params] = e.target.value
        setInfo(temp)
    }

    const createNewDevice=async ()=>{
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price',`${Number(price)}`)
        formData.append('img',img)
        formData.append('brandId',brand.id)
        formData.append('typeId',type.id)
        formData.append('info',JSON.stringify(info))
        const res = await device.createDevice(formData)
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD NEW DEVICE
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-4"}>
                        <Dropdown.Toggle>{type.name ?? "Select type"}</Dropdown.Toggle>
                        <Dropdown.Menu>{device.types.map(t =>
                            <Dropdown.Item onClick={() => changeSelectedType(t)} key={t.id}>
                                {t.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-4"}>
                        <Dropdown.Toggle>{brand.name ?? "Select Brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>{device.brands.map(t =>
                            <Dropdown.Item onClick={() => changeSelectedBrand(t)} key={t.id}>
                                {t.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control value={name} onChange={e=>changeDeviceParams(e,'name')}
                        className={"mt-3"} placeholder={"Enter device name"}/>
                    <Form.Control value={price} onChange={e=>changeDeviceParams(e,'price')}
                        className={"mt-3"} type={"number"} placeholder={"Enter device price"}/>
                    <Form.Control onChange={e=>changeDeviceParams(e,'img')}
                        className={"mt-3"} type={"file"} placeholder={"Enter device name"}/>
                    <Button onClick={addInfo} variant={"outline-dark"} className={"mt-5"}>
                        ADD SPECIFICATION
                    </Button>
                    {info.map((t) =>
                        <div className={"p-3 mt-3 d-flex justify-content-between"} key={t.id}>
                            <Col md={4}>
                                <Form.Control value={t.title}
                                              onChange={(e) => changeNewSpecificationParams(e, t.id, "title")}
                                              placeholder={"Enter spec. name"}/>
                            </Col>
                            <Col md={4}>
                                <Form.Control value={t.description}
                                              onChange={(e) => changeNewSpecificationParams(e, t.id, "description")}
                                              placeholder={"Enter spec. description"}/>
                            </Col>
                            <Col md={2}>
                                <Button
                                    onClick={() => deleteSpecification(t.id)}
                                    variant={"outline-danger"}>
                                    Delete
                                </Button>
                            </Col>
                        </div>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={createNewDevice}>ADD</Button>
            </Modal.Footer>
        </Modal>
    );
};