import React from 'react'
import NoteItem from './NoteItem';
import '../App.css'


const NoteList = ({ note }) => {

    return (
        <div className='noteListContainer'>
            {
                note.length > 0 ? (note?.map((data) => (
                    <NoteItem key={data._id} note={data} />
                ))
                ) : (<h2>No List Present</h2>)
            }
        </div>
    )
}

export default NoteList