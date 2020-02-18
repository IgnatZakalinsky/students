import React from "react"
import styles from './task3span.module.css'

class S14Hello extends React.Component {
    state = {num: 0};
    refLinc = React.createRef<HTMLInputElement>();

    myFunction = () => {
        if (!(this.refLinc.current!.value === "")) {
            alert("Hi, " + this.refLinc.current!.value);
            this.setState({num: this.state.num + 1});
            this.refLinc.current!.value = "";
        }
    };

    render = () => {
        return (
            <div className={styles.taskspan}>
                <span className={styles.span}>{this.state.num}</span>
                <input ref={this.refLinc}/>
                <button className={styles.button} onClick={this.myFunction}>go</button>
            </div>
        )
    }
}

export default S14Hello;