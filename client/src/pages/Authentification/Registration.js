import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink as Link, useNavigate} from "react-router-dom";
import {PATH} from "../../routes/Routes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

export const Registration = observer(() => {

    const navigate = useNavigate()
   const{user}=useContext(Context)

    const signUp = async (email, password) => {
        try {
            await user.registration(email, password)
            navigate(PATH.LOGIN)
        }catch(err){
           alert(err.message)
        }

    }

    const changeRegisterParams = (e, paramName) => {
        switch (paramName) {
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


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>REGISTRATION</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        value={email}
                        onChange={(e) => changeRegisterParams(e, 'email')}
                        placeholder={"Enter email..."}
                        className={"mt-3"}/>
                    <Form.Control
                        value={password}
                        onChange={(e) => changeRegisterParams(e, 'password')}
                        placeholder={"Enter password..."}
                        className={"mt-3"}/>
                    <div className={"d-flex justify-content-between mt-3"}>
                        <div>
                            <Link to={PATH.LOGIN} style={{textDecoration: "none"}}>
                                Log In
                            </Link>
                        </div>
                        <Button onClick={() => signUp(email, password)}
                                variant={"outline-success"}
                                className={'align-self-end mt-3'}>
                            SEND
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});
