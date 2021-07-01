
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
                    <div class="col-3 text-white " style=" background-color:${item.color};">
      <div class="card-body card-fondo" style=" background-position-y: center; ">  </div>
          <h3 class="card-title" style="font-family: 'Bebas Neue';  text-align: left;padding: 5vh 2vh 2vh 2vh;">${item.title}</h3>
          <p class="card-text1" style="font-family: 'Baloo Tammudu 2', cursive; padding: 2vh ;  ">${item.def}</p>
    </div>
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

            word.innerHTML = `<div class="col-lg-1 "></div>`;

            console.log(datos)
            for (let item of datos) {
                let cadena = item.clave;
                let posicion = cadena.indexOf(x);
                console.log(posicion);

                // if (posicion >= 0) {
                word.innerHTML += `
                <div class="col-lg-10 col-md-10 col-sm-10 col-12  text-white " style=" background-color:#983DB2ad; margin:5px;">
                <div class="" style=" background-position-y: center; ">  </div>
                    <h3 class="" style="font-family: 'Bebas Neue';  text-align: left;">${item.title}</h3>
                    <p class="card-text1" style="font-family: 'Baloo Tammudu 2', cursive; padding: 5vh 0vh 2vh 0vh;  ">${item.def}</p>
              </div>
                      `
                posicion = cadena.indexOf(x);
                // }

            }

        }
    }

});

