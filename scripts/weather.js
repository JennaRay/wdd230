const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('#figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74556102454252&lon=6.632925982012857&units=imperial&appid=33e5b15177a6caf6de994d37fecbc20c';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', "weather icon");
    caption.textContent = `${desc}`;
}