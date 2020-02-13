import React from 'react'
import './MidaevSkill.css'
import MidaevSkill from "./MidaevSkill";

class S19Skills extends React.Component {

    value = [
        {skill: 'Разносторонний'},
        {skill: 'Тактичный'},
        {skill: 'Трудолюбивый'},
    ];

    render() {

        let skillElement = this.value.map((s, i) => <MidaevSkill skill={s.skill} key={i}/>);

        return (
            <div className={"styleMap"}>
                {skillElement}
            </div>
        )
    }
}

export default S19Skills