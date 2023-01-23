fetch(url).then(function(response){
    if(response.ok){
        response.json().then(function(data) {
            let icon = data.weather[0].icon;
            $(`#icon1`).html(`<img src = http://openweathermap.org/img/wn/${icon}.png>`);
            let temp = Math.round(data.main.temp); 
            $(`#mainTemp1`).text(`${temp}°C`);

       
            let cityName = data.name;        
            $(`#searchCity`).text(`${cityName} (${date})`);
            $(`#searchIcon`).html(`<img src = http://openweathermap.org/img/wn/${icon}.png>`);

            $(`#Temp`).text(`Temp: ${temp}°C`);
          

          
    });
} 

