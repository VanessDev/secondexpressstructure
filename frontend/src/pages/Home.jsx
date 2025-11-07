import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const API_URL = "http://localhost:3000/api/students";

function Home() {
  const [students, setStudents] = useState([]);
  //  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((r) => r.json())
      .then((data) => {
        setStudents(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      <div className="container">
        <h1>Students of the class</h1>

        {students.map((student) => (
          <div key={student.id} className="card">
            <div className="students">
              <strong>{student.id}.</strong> {student.name} - {student.age} ans
              - Note: {student.note} - City: {student.city}
              <div className="btns">
                <div>
                  <button onClick={() => navigate(`/edit/${student.id}`)}>Modify Student</button>
                </div>

                <div>
                  <button>Delete Student</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="btns">
          <div>
            <button onClick = {() => navigate('/create')}>Add a student</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
