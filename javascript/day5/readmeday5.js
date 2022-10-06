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