/* Desestructuración de un array */
const foo = [1, 3, 5 , 7 , 9]

console.log(foo[0])
// bar = foo[0]

// desestructuración
[bar, buz] = foo
console.log(bar)  // bar toma el valor del **primer** elemento de foo
console.log(buz)  // buz toma el valor del **segundo** elemento de foo

/* Desestructuración de un objeto */
const user = {id: 18, name: 'Hector', lastname: 'chocobar'} 
const { id, lastname } = user
console.log(id)
