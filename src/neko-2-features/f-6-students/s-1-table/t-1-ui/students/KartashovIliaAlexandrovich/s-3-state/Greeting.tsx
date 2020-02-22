import React, {RefObject} from 'react';
import s from './Greeting.module.css'

class Greeting
    extends React.Component<{ countValue: number, refNewName: RefObject<HTMLInputElement>, onAddClick: () => void }> {
    render = () => {
        return (
            <div className={s.wrap}>
                <span className={s.countWindow}>{this.props.countValue}</span>
                <input ref={this.props.refNewName} type="text" placeholder="Введи свое имя,брат!"/>
                <button className={s.btn} onClick={this.props.onAddClick}>Hello</button>
            </div>
        );
    }
}

export default Greeting;


