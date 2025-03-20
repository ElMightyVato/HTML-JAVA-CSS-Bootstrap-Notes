// A callback generally is a function passed into another function as an argument

function greet(name, callback) {
    const grettingMessage = document.getElementById("greetingMessage");
    greetingMEssage.textContent = "Hello, " + name + "!";
    callback(); // this callback is equivalent as farewell
}

function farewell() {
    const farewellMessage = document.getElementById("farewellMEssage");
    farewellMessage.textContent = "Goodbye!";
}

document.getElementById("GreetBtn").addEventListener("click",function() {
    greet("Alice", farewell);
});