const students = [
  { id: 1, name: "Alice", age: 21, note: 17, city: "Bordeaux" },
  { id: 2, name: "Karim", age: 23, note: 14, city: "Toulouse" },
  { id: 3, name: "Sophie", age: 20, note: 19, city: "Lyon" },
  { id: 4, name: "Léo", age: 22, note: 10, city: "Paris" },
  { id: 5, name: "Nina", age: 24, note: 15, city: "Marseille" },
];
//read
exports.listStudents = (req, res) => {
  res.status(200).json({
    success: true,
    message: "liste des élèves",
    data: students,
  });
};

//logique d'affichage d'un élève
exports.getStudentById = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    res.status(404).json({
      success: false,
      message: "student not found",
      data: null,
    });
  }
    res.status(200).json({
      success: true,
      message: "student found",
      data: student,
    });
  
};

//create
exports.createStudent = (req, res) => {
  const { name, age, note, city } = req.body;
  //Si on ne trouve pas de nom et si note est différent de number
  if (
    !name ||
    !note ||
    !age ||
    !city ||
    typeof note !== "number" ||
    typeof age !== "number" ||
    typeof name !== "string" ||
    typeof city !== "string"
  ) {
    res.status(400).json({
      success: false,
      message: "name age note city obligatoire",
      data: null,
    });
  }

  const newStudent = { id: studentID++, name, age, note, city };
  students.push(newStudent);
  //201 indique que la requête a reussi
  res.status(201).json({
    success: false,
    message: "student created",
    data: newStudent,
  });
};

//update

exports.modifyStudent = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  const { name, age, note, city } = req.body;
  if (
    !name ||
    !note ||
    !age ||
    !city ||
    typeof note !== "number" ||
    typeof age !== "number"
  ) {
    res.status(400).json({
      success: false,
      message: "name age note city obligatoire",
      data: null,
    });
  }

  if (name) student.name = name;
  if (age) student.age = age;
  if (city) student.city = city;
  if (note) student.note = note;

  res.status(200).json({
    success: true,
    message: "élève mis à jour",
    data: students,
  });
};

//delete
exports.deleteStudent = (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((student) => student.id === id);

  //si l'eleve n'est pas supprimé
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "élève non supprimé",
      data: null,
    });
  }
  //splice supprime un element d'un tableau
  students.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "élève supprimé",
    data: index,
  });
};
