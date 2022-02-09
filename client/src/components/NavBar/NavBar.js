import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink as Link, useNavigate} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {PATH} from "../../routes/Routes";

export const NavBar = observer(() => {
    const {user} = useContext(Context)
    let navigate = useNavigate();


   const logoutBtnHandler =()=>{
       user.logout()
       navigate(PATH.LOGIN)
   }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={PATH.SHOP} style={{textDecoration:'none'}}>
                    <div style={{color: 'white'}}>DeviceShop</div>
                </Link>
                {user.isAuth ? <Nav className="ml-100" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            style={{marginRight: '20px'}}
                            onClick={()=>navigate(PATH.ADMIN)}
                        >
                           Admin panel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={logoutBtnHandler}>
                            Log Out
                        </Button>
                    </Nav> :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Link to={PATH.LOGIN}><Button variant={"outline-light"}>Log In</Button></Link>
                    </Nav>}
            </Container>

        </Navbar>
    );
});
