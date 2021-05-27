document.querySelector('#boton').addEventListener("click", traerdatos);
// document.querySelector('#boton').addEventListener("click", traerdatos);
function traerdatos() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../js/datapedia.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = $("#txtinput").val().toUpperCase();
            let datos = JSON.parse(this.response);
            let word = document.querySelector('#word')
            word.innerHTML = "";

            for (let item of datos) {
                let cadena = item.clave;
                let posicion = cadena.indexOf(x);
                console.log(posicion);

                if (posicion >= 0) {
                    word.innerHTML += `
                      <h2>${item.title}</h2><p>${item.def} </p>
                      `
                    // remplaza "ato" por "atito"
                    // cadena = cadena.slice(0, posicion) + "atito" + cadena.slice(posicion + 3);
                    // busca la siguiente ocurrencia de la palabra
                    posicion = cadena.indexOf(x);
                }

                // } else{
                //     word.innerHTML += `
                //       <p>NO HAY PALABRAS QUE COINCIDAN CON ${x}</p>
                //       `
                //       posicion = 0;
                // }
            //     if (x == item.clave) {
            //         console.log(item.clave)

            //         word.innerHTML += `
            //   <h2>${item.title}:</h2><p>${item.def} </p>
            //   `
            //     }
            }
            
        }
    }
}
// console.log (datos);