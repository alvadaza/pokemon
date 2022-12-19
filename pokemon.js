document.getElementById("form-busqueda").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
  
    // Obtiene el nombre del pokemon ingresado en el formulario
    var nombrePokemon = document.getElementById("nombre-pokemon").value;
  
    // Realiza una llamada a la API de pokemon con el nombre del pokemon
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon);
    xhr.send();
  
    // Procesa la respuesta de la API
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Obtiene la información del pokemon en formato JSON
        var pokemon = JSON.parse(xhr.responseText);
  
        // Muestra la información del pokemon en la página web
        var resultadoHTML = "";
        resultadoHTML += "<h2>" + pokemon.name + "</h2>";
        resultadoHTML += "<img src='" + pokemon.sprites.front_default + "'>";
        resultadoHTML += "<p>Tipo: " + pokemon.types[0].type.name + "</p>";
        resultadoHTML += "<p>Peso: " + pokemon.weight + "</p>";
        resultadoHTML += "<p>Altura: " + pokemon.height + "</p>";
        resultadoHTML += "<h3>Habilidades</h3>";
        resultadoHTML += "<ul>";
        for (var i = 0; i < pokemon.abilities.length; i++) {
          resultadoHTML += "<li>" + pokemon.abilities[i].ability.name + "</li>";
        }
        resultadoHTML += "</ul>";
  
        document.getElementById("resultado-busqueda").innerHTML = resultadoHTML;
      }
    }
  });
  