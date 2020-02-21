import React from "react";
import styles from "./HomeWork3.module.css"

class S3Hello extends React.Component {
    nameRef = React.createRef<HTMLInputElement>();
    state = {
        counter: 0,
    };

    addName = () => {
        if (this.nameRef.current!.value === '') {
        } else {
            alert('Hello ' + this.nameRef.current!.value);
            this.nameRef.current!.value = '';
            this.setState({
                counter: this.state.counter + 1,
            });
        }
    };

    render = () => {

        return (
            <div className={styles.homeWork3}>
                <span className={styles.span}>{this.state.counter}</span>
                <input className={styles.input} type="text" ref={this.nameRef} placeholder="Имя здесь быть должно"/>
                <button className={styles.button} onClick={this.addName}>WAP</button>
            </div>
        );
    };
}

export default S3Hello;