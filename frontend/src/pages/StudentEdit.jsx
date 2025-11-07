import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = "http://localhost:3000/api/students";

function StudentEdit() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [note, setNote] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch(`${API}/${id}`)
      const row = await res.json();

      const data = row.data
      
      setName(data.name || "");
      setAge(data.age || "");
      setNote(data.note || "");
      setCity(data.city || "");

      setLoading(false);
    }
    load();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, age, city, note }),
    });
    navigate("/");
  }

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      <div className="card">
        <h2>Edit a student</h2>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Age
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>

          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>

          <label>
            Note
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            />
          </label>

          <button className="btns" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </>
  );
}

export default StudentEdit;
