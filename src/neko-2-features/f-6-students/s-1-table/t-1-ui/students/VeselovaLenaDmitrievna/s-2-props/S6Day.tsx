import React from 'react';

let getWeekDayColor = (day: string) => {
    switch (day) {
        case 'Monday':
            return 'green';
        case 'Tuesday':
            return 'yellow';
        case 'Wednesday':
            return 'red';
        case 'Thursday':
            return 'purple';
        case 'Friday':
            return 'pink';
        default:
            return 'grey';
    }
};

class S6Day extends React.Component<{day: string}> {
    render() {
        return (

            <div
                style={{
                    marginLeft: '5px',
                    padding: '5px',
                    border: '1px solid black',
                    width: '82px',
                    backgroundColor: getWeekDayColor(this.props.day)
                }}
            >{this.props.day}</div>
        );
    };
}

export default S6Day;