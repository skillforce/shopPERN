import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

export const TypeBar = observer(() => {
        const {device} = useContext(Context);
        
        return (
            <ul className="list-group">
                {device.types.map(t => (
                    <li style={{cursor: "pointer"}} key={t.id} onClick={() => device.setSelectedType(t)}
                        className={t.name === device.selectedType.name ? "list-group-item active" : "list-group-item"}>
                        {t.name}
                    </li>)
                )
                }
            </ul>
        )
            ;
    })
;

