import React, {useEffect, useState} from 'react';
import './App.css';
import {Note} from './models/notes';

function App() {

  // create a state variable. do all this stuff before return, that returns the UI.
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", {
          method: "GET"
        });
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  },[]); //pass empty array to execute only once

  return (
    <div className="App">
        {JSON.stringify(notes)};
    </div>
  );
}

export default App;
