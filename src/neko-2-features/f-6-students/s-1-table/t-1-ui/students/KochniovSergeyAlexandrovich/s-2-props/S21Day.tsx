import React from 'react';
import style from './Day.module.css';

class S21Day extends React.Component<{day: string}> {
    render = () => {
        let color;

        switch (this.props.day) {
            case 'Monday':
                color = 'green';
                break;
            case 'Tuesday':
                color = 'yellow';
                break;
            case 'Wednesday':
                color = 'red';
                break;
            case 'Thursday':
                color = 'purple';
                break;
            case 'Friday':
                color = 'blue';
                break;
            default:
                color = 'white';
                break;
        }
        return (
            <div className={style.wrap}>
                <div className={style[color]}>
                    {this.props.day}
                </div>
            </div>
        );
    }

}

export default S21Day;


