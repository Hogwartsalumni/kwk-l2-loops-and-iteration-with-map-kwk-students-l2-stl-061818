// Code your solution in this file.

let studentArray = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes'];

function firstNames(students) {
  return students.toLowerCase();
}

function lowerCaseStudentNames(names) {
  return names.map(firstNames);
}

function firstAndLast(student) {
    const studentFirst = student.split(' ')[0];
    const studentLast = student.split(' ')[1];
    return { firstName: studentFirst, lastName: studentLast}; 
}
function nameToAttributes(name){
  return name.map(firstAndLast);
}

function attributesToPhrase(students2) {
   return students2.map(function (person) {
    return `${person.name} is from ${person.hometown}`;
  })
}