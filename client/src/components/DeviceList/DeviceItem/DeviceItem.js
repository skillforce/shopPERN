import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {PATH} from "../../../routes/Routes";
import {useNavigate} from "react-router-dom";

export const DeviceItem = ({device}) => {
    let navigate = useNavigate()
    return (
        <Col onClick={()=> navigate(PATH.DEVICE+`/${device.id}`)} className={"mt-5"} md={3} style={{cursor:"pointer"}} >
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image  width={150} height={150} src={device.img}/>
                <div className="d-flex align-items-center justify-content-center flex-column ">
                    <div>{device.name}</div>
                    <div onClick={(e)=>e.stopPropagation()} >
                        <ReactStars count={device.rating}
                                    onChange={() => {
                                    }}
                                    size={24}
                                    activeColor="#ffd700"
                                    isHalf={true}/>
                    </div>
                    <div>Price: {device.price}</div>
                </div>
            </Card>
        </Col>
    );
};
