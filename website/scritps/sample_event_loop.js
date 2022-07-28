function moreAsync(){
    console.log("____________Start - event loop________");
    setTimeout(() => console.log("setTimeout"), 0);
    Promise.resolve("Promise 1").then(msg => console.log(msg));
    Promise.resolve("Promise 2").then(msg => console.log(msg));
    console.log("____________End - event loop________");
}
moreAsync();