import React from "react"
import styles from './vadzimskills.module.css'

class S14Skills extends React.Component {
    arr = ["joust", "do", "it"];
    render = () => {
        let NewArr = this.arr.map((i, ind) => <div className={styles.styleSkill} key={ind}> {i} </div>);

        return (
            <div className={styles.styleMap}>{NewArr} </div>
        );
    }
}

export default S14Skills;