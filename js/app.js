// --- CLASE CALCULADORA
class Calculadora{
  constructor(elemento_html){
    this._display = elemento_html;
    this._valor_anterior = 0.0;
    this._valor_nuevo = 0.0;
    this._respuesta = 0.0;
    this._operacion = 0;
    this._operacion_anterior = 0;
  }

  leer_display() {
    if (this._operacion == 0) {
      this._valor_anterior = this._respuesta;
    } else {
      this._valor_nuevo = parseFloat(this._display.innerHTML);
    }
  }

  actualizar_display() {
    if (!this.comprobar_decimales(this._respuesta.toString())) {
      this._respuesta = Number(Math.round(this._respuesta+'e8')+'e-8');
    }
    this._display.innerHTML = this._respuesta;
    if (this._operacion != 0) {
      this._operacion_anterior = this._operacion;
    }
    this._operacion = 0;
  }

  suma(){
    this.leer_display();
    this._respuesta = this._valor_anterior + this._valor_nuevo;
    this.actualizar_display();
  }

  resta() {
    this.leer_display();
    this._respuesta = this._valor_anterior - this._valor_nuevo;
    this.actualizar_display();
  }

  multiplicacion() {
    this.leer_display();
    this._respuesta = this._valor_anterior * this._valor_nuevo;
    this.actualizar_display();
  }

  division() {
    this.leer_display();
    this._respuesta = this._valor_anterior / this._valor_nuevo;
    this.actualizar_display();
  }

  raiz_cuadrada() {
    this.leer_display();
    if (this._valor_nuevo < 0) {
      alert("Alerta: No se puede calcular la raiz cuadrada de un número negativo")
    } else {
      this._respuesta = Math.sqrt(this._valor_nuevo);
      this.actualizar_display();
    }
  }

