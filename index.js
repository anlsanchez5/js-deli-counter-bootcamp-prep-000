function takeANumber(katzDeli, Name) {
  katzDeliLine.push(Name)
 var greeting = "Welcome, " + Name + ". " + "You are number " + parseInt(katzDeli.length) + " in line."
 return greeting
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0 ) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    return "Currently serving " + katzDeli.shift() + "." 
    
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }

  else {
var elements = []    
  for (var i = 0; i < katzDeli.length; i++) {
    var x = " " + parseInt(i+1) + ". " + katzDeli[i];
    elements.push(x)
    var y = elements.join
  }
  console.log("The line is currently:" + y)
}
}
