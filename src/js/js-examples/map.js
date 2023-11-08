let frutas = ['Naranja', 'Manzana', 'Pera']

// Agregando elementos
frutas = [...frutas, 'Uva']

// Para mostrar elementos
lista = frutas.map((item) => `<li>${item}</li>`);
console.log(lista)

// Eliminando elementos mediante filtrado
frutas = frutas.filter((item) => item != 'Pera')

console.log(frutas)
