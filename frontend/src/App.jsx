import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import StudentEdit from "./pages/StudentEdit";


function App() {
  

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<StudentForm />} />
           <Route path="/edit/:id" element={<StudentEdit />} />
        
        </Routes>
    </>
  );
}

export default App;
