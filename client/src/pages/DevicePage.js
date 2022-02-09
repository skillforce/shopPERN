import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Image, Spinner} from "react-bootstrap";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

export const DevicePage = observer(() => {

    const {id} = useParams()

    const {device}= useContext(Context)

    useEffect(()=>{
        device.initDevicePage(id)
    },[])


    const deviceToWatch = device.device


   if(device.loadingStatus==='loading'){
       return <Spinner animation={'border'}/>
   }

    return (
        <>
            <Container className={"mt-3 d-flex justify-content-between "}>
                <Col md={3}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + deviceToWatch.img}/>

                </Col>
                <Col md={4}>
                    <div className={"d-flex flex-column align-items-center"}>
                        <h2>{deviceToWatch.name}</h2>
                        <div className={"mt-5"}>
                            <ReactStars count={deviceToWatch.rating=5}
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
                    <h3>From: {deviceToWatch.price}</h3>
                    <Button variant={'outline-dark'}>ADD TO BASKET</Button>
                </Col>

            </Container>
            <Container className={"mt-5"}>
                <h2>Specifications</h2>
            <Card className={"d-flex flex-column mt-3 w-100"}>
                {deviceToWatch.info && deviceToWatch.info.map((t, i) => (
                    <div style={{background: i % 2 === 0 ? 'lightgray' : 'transparent',fontSize: 25}} className={"font-monospace p-2"}
                         key={t.id}>
                        {t.title} : {t.description}
                    </div>
                ))}
            </Card>
                </Container>
        </>

    );
});
