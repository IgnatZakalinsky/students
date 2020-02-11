import React from 'react';

import StyleSkill from "./StyleSkill";
import './css/StyleMap.css'

class S4Skills extends React.Component {
    render = () => {
        let skills;
        skills = [
            {skill: "Вежливый"},
            {skill: "Дружелюбный"},
            {skill: "Коммуникабельный"},

        ];

        let skillsElement = skills.map(item=>{
            return (
                <StyleSkill skill={item.skill}/>
            )
        });

        return (
            <div className="skills">
                {skillsElement}
            </div>
        );
    }
}

export default S4Skills;
