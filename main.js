const fs  = require('fs')

const input = fs.readFileSync('./data.txt', 'utf-8')


const data = input.split('\n')

let col1 = []
let col2 = []

console.log("running")
for (let i = 0; i < data.length; i++) {
    let d = data[i].split('   ')
    //console.log("d:", d)
    col1.push(parseInt(d[0]))
    col2.push(parseInt(d[1].split('\r')[0]))
}
console.log('col1: ', col1)
console.log('col2:', col2)

col1.sort((a,b) => a - b)
col2.sort((a,b) => a - b)


let sum = 0;
for (let i = 0; i < col1.length; i++){
    if (col1[i] >= col2[i]) { // this condition needs to be fulfilled
        sum += col1[i] - col2[i]
    } else {
        //no condition
        sum += col2[i] - col1[i]
    }
}

console.log('Sum: ', sum)