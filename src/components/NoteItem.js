import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';
import View from './View';

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props
  return (
    <div className='col-md-3 mb-5'>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title.length > 15 ? note.title.slice(0,15) + "..." : note.title}</h5>
          <p className="card-subtitle mb-2 text-body-secondary">tag: {note.tag.length > 10 ? note.tag.slice(0,10)+"..." : note.tag}</p>
          <p className="card-text">{note.description.length > 30 ? note.description.slice(0,30)+"..." : note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id); props.showAlert('Deleted Successfully', 'success') }}></i>
          <i className="fa-sharp fa-solid fa-file-pen mx-2" onClick={() => { updateNote(note) }}></i>
           <View key={note._id} note={note}/>
        </div>
      </div>
    </div>
  )
}

export default NoteItem