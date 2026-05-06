let pages = ['home', 'about'];
let names = ['Home', 'About'];
let header = document.getElementById("header");

for(let i = 0; i < pages.length; i++){
    let link = document.createElement("a");
    if(header.className == undefined){
        link.href = pages[i] + ".html";
    } else {
        link.href = header.className + pages[i] + ".html";
    }
    link.innerHTML = names[i];
    header.appendChild(link);
};