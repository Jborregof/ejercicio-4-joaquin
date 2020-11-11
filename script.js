// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

function getUsers() {
  //Definimos el array
  var array = [];
  //Usamos la funcion fetch con el users.json
  fetch("./users.json")
    .then(response => response.json())
    .then(data => {
      //Copiamos en el array el data (pero no la referencia)
      array = [...data];
      //Hacemos un map para obtener un array con los nombres tan solo y lo imprimimos
      console.log("Nombres:");
      console.log(array.map(a => a.name));
      //Seleccionamos los usuarios cuyo money sea mayor que 500
      array = data.filter(x => x.money > 500);
      //Recorremos la lista y la imprimimos
      console.log("Personas con mas de 500 de money: ")
      array.forEach(a => console.log(a.name));
    });
}
