import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {Admin} from "../pages/Admin";
import {Basket} from "../pages/Basket";
import {DevicePage} from "../pages/DevicePage";
import {Shop} from "../pages/Shop";
import {ErrorPage} from "../pages/ErrorPage";
import {Login} from "../pages/Authentification/Login";
import {Registration} from "../pages/Authentification/Registration";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


export const PATH = {
    ADMIN:"/admin",
    BASKET:"/basket",
    LOGIN:"/login",
    REGISTRATION:"/registration",
    SHOP:"/shop",
    DEVICE:"/device",
    ERROR404:"/404"
}






export const ADMIN_ROLE_RIGHTS_PAGES=[
    {
        path:PATH.ADMIN,
        Component:<Admin/>
    },
    {
        path:PATH.BASKET,
        Component:<Basket/>
    }
    ]


export const AUTH_RIGHTS_PAGES =[
    {
        path:PATH.LOGIN,
        Component:<Login/>
    },
    {
        path:PATH.REGISTRATION,
        Component:<Registration/>
    }
    ]

export const COMMON_RIGHTS_PAGES =[

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






export const RoutesInfo = observer(() => {

    const AuthWrapper = ({children, isAuth}) => {
        return isAuth ? <Navigate to={'/shop'} replace/> : children
    }

    const RoleWrapper = ({children, userRole})=>{
        return userRole === "ADMIN" ? children: <Navigate to={'/404'} replace/>
    }

    const {user} = useContext(Context);

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.SHOP}/>}/>
                {AUTH_RIGHTS_PAGES.map(({path, Component}, i) => (<Route key={i} path={path}
                                                                         element={<AuthWrapper isAuth={user.isAuth}>
                                                                             {Component}
                                                                         </AuthWrapper>
                                                                         }/>))}

                {ADMIN_ROLE_RIGHTS_PAGES.map(({path, Component}, i) => (<Route key={i} path={path}
                                                                               element={<RoleWrapper userRole={user.user.role}>
                                                                                   {Component}
                                                                               </RoleWrapper>
                                                                               }/>))}


                {COMMON_RIGHTS_PAGES.map(({path, Component}, i) => (<Route key={i} path={path} element={Component}/>))}

                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
});