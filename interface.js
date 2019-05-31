$( document ).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#powerSave').click(function() {
    thermostat.powerSaveToggle();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });
});

// $('#current-city').change(function() {
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#temperature').text(data.main.temp)
//   })
// })

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#temperature').text(data.main.temp);
  })
})
