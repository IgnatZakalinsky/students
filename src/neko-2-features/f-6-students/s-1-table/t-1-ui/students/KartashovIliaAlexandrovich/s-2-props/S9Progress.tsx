import React from 'react';
import s from './MyProgress.module.css';

class S9Progress extends React.Component<{ day: string }> {
    render = () => {
        let dayColor = '';
        switch (this.props.day) {
            case 'Monday':
                dayColor = 'green';
                break;
            case 'Tuesday':
                dayColor = 'yellow';
                break;
            case 'Wednesday':
                dayColor = 'red';
                break;
            case 'Thursday':
                dayColor = 'darkslateblue';
                break;
            case 'Friday':
                dayColor = 'cyan';
                break;
        }

        return (
            <div className={s.wrapper}>
                <div className={s[dayColor]}>
                    <span>{this.props.day}</span>
                </div>
            </div>
        );
    }
}

export default S9Progress;


