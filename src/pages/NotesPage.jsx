import React, { useEffect, useState } from 'react';
import Masonry from 'react-layout-masonry';
import { demoNotes } from '../demoNotes';
import NewNote from '../components/NewNote';
import NewNoteTrigger from '../components/NewNoteTrigger';
import Note from '../components/Note';

const NOTES_STORAGE_KEY = 'keep-clone-notes';

function getInitialNotes() {
  try {
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!savedNotes) return demoNotes;

    const parsedNotes = JSON.parse(savedNotes);
    return Array.isArray(parsedNotes) ? parsedNotes : demoNotes;
  } catch {
    localStorage.removeItem(NOTES_STORAGE_KEY);
    return demoNotes;
  }
}

function NotesPage() {
  const [notes, setNotes] = useState(getInitialNotes);
  const [showNewNote, setShowNewNote] = useState(false);
  const [editingNote, setEditingNote] = useState(false);
  const [noteInEdit, setNoteInEdit] = useState(null);

  function addNote(newNote) {
    setShowNewNote(false);
    if (newNote == null) return;

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function deleteNote(key) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== key));
  }

  function updateNote(updatedNote) {
    setEditingNote(false);
    setNoteInEdit(null);
    if (updatedNote == null) return;

    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  }

  function editNote(key) {
    const noteToEdit = notes.find((note) => note.id === key);
    if (noteToEdit) {
      setNoteInEdit(noteToEdit);
      setEditingNote(true);
    }
  }

  useEffect(() => {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {!showNewNote ? (
        <NewNoteTrigger onFocus={() => setShowNewNote(true)} />
      ) : (
        <NewNote onSave={addNote} />
      )}
      {editingNote && (
        <div className="overlay">
          <NewNote onSave={updateNote} note={noteInEdit} />
        </div>
      )}
      <Masonry className="masonry" columns={{ 200: 1, 600: 2, 900: 3, 1180: 4 }} gap={16}>
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
        ))}
      </Masonry>
    </>
  );
}

export default NotesPage;
