import React from 'react';
import s from './Word.module.css'

class Word extends React.Component<{word: string}> {
    render = () => {
        return (
            <div className={s.styleSkill}>
                {this.props.word}
            </div>
        )
    }
}

export default Word;
