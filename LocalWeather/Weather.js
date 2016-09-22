$(document).ready(function(){
    
    var long;
    var lat;
    var fahrenheit;
    var celcius;
    var isFahrenheit = true;
    
    /*
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
           long = position.coords.longitude;
            lat = position.coords.latitude;
            $('#data').html("latitude" + lat + "<br>longitude: " + long);
        });
    }
    */
    
    var api = "http://api.openweathermap.org/data/2.5/weather?id=1214520&appid=51ad3601694562edb361a0959e4118d2";
    $.getJSON(api, function(data){
        var weatherDescription = data.weather[0].description;
        var kelvin = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;
        
        fahrenheit = ((kelvin)*(9/5)-459.67).toFixed(2);
        celcius  = (kelvin-273).toFixed(2);
        
        $('#city').html(city);
        $('#weatherDescription').html(weatherDescription);
        $('#temperature').html(fahrenheit + " &#8457;");
        $('#windSpeed').html(windSpeed);
        
        $('#temperature').click(function(){
            if(isFahrenheit){
                $('#temperature').html(celcius + " &#8451;");
                isFahrenheit = false;
            }
            else{
                $('#temperature').html(fahrenheit + " &#8457;");
                isFahrenheit = true;
            }
        });
        
    });
    
});
/* By Andhika Srimadeva */