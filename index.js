// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveFirstDriver(){
  drivers.push(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function appendDriver(name){
  return[...drivers, name]
}
