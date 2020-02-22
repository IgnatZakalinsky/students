import React from 'react';
import Greeting from "./Greeting";


class S9State extends React.Component {
    newNameRef = React.createRef<HTMLInputElement>();
    state = {
        countValue: 0
    }

    onAddClick = () => {
        let name = this.newNameRef.current!.value;
        alert(name + " ,ну как ты там поживаешь?)))");
        this.newNameRef.current!.value = ''
        this.setState({
            countValue: this.state.countValue + 1
        })
    }

    render = () => {
        return (
            <div className="App">
                <div>
                    <Greeting
                        onAddClick={this.onAddClick}
                        refNewName={this.newNameRef}
                        countValue={this.state.countValue}
                    />
                </div>
            </div>
        );
    }
}

export default S9State;

