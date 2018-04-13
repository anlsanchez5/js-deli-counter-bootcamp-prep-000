function takeANumber(katzDeliLine, Name) {
  katzDeliLine.push(Name)
 var greeting = "Welcome, " + Name + ". " + "You are number " + parseInt(katzDeliLine.length) + " in line."
 return greeting
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    return "Currently serving " + katzDeliLine.shift() + "." 
    
  }
}

function currentLine(katzDeliLine) {
  var elements = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else {
    
  for (var i = 0; i < katzDeliLine.length; i++) {
    elements.push(parseInt(i+1) + ". " + katzDeliLine[i]);
  }
  console.log("The line is currently: " + elements )
}
}
