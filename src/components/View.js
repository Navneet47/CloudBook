import React from 'react'

function View(props) {
  const { _id, title, description, date, tag } = props.note
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-outline-primary my-2" data-bs-toggle="modal" data-bs-target={`#exampleModal${_id}`}>
        View Note
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id={`exampleModal${_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{description}</p>
                  <p className='card-subtitle mb-2 text-body-secondary'>tag: {tag}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <p>Added on: {new Date(date).toUTCString()}</p>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View