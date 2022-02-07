import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {DeviceItem} from "./DeviceItem/DeviceItem";

export const DeviceList = observer(() => {
    const {device}=useContext(Context)


    return (
        <div className={"d-flex mt-3 flex-wrap "}>
            {device.devices.map(t=>(
              <DeviceItem key={t.id} device={t}  />
            ))}

        </div>
    );
});
