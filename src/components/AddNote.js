import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';

function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context
    const [note, setNote] = useState({ title: '', description: "", tag: '' })

    function handleClick(e) {
        e.preventDefault();
       addNote(note.title,note.description,note.tag)
       setNote({ title: '', description: "", tag: '' });
       props.showAlert("Added Successfully",'success');
    }

    function handleChange(e) {
        setNote({...note, [e.target.name]:e.target.value})
    }

    function resetTitle(){
        setNote({...note, title:''})
    }

    function resetDescription(){
        setNote({...note, description:''})
    }
    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input minLength={5} required type="text" value={note.title} name='title' className="form-control" id="title" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea rows={6} cols={5} minLength={5} required type="text" value={note.description} name='description' className="form-control" id="description" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input required type="text" value={note.tag} name='tag' className="form-control" id="tag" onChange={handleChange} />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5 || note.tag === ""} type="submit" className="btn btn-outline-primary mx-2" onClick={handleClick}>Add Note</button>
                    <button disabled={note.title.length < 5}  className="btn btn-outline-primary mx-2" onClick={resetTitle}>Reset title</button> 
                    <button disabled={note.description.length < 5}  className="btn btn-outline-primary mx-2" onClick={resetDescription}>Reset description</button> 
                </form>
            </div>
        </div>
    )
}

export default AddNote