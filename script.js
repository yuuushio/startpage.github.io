/*
 * Store current mode using localStorage
 */
if (localStorage.getItem("data") == null) var mode = "dark";
else mode = localStorage.getItem("data");

/*
 * Get time
 */
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    change_colors(mode);
    displayTime(formatAMPM(new Date));
    document.getElementById("input").focus();
});

setInterval(function () {
  document.getElementById("time").innerHTML = formatAMPM(new Date);
}, 1000);

/*
 * Change current mode upon icon click -- light/dark
 */
document.getElementById("mode").addEventListener("click", function () {
  if (mode == "dark") {
    change_colors("light");
    localStorage.setItem("data", "light");
    data = localStorage.getItem("data");
    mode = data;
  } else {
    change_colors("dark");
    localStorage.setItem("data", "dark");
    data = localStorage.getItem("data");
    mode = data;
  }
});

function change_colors(mode) {
  if (mode == "dark") light_colors();
  else dark_colors();
}

/*
 * Output current time to screen
 */
function displayTime(time) {
  document.getElementById("time").innerHTML = time;
}

/*
 * Form/input variables for event listeners
 */
let input = document.getElementById("input");
let input_g = document.getElementById("inputgoogle");
let form = document.getElementById("search-bar");

/*
 * Depending on the key pressed, focus on that input :
 * 'd' to focus ddg input; 'g' to focus google search input.
 */
document.addEventListener("keypress", function (event) {
  switch (event.key) {
    // Focus on the search bar when pressing 's'
    case "d":
      if (
        document.activeElement !== input &&
        document.activeElement !== input_g
      )
        input.focus();
      break;
    // Switch to next search engine when pressing 'j'
    case "g":
      if (
        document.activeElement !== input_g &&
        document.activeElement !== input
      )
        input_g.focus();
      break;
    default:
      return;
  }
});

/*
 * Remove focus if esc is pressed
 */
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    input.blur();
    input_g.blur();
  }
});

/*
 * Submit form upon "enter"
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

/*
 * DuckDuckGo Search the string input by the user.
 */
function duckduckgo_search(str) {
  if (str !== "") {
    search_query = "https://duckduckgo.com/?q=" + str;
    window.location.replace(search_query);
  }
}

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    duckduckgo_search(input.value);
    input.blur();
  }
});

/*
 * Google Search the string input by the user.
 */
function google_search(str) {
  if (str !== "") {
    search_query = "https://www.google.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

input_g.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    google_search(input_g.value);
    input_g.blur();
  }
});

/*
 * Mode specific css styling
*/
function dark_colors() {
  let link = document.getElementsByTagName("a");
  let mode_id = document.getElementById("mode");
  document.body.style.background = "#1e1e2e";
  mode_id.src = "ico/light.png";
  mode_id.style.filter =
    "invert(100%) sepia(18%) saturate(3654%) hue-rotate(177deg) brightness(100%) contrast(84%)";

  let img_id = document.getElementById("ac");
  img_id.src = "ico/retg.png";
  img_id.height = "350";

  let img_container = document.getElementsByClassName("gif");
  img_container[0].style.border = "3px solid #302D41";
  img_container[0].style.borderRadius = "5px";
  img_container[0].style.boxShadow =
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";

  let main_cont = document.getElementsByClassName("container");
  main_cont[0].style.background = "#1e1e2e";

  for (i = 0; i < link.length; i++) link[i].style.color = "rgba(201, 203, 255, 0.8)";

  let time_id = document.getElementById("time");
  time_id.style.color = "#C9CBFF";
  let input_i = document.getElementById("input");
  input_i.style.background = "rgba(59, 66, 82, 0.1)";
  input_i.style.borderBottom = "2px solid #575268";
  let input_g = document.getElementById("inputgoogle");

  input_g.style.background = "rgba(59, 66, 82, 0.1)";
  input_g.style.borderBottom = "2px solid #575268";

  let list_s = document.getElementById("ls");

  let time_i = document.getElementById("time");
  time_i.style.borderRadius = "4px";
  time_i.style.boxShadow = "none";
  time_i.style.background = "none";
}

function light_colors() {
  let link = document.getElementsByTagName("a");
  let mode_id = document.getElementById("mode");
  document.body.style.background = "#E5E9F0";
  mode_id.src = "ico/moon.png";
  mode_id.style.filter =
    "invert(20%) sepia(21%) saturate(481%) hue-rotate(181deg) brightness(89%) contrast(94%)";

  let img_id = document.getElementById("ac");
  img_id.src = "ico/ac.png";
  img_id.height = "250";

  let main_cont = document.getElementsByClassName("container");
  main_cont[0].style.background = "#E5E9F0";

  let img_container = document.getElementsByClassName("gif");
  img_container[0].style.border = "0px";
  img_container[0].style.boxShadow = "none";

  for (i = 0; i < link.length; i++)
    link[i].style.color = "rgba(59, 66, 82, 0.9)";
  let time_id = document.getElementById("time");
  time_id.style.color = "rgba(59, 66, 82, 0.9)";
  let input_i = document.getElementById("input");
  input_i.style.background = "rgba(216,222,233,0.2)";
  input_i.style.borderRadius = "4px";
  input_i.style.borderBottom = "2px solid rgba(59, 66, 82, 0.7)";
  let input_g = document.getElementById("inputgoogle");
  input_g.style.background = "rgba(216,222,233,0.2)";
  input_g.style.borderBottom = "2px solid rgba(59, 66, 82, 0.7)";

  let list_s = document.getElementById("ls");

  let time_i = document.getElementById("time");
  time_i.style.borderRadius = "4px";
  time_i.style.background = "#E5E9F0";
  time_i.style.boxShadow = "3px 3px 11px #d5d9df,-3px -3px 11px #f5f9ff";
}
