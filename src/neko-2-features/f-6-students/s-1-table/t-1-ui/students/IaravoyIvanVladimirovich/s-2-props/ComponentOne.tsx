import React from 'react';
import s from './ComponentOne.module.css'

class ComponentOne extends React.Component<{title: string}> {
    render = () => {
        return <div>
            <p className={s.one}>{this.props.title}</p>
        </div>
    }
}


export default ComponentOne;
