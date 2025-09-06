
function lightMode() {
   document.getElementById('mode').innerHTML = "Light";
   document.getElementById('heading1').style = "background-color: #d2d3db";
   document.getElementById('heading2').style = "background-color: #d2d3db";
   document.getElementById('heading3').style = "background-color: #d2d3db";
   document.getElementById('body').style = "background-color: #fafafa; color: black;";
}
function darkMode() {
   document.getElementById('mode').innerHTML = "Dark";
   document.getElementById('heading1').style = "background-color: #212121";
   document.getElementById('heading2').style = "background-color: #212121";
   document.getElementById('heading3').style = "background-color: #212121";
   document.getElementById('body').style = "background-color: #181818; color: white;";

}
function defaultMode() {
   document.getElementById('mode').innerHTML = "Default";
   document.getElementById('heading1').style = "background-color: #7E8774";
   document.getElementById('heading2').style = "background-color: #7E8774";
   document.getElementById('heading3').style = "background-color: #7E8774";
   document.getElementById('body').style = "background-color: #dcd0c8; color: black;";
}