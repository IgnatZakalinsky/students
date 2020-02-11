import React from 'react';
import style from './Skills.module.css';

const ItemSkills: React.FC<{ skillValue: string }> = (props) => {
    return (
        <div className={style.item}>
            {props.skillValue}
        </div>
    )
};

const S20Skills = () => {
	const MySkills = ['Лидер', 'Целеустремленный', 'Жизнерадостный'];
    const Item = MySkills.map((el, i) => <ItemSkills skillValue={el} key={i}/>);

    return (
        <div className={style.wrap}>
            {Item}
        </div>
    );
};

export default S20Skills;


