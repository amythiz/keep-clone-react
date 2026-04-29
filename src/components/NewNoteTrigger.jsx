import React from 'react';

function NewNoteTrigger({ onFocus }) {
  return (
    <input
          type="text"
          className="NewNoteTrigger"
          placeholder="Создать заметку..."
          onFocus={onFocus}
    />
);
}

export default NewNoteTrigger;