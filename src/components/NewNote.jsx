import React, { useState, useRef } from 'react';

function NewNote({ onSave, note}) {
  const [title, setTitle] = useState(note?.title ?? '');
  const [content, setContent] = useState(note?.content ?? '');
  const textareaRef = useRef(null);


  const handleSave = () => {
    if (title.trim() || content.trim()) {
      onSave({ id: note?.id ?? Date.now(), title, content });
      setTitle('');
      setContent('');
    } else {
      onSave(null);
      alert('Empty note was deleted!');

    }
  };

  return (
    <div className="note">
      <input
        type="text"
        className="note-title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        ref={textareaRef}
        className="note-content"
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={1}
      />
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default NewNote;