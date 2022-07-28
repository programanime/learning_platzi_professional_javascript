//scope for module
(function(){
    var color = "red";
    function printColor(){
        console.log(color);
    }
    printColor();
})();

function f(){
    let color = "red";
    function printColor(){
        console.log(color);
    }
    printColor();
};
f();

// scope for function
function makePrintable(color){
    let colorMessage = "";
    return function(){
        colorMessage = "The color is " + color;
        console.log(colorMessage);
    }
}

makePrintable("red")();

// scope for object
function makeCounter(){
    let count = 0;
    return {
        increase: function(){
            count++;
        } ,
        decrease: function(){
            count--;
        }, 
        getCount: function(){
            return count;
        }
    }
}

let counter = makeCounter();
counter.increase();
counter.increase();
counter.decrease();
console.log(counter.getCount());
