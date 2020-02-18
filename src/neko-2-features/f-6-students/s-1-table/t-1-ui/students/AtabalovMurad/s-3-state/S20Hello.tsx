import React from 'react';

class S20Hello extends React.Component {
    refInput = React.createRef<HTMLInputElement>();

    state = {
        count: 0,
        bgColor: '#832264'
    };

    onAddWelcome = () => {

        let textWelcome = this.refInput.current!.value;
        alert(textWelcome);
        this.refInput.current!.value = '';

        this.state.bgColor = '#' + Math.round(Math.random() * 1000000);

        this.setState({
                count: this.state.count + 1,
                bgColor: this.state.bgColor
            }
        );

    };

    render = () => {
        console.log(this.state.bgColor);
        return (
            <div style={{
                backgroundColor: `${this.state.bgColor}`, width: '250px',
                margin: '5px', padding: '5px', border: '1px solid black', display: 'flex'
            }}>
                <span style={{
                    width: '15px', margin: '5px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>{this.state.count}</span>
                <input ref={this.refInput} type="text"/>
                <button style={{marginLeft: '5px', padding: '5px'}} onClick={this.onAddWelcome}>hello</button>
            </div>
        );
    }
}

export default S20Hello;

