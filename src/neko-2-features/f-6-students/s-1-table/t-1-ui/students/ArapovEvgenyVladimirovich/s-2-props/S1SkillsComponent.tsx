import React from 'react';
import SkillComponent from "./SkillComponent";
import style from './StyleSkills.module.css'

const S1SkillsComponent = () => {
    const skills = [''];

    const skillElements = skills.map((skill, i) => <SkillComponent title={skill} key={i}/>);

    return (
        <div className={style.skills}>
            {skillElements}
        </div>
    );
};

export default S1SkillsComponent;