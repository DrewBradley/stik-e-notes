import React, { Component } from 'react'
import Note from "./Note"
import noteData from "../note-data.js"
import Header from "./Header"

class NoteDisplay extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  deleteNote = (e) => {
    const noteId = parseInt(e.target.id)
    const newArr = this.state.notes;
    const newNotes = newArr.filter(note => {
      return note.id !== noteId
    })
    this.setState({
      notes: newNotes
    })
  }

  addNote = (newNote) => {
    const array = this.state.notes;
    const newArray = array.push(newNote);
    this.setState({
      note: newArray
    })
  }

  render() {
    const notes = this.state.notes.map(note => <Note key={note.id} id = {note.id} title={note.title} info={note.info} deleteNote={this.deleteNote}/>)
    return (
      <section>
      <Header addNote={this.addNote}/>
      {this.state.notes.length ?
        <div>
        <section className="note-display">
          { notes }
        </section>
        </div> :
        <h1 className="add-note-title">add a note!</h1>
        }
      </section>
    );
  }
}

export default NoteDisplay;