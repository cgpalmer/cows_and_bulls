window.onload = function myFunction() {
  
  var x = Math.floor((Math.random() * 10));
  var noZero;
  if (x == 0) {
     noZero = x + 1;     
  } else {
      noZero = x;
  }
  
  var fix = 1;
  var y = Math.floor((Math.random() * 10));
  var noDuplicate;
  if (y == x) {
      noDuplicate = (y - fix);
  } else {
      noDuplicate = y;
  }
    computerNumber = noZero.toString() + noDuplicate.toString();
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


$(".list-number").click(function(){
    $(this).css("background-color", "black");
});
