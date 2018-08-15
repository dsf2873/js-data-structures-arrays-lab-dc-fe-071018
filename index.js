// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.shift();
}
function destructivelyRemoveFirstDriver(name){
  drivers.push(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}