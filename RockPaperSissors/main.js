
var userpoints = document.getElementById('usrpoints');
var computerpoints = document.getElementById('comppoints');

function main(){
  var userChoice = document.getElementById('userchoice');
  var computerChoice = Math.random();
  userChoice = userChoice.value;

  switch (computerChoice) {
    case (computerChoice < 0.33):
      computerChoice = "rock";
      break;
    case (0.33 <= computerChoice < 0.66):
      computerChoice = "scissors";
      break;
    case (computerChoice >= 0.66):
      computerChoice = "paper";
    }
    
  compare(userChoice, computerChoice);
}


function compare(choice1, choice2) {
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            console.log("rock wins");
        }
        else
        {
            console.log("paper wins");
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
}
