import React from 'react';

function Note({ note, deleteNote, editNote }) {
  return (
    <div key={note.id} className="note-item">
      <h3 onClick={() => editNote(note.id)}>{note.title}</h3>
      <p onClick={() => editNote(note.id)}>{note.content}</p>
      <div className="note-item-bottom">
        <button onClick={() => deleteNote(note.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Note;