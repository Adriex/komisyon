class Materia {
  constructor(nombre, comisiones) {
    this.nombre = nombre;
    this.comisiones = comisiones;
  }
  getNombre(){
    return this.nombre;
  }
  getComisiones(){
    return this.comisiones;
  }
}

class Comision {
  constructor(profesor, horarios){
    this.profesor = profesor;
    this.horarios = horarios;
  }
  getProfesor(){
    return this.profesor();
  }
  getHorarios(){
    return this.horarios
  }
}

class Horario {
  constructor(dia, HStart, HFinal) {
    this.dia = dia;
    this.HStart = HStart;
    this.HFinal = HFinal;
  }
  getHourStart(){
    return this.HStart;
  }
  getHourFinal(){
    return this.HFinal;
  }
}
