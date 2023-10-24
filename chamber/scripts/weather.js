const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('#figcaption');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const icon1 = document.querySelector('#weather-icon1');
const icon2 = document.querySelector('#weather-icon2');
const icon3 = document.querySelector('#weather-icon3');
const info1 = document.querySelector('#weather-info1');
const info2 = document.querySelector('#weather-info2');
const info3 = document.querySelector('#weather-info3');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.823231680749814&lon=-111.78972887034038&units=imperial&appid=33e5b15177a6caf6de994d37fecbc20c';
const forcasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.823231680749814&lon=-111.78972887034038&units=imperial&appid=33e5b15177a6caf6de994d37fecbc20c';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const response2 = await fetch(forcasturl);
        if (response.ok && response2.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            console.log(data2);
            displayResults(data, data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();


function displayResults(data, data2) {
    temp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', "weather icon");
  

    let date1 = `${data2.list[0].dt_txt}`;
    day1.textContent = `${date1[0]}${date1[1]}${date1[2]}${date1[3]}${date1[4]}${date1[5]}${date1[6]}${date1[7]}${date1[8]}${date1[9]}`;

    let date2 = `${data2.list[1].dt_txt}`;
    day2.textContent = `${date2[0]}${date2[1]}${date2[2]}${date2[3]}${date2[4]}${date2[5]}${date2[6]}${date2[7]}${date2[8]}${date2[9]}`;

    let date3 = `${data2.list[2].dt_txt}`;
    day3.textContent = `${date3[0]}${date3[1]}${date3[2]}${date3[3]}${date3[4]}${date3[5]}${date3[6]}${date3[7]}${date3[8]}${date3[9]}`;

    const iconsrc1 = `https://openweathermap.org/img/w/${data2.list[0].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data2.list[1].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data2.list[2].weather[0].icon}.png`;
    icon1.setAttribute('src', iconsrc1);
    icon2.setAttribute('src', iconsrc2);
    icon3.setAttribute('src', iconsrc3);
    info1.innerHTML = `${data2.list[0].weather[0].description} ${data2.list[0].main.temp}&deg;F`;
    info2.innerHTML = `${data2.list[1].weather[0].description} ${data2.list[1].main.temp}&deg;F`;
    info3.innerHTML = `${data2.list[2].weather[0].description} ${data2.list[2].main.temp}&deg;F`;

}