function handleButtonCLick() {
    alert("Button clicked!");
}

function handleMouseOver() {
    console.log("Mouse over element");
}

function handleMouseOut() {
    console.log("Mouse out of element");
}

function handleKeyDown(event) {
    console.log("key presed:", event.key);
}
// an event is usually tied to one of three things either a user action, browser action or some kind of custom action made
// The event .key shows what key is pressed when you're within the textarea


function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log("form submitted with username: ", username);
}

function handleChange(event) {
    console.log("Input value chagned to:", event.target.value);
}

function handleFocus() {
    console.log("Input element focused.");
}

// Document Object Model: DOM