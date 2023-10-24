const baseURL = "https://jennaray.github.io/wdd230/";
const directoryURL = "https://jennaray.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displaySpotlight(data.companies);
}

getMembers();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function displaySpotlight(members) {
    let spotlight1 = getRandomInt(members.length);
    let spotlight2 = getRandomInt(members.length);
    const spot1 = document.getElementById('spot1');
    const spot2 = document.getElementById('spot2');
    let name1 = document.getElementById('spot1-name');
    name1.textContent = `${members[`${spotlight1}`].name}`;
    let name2 = document.getElementById('spot2-name');
    name2.textContent = `${members[`${spotlight2}`].name}`;
    let icon1 = document.querySelector('#spot1-icon');
    icon1.setAttribute('src', `${members[spotlight1].iconfile}`);
    icon1.setAttribute('alt', "Business Icon");
    icon1.setAttribute('loading', 'lazy');
    icon1.setAttribute('width', '200');
    icon1.setAttribute('height', '200');
    let icon2 = document.querySelector('#spot2-icon');
    icon2.setAttribute('src', `${members[spotlight2].iconfile}`);
    icon2.setAttribute('alt', "Business Icon");
    icon2.setAttribute('loading', 'lazy');
    icon2.setAttribute('width', '200');
    icon2.setAttribute('height', '200');
}