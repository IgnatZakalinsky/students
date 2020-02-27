import React from 'react';
import ComponentOne from "./ComponentOne";
import s from "./ComponentTwo.module.css";

class S16Skills extends React.Component {
    render = () => {

        let qualitys = [
            {title: "Good"},
            {title: "Fat"},
            {title: "Boy"},

        ];

        let qualitysElements = qualitys.map((d, i) => {
            return <ComponentOne title={d.title} key={i}/>;
        });

        return (
            <div className={s.two}>
                {qualitysElements}
            </div>
        );
    }
}


export default S16Skills;
