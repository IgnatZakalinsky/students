import React from 'react';
import styles from './Skills.module.css';

class S7Skills extends React.Component {
    render = () => {
        const Skills = [
            {skill: 'кручу'},
            {skill: 'верчу'},
            {skill: 'запутать хочу'},

        ];
        let mySkills = Skills.map((item, i) => {
            return (
                <div className={styles.styleSkill} key={i}>
                    {item.skill}
                </div>
            )
        });

        return (
            <div className={styles.styleMap}>
                {mySkills}
            </div>
        );
    }
}

export default S7Skills;

