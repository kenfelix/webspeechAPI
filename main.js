const startButton = document.querySelector("#start");
const recognition = new webkitSpeechRecognition();
recognition.continous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternative = 1;

const synth = window.speechSynthesis;


startButton.addEventListener("click", () => {
    recognition.start();
});

let utter = new SpeechSynthesisUtterance("Hi, i'm jenny");
utter.onend=()=>{
    recognition.start();
};

recognition.onresult =(e) => {
    let transcript = e.results[0][0].transcript.toString().toLowerCase();
    let check = transcript.includes("jenny")
    console.log(check)

    if(check === true)
    {
        recognition.stop();
        utter.text = "Hello, Emeka, how can i help you?";
        synth.speak(utter);
    }

}