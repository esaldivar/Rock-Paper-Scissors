/*
this block of code generates the user input for rock, paper, or scissors.  If the user input is neither of these items then the console will log User input error!
*/
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock'  || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log('User input error!');
      };
    };
    /*
    test user choice console.log(getUserChoice('clay'));
    
    I’m */
    
    /*
    The code below define the computer choice.  I got stuck on creating the function due to not inputting the variable after the initial line of function code.  I also had to research switch choices as parameters were undefined until the random number was generated and the string was printed on the console.
    */
    const getComputerChoice = () => {
      computerChoice = Math.floor(Math.random() * 3);
      switch (computerChoice) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
        default:
          return 'error';
      }
    };
    /*  the code below test the computer input
    console.log(getComputerChoice());
    */ 
    
    const determineWinner = (userChoice, computerChoice) => {
      if(userChoice === computerChoice) {
        return 'The game was a tie!';
      } if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'The computer won!'
        } else {
          return 'You won!';
        }
      } if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'The computer won!'
        } else {
          return 'You won!';
    }
      }
      if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
          return 'The computer won!'
        } else {
          return 'You won!';
    }
      } if(userChoice === 'bomb') {
        return 'You won!  You terrible cheater.';
      }
    }
    
    /*
    end of that comparing nonsense!
    */
    const playGame = () => {
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log('You threw ' + userChoice + ' and the computer threw ' + computerChoice +'.');
     console.log(determineWinner(userChoice,computerChoice));
    }
    
    
    playGame();