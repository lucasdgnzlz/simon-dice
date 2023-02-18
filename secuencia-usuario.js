let listaSecuenciaUsuario = [];

function guardarColorUsuario(color){
    if(indicadorDeTurno === "usuario"){
        listaSecuenciaUsuario.push(color);
    }
    else{
        return false;
    }
}

function validarColorCorrecto(){
    if(juegoComenzado === true){
        if(listaSecuenciaUsuario[listaSecuenciaUsuario.length-1] === listaSecuenciaMaquina[listaSecuenciaUsuario.length-1]){
            if(listaSecuenciaUsuario.length === listaSecuenciaMaquina.length){
                listaSecuenciaUsuario = [];
                secuenciaUsuario();

                setTimeout(function(){
                    secuenciaMaquina();
                }, 600)
            }
            else{
                return false;
            }
        }
        else{
            desactivarColoresParaUsuario();
            terminarJuego();
        }
    }
    else{
        return false;
    }
}

function mostrarColorElegidoUsuario(color){
    if(indicadorDeTurno === "usuario"){
        if(color === coloresTablero.$colorVerde){
            color.id = "mostrar-verde-iluminado";
        }
        if(color === coloresTablero.$colorRojo){
            color.id = "mostrar-rojo-iluminado";
        }
        if(color === coloresTablero.$colorAmarillo){
            color.id = "mostrar-amarillo-iluminado";
        }
        if(color === coloresTablero.$colorAzul){
            color.id = "mostrar-azul-iluminado";
        }
    
        setTimeout(function(){
            color.id = "";
        }, 300);
    }
    else{
        return false;
    }
}

function validarEstadoSecuencias(){
    let secuenciasCompletas;

    if(listaSecuenciaMaquina.length === listaSecuenciaUsuario.length){
        secuenciasCompletas = true;
    }
    else{
        secuenciasCompletas = false;
    }

    return secuenciasCompletas;
}

function secuenciaUsuario(){
    setTimeout(function(){
        actualizarNumeroDeRonda();
        imprimirNumeroDeRonda();
        actualizarTurnos();
        imprimirIndicadorTurno();
    }, 500)

    desactivarColoresParaUsuario();
}

coloresTablero.$colorVerde.onclick = function(){
    guardarColorUsuario(coloresTablero.$colorVerde);
    mostrarColorElegidoUsuario(coloresTablero.$colorVerde);
    validarColorCorrecto();
}
coloresTablero.$colorRojo.onclick = function(){
    guardarColorUsuario(coloresTablero.$colorRojo);
    mostrarColorElegidoUsuario(coloresTablero.$colorRojo);
    validarColorCorrecto();
}
coloresTablero.$colorAmarillo.onclick = function(){
    guardarColorUsuario(coloresTablero.$colorAmarillo);
    mostrarColorElegidoUsuario(coloresTablero.$colorAmarillo);
    validarColorCorrecto();
}
coloresTablero.$colorAzul.onclick = function(){
    guardarColorUsuario(coloresTablero.$colorAzul);
    mostrarColorElegidoUsuario(coloresTablero.$colorAzul);
    validarColorCorrecto();
}
