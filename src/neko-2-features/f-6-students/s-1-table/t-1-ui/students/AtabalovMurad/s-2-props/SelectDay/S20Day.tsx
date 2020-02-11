import React from 'react';
import style from './SelectDay.module.css';


const S20Day: React.FC<{day: string}> = (props) => {

	let bgColor;

	switch(props.day) {
		case 'Monday':
			bgColor = 'green';
			break;
		case 'Tuesday':
			bgColor = 'yellow';
			break;
		case 'Wednesday':
			bgColor = 'red';
			break;
		case 'Thursday':
			bgColor = 'purple';
			break;
		case 'Friday':
			bgColor = 'blue';
			break;
		default:
			bgColor = 'white';
			break;
	}

		return (
			<div className={ style.wrap } >
				<div className={ style[bgColor] }>
					{ props.day }
				</div>
			</div>
		);
};

export default S20Day;


