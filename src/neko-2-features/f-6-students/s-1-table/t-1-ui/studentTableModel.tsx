import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";
import React from "react";
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import StyledDay from "./s-2-props/StyledDay";

export const studentTableModel: ITableModel[] = [
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
        title: (i: number) => (<div key={i} style={{width: '130px', padding: '11px'}}>Progress</div>),
        render: (d: IShopTable, i: number) => {
            return (
                <div
                    key={i}
                    style={{
                        width: '130px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        display: 'flex'
                    }}
                >
                    <StyledDay
                        SD={d.styledDay ? d.styledDay : (day: string) => (
                            <div style={{marginLeft: 5, padding: 5, border: '1px solid black', width: 82}}>
                                some day
                            </div>
                        )}
                    />
                </div>
            )
        }
    },
    {
        title: (i: number) => (<div key={i} style={{width: '500px', padding: '11px'}}>Skills</div>),
        render: (d: IShopTable, i: number) => {
            if (d.mappedSkills) return d.mappedSkills(i);
            else return (
                <div
                    key={i}
                    style={{
                        width: '500px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}
                >
                    <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                        ...
                    </div>
                    <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                        ...
                    </div>
                    <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                        ...
                    </div>
                </div>
            )
        }
    },
    {
        title: (i: number) => (<div key={i} style={{width: '500px', padding: '11px'}}>Hello</div>),
        render: (d: IShopTable, i: number) => {
            if (d.hello) return d.hello(i);
            else return (
                <div
                    key={i}
                    style={{
                        width: '250px',
                        border: '1px solid black',
                        margin: '5px',
                        padding: '5px',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}
                >
                    <span style={{width: 15, margin: 5}}>0</span>
                    <input/>
                    <button onClick={() => alert('Он не сделал домашку!!!')} style={{marginLeft: 5, padding: 5}}>
                        hello
                    </button>
                </div>
            )
        }
    },

    {
        title: (i: number) => (<div key={i} style={{width: '10%'}}>...</div>),
        render: (d: IShopTable, i: number) => (<div key={i} style={{width: '10%'}}>...</div>)
    },
];
