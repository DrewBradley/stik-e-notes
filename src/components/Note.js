import React from "react"

const Note = ({ id, title, info, deleteNote }) => {
  return (
  <article className="note" >
    <header className="note-header">
      <button id={id} className="delete" onClick={ deleteNote }>Delete</button>
      <h1 className="note-title">{title}</h1>
    </header>
    <section className="note-body">
      <p className="note-text">{info}</p>
    </section>
  </article>
  )
}

export default Note