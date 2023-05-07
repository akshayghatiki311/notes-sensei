import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6455489d5c2cb8711a21b578",
          "user": "64553f755f39fa04a8df9697",
          "title": "My first note",
          "description": "What to write in description?",
          "tag": "personal",
          "date": "2023-05-05T18:19:09.646Z",
          "__v": 0
        },
        {
          "_id": "64561e38c315b37ee0ef4a71",
          "user": "64553f755f39fa04a8df9697",
          "title": "My second note",
          "description": "What to write in description?",
          "tag": "personal",
          "date": "2023-05-06T09:30:32.281Z",
          "__v": 0
        },
        {
            "_id": "64554892d5c2cb8711a21b578",
            "user": "64553f755f39fa04a8df9697",
            "title": "My first note",
            "description": "What to write in description?",
            "tag": "personal",
            "date": "2023-05-05T18:19:09.646Z",
            "__v": 0
          },
          {
            "_id": "64561e38c3153b37ee0ef4a71",
            "user": "64553f755f39fa04a8df9697",
            "title": "My second note",
            "description": "What to write in description?",
            "tag": "personal",
            "date": "2023-05-06T09:30:32.281Z",
            "__v": 0
          },
          {
            "_id": "6455489d54c2cb8711a21b578",
            "user": "64553f755f39fa04a8df9697",
            "title": "My first note",
            "description": "What to write in description?",
            "tag": "personal",
            "date": "2023-05-05T18:19:09.646Z",
            "__v": 0
          },
          {
            "_id": "64561e385c315b37ee0ef4a71",
            "user": "64553f755f39fa04a8df9697",
            "title": "My second note",
            "description": "What to write in description?",
            "tag": "personal",
            "date": "2023-05-06T09:30:32.281Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)

    //   AddNote
      const addNote = (title,description,tag)=>{
        let note = {
            "_id": "64561e385c315b37ee0ef4a71",
            "user": "64553f753g5f39fa04a8df9697",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-05-06T09:30:32.281Z",
            "__v": 0
          }
          setNotes(notes.concat(note));
      }
    //   Delete Note
      const deleteNote = (id)=>{

      }
    // Edit Note
      const editNote = (id)=>{

      }

    return (
        <NoteContext.Provider value={{notes,addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;