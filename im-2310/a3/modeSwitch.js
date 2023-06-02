/* The following code handles the dark/light mode switch functionality */

// first we declare a global boolean to keep track of what mode we're in - by default we're starting in light mode
// instead of needing two variables we can phrase it as isDark - so if isDark is true
// it's in dark mode, but if isDark is false it's in light mode
let isDark = false;
var outputtext = document.getElementById('status');
var x = document.getElementById("myDIV");
var y = document.getElementById("myDIV2");
var soil = document.getElementById("soil");
var soil2 = document.getElementById("soil2");

// before we go messing about with our colour palette we set the default values - these are the same colour values as our CSS

let darkCol = "#DB7E75";
let lightCol = "#FFFDF1";


// as we'll discuss in class with prefers-reduced-motion we can check user system preferences - in this case we'll 
// check if they have dark mode turned on - if so we'll instead set isDark to true and change the CSS variables
// this is exactly the same code block as in the function it just runs via an additional check when the page is loaded
// see my comments below for how this works
if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  x.style.display = "none";
  y.style.display = "block";
  soil.style.display = "block";
  soil2.style.display = "none";
  outputtext.innerHTML = "We've gone through day...";
}



function switchModes(){
if (isDark){
  isDark = false;
  document.documentElement.style.setProperty("--col-01", darkCol);
  document.documentElement.style.setProperty("--col-02", lightCol);
  x.style.display = "block"
  y.style.display = "none"
  soil.style.display = "none"
  soil2.style.display = "block"
  outputtext.innerHTML = "..and night";
} else {
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  x.style.display = "none"
  y.style.display = "block"
  soil.style.display = "block"
  soil2.style.display = "none"
  outputtext.innerHTML = "We've gone through day...";
}
}
