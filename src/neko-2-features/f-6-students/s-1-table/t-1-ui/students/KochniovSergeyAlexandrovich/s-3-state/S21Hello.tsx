import React from 'react';
import s from './Task.module.css';

class S21Hello extends React.Component{
    newTask = React.createRef<HTMLInputElement>();
    state = {counter: 0};

    number = () => {
        alert('You - ' + this.newTask!.current!.value);
        this.setState({
            counter: this.state.counter + 1
        });
        this.newTask!.current!.value = ""
    };

    render = () => {
        return(
            <div className={s.block}>
                <span>{this.state.counter}</span>
                <input ref={this.newTask} type="text"/>
                <button onClick={this.number}>submit</button>
            </div>
        )
    }
}

export default S21Hello;
