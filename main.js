window.onload = function pickANumber(){
  // All numbers are equal
  var x = y; 
  var y = z; 
  var z = Math.floor(Math.random() * 10); 
min = Math.ceil(1);
max = Math.floor(10);


  
  // run this loop until numberOne is different than numberThree
  do {
      x = Math.floor(Math.random() * (max - min)) + min;
  } while(x == z);
  
  // run this loop until numberTwo is different than numberThree and numberOne
  do {
    y = Math.floor(Math.random() * 10);
} while(y == z || y == x);

console.log(x);
console.log(y); 
computerNumber = x.toString() + y.toString();
console.log(computerNumber);

}


function guessNumber() {
  var guess = document.getElementById("screen").value;
  var firstDigit = guess.charAt(0);
  var secondDigit = guess.charAt(1);
  var correctFirstDigit = computerNumber.charAt(0);
  var correctSecondDigit = computerNumber.charAt(1);
  console.log(firstDigit, secondDigit, correctFirstDigit, correctSecondDigit)
    if (guess == computerNumber) {
  alert("Winner, winner! Chicken Dinner!")
} else {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  previousGuess = row.insertCell(0);
  cows = row.insertCell(1);
  bulls = row.insertCell(2);

  previousGuess.innerHTML = guess;
    if (firstDigit == correctFirstDigit) {
         bulls.innerHTML = 1;
    } 

    if (secondDigit == correctSecondDigit){
        bulls.innerHTML = 1;
    }

      if (firstDigit == correctSecondDigit) {
            cows.innerHTML = 1;
    }
    
    if (secondDigit == correctFirstDigit) {
        cows.innerHTML = 1;
    }

  if (firstDigit == correctSecondDigit && secondDigit == correctFirstDigit){
        cows.innerHTML = 2;
  }
}
}

$(".hide-help").click(function(){
      $(".help").slideUp("slow");
});

$(".showHelp").click(function(){
      $(".help").slideDown("slow");
});


$("div ul li").click(function(){
  $(this).toggleClass("eliminate");
});

