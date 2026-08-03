let pages = ['home', 'about'];
let names = ['Home', 'About'];
let header = document.getElementById("header");

for(let i = 0; i < pages.length; i++){
    let link = undefined;
    if(pages[i] == 'home'){
        link = document.createElement("div");
        link.id = "home_link";
        
        let link_href = "";
        let link_image = "";
        if(header.className == undefined){
            link_href = pages[i];
        } else {
            link_href = header.className + pages[i];
            link_image = header.className;
        }

        link.innerHTML = `<a href="${link_href}.html"><div><img src="${link_image}../media/images/other/WikiPolis_logo.png" alt="Home"></div></a>`;
    } else {
        link = document.createElement("a");

        if(header.className == undefined){
            link.href = pages[i] + ".html";
        } else {
            link.href = header.className + pages[i] + ".html";
        }
    
        link.innerHTML = names[i];
    }
    
    header.appendChild(link);
};