  comprobar_decimales(numero_string) {
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

  guardar_dato(){
    this._valor_anterior = parseFloat(this._display.innerHTML);
  }
}

// --- OBJETO
c = new Calculadora(document.getElementById("display"));

// --- FUNCIONES
function click_agregar_numero(){
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

function tecla_signo() {
  var estado_anterior = parseFloat(display.innerHTML);
  display.innerHTML = (0 - estado_anterior).toString();
}

function tecla_punto() {
  var estado_anterior = display.innerHTML;
  if (estado_anterior.indexOf(".") == -1) {
    display.innerHTML = estado_anterior + '.';
  } else {
    alert("Alerta: Ya se ha ingresado el punto decimal");
  }
}

function tecla_suma() {
  c._operacion = 1;
  c.guardar_dato();
  resetear_pantalla()
}

function tecla_resta() {
  c._operacion = 2;
  c.guardar_dato();
  resetear_pantalla()
}

function tecla_multiplicacion() {
  c._operacion = 3;
  c.guardar_dato();
  resetear_pantalla()
}

function tecla_division() {
  c._operacion = 4;
  c.guardar_dato();
  resetear_pantalla()
}

function tecla_raiz() {
  c._operacion = 5;
  c.raiz_cuadrada();
}

function tecla_igual() {
  if (c._operacion == 0) {
    switch (c._operacion_anterior) {
      case 1:
        c.suma()
        break;
      case 2:
        c.resta()
        break;
      case 3:
        c.multiplicacion()
        break;
      case 4:
        c.division()
        break;
      default:
        break;
    } 
  } else {
    switch (c._operacion) {
      case 1:
        c.suma()
        break;
      case 2:
        c.resta()
        break;
      case 3:
        c.multiplicacion()
        break;
      case 4:
        c.division()
        break;
      default:
        break;
    } 
  }
}

function tecla_raton_ingresa() {
  event.target.style.opacity = "0.9";
}

function tecla_raton_sale() {
  event.target.style.opacity = "1";
}

function tecla_presionar() {
  var tecla = event.target;
  var ancho = tecla.width
  console.log(ancho)
  if (tecla.id == "mas") {
    tecla.style.width = (ancho-1)+"px";
  } else {
    tecla.style.width = (ancho-2)+"px"; 
  }
  console.log(tecla.width)
  setTimeout(function() {
    tecla.style.width = ancho+"px";
    console.log(tecla.width)
  }, 100)
}

function ingresar_tecla(x){
  switch (x.code.toString()) {
    case "Numpad1":
      ingreso_por_teclado(1);
      break;
    case "Digit1":
      ingreso_por_teclado(1);
      break;
    case "Numpad2":
      ingreso_por_teclado(2);
      break;
    case "Digit2":
      ingreso_por_teclado(2);
      break;
    case "Numpad3":
      ingreso_por_teclado(3);
      break;
    case "Digit3":
      ingreso_por_teclado(3);
      break;
    case "Numpad4":
      ingreso_por_teclado(4);
      break;
    case "Digit4":
      ingreso_por_teclado(4);
      break;
    case "Numpad5":
      ingreso_por_teclado(5);
      break;
    case "Digit5":
      ingreso_por_teclado(5);
      break;
    case "Numpad6":
      ingreso_por_teclado(6);
      break;
    case "Digit6":
      ingreso_por_teclado(6);
      break;
    case "Numpad7":
      ingreso_por_teclado(7);
      break;
    case "Digit7":
      ingreso_por_teclado(7);
      break;
    case "Numpad8":
      ingreso_por_teclado(8);
      break;
    case "Digit8":
      ingreso_por_teclado(8);
      break;
    case "Numpad9":
      ingreso_por_teclado(9);
      break;
    case "Digit9":
      ingreso_por_teclado(9);
      break;
    case "Numpad0":
      ingreso_por_teclado(0);
      break;
    case "Digit0":
      ingreso_por_teclado(0);
      break;
    case "NumpadAdd":
      tecla_suma();
      break;
    case "NumpadSubtract":
      tecla_resta();
      break;
    case "NumpadMultiply":
      tecla_multiplicacion();
      break;
    case "NumpadDivide":
      tecla_division();
      break;
    case "NumpadEnter":
      tecla_igual();
      break;
    case "Enter":
      tecla_igual();
      break;
    case "NumpadDecimal":
      tecla_punto();
      break;
    case "Period":
      tecla_punto();
      break;
    case "Comma":
      tecla_punto();
      break;
    case "Delete":
      resetear_pantalla();
      break;
    default:
      break;
  }
}

function ingreso_por_teclado(x){
  var estado_anterior = display.innerHTML;
  if (c.comprobar_decimales(estado_anterior)) {
    if (estado_anterior == "0") {
      display.innerHTML = x;
    } else {
      display.innerHTML = estado_anterior + x;
    }
  } else {
    alert("Alerta: Máximo 8 decimales") 
  }
}

// --- EVENTOS
// Tecla Numericas
var teclas_numericas = document.getElementsByClassName('tecla_numero');
for (var i = 0; i < teclas_numericas.length; i++) {
  teclas_numericas[i].addEventListener('click', click_agregar_numero);
}

// Tecla ON/C
document.getElementById('on').addEventListener('click', resetear_pantalla);

// Tecla Signo
document.getElementById('sign').addEventListener('click', tecla_signo);

// Tecla Punto
document.getElementById('punto').addEventListener('click', tecla_punto);

// Tecla Suma
document.getElementById('mas').addEventListener('click', tecla_suma);

// Tecla Resta
document.getElementById('menos').addEventListener('click', tecla_resta);

// Tecla Multiplicacion
document.getElementById('por').addEventListener('click', tecla_multiplicacion);

// Tecla Division
document.getElementById('dividido').addEventListener('click', tecla_division);

// Tecla Raiz cuadrada
document.getElementById('raiz').addEventListener('click', tecla_raiz);

// Tecla Igual
document.getElementById('igual').addEventListener('click', tecla_igual);

// Efectos teclas
var teclas = document.getElementsByClassName('tecla');
for (var i = 0; i < teclas.length; i++) {
  // Efecto Mouse ingresa a tecla
  teclas[i].addEventListener('mouseover', tecla_raton_ingresa);
  // Efecto Mouse ingresa a tecla
  teclas[i].addEventListener('mouseout', tecla_raton_sale);
  // Efecto Presionar tecla
  teclas[i].addEventListener('click', tecla_presionar);
}

// Uso de teclas
document.addEventListener('keypress', ingresar_tecla);