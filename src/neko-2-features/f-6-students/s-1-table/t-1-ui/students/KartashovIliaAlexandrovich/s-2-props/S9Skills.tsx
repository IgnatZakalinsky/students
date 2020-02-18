import React from 'react';
import MySkill from './MySkill';

class S9Skills extends React.Component {
    skills = [
        {mySkill: ' обаятельный '},
        {mySkill: ' гениальный '},
        {mySkill: ' добряк '}
    ];
    render = () => {
        let mySkills = this.skills.map((t, i) => {
                return <MySkill myskill={t.mySkill} key={i}/>
            }
        );

        return (
            <div style={{
                width: '500px',
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {mySkills}
            </div>
        );
    }
}

export default S9Skills;


