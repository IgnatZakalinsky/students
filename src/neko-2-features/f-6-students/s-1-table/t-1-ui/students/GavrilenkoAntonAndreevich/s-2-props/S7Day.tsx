import React from 'react';
import styles from './GavrilenkoStyles.module.css';

class S7Day extends React.Component<{day: string}> {

    render = () => {
        let dayColor = "";
        let day = this.props.day;
        switch (day) {
            case "Monday":
                dayColor = "green";
                break;
            case "Tuesday":
                dayColor = "yellow";
                break;
            case "Wednesday":
                dayColor = "red";
                break;
            case "Thursday":
                dayColor = "violet";
                break;
            case "Friday":
                dayColor = "blue";
                break;
            default:
                dayColor = "";

        }
        return (
            <div style={ {backgroundColor: dayColor} } className={styles.styleForName}>
                {day}
            </div>
        );
    }
}

export default S7Day;

