import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";

export const Pages = observer(() => {
    const{device} = useContext(Context)

    const numInArr =(num)=>{
        let arr = [];
        for (let i = 1; i<=Math.ceil(device.totalCount/device.limit);i++){
            arr.push(i)
        }
        return arr
    }

    const setPage = (num)=>{
       device.setPage(num)
    }

    const pages=numInArr(device.totalCount)

    return (
        <Pagination className={"mt-5"}>
            {pages.length>1 && pages.map(t=>(
            <Pagination.Item key={t} active={t===device.page} onClick={()=>setPage(t)}>{t}</Pagination.Item>
                ))}
        </Pagination>
    );
});

