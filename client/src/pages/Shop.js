import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {TypeBar} from "../components/TypeBar/TypeBar";
import {BrandBar} from "../components/BrandBar/BrandBar";
import {DeviceList} from "../components/DeviceList/DeviceList";
import {observer} from "mobx-react-lite";
import {Pages} from "../components/Pages/Pages";
import {Context} from "../index";


export const Shop = observer(() => {
    const{device}=useContext(Context)
const resetToDefault=()=>{
    device.setPage(1)
    device.setSelectedBrand({})
    device.setSelectedType({})
}


    return (
        <Container>
            <Row>
                <Col md={3} className={"mt-4"}>
                    <TypeBar/>
                    <Button variant={"outline-success"} onClick={resetToDefault} className={"mt-4"}>BACK TO ALL</Button>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
