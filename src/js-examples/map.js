let frutas = ['Naranja', 'Manzana', 'Pera']

// 1. Agregar un elemento en la lista
frutas = [...frutas, 'Uva']


// 2. Visualizar algo basado en ese array. Metodo .map()
let list = frutas.map((item, id) => {
  return (
    `<li className='group-item key=${id}'>${item}</li>`
    )
})
// console.log(list)

// 3 Eliminar elementos dentro de un array. Métdodo .filter()
// let listaFiltrada = frutas.filter((item) => item!='Manzana')
// console.log(listaFiltrada)
frutas = frutas.filter((item) => item!='Manzana')
console.log(frutas)



/* // Agregando elementos
frutas = [...frutas, 'Uva']

// Para mostrar elementos
lista = frutas.map((item) => `<li>${item}</li>`);
console.log(lista)

// Eliminando elementos mediante filtrado
frutas = frutas.filter((item) => item != 'Pera')

console.log(frutas)
 */