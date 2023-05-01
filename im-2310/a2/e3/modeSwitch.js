/* The following code handles the dark/light mode switch functionality */

// first we declare a global boolean to keep track of what mode we're in - by default we're starting in light mode
// instead of needing two variables we can phrase it as isDark - so if isDark is true
// it's in dark mode, but if isDark is false it's in light mode
let isDark = false;
var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

// before we go messing about with our colour palette we set the default values - these are the same colour values as our CSS

let darkCol = "#204051";
let lightCol = "#E7DED5";
let switchOne = "#84A9AC";
let switchTwo = "#264752";
let switchThree = "#ccc";
let switchFour = "#000";


// as we'll discuss in class with prefers-reduced-motion we can check user system preferences - in this case we'll 
// check if they have dark mode turned on - if so we'll instead set isDark to true and change the CSS variables
// this is exactly the same code block as in the function it just runs via an additional check when the page is loaded
// see my comments below for how this works
if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  document.documentElement.style.setProperty("--col-03", switchOne);
  document.documentElement.style.setProperty("--col-04", switchTwo);
  document.documentElement.style.setProperty("--col-04", switchThree);
  document.documentElement.style.setProperty("--col-04", switchFour);
  outputtext.innerHTML = "Light Mode";
}



function switchModes(){
  // when we run the function the first thing we want to do is check if we're currently in light or dark mode and then 
  // change the CSS variables accordingly to update our colour scheme

  // if we use an if statement we can see if isDark is currently set to true - while we could write it the longhand way eg:
  // if(isDark === true) we can also write a shortcut as seen below - if statements are used to seeing if something is true 
  // so if we give it a variable with nothing else it'll check if it's true by default. This only works for booleans - while we 
  // could put a number or string in here instead as long as it has a value it'll always return true
  if (isDark){
    isDark = false;
    
  } else {
    isDark = true; 
  }
}

input.addEventListener('change',function(switchModes){
  if(this.checked) {
    document.documentElement.style.setProperty("--col-01", darkCol);
    document.documentElement.style.setProperty("--col-02", lightCol);
    document.documentElement.style.setProperty("--col-03", switchTwo);
    document.documentElement.style.setProperty("--col-04", switchOne);
    document.documentElement.style.setProperty("--col-05", switchFour);
    document.documentElement.style.setProperty("--col-06", switchThree);
    outputtext.innerHTML = "Dark Mode";
  } else {
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.documentElement.style.setProperty("--col-03", switchOne);
    document.documentElement.style.setProperty("--col-04", switchTwo);
    document.documentElement.style.setProperty("--col-05", switchThree);
    document.documentElement.style.setProperty("--col-06", switchFour);
    outputtext.innerHTML = "Light Mode";
  }
});