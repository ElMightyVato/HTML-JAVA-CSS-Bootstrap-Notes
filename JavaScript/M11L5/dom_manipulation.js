function updateParagraph() {
    const paragraph = document.getElementById("message");
    // document is in reference to our html document we're scripting this to
    // getelementid is used to access one of our elements in our html 

    paragraph.innerHTML = "Updated paragraph content";

    const newparagraph = document.createElement("p");
    newparagraph.innerHTML = "This is a n ew paragraph.";
    // <p> creates a new p tag 

    document.getElementById("container").appendChild(newparagraph);
}

//apending child means it's going to add something to our html file in the div section as see on html 