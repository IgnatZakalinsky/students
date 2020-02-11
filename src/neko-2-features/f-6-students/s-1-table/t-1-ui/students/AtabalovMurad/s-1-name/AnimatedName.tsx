import React from 'react';
import style from './AnimatedName.module.css';

const AnimatedItem: React.FC<{letter: string}> = (props) => {
	return (
		<div className={style.item}>
			{props.letter}
		</div>
	);
};

const S20Name = () => {

const letters =['A','T','A','B','A','L','O','V','','M','U','R','A','D',];
const actionLetter = letters.map((el, i) => <AnimatedItem letter={el} key={i}/>);

	return (
 		<div className={style.wrap}>
			{ actionLetter }
		</div>
	);

};

export default S20Name;
