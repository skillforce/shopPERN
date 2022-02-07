import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/Routes";

export const Login = () => {
    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>LOGIN</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        placeholder={"Enter email..."}
                        className={"mt-3"}/>
                    <Form.Control
                        placeholder={"Enter password..."}
                        className={"mt-3"}/>
                    <div className={"d-flex justify-content-between mt-3"}>
                        <div>
                            <NavLink to={PATH.REGISTRATION} style={{textDecoration: "none"}}>
                                Registration
                            </NavLink>
                        </div>
                        <Button variant={"outline-success"}
                                className={'align-self-end'}>
                            LOG IN
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};
