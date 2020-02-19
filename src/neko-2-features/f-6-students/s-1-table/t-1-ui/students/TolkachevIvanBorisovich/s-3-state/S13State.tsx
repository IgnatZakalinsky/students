import React from 'react';
import styles from './TolkachevInput.module.css'

class S13State extends React.Component {
  inputRef = React.createRef<HTMLInputElement>()
  state = {
    counter: 0
  }

  OnClickHelloButton = () => {
    let inputValue = this.inputRef.current!.value
    if (inputValue) {
      let UpdCounter = {
        counter: this.state.counter++
      }
      this.setState({UpdCounter})
      alert(`Greetings, ${inputValue}!`)
      this.inputRef.current!.value = ''
    } else {
      alert(`Please, enter someone's name to greetings!`)
    }
  }

  render = () => {
    return (
      <div className={styles.container}>
        <span className={styles.counter}>{this.state.counter}</span>
        <input placeholder={`Enter someone's name`} ref={this.inputRef}/>
        <button className={styles.button} onClick={this.OnClickHelloButton}>Hello</button>
      </div>
    )
  }
}

export default S13State
