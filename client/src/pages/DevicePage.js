import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import ReactStars from "react-rating-stars-component/dist/react-stars";

export const DevicePage = () => {
    const device = {
        id: 4,
        name: 'Apple Iphone SE',
        price: 45000,
        rating: 5,
        img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
    }

    const description = [
        {id: 1, title: "CPU", description: '10 GB'},
        {id: 2, title: "Camera", description: '6 mpx'},
        {id: 3, title: "GPU", description: 'Apple A14'},
        {id: 4, title: "Core", description: '8'},
        {id: 5, title: "Accumulator", description: '2150 mAh'},
    ]


    return (
        <>
            <Container className={"mt-3 d-flex justify-content-between "}>
                <Col md={3}>
                    <Image width={300} height={300} src={device.img}/>

                </Col>
                <Col md={4}>
                    <div className={"d-flex flex-column align-items-center"}>
                        <h2>{device.name}</h2>
                        <div className={"mt-5"}>
                            <ReactStars count={device.rating}
                                        value={4.5}
                                        onChange={() => {
                                        }}
                                        size={94}
                                        activeColor="#ffd700"
                                        isHalf={true}/>
                        </div>
                    </div>
                </Col>
                <Col style={{width: 300, height: 250, fontSize: 32, border: "5px groove grey", borderRadius:8}}
                     className={"d-flex flex-column align-items-center justify-content-around"}
                     md={4}>
                    <h3>From: {device.price}</h3>
                    <Button variant={'outline-dark'}>ADD TO BASKET</Button>
                </Col>

            </Container>
            <Container className={"mt-5"}>
                <h2>Specifications</h2>
            <Card className={"d-flex flex-column mt-3 w-100"}>
                {description.map((t, i) => (
                    <div style={{background: i % 2 === 0 ? 'lightgray' : 'transparent',fontSize: 25}} className={"font-monospace p-2"}
                         key={t.id}>
                        {t.title} : {t.description}
                    </div>
                ))}
            </Card>
                </Container>
        </>

    );
};
