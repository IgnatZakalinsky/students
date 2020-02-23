import React from 'react';

class SkillsListItem extends React.Component<{skill: string}> {
    render() {
        return <div
            style={{
                width: '150px',
                marginRight: '5px',
                paddingLeft: '5px',
                border: '1px solid black',
                // color: this.props.color,
                // backgroundColor: this.props.bg
            }}
        >{this.props.skill}</div>
    };
}

export default SkillsListItem;

