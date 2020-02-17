import React from 'react';
import style from './FirstComponent.module.css'

const S1Day: React.FC<{ day: string }> = (props) => {
    let dayColor = props.day;

    return (
        <div className={style.wrapDays}>
            <div className={style[dayColor]}>
                {props.day}
            </div>
        </div>
    );
};

export default S1Day;


