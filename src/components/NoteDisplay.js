import React, { Component } from 'react'
import Note from "./Note"
import noteData from "../note-data.js"

class NoteDisplay extends Component {
  constructor() {
    super()
    this.state = {
      notes: noteData
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

  render() {
    const notes = this.state.notes.map(note => <Note key={note.id} id = {note.id} title={note.title} info={note.info} deleteNote={this.deleteNote}/>)
    return (
      <section className="note-display">
        { notes }
      </section>
    );
  }
}

export default NoteDisplay;