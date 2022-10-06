const arr1 = [ 1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr1.length ; i++) {
  console.log ('index', arr1[i])
}

console.log ('\n')
for (let x in arr1) {
  console.log ('loop in', arr1[x])
}

console.log ('\n')
for (let ele of arr1) {
  console.log ('loop of', ele)
}

console.log ('\n')
const arr2 = ["a", "b", "c", "d", "e"]


console.log ('\n')
arr2.forEach (ele => 
console.log ('forEach', ele)
)


console.log ('\n')
arr2.map (ele =>
console.log ('map', ele)
)

let counter = 0

while (counter < 4) {
  counter++
  console.log (counter)
}


do {
  counter++
  console.log (counter)
}
while (counter <10)


const expr = 'Mangoes';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $2.79 a pound.');
    break;
  case 'Papayas':
    console.log('Papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
