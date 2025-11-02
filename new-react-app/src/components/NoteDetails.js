import React from "react";
import { useParams, Link } from "react-router-dom";

const NoteDetails = () => {
  const { id } = useParams();
  const allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  const currentNote = allNotes.find((item) => item.id.toString() === id);

  if (!currentNote)
    return (
      <div className="page">
        <p>Nie znaleziono zapiski o podanym ID.</p>
        <Link to="/list">← Wróć do listy</Link>
      </div>
    );

  return (
    <div className="page">
      <h2>Szczegóły zapiski</h2>
      <p>{currentNote.text}</p>
      <p>
        📍 {currentNote.latitude}, {currentNote.longitude}
      </p>
      <p>🕓 {currentNote.date}</p>
      <Link to="/list" className="btn">
        Wróć
      </Link>
    </div>
  );
};

export default NoteDetails;
