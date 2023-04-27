import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://cb-gyo4hhhve-navneet47.vercel.app";
  const initialState = []
  const [notes, setNotes] = useState(initialState);

  // Get all notes
  async function getNotes() {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
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
        'auth-token': localStorage.getItem('token')
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
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json);
    console.clear();
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
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
     console.log(json);
    console.clear();

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

