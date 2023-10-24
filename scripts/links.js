const baseURL = "https://jennaray.github.io/wdd230/";
const linksURL = "https://jennaray.github.io/wdd230/data/links.json";
const list = document.querySelector("#activities-list");

async function getLinks(){
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) =>
{
    weeks.forEach((week) => {
        let line = document.createElement('li');
        line.innerHTML = `${week.week} || `;
        week.links.forEach((link) => {
            line.innerHTML += `<a href=${link.url}>${link.title}</a> | `;
        });
        list.appendChild(line);
        
    });
}