"use strict";
function sampleF(){
    return this;
};
console.log(sampleF());
// JSON object
var obj = {
    name:"sample", 
    getName: function(){
        return this;
    }
};

console.log(obj.getName());

// function object
function fObject(){
    let name = "danile";
    return {
        getF:  function(){
            return this;
        }, 
        other: function(){
            return name;
        }
    }
}

console.log(fObject().getF());
console.log(fObject().other());

// function object
function functionObject(){
    this.some  = function(){
        return this;
    }
}
var obj  = new functionObject();
console.log(obj.some())