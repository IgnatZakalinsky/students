import React from 'react';
import style from './Skills.module.css';

const ItemSkills: React.FC<{skillValue: string}> = (props) => {
	return (
		<div className={ style.item }>
			{ props.skillValue }
		</div>
	)
};

const MySkills = ['Лидер', 'Целеустремленный', 'Жизнерадостный'];
const Item = MySkills.map( el => <ItemSkills skillValue={el}/>);

const S20Skills = () => {
		return (
			<div className={ style.wrap } >
				{ Item }
			</div>
		);
};

export default S20Skills;


