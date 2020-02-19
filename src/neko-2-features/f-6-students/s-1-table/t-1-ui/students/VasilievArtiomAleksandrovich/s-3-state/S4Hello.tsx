import React from 'react';
import styles from './css/Counter.module.css'


class S4Hello extends React.Component {
    alertName = React.createRef<HTMLInputElement>();
    state = {counter: 0};

    onButtonClick = () => {
        alert("Привет " + this.alertName.current!.value);
        this.alertName.current!.value = "";
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render = () => {
        return (
            <div className={styles.container}>
                <span>{this.state.counter}</span>
                <input ref={this.alertName} type="text"/>
                <button onClick={this.onButtonClick}>Жми!</button>
            </div>
        );
    }
}

export default S4Hello;
