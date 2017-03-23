function studentsNames(students){
  for (var i = 0; i < students.length; i++){
    console.log(students[i].firstname + " " + students[i].lastname);
  }
}

var students = [
  {firstname: "Michael", lastname: "Jordan"},
  {firstname: "John", lastname: "Rosales"},
  {firstname: "Mark", lastname: "Guillen"},
  {firstname: "KB", lastname: "Tonel"},
]
studentsNames(students);
