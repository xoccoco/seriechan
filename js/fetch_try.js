
export async function leerFichero(){

    try {

        //espera a cargar los datos de JSON
        let respuesta = await fetch("json/artista.json");

        //Espera a leer el contenido del json
        //Luego, haz un PARSE a esa STTRING a datosque sean iterables por  JS -> OBJECT /ARREY
        let datos = await respuesta.json();
        
       //Con return devuelvo fuera de la FUNCTION
        return datos;

        
    }catch(error){

        console.log(error);


    }

}
