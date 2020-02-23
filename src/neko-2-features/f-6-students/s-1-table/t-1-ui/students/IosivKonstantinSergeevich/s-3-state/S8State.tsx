import React from 'react';
import styles from './StateTask.module.css';

class S8State extends React.Component {
    ownRef = React.createRef<HTMLInputElement>();
    state = {
        counter: 0,
    };

    onAddOwnInput = () => {
        let ownInput = this.ownRef.current!.value;
        this.ownRef.current!.value = "";
        alert("Hello, " + ownInput);
        this.setState({
            counter: this.state.counter + 1
        });

    };

    render = () => {
        return (
            <div className={styles.stateTask}>
                <span>{this.state.counter}</span>
                <input ref={this.ownRef} type="text" placeholder="Enter the name"/>
                <button onClick={this.onAddOwnInput} className={styles.btn}>Press</button>
            </div>
        );
    }
}

export default S8State;