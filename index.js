// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}
function appendDriver(name){
  const appendeddrivers = [...drivers, (name)]
  return appendeddrivers;
}
function prependDriver(name){
  const prependeddrivers = [(name), ...drivers]
  return prependeddrivers;
}
function removeLastDriver(){
  noLastDriver = drivers.slice(0, drivers.length - 1)]
}
