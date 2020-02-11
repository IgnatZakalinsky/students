import React from 'react';
import './css/StyleSkill.css'

class StyleSkill extends React.Component<{skill: string}> {
    render = () => {
        return (
            <div className="skill">
                <span>{this.props.skill}</span>
            </div>
        );
    }
}

export default StyleSkill;
