import React from 'react';
import s from './css/SelectDays.module.css'

const S4Days: React.FC<{ day: string }> = (props) => {

    let color;
    switch (props.day) {
        case 'Monday':
            color = 'green';
            break;
        case 'Tuesday':
            color = "yellow";
            break;
        case 'Wednesday':
            color = "red";
            break;
        case 'Thursday':
            color = "blueviolet";
            break;
        case 'Friday':
            color = "coral";
            break;
    }

    return (
        <div className={s.container}>
            <div className={`${s.day} ${s[color || 'Monday']}`}>

                {props.day}
            </div>
        </div>
    );
};

export default S4Days;
