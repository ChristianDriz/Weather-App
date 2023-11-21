$(document).ready(function () {
    const search = $('#input-city');
    
    const weatherBox  = $('.weather-box');
    const weatherDetails  = $('.weather-details');

    const weather_img_div = $('.weather-img-div');
    const error = $('.not-found');

    const APIKey = '4d35ca4d482b2e154df54e35f73e0cdb';

    //default location 
    const city = 'Balanga';

    function initWeather(city){

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                weather_img_div.addClass('hidden');
                error.removeClass('hidden');
                weatherBox.addClass('hidden');
                weatherDetails.addClass('hidden');
                return;
            }
            weather_img_div.removeClass('hidden');
            error.addClass('hidden');
            weatherBox.removeClass('hidden');
            weatherDetails.removeClass('hidden');

            const image = $('.weather-img-div img');
            const temperature = $('.weather-box .temperature');
            const description = $('.weather-box .description');
            const humidity = $('.weather-details .humidity h1');
            const wind = $('.weather-details .wind h1');
            const loc = $('.location');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.attr('src', 'img/Clear.png');
                    break;

                case 'Rain':
                    image.attr('src', 'img/Rain.png');
                    break;

                case 'Snow':
                    image.attr('src', 'img/Snow.png');
                    break;

                case 'Clouds':
                    image.attr('src', 'img/Clouds.png');
                    break;

                case 'Haze':
                    image.attr('src', 'img/Hazy.png');
                    break;
            }

            temperature.html(`${parseInt(json.main.temp)}<span>°C</span>`);
            description.html(`${json.weather[0].description}`);
            humidity.html(`${json.main.humidity}%`);
            wind.html(`${parseInt(json.wind.speed)}Km/h`);
            loc.html(city);

        });
    }

    initWeather(city);

    search.on('change', function () {
        const city = $(this).val();

        if (city === '') 
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                weather_img_div.addClass('hidden');
                error.removeClass('hidden');
                weatherBox.addClass('hidden');
                weatherDetails.addClass('hidden');
                return;
            }
            weather_img_div.removeClass('hidden');
            error.addClass('hidden');
            weatherBox.removeClass('hidden');
            weatherDetails.removeClass('hidden');

            const image = $('.weather-img-div img');
            const temperature = $('.weather-box .temperature');
            const description = $('.weather-box .description');
            const humidity = $('.weather-details .humidity h1');
            const wind = $('.weather-details .wind h1');
            const loc = $('.location');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.attr('src', 'img/Clear.png');
                    break;

                case 'Rain':
                    image.attr('src', 'img/Rain.png');
                    break;

                case 'Snow':
                    image.attr('src', 'img/Snow.png');
                    break;

                case 'Clouds':
                    image.attr('src', 'img/Clouds.png');
                    break;

                case 'Haze':
                    image.attr('src', 'img/Hazy.png');
                    break;
            }

            temperature.html(`${parseInt(json.main.temp)}<span>°C</span>`);
            description.html(`${json.weather[0].description}`);
            humidity.html(`${json.main.humidity}%`);
            wind.html(`${parseInt(json.wind.speed)}Km/h`);

            loc.html(city);

            console.log(city);
        });

    });


    //dark mode 
    const checkbox = $('#checkbox');
    const dot = $('.dot');
    const body = $('body');
    const main_div = $('.main-div');

    let mode = localStorage.getItem('dark') === 'true';

    if (mode) {
        document.documentElement.classList.add('dark');
        checkbox.prop('checked', true);
        dot.addClass('translate-x-7 bg-gray-800');
        body.removeClass('day-mode').addClass('dark-mode');
        // main_div.removeClass('day-mode').addClass('dark-mode');
    } else {
        document.documentElement.classList.remove('dark');
        checkbox.prop('checked', false);
        dot.removeClass('translate-x-7');
        body.removeClass('dark-mode').addClass('day-mode');
        // main_div.removeClass('dark-mode').addClass('day-mode');
    }

    checkbox.on('change', function () {

        mode = !mode;

        if (mode){
            document.documentElement.classList.add('dark');
            dot.addClass('translate-x-7 bg-gray-800');
            body.removeClass('day-mode').addClass('dark-mode');
            // body.addClass('dark-mode');
            // main_div.removeClass('day-mode').addClass('dark-mode');;
        } else {
            document.documentElement.classList.remove('dark');
            dot.removeClass('translate-x-7 bg-gray-800');
            body.removeClass('dark-mode').addClass('day-mode');
            // body.removeClass('dark-mode');
            // main_div.removeClass('dark-mode').addClass('day-mode');
        }
        localStorage.setItem('dark', mode);
 
    });

});