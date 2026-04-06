import React from 'react';

function NewNoteTrigger({ onFocus }) {
  return (
    <input
          type="text"
          className="NewNoteTrigger"
          placeholder="Take a note..."
          onFocus={onFocus}
    />
);
}

export default NewNoteTrigger;