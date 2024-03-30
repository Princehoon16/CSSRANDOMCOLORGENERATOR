const TogetColor = function () {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById('color-code').innerHTML = randomcode;
    navigator.clipboard.writeText(randomcode);
}

document.getElementById('btn').addEventListener('click', TogetColor);


// Function to speak when the button is clicked

function speakText() {

    // Create a new instance of SpeechSynthesisUtterance

    var speech = new SpeechSynthesisUtterance();

    // Set the text that you want to be spoken

    speech.text = " Your Color HashCode Copy On ClipBoard Sucessfully ! You Can Use IT In Your Project ! ";


    // speech.text = " आपका रंग हैशकोड क्लिपबोर्ड पर सफलतापूर्वक कॉपी किया गया! आप इसे अपने प्रोजेक्ट में उपयोग कर सकते हैं! ";

    var voices = window.speechSynthesis.getVoices();

    // Filter voices to find one with the desired language and name

    var selectedVoice = voices.find(voice => voice.lang === 'en-US' && voice.name === 'Microsoft David Desktop - English (United States)');

    // var selectedVoice = voices.find(voice => voice.lang === 'hi-IN' );


    // Set the selected voice

    speech.voice = selectedVoice;

    // Use the SpeechSynthesis API to speak the text

    window.speechSynthesis.speak(speech);
}

// Attach an event listener to the button

document.getElementById("btn").addEventListener("click", speakText);


// TogetColor();