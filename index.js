const userStudent = require('./information.js');
const cowsay = require('cowsay');

let text = "Hello i'm " + userStudent.name + " from " + userStudent.campus + " campus ! "
console.log(cowsay.say({
    text: text,
    e: "oO",
    T: "U "
}));