document.getElementById('voz').addEventListener("click",()=>{
    pronunciar(document.getElementById("texto").value);
});

function pronunciar(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}