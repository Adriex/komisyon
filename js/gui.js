var selectDia = '<div class="four columns">'+'<select class="day u-full-width">'+
'<option value="Default">Dia</option><option value="Lunes">Lunes</option><option value="Martes">Martes</option>'+
'<option value="Miercoles">Miercoles</option><option value="Jueves">Jueves</option><option value="Viernes">Viernes</option>'+
'<option value="Sabado">Sabado</option></select></div>';


var inputHorario = '<div class="row schedule">'+selectDia+
'<div class="four columns"><input class="startHour u-full-width" type="time" placeholder="Hora de Inicio"/></div>'+
'<div class="four columns"><input class="finishHour u-full-width" type="time" placeholder="Hora de Finalizacion"/></div></div>';


var inputComision = '<div class="row comissions"><div class="nameComision three columns">'+
'<input class="comission" type="text" placeholder="Comision"/></div>'+
'<div class="nine columns hour horarios"><div class="row schedules">'+inputHorario+
'</div><button class="u-full-width addHour boton">Añadir Horario</button></div></div>';

var inputMateria = '<div class="inputs"><div class="row nameMateria">'+
'<input id="nameSubject" class="nameSubject u-full-width" type="text" placeholder="Materia"/>'+
'</div><div class="row comisiones">'+inputComision+'</div><button class="u-full-width addCommission boton">Añadir Comisión</button></div>';

$(document).on('click',".addHour", function(){
  $(this).prev().append(inputHorario);
});

$(document).on('click',".addCommission", function(){
  $(this).prev().append(inputComision);
});

$(document).on('click',".addSubject", function(){
  $(this).prev().append(inputMateria);
});
