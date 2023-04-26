import React, { useContext, useRef, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    let history = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }else{
           history('/login')
        }
        // eslint-disable-next-line
    }, []);
    
    const [note, setNote] = useState({ id:"", etitle: '', edescription: "", etag: '' });
    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description,etag:currentNote.tag})
    }

    function handleClick(e) {
        e.preventDefault();
       editNote(note.id,note.etitle,note.edescription,note.etag)
       refClose.current.click();
       props.showAlert('Updates Successfully','success')
    }

    function handleChange(e) {
        setNote({...note, [e.target.name]:e.target.value})
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button style={{display:'none'}} type="button" className="btn btn-primary" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
            </button>
            <div className="modal fade" id="exampleModal" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input minLength={5} required type="text" name='etitle' className="form-control" value={note.etitle} id="etitle" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea rows={10} cols={10} minLength={10} required type="text" name='edescription' className="form-control" value={note.edescription} id="edescription" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input required type="text" name='etag' className="form-control" value={note.etag} id="etag" onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 10} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" row my-3">
                <h2>{notes.length === 0 ? 'No notes to display' : 'Your Notes'}</h2>
                {notes.map((note, id) => {
                    return <NoteItem showAlert={props.showAlert} key={id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes