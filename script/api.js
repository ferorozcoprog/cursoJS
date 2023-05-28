const items = [
  {
    "tipo": "Camiseta de la primera equipación",
    "descripcion": "Esta camiseta oficial de la primera equipación del Real Madrid luce un look atemporal con detalles en morado claro y el escudo del club repetido sobre un fondo blanco.",
    "precio": 120,
    "stock":4,
    "img":"../img/tienda-1.webp"
  },
  {
    "tipo": "Camiseta de la segunda equipación",
    "descripcion": "Esta camiseta adidas de la segunda equipación del Real Madrid luce una nueva combinación de colores. Material 100% reciclado",
    "precio": 100,
    "stock":7,
    "img":"../img/tienda-2.webp"
  },
  {
    "tipo": "Camiseta de la tercera equipación",
    "descripcion": "Esta camiseta oficial adidas del Real Madrid se inspira en la nueva estética del Bernabéu",
    "precio": 85,
    "stock":12,
    "img":"../img/tienda-3.webp"
  },
  ];

// funcion traer los items del array que devuelve una promesa
const getItems = () => {
  return new Promise((resolve, reject)=>{
      if(items.length > 0){
          setTimeout(()=> {
              resolve(items);
          },1500)
      } else {
          reject (new Error("No hay items para mostrar"))
      }
  })
}

// traer items de json con funcion asincronica
const API = "../items.json"
const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

// traer items de rick & morti api
const API2 = "https://rickandmortyapi.com/api/character"
const getData2 = async () => {
  const response = await fetch(API2);
  const data = await response.json();
  return data.results;
}