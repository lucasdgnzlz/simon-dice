let listaSecuenciaMaquina = [];

function obtenerNumeroAleatorio(){
    const cantidadDeColores = 4;
    let numeroAleatorio = Math.floor(Math.random()*cantidadDeColores);

    return numeroAleatorio;
}

function seleccionarColorMaquina(){
    let numeroAleatorio = obtenerNumeroAleatorio();
    let colorMaquina;
    
    if(numeroAleatorio === 0){
        return colorMaquina = coloresTablero.colorVerde;
    }
    else if(numeroAleatorio === 1){
        return colorMaquina = coloresTablero.colorRojo;
    }
    else if(numeroAleatorio === 2){
        return colorMaquina = coloresTablero.colorAmarillo;
    }
    else if(numeroAleatorio === 3){
        return colorMaquina = coloresTablero.colorAzul;
    }
    else{
        return false;
    }
}

function guardarColorMaquinaEnLista(colorElegido){
    listaSecuenciaMaquina.push(colorElegido);
}

function mostrarColorElegidoMaquina($colorElegido){
    if($colorElegido === coloresTablero.colorVerde){
        $colorElegido.id = "mostrar-verde-iluminado";
    }
    if($colorElegido === coloresTablero.colorRojo){
        $colorElegido.id = "mostrar-rojo-iluminado";
    }
    if($colorElegido === coloresTablero.colorAmarillo){
        $colorElegido.id = "mostrar-amarillo-iluminado";
    }
    if($colorElegido === coloresTablero.colorAzul){
        $colorElegido.id = "mostrar-azul-iluminado";
    }

    setTimeout(function(){
        $colorElegido.id = "";
    }, 500);
}

function manejarColoresElegidosMaquina(){
    for(let i = 0; i < listaSecuenciaMaquina.length; i++){
        if(listaSecuenciaMaquina[i] === coloresTablero.colorVerde){
            listaSecuenciaMaquina.forEach(function(){
                const retrasoEnMilisegundos = (i + 1) * 1000;

                setTimeout(function(){
                    mostrarColorElegidoMaquina(coloresTablero.colorVerde, i);
                }, retrasoEnMilisegundos)
            })
        }
        else if(listaSecuenciaMaquina[i] === coloresTablero.colorRojo){
            listaSecuenciaMaquina.forEach(function(){
                const retrasoEnMilisegundos = (i + 1) * 1000;

                setTimeout(function(){
                    mostrarColorElegidoMaquina(coloresTablero.colorRojo, i);
                }, retrasoEnMilisegundos)
            })
        }
        else if(listaSecuenciaMaquina[i] === coloresTablero.colorAmarillo){
            listaSecuenciaMaquina.forEach(function(){
                const retrasoEnMilisegundos = (i + 1) * 1000;

                setTimeout(function(){
                    mostrarColorElegidoMaquina(coloresTablero.colorAmarillo, i);
                }, retrasoEnMilisegundos)
            })
        }
        else if(listaSecuenciaMaquina[i] === coloresTablero.colorAzul){
            listaSecuenciaMaquina.forEach(function(){
                const retrasoEnMilisegundos = (i + 1) * 1000;

                setTimeout(function(){
                    mostrarColorElegidoMaquina(coloresTablero.colorAzul, i);
                }, retrasoEnMilisegundos)
            })
        }
    }
}

function secuenciaMaquina(){
    let colorMaquina = seleccionarColorMaquina();
    guardarColorMaquinaEnLista(colorMaquina);
    gestionarActualizacionesTurno();
    manejarColoresElegidosMaquina();
}
