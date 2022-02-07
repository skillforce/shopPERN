import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {CreateBrand} from "../components/modals/CreateBrand";
import {CreateType} from "../components/modals/CreateType";
import {CreateDevice} from "../components/modals/CreateDevice";

export const Admin = () => {
    const [isBrandModalShow,setIsBrandModalShow]=useState(false)
    const [isTypeModalShow,setIsTypeModalShow]=useState(false)
    const [isDeviceModalShow,setIsDeviceModalShow]=useState(false)
    return (
        <Container className={"d-flex flex-column"}>
            <Button variant={"outline-primary mt-3 p-2"} onClick={()=>setIsTypeModalShow(true)}>ADD TYPE</Button>
            <Button variant={"outline-primary mt-3 p-2"} onClick={()=>setIsBrandModalShow(true)}>ADD BRAND</Button>
            <Button variant={"outline-primary mt-3 p-2"} onClick={()=>setIsDeviceModalShow(true)}>ADD DEVICE</Button>
            <CreateBrand show={isBrandModalShow} onHide={()=>setIsBrandModalShow(false)}/>
            <CreateType show={isTypeModalShow} onHide={()=>setIsTypeModalShow(false)}/>
            <CreateDevice show={isDeviceModalShow} onHide={()=>setIsDeviceModalShow(false)}/>
        </Container>
    );
};

