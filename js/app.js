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

// --- EVENTOS
// Tecla Numericas
var teclas_numericas = document.getElementsByClassName('tecla_numero');
for (var i = 0; i < teclas_numericas.length; i++) {
  teclas_numericas[i].addEventListener('click', clickAgregarNumero, false);
}

// Tecla ON/C
document.getElementById('on').addEventListener('click', resetear_pantalla, false);

// Tecla Signo
document.getElementById('sign').addEventListener('click', tecla_signo, false);

// Tecla Punto
document.getElementById('punto').addEventListener('click', tecla_punto, false);

// Tecla Suma
document.getElementById('mas').addEventListener('click', tecla_suma, false);

// Tecla Resta
document.getElementById('menos').addEventListener('click', tecla_resta, false);

// Tecla Multiplicacion
document.getElementById('por').addEventListener('click', tecla_multiplicacion, false);

// Tecla Division
document.getElementById('dividido').addEventListener('click', tecla_division, false);

// Tecla Raiz cuadrada
document.getElementById('raiz').addEventListener('click', tecla_raiz, false);

// Tecla Igual
document.getElementById('igual').addEventListener('click', tecla_igual, false);