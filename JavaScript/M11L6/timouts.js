// setTimeout(function, miliseconds)

console.log("Start");
setTimeout(function() {
    document.getElementById("waitMessage").textcontent = "Wait for it...DOne!";
    console.log("Wait for it...");
}, 5000);
console.log("End");

// Make an api call.