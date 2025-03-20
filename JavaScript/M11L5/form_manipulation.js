function handleSubmit(event) {
    event.preventDefault(); // Prevents the default browser functionallity revolving around this form
    const username = document.getElementById("username").value; 
    alert("Hello, " + username + "! Form submitted successfully.");
    document.getElementById("myForm").requestFullscreen();
}