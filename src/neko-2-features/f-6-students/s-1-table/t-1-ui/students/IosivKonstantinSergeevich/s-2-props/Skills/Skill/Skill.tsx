import React from "react";
import s from './Skill.module.css';

class Skill extends React.Component<{title: string}> {
    render = () => {

        return (

            <div className={s.skill}>

                <span>{this.props.title}</span>

            </div>
        );
    };
}

export default Skill;
