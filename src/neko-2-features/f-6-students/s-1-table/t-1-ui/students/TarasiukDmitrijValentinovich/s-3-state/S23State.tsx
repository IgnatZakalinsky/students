import React from 'react';

class S23State extends React.Component {
    newHelloText = React.createRef<HTMLInputElement>();
    state = {
        count: 0,
    }

    onHelloClick = () => {
        let newText = this.newHelloText.current!.value;
        alert(`Hello ${newText}`);
        this.newHelloText.current!.value = '';
        this.setState({count: this.state.count + 1})
    };


    render = () => {
        return (
            <div style={{
                width: '250px',
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
                backgroundColor: 'yellow'
            }}>
                <span style={{width: '15px', margin: '5px'}}>{this.state.count} </span>
                <input ref={this.newHelloText}/>
                <button style={{marginLeft: '5px', padding: '5px'}} onClick={this.onHelloClick}>hello</button>
            </div>
        );
    }
}

export default S23State;

