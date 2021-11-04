// Change this to your username
var username = "grtcdr";

if (localStorage.getItem('data') == null) var mode = "dark";
else mode = localStorage.getItem('data');

// The same as "onload"
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    change_colors(mode);
    determineGreet(new Date().getHours());
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

document.getElementById("mode").addEventListener("click", function () {
    if (mode == "dark") {
        change_colors("light");
        localStorage.setItem('data', 'light');
        data = localStorage.getItem('data');
        mode = data;
    }
    else {
        change_colors("dark");
        localStorage.setItem('data', 'dark');
        data = localStorage.getItem('data');
        mode = data;
    }
});

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}


function change_colors(mode) {
    if (mode == "dark") light_colors();
    else dark_colors();
}

let input = document.getElementById("input");
let form = document.getElementById("search-bar");
let indicator = document.getElementById("search-engine-indicator");


//search bar
// Available search engines to cycle through
let search_engines = ["Google", "DuckDuckGo", "Github", "StackOverflow", "Reddit"];

const MIN_SEARCH_ENGINE_INDEX = 0;
const MAX_SEARCH_ENGINE_INDEX = search_engines.length - 1;
let search_engine_index = 0;

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function duckduckgo_search(str) {
  if (str !== "") {
    search_query = "https://duckduckgo.com/?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function google_search(str) {
  if (str !== "") {
    search_query = "https://www.google.com/search?q=" + str;
    window.location.replace(search_query);
  }
}


// ------D D G------
// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

let ddg_search = document.getElementById("input");
ddg_search.addEventListener("keypress", function (event) {
  if (event.key == 'Enter') {
    duckduckgo_search(ddg_search.value);
    ddg_search.blur();
  }
});

//------- GOOGLE-------
// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected


let g_search = document.getElementById("inputgoogle");
g_search.addEventListener("keypress", function (event) {
  if (event.key == 'Enter') {
    google_search(g_search.value);
    g_search.blur();
  }
});





function dark_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#2E3440";
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "rgba(216,222,233,0.3)";
        
    
	let time_id = document.getElementById("time");
    time_id.style.color = "#d8dee9";
    let input_i = document.getElementById("input");
    input_i.style.background = "#2E3440";
    //input_i.style.boxShadow = "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px";
    /*input_i.onmouseout = () =>{
    	input_i.style.boxShadow="rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px";
    }
    input_i.onmouseover = () =>{
    	input_i.style.boxShadow="inset 3px 3px 6px #272c36, inset -3px -3px 6px #353c4a";
    }*/
    
    let input_g = document.getElementById("inputgoogle");
   
    input_g.style.background = "#2E3440";
    //input_g.style.boxShadow = "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px";
    
    
	let list_s = document.getElementById("ls"); 
	/*list_s.style.border="2px solid rgba(59, 66, 82, 0.5)"; 
	list_s.style.borderRadius="8px"; */
	list_s.style.background="#2E3440";
}

function light_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#E5E9F0";
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "rgba(76, 86, 106, 0.7)";
    let time_id = document.getElementById("time");
    time_id.style.color = "#4C566A";
    let input_i = document.getElementById("input");
    input_i.style.background = "#E5E9F0";
    input_i.style.borderRadius = "4px";
    //input_i.style.boxShadow="rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px";
    /*input_i.onmouseout = () =>{
    	input_i.style.boxShadow="rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px";
    }
    input_i.onmouseover = () =>{
    	input_i.style.boxShadow="inset 5px 5px 7px #dadde4, inset -5px -5px 7px #f0f5fc";
    }*/
    
    
    let input_g = document.getElementById("inputgoogle");
    input_g.style.background = "#E5E9F0";
    
    //input_g.style.boxShadow="rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px";
    /*input_g.onmouseout = () =>{
    	input_g.style.boxShadow="rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px";
    }
    input_g.onmouseover = () =>{
    	input.style.boxShadow="inset 5px 5px 7px #dadde4, inset -5px -5px 7px #f0f5fc";
    }*/
    
    let list_s = document.getElementById("ls");
   /* list_s.style.border="1px solid rgba(236, 239, 244, 0.8)";
    list_s.style.borderRadius="8px";*/
    list_s.style.background="#E5E9F0";
    
}

