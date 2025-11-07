import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:3000/api/students";

function StudentForm() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [note, setNote] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch(`${API}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/ld+json",
            Accept: "application/json",
            },
            body:JSON.stringify({
                name,
                age,
                note,
                city,
            }),
        });
        navigate("/")
    }
    return (
        <>
        <div className="card">
            <h2>Add a student</h2>
        </div>
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
          Note
          <input
            type="text"
            value={note} 
            onChange={(e) => setNote(e.target.value)} 
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

        <button className="btns" type="submit">Ajouter</button>
        </form>
        </>
    )
}

export default StudentForm