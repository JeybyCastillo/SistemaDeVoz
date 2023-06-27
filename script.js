 let rec;
    if (!("webkitSpeechRecognition" in window)) {
      alert("Alto ahí, no tienes el permiso para usar esta API");
    } else {
      rec = new webkitSpeechRecognition();
      rec.lang = "es-ESP";
      rec.continuous = true;
      rec.interim = true;

      rec.addEventListener("result", comenzar);

      const botonComenzar = document.getElementById("boton-comenzar");
      const botonDetener = document.getElementById("boton-detener");

      botonComenzar.disabled = false;
      botonComenzar.addEventListener("click", function() {
        rec.start();
        botonComenzar.disabled = true;
        botonDetener.disabled = false;
      });

      botonDetener.addEventListener("click", function() {
        rec.stop();
        botonComenzar.disabled = false;
        botonDetener.disabled = true;
      });
    }

    function comenzar(event) {
      for (i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
      }
    }