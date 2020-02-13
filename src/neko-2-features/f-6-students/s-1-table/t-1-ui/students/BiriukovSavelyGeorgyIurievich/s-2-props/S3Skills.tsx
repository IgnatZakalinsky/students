import React from 'react';
import styles from './PersonalQulities.module.css';

class S3Skills extends React.Component {
    qualities = [
        {quality: "Капитан"},
        {quality: "Джек"},
        {quality: "Воробей"},
    ];

    render = () => {
        let myQualities = this.qualities.map((qualities, i) => {
            return (
                <div className={styles.styleSkill} key={i}>
                    {qualities.quality}
                </div>
            );
        });

        return (
            <div className={styles.styleMap}>
                {myQualities}
            </div>
        )
    }
}

export default S3Skills;