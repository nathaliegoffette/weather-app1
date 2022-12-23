bSubmit = document.querySelector('#bSubmit'); 
const APIResponse = document.querySelector('#APIResponse');

window.onload = function() {    
        const baseInput = 'Bruxelles';
        const onloadWeather = (baseInput) => fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + baseInput + "&appid=64075723c4bb94e381d736bdbea3a049&units=metric");

        onloadWeather(baseInput)
        .then((response) => response.json())
        .then((json) => { 
        
        console.log(json)

        let city = json.city.name; 
        let loc = document.querySelector('#location1');
        loc.innerHTML = city;
        
        let dTarray = json.list[0].dt;
        let dTUTC = new Date(dTarray * 1000);
        let day = document.querySelector('#dTUTC1');
        day.innerHTML = dTUTC.toUTCString();
        
        let tempArray = json.list[0].main.temp;
        let temp = document.querySelector('.c1');
        temp.innerHTML = tempArray + "°C";
        
        let descArray = json.list[0].weather[0].description;
        let desc = document.querySelector('.desc1');
        desc.innerHTML = descArray;
        
        let icon = json.list[0].weather[0].icon;
        let iconImg = document.getElementById('weather-icon1');
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.src = iconUrl;

        let dTarray2 = json.list[8].dt;
        let dTUTC2 = new Date(dTarray2 * 1000);
        let day2 = document.querySelector('#dTUTC2');
        day2.innerHTML = dTUTC2.toUTCString();
        
        let tempArray2 = json.list[8].main.temp;
        let temp2 = document.querySelector('.c2');
        temp2.innerHTML = tempArray2 + "°C";
        
        let descArray2 = json.list[8].weather[0].description;
        let desc2 = document.querySelector('.desc2');
        desc2.innerHTML = descArray2;
        
        let icon2 = json.list[8].weather[0].icon;
        let iconImg2 = document.getElementById('weather-icon2');
        let iconUrl2 = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
        iconImg2.src = iconUrl2;

        
        
        let dTarray3 = json.list[16].dt;
        let dTUTC3 = new Date(dTarray3 * 1000);
        let day3 = document.querySelector('#dTUTC3');
        day3.innerHTML = dTUTC3.toUTCString();
        
        let tempArray3 = json.list[16].main.temp;
        let temp3 = document.querySelector('.c3');
        temp3.innerHTML = tempArray3 + "°C";
        
        let descArray3 = json.list[16].weather[0].description;
        let desc3 = document.querySelector('.desc3');
        desc3.innerHTML = descArray3;
        
        let icon3 = json.list[16].weather[0].icon;
        let iconImg3 = document.getElementById('weather-icon3');
        let iconUrl3 = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
        iconImg3.src = iconUrl3;
 

        
        let dTarray4 = json.list[24].dt;
        let dTUTC4 = new Date(dTarray4 * 1000);
        let day4 = document.querySelector('#dTUTC4');
        day4.innerHTML = dTUTC4.toUTCString();
        
        let tempArray4 = json.list[24].main.temp;
        let temp4 = document.querySelector('.c4');
        temp4.innerHTML = tempArray4 + "°C";
        
        let descArray4 = json.list[24].weather[0].description;
        let desc4 = document.querySelector('.desc4');
        desc4.innerHTML = descArray4;
        
        let icon4 = json.list[24].weather[0].icon;
        let iconImg4 = document.getElementById('weather-icon4');
        let iconUrl4 = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
        iconImg4.src = iconUrl4;

        
        let dTarray5 = json.list[32].dt;
        let dTUTC5 = new Date(dTarray5 * 1000);
        let day5 = document.querySelector('#dTUTC5');
        day5.innerHTML = dTUTC5.toUTCString();
        
        let tempArray5 = json.list[32].main.temp;
        let temp5 = document.querySelector('.c5');
        temp5.innerHTML = tempArray5 + "°C";
        
        let descArray5 = json.list[32].weather[0].description;
        let desc5 = document.querySelector('.desc5');
        desc5.innerHTML = descArray5;
        
        let icon5 = json.list[32].weather[0].icon;
        let iconImg5 = document.getElementById('weather-icon5');
        let iconUrl5 = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
        iconImg5.src = iconUrl5;


  });
};


    bSubmit.addEventListener('click', function() {
        const input = document.getElementById('city').value;
        

        const fetchWeather = (input) => fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=64075723c4bb94e381d736bdbea3a049&units=metric");

        fetchWeather(input)
        .then((response) => response.json())
        .then((json) => { 
        
        console.log(json)

        let city = json.city.name; 
        let loc = document.querySelector('#location1');
        loc.innerHTML = city;
        
        let dTarray = json.list[0].dt;
        let dTUTC = new Date(dTarray * 1000);
        let day = document.querySelector('#dTUTC1');
        //const UTCsplit = dTUTC.split(' ',);
        //console.log(UTCshort[3]);
        day.innerHTML = dTUTC.toUTCString();
        
        let tempArray = json.list[0].main.temp;
        let temp = document.querySelector('.c1');
        temp.innerHTML = tempArray + "°C";
        
        let descArray = json.list[0].weather[0].description;
        let desc = document.querySelector('.desc1');
        desc.innerHTML = descArray;
        
        let icon = json.list[0].weather[0].icon;
        let iconImg = document.getElementById('weather-icon1');
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.src = iconUrl;

        
        
        
        let dTarray2 = json.list[8].dt;
        let dTUTC2 = new Date(dTarray2 * 1000);
        let day2 = document.querySelector('#dTUTC2');
        day2.innerHTML = dTUTC2.toUTCString();
        
        let tempArray2 = json.list[8].main.temp;
        let temp2 = document.querySelector('.c2');
        temp2.innerHTML = tempArray2 + "°C";
        
        let descArray2 = json.list[8].weather[0].description;
        let desc2 = document.querySelector('.desc2');
        desc2.innerHTML = descArray2;
        
        let icon2 = json.list[8].weather[0].icon;
        let iconImg2 = document.getElementById('weather-icon2');
        let iconUrl2 = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
        iconImg2.src = iconUrl2;

        
        
        let dTarray3 = json.list[16].dt;
        let dTUTC3 = new Date(dTarray3 * 1000);
        let day3 = document.querySelector('#dTUTC3');
        day3.innerHTML = dTUTC3.toUTCString();
        
        let tempArray3 = json.list[16].main.temp;
        let temp3 = document.querySelector('.c3');
        temp3.innerHTML = tempArray3 + "°C";
        
        let descArray3 = json.list[16].weather[0].description;
        let desc3 = document.querySelector('.desc3');
        desc3.innerHTML = descArray3;
        
        let icon3 = json.list[16].weather[0].icon;
        let iconImg3 = document.getElementById('weather-icon3');
        let iconUrl3 = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
        iconImg3.src = iconUrl3;
 

        
        let dTarray4 = json.list[24].dt;
        let dTUTC4 = new Date(dTarray4 * 1000);
        let day4 = document.querySelector('#dTUTC4');
        day4.innerHTML = dTUTC4.toUTCString();
        
        let tempArray4 = json.list[24].main.temp;
        let temp4 = document.querySelector('.c4');
        temp4.innerHTML = tempArray4 + "°C";
        
        let descArray4 = json.list[24].weather[0].description;
        let desc4 = document.querySelector('.desc4');
        desc4.innerHTML = descArray4;
        
        let icon4 = json.list[24].weather[0].icon;
        let iconImg4 = document.getElementById('weather-icon4');
        let iconUrl4 = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
        iconImg4.src = iconUrl4;

        
        let dTarray5 = json.list[32].dt;
        let dTUTC5 = new Date(dTarray5 * 1000);
        let day5 = document.querySelector('#dTUTC5');
        day5.innerHTML = dTUTC5.toUTCString();
        
        let tempArray5 = json.list[32].main.temp;
        let temp5 = document.querySelector('.c5');
        temp5.innerHTML = tempArray5 + "°C";
        
        let descArray5 = json.list[32].weather[0].description;
        let desc5 = document.querySelector('.desc5');
        desc5.innerHTML = descArray5;
        
        let icon5 = json.list[32].weather[0].icon;
        let iconImg5 = document.getElementById('weather-icon5');
        let iconUrl5 = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
        iconImg5.src = iconUrl5;

        });
          
        

        })
        
        .catch((error) => {
            console.log("There was an error!", error);
        });   
  
