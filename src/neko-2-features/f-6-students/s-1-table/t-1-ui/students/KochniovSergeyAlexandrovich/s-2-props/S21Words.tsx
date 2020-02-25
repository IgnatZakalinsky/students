import React from 'react';
import Word from "./Word";
import s from './Word.module.css'

class S21Words extends React.Component {
    text = [
        {word: "не"},
        {word: "читай"},
        {word: "это"}
    ];

    render = () => {
        let wordItem = this.text.map((t, i) => {
            return <Word word={t.word} key={i}/>
        });

        return (
            <div className={s.styleMap}>
                {wordItem}
            </div>

        )
    }
}


export default S21Words;
