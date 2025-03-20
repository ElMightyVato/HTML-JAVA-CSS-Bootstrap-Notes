function clickHandler() {
    alert("Button clicked!"):
    // Remove event listener after the second click
    document.getElementById("myButton").removeEventListener("click", clickHandler);
    alert("Event listener removed!");
}

document.getElementById("myButton").addEventListener("click", clickHandler);

