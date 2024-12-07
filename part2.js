const { hash } = require('crypto')
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


hashMapCol1 = {}

// {}
//{13167:1}
//{13167:2}
for (let i = 0; i < col2.length; i++){
    const elem = col2[i];

    // does elem already exist or not if not add the element to the hash map else +1 
    if (elem in hashMapCol1) {
        hashMapCol1[elem] += 1
    } else {
        hashMapCol1[elem] = 1
    }
}

let sum = 0; // this isthe final result

col1.forEach((elem)=>{
    if (elem in hashMapCol1) {
        sum += elem * hashMapCol1[elem];
    }
})

console.log("summation", sum)





