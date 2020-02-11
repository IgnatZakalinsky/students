import React from "react";
import style from './TolkachevSkill.module.css'

const TolkachevSkill: React.FC<{ skill: string }> = (props) => {
    return (
        <div className={style.skill}>
            <span>{props.skill}</span>
        </div>
    );
};

export default TolkachevSkill;
