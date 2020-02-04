import React from 'react';

class S7Name extends React.Component {
    nameMas = ["Г", "а", "в", "р", "и", "л", "е", "н", "к", "о", " ", "А", "н", "т", "о", "н",];
    colorMas = ["red", "orange", "violet", "green", "blue", "purple"];

    printMyName = () => {
        this.setState({});
    };

    render = () => {
        return (
            <div style={{padding: '5px', margin: '5px', width: '338px'}} onMouseOver={this.printMyName}>
                {this.nameMas.map((c, i) => (
                    <span
                        key={i}
                        style={{color: this.colorMas[Math.floor(Math.random() * this.colorMas.length)]}}
                    >
                            {c}
                        </span>
                ))}
            </div>
        );
    }
}

export default S7Name;