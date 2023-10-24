const baseURL = "https://jennaray.github.io/wdd230/";
const directoryURL = "https://jennaray.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayMembers(data.companies);
}

getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let busName = document.createElement('h2');
        let icon = document.createElement('img');
        let contact = document.createElement('ul');
        let level = document.createElement('h3');

        busName.textContent = `${member.name}`;
        contact.innerHTML = `<li>phone: ${member.phone}</li><li>address: ${member.address}</li><li><a href=${member.websiteURL}>visit site</a></li>`;
        level.innerHTML = `${member.membershiplevel} </br> member`;

        icon.setAttribute('src', member.iconfile);
        icon.setAttribute('alt', "Business Icon");
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '200');

        card.appendChild(busName);
        card.appendChild(icon);
        card.appendChild(level);
        card.appendChild(contact);

        cards.appendChild(card);
    })
}