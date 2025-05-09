

function play() {
    let input = document.querySelector("textarea")
    let select = document.querySelector("select")

    if (input.value.trim() == "") {
        alert("Input Empty")
    } else {
        const utterance = new SpeechSynthesisUtterance(input.value.trim())
        utterance.lang = select.value
        speechSynthesis.speak(utterance)
    }
}