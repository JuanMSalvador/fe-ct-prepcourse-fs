function cuidadoConElConsolelog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return(
        "elnombre retornado por la funcion 'cuidadoConElConsolelog' es: " +
        cuidadoConElConsolelog("juan")
    );
} 

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}