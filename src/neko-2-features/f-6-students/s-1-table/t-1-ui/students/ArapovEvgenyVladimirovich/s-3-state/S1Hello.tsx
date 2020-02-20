import React from 'react';

class S1Hello extends React.Component {
    state = {
        counter: 0
    };
    newUserName = React.createRef<HTMLInputElement>();

    takeUserName = () => {
        let newText = this.newUserName.current!.value;
        alert(`Hi ${newText}`);
        this.newUserName.current!.value = '';
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render = () => {
        return (
            <div style={{width: '250px', border: '1px solid black', margin: '5px', padding: '5px'}}>
                <span style={{width: '15px', margin: '5px'}}> {this.state.counter} </span>
                <input ref={this.newUserName}/>
                <button style={{marginLeft: '5px', padding: '5px'}} onClick={this.takeUserName}> hello</button>
            </div>
        );
    }
}

export default S1Hello;