import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Col, Row} from "react-bootstrap";

export const BrandBar = observer(() => {
    const {device} = useContext(Context);


    return (
        <div className={"d-flex mt-3 flex-wrap"}>
            {device.brands.map(t => (
                <Card key={t.id}
                      onClick={() => device.setSelectedBrand(t)}
                      className={t.name === device.selectedBrand.name ? "m-lg-2 p-3 bg-primary text-white" : "m-lg-2 p-3 "}
                      style={{cursor: "pointer"}}>
                    {t.name}
                </Card>
            ))}

        </div>
    );
});
