var texto = document.getElementById("Texto");
var textoResultado = document.getElementById("Texto-Resultado");
var vocales = ["a", "e", "i", "o", "u"];
var codigo = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {
  botonLimpiar.removeAttribute("hidden");
  var patron = new RegExp("^[ a-z]+$");
  if (!texto.value) {
    alert("Ingrese Texto");
  } else if (!patron.test(texto.value)) {
    alert("Solo Minúsculas y sin Numeros ni Caracteres Especiales");
  } else {
    encriptado();
  }
}

function encriptado() {
  var textoAencriptar = texto.value;
  var textoEncriptado = "";

  for (var i = 0; i < textoAencriptar.length; i++) {
    if (vocales.includes(textoAencriptar.charAt(i))) {
      for (var j = 0; j < vocales.length; j++) {
        if (textoAencriptar.charAt(i) == vocales[j]) {
          textoEncriptado += codigo[j];
          break;
        }
      }
    } else {
      textoEncriptado += textoAencriptar.charAt(i);
    }
  }

  textoResultado.value = textoEncriptado;
  texto.focus();

  botonCopiar.removeAttribute("hidden");
}

function desencriptar() {
  var valido = false;
  for (var i = 0; i < codigo.length; i++) {
    if (texto.value.includes(codigo[i])) {
      valido = true;
    }
  }

  if (!texto.value) {
    alert("Ingrese Texto Encriptado");
  }
  if (!valido) {
    alert("Texto sin Encriptar");
  } else {
    desencriptado();
  }
}

function desencriptado() {
  var textoAdesencriptar = texto.value;
  var textoDesencriptado = textoAdesencriptar;

  for (var i = 0; i < vocales.length; i++) {
    textoDesencriptado = textoDesencriptado.replaceAll(codigo[i], vocales[i]);
  }

  textoResultado.value = textoDesencriptado;
  texto.focus();

  botonCopiar.removeAttribute("hidden");
  botonLimpiar.removeAttribute("hidden");
}

function copiar() {
  var textoAcopiar = document.getElementById("Texto-Resultado");
  navigator.clipboard.writeText(textoAcopiar.value);
}

function limpiar() {
  textoResultado.value = "";
  texto.value = "";
  botonCopiar.setAttribute("hidden", "");
  botonLimpiar.setAttribute("hidden", "");

  var advertencia = document.getElementById("recuerda");
  advertencia.removeAttribute("style");
}

function eliminarAdvertencia() {
  var advertencia = document.getElementById("recuerda");
  advertencia.setAttribute("style", "color:antiquewhite");
}

var botonEncriptar = document.getElementById("Encriptar");
var botonDesencriptar = document.getElementById("Desencriptar");
var botonCopiar = document.getElementById("Copiar");
var botonLimpiar = document.getElementById("Limpiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonLimpiar.onclick = limpiar;
