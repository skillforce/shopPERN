import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/Routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export const Login = observer(() => {

    const {user} = useContext(Context);


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const changeLoginParams=(e,paramName)=>{
        switch(paramName){
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }



    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>

            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>LOGIN</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        value={email}
                        onChange={(e)=>changeLoginParams(e,'email')}
                        placeholder={"Enter email..."}
                        className={"mt-3"}/>
                    <Form.Control
                        value={password}
                        onChange={(e)=>changeLoginParams(e,'password')}
                        placeholder={"Enter password..."}
                        className={"mt-3"}/>
                    <div className={"d-flex justify-content-between mt-3"}>
                        <div>
                            <NavLink to={PATH.REGISTRATION} style={{textDecoration: "none"}}>
                                Registration
                            </NavLink>
                        </div>
                        <Button onClick={()=>user.login(email,password)}
                                variant={"outline-success"}
                                className={'align-self-end'}>
                            LOG IN
                        </Button>
                    </div>
                    {user.errorMsg && <div>{user.errorMsg}</div>}
                </Form>
            </Card>
        </Container>
    );
});
