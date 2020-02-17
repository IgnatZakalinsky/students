import React from 'react';
import s from './Skills.module.css'

class Skill extends React.Component<{feature: string}> {
    render = () => {
        return (
            <div className={s.styleSkill}>
                <span>{this.props.feature}</span>
            </div>
        );
    }
}

export default Skill;

