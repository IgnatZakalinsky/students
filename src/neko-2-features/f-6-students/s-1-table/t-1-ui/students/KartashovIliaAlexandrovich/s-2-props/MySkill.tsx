import React from 'react';

class MySkill extends React.Component<{myskill: string}> {
    render = () => {
        return (
            <div style={{width: 150, border: '1px solid black', marginRight: 5, paddingLeft: 5}}>
                {this.props.myskill}
            </div>
        );
    }
}

export default MySkill;


