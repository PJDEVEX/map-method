  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [ 1, 2, 3, 4, 5, 6];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
const mulByTwo = function (num) {
  multiply = num * 2;
  return multiply;
}

const mapResults = nums.map(mulByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplifiedmul = nums.map(function(num) { return num * 2});
console.log(simplifiedmul);



// Simplfied w/ map() + arrow function
const simlifiedWithArrow = nums.map (num => num * 2);
console.log(simlifiedWithArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const nameAndId = students.map (students => [students.name, students.id]);
console.log(nameAndId);

const nameAndIdAsObj = students.map (({ id, name }) => ({ id, name }));
console.log(nameAndIdAsObj);

const studentsAddAge = students.map(student => ({ ...student, age: student.id === 1 ? 32 : student.id === 2 ? 26 : 28 }));
console.log(studentsAddAge);
