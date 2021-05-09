var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    var output = event.results[0][0].transcript;
    document.getElementById("box").innerHTML = output;
    speak();
}
function speak() {
    var speechAPI = window.speechSynthesis; //we are storing the api in a varible to convert text into speech.
    speak_data = document.getElementById("box").value; //we are getting the text to be converted into speech.
    var utterthis = new SpeechSynthesisUtterance(speak_data); //we are converting the text into speech.
    speechAPI.speak(utterthis); //speak() triggers the system to speak var utterthis.
    //code for attaching the webcam
    Webcam.attach("camera");
}
//code for setting up the webcam
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});