import React from 'react';
import Skill from "./Skill";
import s from "./Skills.module.css"

class S2Skills extends React.Component {
    render = () => {
        let skillsArr = ["communicative", "optimistic", "infantile"];
        let skillsElements = skillsArr.map((item, i) => {
            return (
                <Skill feature={item} key={i}/>
            )
        });

        return (
            <div className={s.styleMap}>
                {skillsElements}
            </div>
        );
    }
}

export default S2Skills;

