# Simple note taking web app inspired by Google Keep written in React

It supports displaying, editing and deleting notes. Masonry layout is made with [react-layout-masonry](https://github.com/sibiraj-s/react-layout-masonry)

___
Components:
- NewNote.jsx - As the name suggests it is used to create new notes. Despite the name (this needs refactoring) it is also used for editing notes
- NewNoteTrigger.jsx - "take a note..." input, gets replaced with the NewNote on focus
- Note.jsx - note card
- App.jsx - main app component. Includes simple header, NewNoteTrigger/NewNote and the note list
