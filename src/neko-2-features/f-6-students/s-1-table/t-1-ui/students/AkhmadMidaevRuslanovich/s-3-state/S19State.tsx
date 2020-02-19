import React from 'react';
import s from './dz3Midaev.module.css'

class S19State extends React.Component {
    refNameAlert = React.createRef<HTMLInputElement>();

    valueSpan = 0

    onAletrName = () => {
        let text = this.refNameAlert.current!.value;
        alert('Привет ' + text);
        this.refNameAlert.current!.value = ''
        this.setState({
            valueSpan: this.valueSpan++
        })
    }

    render() {

        return (
            <div className={s.lenPridumavat}>
                <span>{this.valueSpan}</span>
                <input ref={this.refNameAlert} className={s.inputMidaev} type="text"/>
                <button onClick={this.onAletrName} className={s.buttonMidaev}>Нажми</button>
            </div>
        );
    }

}

export default S19State;