alert("Bienvenido a la tienda del Real Madrid!! Solo por Hoy Descuentos 20% en camisas del segunda equipo");

function preciototal(modelocamisa,cantidad,usuariosocio){
    let precio;
    switch (modelocamisa){
        case "primera equipacion":
            precio = 120;
            break;
        case "segunda equipacion":
                precio = 100;
            break;
        case "tercera equipacion":
                precio = 85;
            break;
        default:
                return 0;
    }
    if(modelocamisa ==="segunda equipacion"){
        precio = precio*0.8;
    }

    if(usuariosocio === true){
        precio = precio*0.9;
    }

    return precio*cantidad

    }

    let modelovalido = false;
    let modelocamisa;
    while (!modelovalido){
        modelocamisa = prompt("Por favor ingrese la camisa que desea comprar (primera equipacion, segunda equipacion, tercer equipacion)");
        if (modelocamisa === "primera equipacion" || modelocamisa === "segunda equipacion" || modelocamisa ==="tercera equipacion") {
            modelovalido = true;
        }
        else {
            alert("El modelo ingresado no es correcto, ingresa una de las opciones mencionadas");
        }
    }
    
    let cantidad = parseInt(prompt("por favor ingresa la cantidad que desea comprar"));
    let usuariosocio = false;

    let respuesta = prompt("Es socio de la pagina? Responda si o no");
    if( respuesta !== null){
        respuesta = respuesta.toLowerCase();
        if(respuesta === "sí" || respuesta === "si"){
            usuariosocio = true;
            alert("Por ser socio tienes un 10% adicional");
        }
    }
let totalpagar = preciototal(modelocamisa,cantidad,usuariosocio);
alert("el precio total de tu compra es: " + totalpagar);
