const handleKeyDown = (event) => {
    const welcomeScreen = document.getElementById("welcomeScreen")
    if(welcomeScreen.style.display !== "none"){
        welcomeScreen.style.display = "none"
        document.getElementById("container").style.display = "block"
    }
    const codeElement = document.getElementById("code")
    const keyElement = document.getElementById("key")
    const whichElement = document.getElementById("which")
    codeElement.textContent = event.code
    keyElement.textContent = event.key
    whichElement.textContent = event.which
}
document.addEventListener('keydown', handleKeyDown)

// Obviously based on ChatGPT code but tweaked to how I prefer to format (removing some empty spaces, taking off the semicolon on the end of lines, etc.)