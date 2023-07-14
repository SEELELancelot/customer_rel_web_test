import React, {useContext, useState} from 'react';
import {Button, Modal, Table} from 'antd';
import {useEffect} from "react";


import type {ColumnsType} from 'antd/es/table';
import axios from "axios";
import MyContext from "../context";


const GettableLink = () => {
    const setModal1Open = useContext(MyContext); //拿到App Modal 資料
    console.log(setModal1Open);
    return (
        <div>
            <a style={{"marginRight":"10px"}} onClick={() => {
                setModal1Open(true);
            }}>新增</a>
            <a style={{"marginRight":"10px"}} onClick={() => {
                setModal1Open(true);
            }}>新增</a>
        </div>
    )
}



const columns: ColumnsType = [

    {
        // title:"資料",

        // 手機畫面才出現
        align: 'center',
        responsive: ['xs'],
        render: (value, record, index) => {
            // console.log(record);
            return (
                <React.Fragment>
                    userid: {record.userId}
                    <hr/>
                    標題 <p>{record.title}</p>
                    <hr/>

                    內容 <p>{record.body}</p>
                    <hr/>
                    {GettableLink()}
                </React.Fragment>
            )
        }
    },
    {
        title: 'user id',
        dataIndex: 'userId',
        responsive: ["sm"],
    },
    {
        title: '標題',
        dataIndex: 'title',
        responsive: ["sm"],
    },
    {
        title: '資料',
        dataIndex: 'body',
        responsive: ["sm"],
    },
    {
        title: '新增修改',
        dataIndex: "insert_update",
        responsive: ["sm"],
        render: () => {
            return (
                <div>
                    {GettableLink()}

                </div>

            )
        }

    },
];

// const data: DataType[] = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i,
//         userId: `Edward King ${i}`,
//         title: 32,
//         body: `London, Park Lane no. ${i}`,
//     });
// }


const Mytable: React.FC = () => {
    let [state, setState] = useState({data: [], pageSize: 20});

    useEffect(() => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get',
        }).then(res => {
            // console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {

                res.data[i].key = res.data[i].id;
            }
            // console.log(res.data);
            // console.log(state);
            setState({
                data: res.data,
                pageSize: 20
            });
        });
    }, []);

    return (
        <Table columns={columns} dataSource={state.data} pagination={{pageSize: state.pageSize}} scroll={{y: 500}}
               onChange={(pagination) => {
                   // console.log(pagination);
                   setState({
                       data: state.data,
                       pageSize: pagination.pageSize
                   });
               }}/>
    );
}


export default Mytable;