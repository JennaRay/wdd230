const baseURL = "https://jennaray.github.io/wdd230/";
const linksURL = "https://jennaray.github.io/wdd230/data/links.json";
const list = document.querySelector("#activities-list");

async function getLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok){
            const response = await fetch(linksURL);
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

getLinks();

// function displayLinks(data){
//     foreach (item in data.weeks){
//         let w = document.createElement("li");
//         let name = document.createElement("p");
//         name.textContent = `${item.week} ||`;
//         w.append(name);

//         foreach (link in item.links){
//             let l = document.createElement("a");
//             l.setAttribute("href", `${link.url}`);
//             l.innerHTML = `${link.title}`;
//             w.appendChild(l);
//         };
//     };
// }