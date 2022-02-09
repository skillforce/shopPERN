import {RoutesInfo} from "./routes/Routes";
import {NavBar} from "./components/NavBar/NavBar";
import React, {useContext} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)

    if (user.loadingStatus === 'loading') {
        return <div className={"d-flex mt-4 justify-content-center align-items-center"}>
            <Spinner animation={"grow"}/>
        </div>
    }

    return (
        <>
            <NavBar/>
            <RoutesInfo/>
        </>
    );
})

export default App;
