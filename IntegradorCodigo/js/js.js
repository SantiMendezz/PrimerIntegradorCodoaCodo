var id1 = document.getElementById("id1");
var id2 = document.getElementById("id2");
var id3 = document.getElementById("id3");
var lectura_de_id1;
var lectura_de_id2;
var id4 = document.getElementById("id4");
var id5 = document.getElementById("id5");
var id6 = document.getElementById("id6");
id5.addEventListener("click", funciónAlPresionarElBotonResumen);
id4.addEventListener("click", funciónAlPresionarElBotonLimpiar);

function funciónAlPresionarElBotonResumen() {

  lectura_de_id1 = parseInt(id1.value);
  lectura_de_id2 = id2;

  if (id2.value == "1") {
    id6.innerHTML = Math.floor((200 - (200 * 0.8)) * lectura_de_id1);
  } else if (id2.value == "2"){
    id6.innerHTML = Math.floor((200 - (200 * 0.5)) * lectura_de_id1);
  } else {
    id6.innerHTML = Math.floor((200 - (200 * 0.15)) * lectura_de_id1);
  }
}

function funciónAlPresionarElBotonLimpiar() {
    id6.innerHTML = 0;
}