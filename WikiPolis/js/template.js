// Global values
let head = document.getElementsByTagName("head")[0];
let depth = document.getElementsByName("depth")[0].content;
let page_type = document.getElementsByName("page_type")[0].content;

// Imports styles
let styles = ['adapter', 'articles', 'images', 'links', 'prime', 'text'];

for(let i = 0; i < styles.length; i++){
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "../".repeat(depth) + `css/${styles[i]}.css`;
    head.appendChild(style);
};

// Creates <meta> elements
for(let i = 0; i < 2; i++){
    let meta = document.createElement("meta");
    switch(i){
        case 0:
            meta.charset = "UTF-8";
            break;
        case 1:
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1.0";
            break;
    }
    
    head.appendChild(meta);
};

// Creates header
let pages = ['home', 'about'];
let names = ['Home', 'About'];
let header = document.getElementsByTagName("header")[0];

for(let i = 0; i < pages.length; i++){
    let link = undefined;
    if(pages[i] == 'home'){
        link = document.createElement("div");
        link.id = "home_link";
        
        let link_href = "";
        let link_image = "";
        if(depth == 1){
            link_href = pages[i] + ".html";
        } else {
            link_href = "../".repeat(depth) + "html/" + pages[i] + ".html";
        }
        link_image = "../".repeat(depth) + "media/images/other/WikiPolis_logo.png";

        link.innerHTML = `<a href="${link_href}"><div><img src="${link_image}" alt="Home"></div></a>`;
    } else {
        link = document.createElement("a");

        if(depth == 1){
            link.href = pages[i] + ".html";
        } else {
            link.href = "../".repeat(depth - 1) + pages[i] + ".html";
        }
    
        link.innerHTML = names[i];
    }
    
    header.appendChild(link);
};

// Creates footer
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = "CC Mark Samoilov, Apr 2026 - Aug 2026. All rights are reserved.";
if(page_type == "article"){
    footer.style = "top: 0px";
}

// Creates navbar
if(page_type == "article"){
    for(let r = 0; r < 2; r++){
        let nav_content = document.getElementById("template_chapters_" + (r + 1))
        if(r == 0){
            nav_content.innerHTML = `
                <li><div class="nav_link"><a href="#population">Population</a></div></li>
                <ul>
                    <li><div class="nav_link"><a href="#races">Races</a></div></li>
                    <li><div class="nav_link"><a href="#age&gender">Age & Gender</a></div></li>
                </ul>
                <li><div class="nav_link"><a href="#geography">Geography</a></div></li>
                <ul>
                    <li><div class="nav_link"><a href="#location">Map location</a></div></li>
                    <li><div class="nav_link"><a href="#map">City map</a></div></li>
                </ul>`;
        } else if (r == 1){
            nav_content.innerHTML = `
                <li><div class="nav_link"><a href="#climate">Climate</a></div></li>
                <ul>
                    <li><div class="nav_link"><a href="#zone">Climate zone</a></div></li>
                    <li><div class="nav_link"><a href="#temp">Temperature</a></div></li>
                    <li><div class="nav_link"><a href="#weather">Weather</a></div></li>
                </ul>
                <li><div class="nav_link"><a href="#wages&prices">Wages & Prices</a></div></li>
                <ul>
                    <li><div class="nav_link"><a href="#min_wage">Minimum wage</a></div></li>
                    <li><div class="nav_link"><a href="#rent">Rent</a></div></li>
                    <li><div class="nav_link"><a href="#food">Food</a></div></li>
                </ul>
                <li><div class="nav_link"><a href="#transportation">Transportation</a></div></li>
                <ul>
                    <li><div class="nav_link"><a href="#high">Highways</a></div></li>
                    <li><div class="nav_link"><a href="#bus">Bus routes</a></div></li>
                    <li><div class="nav_link"><a href="#sub">Subways</a></div></li>
                </ul>`;
        }
    }
}