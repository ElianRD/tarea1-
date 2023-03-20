function openNav() {
  const menu = document.getElementById("overlay1");
  menu.classList.toggle("cierre");
}

const intervalID = setInterval(myCallback, 10000);

function myCallback() {
  const $img1 = document.getElementById("yoo");
  $img1.src =
    "./img/Captura_de_pantalla_2023-03-15_122726-removebg-preview.png";
  setTimeout(function () {
    $img1.src = "./img/1677889939897-removebg-preview.png";
    // Aquí va la función que deseas ejecutar
  }, 5000);
}
