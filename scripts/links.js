const baseURL = "https://jennaray.github.io/wdd230/";
const linksURL = "https://jennaray.github.io/wdd230/data/links.json";
const list = document.querySelector("#activities-list");

async function getLinks(){
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        //getLinks(data.weeks[0]);
}

getLinks();

const displayLinks = (weeks) =>
{
    weeks.forEach((week) => {
        let line = document.createElement('li');
        line.textContent = `${week.week} ||`;
        week.links.forEach((link) => {
            let entry = document.createElement('a');
            entry.setAttribute("href", link.url);
            entry.innerHTML = `${link.title}`;
            line.appendChild(` ${entry} |`);
        });
        list.appendChild(line);
    });
}