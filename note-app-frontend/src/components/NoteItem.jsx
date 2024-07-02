import React from 'react';
import '../App.css'
import axios from "axios"
import { deleteNoteUrl } from '../constant';

const NoteItem = ({ note }) => {

    const handleDelete = async () => {
        await axios.delete(`${deleteNoteUrl}/${note._id}`);
        window.location.reload();
    }

    return (
        <div className='noteItemContainer'>
            <div className='noteItemContentContainer'>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NoteItem