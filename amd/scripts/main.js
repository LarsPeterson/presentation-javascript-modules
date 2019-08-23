define("newModule", ["./dependency.js"], function (myDependency) {
    console.log("heelo");
    myDependency.sayHi();
})