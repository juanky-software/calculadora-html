var display = document.getElementById('display');

// --- MODULO CALCULADORA
var calculadora = (function(elemento_html) {
  
  var display = elemento_html
  var valor_anterior = 0.0
  var valor_nuevo
  var respuesta
  var operacion = 0;
  var operacion_anterior = 0;

  /*
  * Operaciones:
  * 0 -> Operacion repetida
  * 1 -> Suma
  * 2 -> Resta
  * 3 -> Multiplicacion
  * 4 -> Division
  * 5 -> Raiz cuadrada
  */

  function leer_display() {
    console.log(operacion)
    if (operacion == 0) {
      valor_nuevo = parseFloat(display.innerHTML);
    } else {
      valor_anterior = respuesta
    }
    console.log("valor_nuevo: "+valor_nuevo)
    console.log("valor_anterior: "+valor_anterior)
  }

  function actualizar_display() {
    console.log("Operacion: "+ operacion)
    if (!comprobar_decimales(respuesta.toString())) {
      respuesta = Number(Math.round(respuesta+'e8')+'e-8');
      console.log(respuesta)
    }
    display.innerHTML = respuesta;
    operacion_anterior = operacion;
    operacion = 0;
  }

  function suma() {
    leer_display();

    respuesta = valor_anterior + valor_nuevo;
    actualizar_display();
  }

  function resta() {
    leer_display();
    respuesta = valor_anterior - valor_nuevo;
    actualizar_display();
  }

  function multiplicacion() {
    leer_display();
    respuesta = valor_anterior * valor_nuevo;
    actualizar_display();
  }

  function division() {
    leer_display();
    respuesta = valor_anterior / valor_nuevo;
    actualizar_display();
  }

  function raiz_cuadrada() {
    leer_display();
    if (valor_nuevo < 0) {
      alert("Alerta: No se puede calcular la raiz cuadrada de un número negativo")
    } else {
      respuesta = Math.sqrt(valor_nuevo);
      actualizar_display();
    }
  }

  function comprobar_decimales(numero_string) {
    var posicion_punto = numero_string.indexOf(".");
    if (posicion_punto == -1) {
      return true;
    } else {
      var decimales = numero_string.length - posicion_punto;
      if (decimales > 8) {
        return false
      } else {
        return true
      }
    }
  }

  return {
    set_valor_anterior: function() {
      console.log("valor_anterior: " + valor_anterior);
      valor_anterior = parseFloat(display.innerHTML);
      console.log("valor_anterior: " + valor_anterior);
    },
    set_operacion: function (x) {
      operacion = x;
    },
    calcular: function() {
      if (operacion == 0) {
        switch (operacion_anterior) {
          case 1:
            suma()
            break;
          case 2:
            resta()
            break;
          case 3:
            multiplicacion()
            break;
          case 4:
            division()
            break;
          default:
            break;
        } 
      } else {
        switch (operacion) {
          case 1:
            suma()
            break;
          case 2:
            resta()
            break;
          case 3:
            multiplicacion()
            break;
          case 4:
            division()
            break;
          case raiz_cuadrada():
            raiz_cuadrada()
          break;
          default:
            break;
        } 
      }
    },
    comprobar_decimales: comprobar_decimales,
  }

})(display);

c = calculadora


// --- EVENTOS

// Tecla Numericas
var teclas_numericas = document.getElementsByClassName('tecla_numero');
for (var i = 0; i < teclas_numericas.length; i++) {
  teclas_numericas[i].addEventListener('click', clickAgregarNumero, false);
}

function clickAgregarNumero(){
  var estado_anterior = display.innerHTML;
  if (c.comprobar_decimales(estado_anterior)) {
    if (estado_anterior == "0") {
      display.innerHTML = event.target.id;
    } else {
      display.innerHTML = estado_anterior + event.target.id;
    }
  } else {
   alert("Alerta: Máximo 8 decimales") 
  }
}

function resetear_pantalla(){
  display.innerHTML = 0;
}

// Tecla ON/C
document.getElementById('on').addEventListener('click', function(){
  resetear_pantalla();
}, false);

// Tecla Sign
document.getElementById('sign').addEventListener('click', function(){
  var estado_anterior = parseFloat(display.innerHTML);
  display.innerHTML = (0 - estado_anterior).toString();
}, false);

// Tecla Punto
document.getElementById('punto').addEventListener('click', function(){
  var estado_anterior = display.innerHTML;
  if (estado_anterior.indexOf(".") == -1) {
    display.innerHTML = estado_anterior + '.';
  } else {
    alert("Alerta: Ya se ha ingresado el punto decimal")
  }
}, false);

// Tecla Suma
document.getElementById('mas').addEventListener('click', function(){
  c.set_operacion(1);
  c.set_valor_anterior();
  resetear_pantalla()
}, false);

// Tecla Resta
document.getElementById('menos').addEventListener('click', function(){
  c.set_operacion(2);
  c.guardar_dato();
  resetear_pantalla()
}, false);

// Tecla Multiplicacion
document.getElementById('por').addEventListener('click', function(){
  c.set_operacion(3);
  c.guardar_dato();
  resetear_pantalla()
}, false);

// Tecla Division
document.getElementById('dividido').addEventListener('click', function(){
  c.set_operacion(4);
  c.guardar_dato();
  resetear_pantalla()
}, false);

// Tecla Raiz cuadrada
document.getElementById('raiz').addEventListener('click', function(){
  c.set_operacion(5);
  c.calcular();
}, false);

// Tecla Igual
document.getElementById('igual').addEventListener('click', function(){
  c.calcular();
}, false);