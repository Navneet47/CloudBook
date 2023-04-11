import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialState = []
  const [notes, setNotes] = useState(initialState)

  // Get all notes
  async function getNotes() {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZTZhN2E3ODY2YmFhMDAyNjk0YjVlIn0sImlhdCI6MTY4MDc2NzEwMX0.UVswb79L-lLPgJSEPf9TR_yHX2Ulq8fouX5tkCVtZlk'
      },
    });
    const json = await response.json();
    setNotes(json)
  }

  // Add note

  async function addNote(title, description, tag) {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZTZhN2E3ODY2YmFhMDAyNjk0YjVlIn0sImlhdCI6MTY4MDc2NzEwMX0.UVswb79L-lLPgJSEPf9TR_yHX2Ulq8fouX5tkCVtZlk'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //Delete Note

  async function deleteNote(id) {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZTZhN2E3ODY2YmFhMDAyNjk0YjVlIn0sImlhdCI6MTY4MDc2NzEwMX0.UVswb79L-lLPgJSEPf9TR_yHX2Ulq8fouX5tkCVtZlk'
      },
    });
    const json = await response.json()
    const newNote = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNote);
  }


  //Edit note

  async function editNote(id, title, description, tag) {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZTZhN2E3ODY2YmFhMDAyNjk0YjVlIn0sImlhdCI6MTY4MDc2NzEwMX0.UVswb79L-lLPgJSEPf9TR_yHX2Ulq8fouX5tkCVtZlk'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <noteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;

