
document.querySelector('#boton').addEventListener("click", traerdatos);
let word = document.querySelector('#word')
// document.querySelector('#boton').addEventListener("click", traerdatos);
function traerdatos() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../js/datapedia.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = $("#txtinput").val().toUpperCase();
            let datos = JSON.parse(this.response);
            let wordf = document.querySelector('#wordFiltrado')
            word.innerHTML = "";
            wordf.innerHTML = "";

                console.log("ingresa a filtro")
            for (let item of datos) {
                let cadena = item.clave;
                let posicion = cadena.indexOf(x);
                console.log(posicion);

                if (posicion >= 0) {
                    wordf.innerHTML += `
                      <h2>${item.title}</h2><p>${item.def} </p>
                      `
                    posicion = cadena.indexOf(x);
                }

            }
            
        }
    }
}

// console.log (datos);
document.addEventListener('DOMContentLoaded', () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../js/datapedia.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = $("#txtinput").val().toUpperCase();
            let datos = JSON.parse(this.response);
            
            word.innerHTML = "";

                console.log(datos)
            for (let item of datos) {
                let cadena = item.clave;
                let posicion = cadena.indexOf(x);
                console.log(posicion);

                // if (posicion >= 0) {
                    word.innerHTML += `
                      <h2>${item.title}</h2><p>${item.def} </p>
                      `
                    posicion = cadena.indexOf(x);
                // }

            }
            
        }
    }

});

