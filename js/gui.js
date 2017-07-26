var inputHorario = '<div>'+
'<div class="four columns"><input class="day u-full-width" type="text" placeholder="Dia"/></div>'+
'<div class="four columns"><input class="StartHour u-full-width" type="text" placeholder="Hora de Inicio"/></div>'+
'<div class="four columns"><input class="FinishHour u-full-width" type="text" placeholder="Hora de Finalizacion"/></div></div>';

var inputComision = '<div class="row comissions"><div class="three columns">'+
'<input class="comission" type="text" placeholder="Comision"/></div>'+
'<div class="nine columns hour"><div class="row">'+inputHorario+
'</div><button class="u-full-width addHour boton">Añadir Horario</button></div></div>';

var inputMateria = '<div class="inputs"><div class="row">'+
'<input id="nameSubject" class="u-full-width" type="text" placeholder="Materia"/></div>'+
'<div>'+inputComision+'</div><button class="u-full-width addCommission boton">Añadir Comisión</button></div>';

$(document).on('click',".addHour", function(){
  $(this).prev().append(inputHorario);
});

$(document).on('click',".addCommission", function(){
  $(this).prev().append(inputComision);
});

$(document).on('click',".addSubject", function(){
  $(this).prev().append(inputMateria);
});
