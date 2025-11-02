import React, { useState } from "react";

const AddPage = () => {
  const [noteText, setNoteText] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Twoja przeglądarka nie obsługuje geolokalizacji.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude.toFixed(5));
        setLng(position.coords.longitude.toFixed(5));
      },
      (error) => alert("Błąd lokalizacji: " + error.message)
    );
  };

  const handleSave = () => {
    if (!noteText || !lat || !lng) {
      alert("Wypełnij wszystkie pola.");
      return;
    }

    const noteData = {
      id: Date.now(),
      text: noteText,
      latitude: lat,
      longitude: lng,
      date: new Date().toLocaleString("pl-PL"),
    };

    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([...storedNotes, noteData]));

    alert("Zapisano notatkę ✨");
    setNoteText("");
    setLat("");
    setLng("");
  };

  return (
    <div className="page">
      <h2>Utwórz nową notatkę</h2>
      <textarea
        placeholder="Opisz swoje myśli i uczucia..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="coords">
        <input
          type="text"
          placeholder="Szerokość geograficzna"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Długość geograficzna"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <button onClick={fetchCurrentLocation}>Pobierz lokalizację 📍</button>
      </div>
      <button className="btn" onClick={handleSave}>
        Zapisz notatkę
      </button>
    </div>
  );
};

export default AddPage;