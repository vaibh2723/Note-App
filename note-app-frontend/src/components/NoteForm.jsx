import React, { useState } from 'react';
import { addNoteUrl } from '../constant';


const NoteForm = ({ handleNoteAdded }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleTitleClick = (e) => {
        setTitle(e.target.value);
    }

    const handleContentClick = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = { title, content };

        const response = await fetch(addNoteUrl, {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();

        handleNoteAdded(result);
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit} className='formContainer'>
            <input
                type="text"
                placeholder='Add Title'
                onChange={handleTitleClick}
                value={title}
                required
            />
            <textarea
                name="textArea"
                id="textArea"
                placeholder='Add Content'
                onChange={handleContentClick}
                value={content} />


            <button type='submit'>Add Note</button>
        </form>
    )
}

export default NoteForm