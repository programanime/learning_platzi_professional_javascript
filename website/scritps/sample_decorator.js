function makePrintable(color){
    let colorMessage = "";
    return function(){
        colorMessage = "The color is " + color;
        console.log(colorMessage);
    }
}

makePrintable("red")();
