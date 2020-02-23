import React from 'react';
import SkillsListItem from "./SkillsListItem";

let renderItem = (s: string, i: number) => <SkillsListItem skill={s} key={i}/>;

class S6Skills extends React.Component {
    render() {
        let skills = [
            'Целеустремленная',
            'Внезапная',
            'Обаятельная'
        ];
        return <div
            style={{
                width: '500px',
                margin: '5px',
                padding: '5px',
                border: '1px solid black',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >{skills.map(renderItem)}</div>
    };
}

export default S6Skills;