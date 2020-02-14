import React from 'react';
import s from './MySkill.module.css';
import MySkill from "./MySkill";

class S23Skills extends React.Component {
    render = () => {
        let skills;
        skills = ["Ответственный", "Исполнительный", "Коммуникабельный"];

        let skillsMe = skills.map((i, ind) => <MySkill skill={i} key={ind}/>);
        return (
            <div className={s.skills}>
                {skillsMe}
            </div>
        );
    }
}

export default S23Skills;
