import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{

      const notesInitial = [
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
        {
          "_id": "642e9126e663e49c6b21c14a",
          "user": "642e6a7a7866baa002694b5e",
          "title": "My Title 2",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-04-06T09:30:14.825Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;