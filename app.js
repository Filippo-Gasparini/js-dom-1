console.log('Primi passi col DOM')



// vado ad accendere la lampadina


const light = document.getElementById('accendi')

light.addEventListener('click', function(){
    console.log('hai acceso la lampadina')
    let img = document.createElement("img");
    img.src = "img/yellow_lamp.png";
    }
)






