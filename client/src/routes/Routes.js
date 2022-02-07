import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {Admin} from "../pages/Admin";
import {Basket} from "../pages/Basket";
import {DevicePage} from "../pages/DevicePage";
import {Shop} from "../pages/Shop";
import {ErrorPage} from "../pages/ErrorPage";
import {Login} from "../pages/Authentification/Login";
import {Registration} from "../pages/Authentification/Registration";


export const PATH = {
    ADMIN:"/admin",
    BASKET:"/basket",
    LOGIN:"/login",
    REGISTRATION:"/registration",
    SHOP:"/shop",
    DEVICE:"/device",
    ERROR404:"/404"
}






export const AUTH_RIGHTS_PAGES=[
    {
        path:PATH.ADMIN,
        Component:<Admin/>
    },
    {
        path:PATH.BASKET,
        Component:<Basket/>
    }
    ]

export const COMMON_RIGHTS_PAGES =[
    {
        path:PATH.LOGIN,
        Component:<Login/>
    },
    {
        path:PATH.REGISTRATION,
        Component:<Registration/>
    },
    {
        path:PATH.DEVICE+"/:id",
        Component:<DevicePage/>
    },
    {
        path:PATH.SHOP,
        Component:<Shop/>
    },
    {
        path:PATH.ERROR404,
        Component:<ErrorPage/>
    },
    ]



const AuthWrapper = ({children, isAuth}) => {
    return isAuth ? children : <Navigate to={'/404'} replace/>
}

export const RoutesInfo = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.SHOP}/>}/>
                {AUTH_RIGHTS_PAGES.map(({path,Component},i)=>(<Route key={i} path={path}
                       element={<AuthWrapper isAuth={true}>
                           {Component}
                                </AuthWrapper>
                       }/>))}

                {COMMON_RIGHTS_PAGES.map(({path,Component},i)=>(<Route key={i} path={path} element={Component}/>))}

                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
};