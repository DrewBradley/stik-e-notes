import React, { Component } from 'react'
import logo from "../stikenote-logo1-cutout.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      info: "",
      id: Date.now()}
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.addNote(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      id: "",
      title: "",
      info: ""
    })
  }

  render(){
    return (
      <header className="header">
        <form>
        <img src={logo} />
          <input 
            type="text"
            className="title-input"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input 
            type="text"
            className="note-input"
            placeholder="Note..."
            name="info"
            value={this.state.info}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Note</button>
        </form>
      </header>
    );
  }
}

export default Header;