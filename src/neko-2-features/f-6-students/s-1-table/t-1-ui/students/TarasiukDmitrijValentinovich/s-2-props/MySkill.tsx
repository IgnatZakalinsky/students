import React from 'react';
import s from './MySkill.module.css';

class Skills extends React.Component<{skill: string}> {

    render = () => {
        return (
            <div className={s.skill}>
                {this.props.skill}
            </div>
        );
    }
}

export default Skills;
