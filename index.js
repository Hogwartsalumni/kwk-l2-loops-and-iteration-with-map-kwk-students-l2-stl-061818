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

function firstAndHome(firstNameHome) {
  let studentsInfo = [
        { name: 'Mary', hometown: 'Allegheny' },
        { name: 'Joan', hometown: 'Chicago' },
        { name: 'Eva', hometown: 'Hamburg' },
        { name: 'Frida', hometown: 'Coyoacán' },
        { name: 'Taylor', hometown: 'Reading' }
      ];
  return `'${studentsInfo.name} is from ${studentsInfo.hometown}'`;
}

function attributsToPhrase(firstName) {
  return firstName.map(firstAndHome);
}