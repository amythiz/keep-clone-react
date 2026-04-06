import React, { useState } from 'react';
import Masonry from 'react-layout-masonry';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { demoNotes } from './demoNotes';

import NewNote from './components/NewNote';
import NewNoteTrigger from './components/NewNoteTrigger';
import Note from './components/Note';


function App() {

  const [notes, setNotes] = useState(demoNotes);
  const [showNewNote, setShowNewNote] = useState(false);
  const [editingNote, setEditingNote] = useState(false);
  const [noteInEdit, setNoteInEdit] = useState(null);

  function addNote (newNote) {
    setShowNewNote(false);
    if (newNote == null) return

    setNotes((prevNotes) => [newNote, ...prevNotes]); 
  };

  function deleteNote(key) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== key)
    })
  }

  function updateNote(updatedNote) {
    setEditingNote(false);
    setNoteInEdit(null);
    if (updatedNote == null) return;

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  }

  function editNote(key) {
    const noteToEdit = notes.find(note => note.id === key);
    if (noteToEdit) {
        setNoteInEdit(noteToEdit);
        setEditingNote(true);
    }
  }

  return (
    <div className="app">
      <header>📝 React-Keep-clone</header>
      {!showNewNote ? (
        <NewNoteTrigger onFocus={() => setShowNewNote(true)} />
      ) : (
        <NewNote onSave={addNote} />
      )}
      {editingNote && (
        <div className="overlay">
            <NewNote onSave={updateNote} note={noteInEdit}/>
        </div>
      )}
      <Masonry className="masonry" columns={{ 200: 1, 600: 2, 900: 3, 1180: 4 }} gap={16}>
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote}/>
        ))}
      </Masonry>
    </div>
  );
}

export default App;