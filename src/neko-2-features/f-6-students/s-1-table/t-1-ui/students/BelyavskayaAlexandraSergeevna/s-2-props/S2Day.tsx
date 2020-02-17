import React from 'react';
import s from './DayofWeek.module.css'

class S2Day extends React.Component<{day: string}> {
    render = () => {
        return (
            <div className={s[this.props.day]}>
                {this.props.day}
            </div>
        );
    }
}

export default S2Day;

