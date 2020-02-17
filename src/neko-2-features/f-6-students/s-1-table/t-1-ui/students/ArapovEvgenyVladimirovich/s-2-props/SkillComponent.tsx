import React from 'react';
import style from './StyleSkill.module.css'

const SkillComponent: React.FC<{title: string}> = (props) => {

    return (
        <div className={style.skill}>
            <span>{props.title}</span>
        </div>
    )
};

export default SkillComponent;