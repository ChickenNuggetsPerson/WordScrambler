function clearText() {
    let textInput = document.getElementById("textInput")
    console.log("Clear")
    textInput.value = ""
}

function scramble() {
    let textInput = document.getElementById("textInput")
    console.log("Scramble")
    
    let text = textInput.value
    // let text = "afds"
    let newText = ""

    for(let i = 0; i < text.length; i++) {
        let char = text.charAt(i)

        if (Math.floor(Math.random() * 1000000) % 2 == 0) {
            newText += char.toLowerCase()
        } else {
            newText += char.toUpperCase()
        }
    }

    textInput.value = newText
}

function copy() {
    let textInput = document.getElementById("textInput")
    console.log("Copy")

    // Select the text field
    textInput.select();
    textInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textInput.value);

    alert("Copied the text");
}