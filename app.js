console.log('Primi passi col DOM')



// vado ad accendere la lampadina

// mi recupero il riferimento all bottone accedi

const light = document.getElementById('accendi')

// mi recupero il riferimento all'immagine

const image = document.getElementById('img')

// vado a eseguire lo spegnimento della lampadina
const lightOff = document.getElementById('spegni')
// eseguo la funzione

light.addEventListener('click', function () {
    console.log('hai acceso la lampadina')
    image.src = "img/yellow_lamp.png";
})


lightOff.addEventListener('click',function(){
    console.log('hai spento la lampadina')
    image.src = "img/white_lamp.png"
})







