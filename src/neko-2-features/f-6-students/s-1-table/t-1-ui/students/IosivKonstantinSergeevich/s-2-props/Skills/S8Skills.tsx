import React from "react";
import Skill from "./Skill/Skill";
import s from "./Skills.module.css";

class S8Skills extends React.Component {
    skills = [
        {title: "Crazy"},
        {title: "Lazy"},
        {title: "Realist"}
    ];

    render = () => {

        let skillsElements = this.skills.map(skillItem => (
            <Skill
                title={skillItem.title}
            />
        ));

        return (
            <div className={s.skills}>
                {skillsElements}
            </div>
        );
    };
}

export default S8Skills;
