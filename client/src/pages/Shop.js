import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {TypeBar} from "../components/TypeBar/TypeBar";
import {BrandBar} from "../components/BrandBar/BrandBar";
import {DeviceList} from "../components/DeviceList/DeviceList";


export const Shop = () => {

    return (
        <Container>
            <Row>
                <Col md={3} className={"mt-4"}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};
