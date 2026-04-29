import React, { useState } from 'react';

function NewNote({ onSave, note}) {
  const [title, setTitle] = useState(note?.title ?? '');
  const [content, setContent] = useState(note?.content ?? '');


  const handleSave = () => {
    if (title.trim() || content.trim()) {
      onSave({ id: note?.id ?? Date.now(), title, content });
      setTitle('');
      setContent('');
    } else {
      onSave(null);
      alert('Пустая заметка была удалена!');

    }
  };

  return (
    <div className="note">
      <input
        type="text"
        className="note-title"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-content"
        placeholder="Создать заметку..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={1}
      />
      <button className="save-button" onClick={handleSave}>
        Сохранить
      </button>
    </div>
  );
};

export default NewNote;