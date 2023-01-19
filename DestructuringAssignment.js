// Destructuring Assignment

const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// To skip certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5

// Objects can also be destructurized and assigned
const student = { 
    name: 'Ken Huang', 
    age: 38,
    city: 'Taipei'
};
const {name, age, city} = student;
console.log(name); // "Ken Huang"
console.log(age); // "38"
console.log(city); // "Taipei"