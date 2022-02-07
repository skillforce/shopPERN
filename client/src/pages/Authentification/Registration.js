import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink as Link} from "react-router-dom";
import {PATH} from "../../routes/Routes";

export const Registration = () => {
    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>REGISTRATION</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        placeholder={"Enter email..."}
                        className={"mt-3"}/>
                    <Form.Control
                        placeholder={"Enter password..."}
                        className={"mt-3"}/>
                    <div className={"d-flex justify-content-between mt-3"}>
                        <div>
                            <Link to={PATH.LOGIN} style={{textDecoration:"none"}}>
                                    Log In
                                </Link>
                        </div>
                        <Button variant={"outline-success"}
                                className={'align-self-end mt-3'}>
                            SEND
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};
