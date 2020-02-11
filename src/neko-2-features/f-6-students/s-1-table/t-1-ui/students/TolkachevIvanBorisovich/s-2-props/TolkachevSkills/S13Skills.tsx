import React from "react";
import TolkachevSkill from "./TolkachevSkill/TolkachevSkill";
import style from './TolkachevSkills.module.css'

const S13Skills = () => {
    let skills = [
        {skill: 'умный'},
        {skill: 'красивый'},
        {skill: 'обоятеленый'},
    ];

    let skillsElements = skills.map((item, i) => {
        return (
            <TolkachevSkill skill={item.skill} key={i}/>
        )
    });

    return (
        <div className={style.skills}>
            {skillsElements}
        </div>
    )
};
export default S13Skills;
