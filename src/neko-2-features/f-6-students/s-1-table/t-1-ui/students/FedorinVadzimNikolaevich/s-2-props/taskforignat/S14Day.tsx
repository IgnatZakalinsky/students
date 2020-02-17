import React from "react";
import styles from './vadzimComponenta.module.css'

class S14Day extends React.Component<{ day: string }> {
    render = () => {
        let dayColor;
        let dayy = this.props.day;
        switch (dayy) {
            case "Monday":
                dayColor = styles.monday;
                break;
            case "Tuesday":
                dayColor = styles.tuesday;
                break;
            case "Wednesday":
                dayColor = styles.wednesday;
                break;
            case "Thursday":
                dayColor = styles.thursday;
                break;
            case "Friday":
                dayColor = styles.friday;
                break;
            default:
                dayColor = styles.monday;
                break;
        }
        return (
            <div className={styles.dayStyle}>
                <div className={dayColor}>
                    {dayy}
                </div>
            </div>
        )
    }
}

export default S14Day;