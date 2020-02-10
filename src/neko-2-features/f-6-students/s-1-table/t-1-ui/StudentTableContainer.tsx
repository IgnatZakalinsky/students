import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import TableContainer from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/TableContainer";
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import {setTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";
import {studentsItem} from '../t-2-bll/students';
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";

const StudentTableContainer: React.FC = () => {
    const {students} = useSelector((store: IAppStore) => store.tables);
    const dispatch = useDispatch();

    const model: ITableModel[] = [
        {
            title: (i: number) => (<div key={i} style={{width: '338px', padding: '11px'}}>Students</div>),
            render: (d: IShopTable, i: number) => {
                if (d.nameComponent) return d.nameComponent(i);
                else return (
                    <div
                        key={i}
                        style={{
                            width: '338px',
                            border: '1px solid black',
                            margin: '5px',
                            padding: '5px'
                        }}
                    >
                        {d.name}
                    </div>
                )
            }
        },
        {
            title: (i: number) => (<div key={i} style={{width: '60%'}}>...</div>),
            render: (d: IShopTable, i: number) => (<div key={i} style={{width: '60%'}}>...</div>)
        },

    ];

    useEffect(() => {
        dispatch(setTable("students", studentsItem, {
            minPrice: 1000, maxPrice: 9000, min: 1000, max: 9000,
            searchName: '', sortProducts: '',
            productTotalCount: 7, page: 1, pageCount: 10,
        }))

        const socket = new WebSocket("wss://social-network.samuraijs.com/handlers/chatHandler.ashx");

        // @ts-ignore
        window.socket = socket;

        socket.onmessage =
                ev => ev.data && JSON.parse(ev.data).forEach((u: any) => console.log(u.userName + ': ' + u.message))
    }, []);

    return (
        <TableContainer
            table={'shop'}
            model={model}
            data={students.items}
            headerStyle={{marginBottom: '5px', border: 'none'}}
            title={'kmb 25'}
        />
    );
};

export default StudentTableContainer;
