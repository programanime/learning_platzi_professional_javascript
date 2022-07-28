console.log("__________bind, call, apply__________");
// call
function printInfoFunction(){
    console.log(`name: ${this.name}, lastname: ${this.lastname}`);
}

var contextObject = {
    name:"daniel", lastname:"sanchez"
}

printInfoFunction.call(contextObject);

// call with argumentos
function dummyFunction(name){
    console.log(`name: ${name} ,,,, lastname:${this.lastname}`);
}
var contextObject = {lastname:"sanchez"};
dummyFunction.call(contextObject, "jose");

// apply
function applyPrintInfoFunction(lastname, age){
    console.log(`apply : name: ${this.name}, lastname: ${lastname}, age : ${age}`);
}

var applyContextObject = {
    name:"daniel", lastname:"sanchez"
}
var params = ["danile", 21];
applyPrintInfoFunction.apply(applyContextObject, ["danile", 231]);

// bind
function dummyFunction(){
    console.log(`bind name : ${this.name}`);
}

const newFunc = dummyFunction.bind({name:"daniel"})
newFunc();


NodeList.prototype.forEach = function(anom){
    Array.prototype.forEach.call(this, anom);
}
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    console.log(btn.innerHTML);
})

