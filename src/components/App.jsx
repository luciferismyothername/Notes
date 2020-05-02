import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";


export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Card onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
