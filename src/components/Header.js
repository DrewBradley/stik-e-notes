import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()
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
    console.log(this.state)
  }

  render(){
    return (
      <header className="header">
        <img src="" />
        <form>
          <input 
            type="text"
            className="title-input"
            placeholder="Title"
            name="title"
            onChange={this.handleChange}
          />
          <input 
            type="text"
            className="note-input"
            placeholder="Note..."
            name="note"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Note</button>
        </form>
      </header>
    );
  }
}

export default Header;