import React from 'react';
import s from './Days.module.css';

class S23Days extends React.Component<{day: string}> {

    render = () => {
        let color = 'def';
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
                color = 'cornflowerblue';
                break;
        }

        return (
            <div className={s.day}>
                <div className={s[color]}>
                    {this.props.day}
                </div>
            </div>
        );
    }
}

export default S23Days;
