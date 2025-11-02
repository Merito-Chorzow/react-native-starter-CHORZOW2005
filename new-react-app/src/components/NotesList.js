import React from "react";
import { Link } from "react-router-dom";

const NotesList = () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");

  return (
    <div className="page">
      <h2>Moje zapiski</h2>
      {savedNotes.length === 0 ? (
        <p>Nie masz jeszcze żadnych zapisanych notatek.</p>
      ) : (
        savedNotes.map((note) => (
          <div key={note.id} className="note-item">
            <p>{note.text}</p>
            <p>
              📍 {note.latitude}, {note.longitude}
            </p>
            <Link className="details" to={`/details/${note.id}`}>
              Szczegóły
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
