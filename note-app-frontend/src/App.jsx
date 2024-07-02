import React, { useEffect, useState } from 'react'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList'
import "./App.css"
import { getNoteUrl } from './constant';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleNoteAdded = (newNote) => {
    setNotes([...notes, newNote])
  }


  useEffect(() => {

    const fetchNotes = async () => {
      const data = await fetch(getNoteUrl);
      let response = await data.json()

      setNotes(response)
    }

    fetchNotes()

  }, [])

  return (
    <>
      <h1>Note App</h1>
      <NoteForm handleNoteAdded={handleNoteAdded} />
      <NoteList note={notes} />
    </>
  )
}

export default App;