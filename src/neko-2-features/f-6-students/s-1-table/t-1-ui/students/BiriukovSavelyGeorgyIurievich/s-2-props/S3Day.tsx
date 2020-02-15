import React from 'react';
import styles from './DayOfWeek.module.css';

class S3Day extends React.Component<{day: string}> {
    render = () => {
        let day;
        day = this.props.day === "Monday" ? styles.colorMonday :
            this.props.day === "Tuesday" ? styles.colorTuesday :
                this.props.day === "Wednesday" ? styles.colorWednesday :
                    this.props.day === "Thursday" ? styles.colorThursday :
                        this.props.day === "Friday" ? styles.colorFriday : "";
        return (
            <div className={styles.days}>
                <div className={day}>
                    {this.props.day}
                </div>
            </div>
        );
    }
}

export default S3Day;