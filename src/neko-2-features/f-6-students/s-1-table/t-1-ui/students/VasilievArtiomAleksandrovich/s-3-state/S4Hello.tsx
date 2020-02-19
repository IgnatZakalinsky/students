import React from 'react';
import styles from './css/Counter.module.css'

class S4Hello extends React.Component {
    alertName = React.createRef<HTMLInputElement>();
    state = {counter: 0};

    onButtonClick = () => {
        if (this.alertName.current!.value == "") {
            alert('Введите свое имя')
        } else {
            alert("Привет " + this.alertName.current!.value);
            this.alertName.current!.value = "";
            this.setState({
                counter: this.state.counter + 1
            });
        }
    };

    render = () => {
        return (
            <div className={styles.container}>
                <span className={styles.span}>{this.state.counter}</span>
                <input ref={this.alertName} type="text"/>
                <button className={styles.button} onClick={this.onButtonClick}>Жми!</button>
            </div>
        );
    }
}

export default S4Hello;
