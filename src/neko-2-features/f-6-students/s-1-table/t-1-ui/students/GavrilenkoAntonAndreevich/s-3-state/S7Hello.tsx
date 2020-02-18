import React from 'react';
import styles from './HelloComponentGavrilenko.module.css';

class S7Hello extends React.Component {
    ignatTaskTitleRef = React.createRef<HTMLInputElement>();
    state = {spanV: 0};

    onPushClick = () => {
        let title = this.ignatTaskTitleRef.current!.value;
        alert("Дароу, " + title);

        let newSpanV = this.state.spanV + 1;
        this.setState({spanV: newSpanV});
    };

    render = () => {
        return (
            <div className={styles.wrapper}>
                <span>{this.state.spanV}</span>
                <input ref={this.ignatTaskTitleRef} type="text" placeholder="Введи свое имя"/>
                <button onClick={this.onPushClick}>Push</button>
            </div>
        )
    }
}

export default S7Hello;

