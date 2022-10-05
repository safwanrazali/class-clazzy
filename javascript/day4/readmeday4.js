const array = [12, 45, 60, 90, 120]

console.log ( array[array.length-3] )

console.log ( array.at(-1))

console.log ( array.sort())

console.log ( array.sort( (a, b) => a - b) )

console.log ('ES5', array.sort( (sortMe) ) )
function sortMe (a, b) {
  return a - b
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filterMe = array.filter ( element => element > 100)
console.log (filterMe)

const filterWords = words.filter (element => element.length > 5)
console.log (filterWords)

const elements = ['Spray ', 'Limit', 'Elite'];

console.log (elements.join())

console.log (elements.join(''))

console.log (elements.join(' - '))
