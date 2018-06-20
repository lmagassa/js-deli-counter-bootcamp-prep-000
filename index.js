//function takeANumber takes two parameters - 
// katzDeliLine and person's Name
// Return ACTUAL position in line, not array position :-)


function takeANumber(katzDeliLine) {
  var takeTicket = 0
  
  katzDeliLine.push() //send persons name to end of array
  var lineSize = parseInt(katzDeliLine.length) //how many items in the index 
  var queue = `Welcome, You are number ${} in line.` 
return queue 
}


// Function nowServing should return the first person in line and then 
// remove that individual from the line. If there is nobody in line, 
//it should return "There is nobody waiting to be served!"
function nowServing(katzDeli) {
  var howManyLeft = katzDeli.length
  // == vs. === https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
  if(howManyLeft === 0) {
    //var clientName = '';
    return  'There is nobody waiting to be served!' //+ katzDeli //
  } else {
    return 'Currently serving ' + katzDeli.shift() + '.'  
  }
}

// Build a function currentLine that returns the current line. 
// For example, if katzDeliLine is currently ["Ada", "Grace"], 
// currentLine(katzDeliLine) would return "The line is 
// currently: 1. Ada, 2. Grace". If there is nobody in line, 
// it should return "The line is currently empty."

function currentLine(line, value, index) {
  var finallyWeArrive = []
  var howManyInLine = line.length
  //About forEach https://thejsguy.com/2016/07/30/javascript-for-loop-vs-array-foreach.html
  var newArray = line.forEach(function(value, index) {
      return finallyWeArrive = [(' ' + (index + 1) + '. ' + value), ...finallyWeArrive]
      })
      
 if( howManyInLine === 0) {
    return 'The line is currently empty.' 
  } else {
      return 'The line is currently:' + finallyWeArrive.reverse()
      //Resverse: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse
  }
}

/*
  var howManyInLine = line.length
  var index = line[index]
  var ohYou = line.indexOf(index)
  if( howManyInLine == 0) {
    return 'The line is currently empty.' 
  } else {
     for(var i = 0; i < line.length; i++)
     return `The line is currently: index${[i + 1]}. ${line}`
     // console.log(`${howManyInLine[i]}`)
  }
     
*/
