// Propagación, Spread Operator           ...
// ...
let array = [1, 2, 3];
let elementoNevo = '<li>Hola Mundo</li>';
array = [...array, elementoNevo];

// let array2 = [7, 8, 9]
// let results = array1.concat(array2);

console.log(array);


let person = {
  name: 'Joe',
  age: '34',
  hight: '1.80 meters'
}

let newData = {
  lastname: 'Doe',
  city: 'Madrid',
  country: 'Spain'
}

person = {...person, ...newData}

person = {...person, name: 'Jimmy'}
console.log(person);