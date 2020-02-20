import React from 'react';
import s from "./Homework.module.css"

class S2Hello extends React.Component {
    newNameRef = React.createRef<HTMLInputElement>();
    state = {
        greetings: 0,
    }

    onClickHello = () => {
        if (this.newNameRef.current!.value !== "") {
            let newName = this.newNameRef.current!.value;
            this.newNameRef.current!.value = "";
            alert("Халлёу, " + newName + "!:)")
            this.setState({
                    tasks: this.state.greetings++,
                }
            )
        } else alert("Не знаю, как тебя зовут:(");
    }

    render = () => {
        return (
            <div className={s.greetingBox}>
                <span>{this.state.greetings}</span>
                <input ref={this.newNameRef} placeholder="Ну-ка представься"/>
                <button onClick={this.onClickHello}>Йоу</button>
            </div>
        );
    }
}

export default S2Hello;

