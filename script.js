let userName = prompt("Введіть своє ім'я:");
    while (!userName || userName.trim() === "") {
      userName = prompt("Ім'я не може бути порожнім. Введіть своє ім'я:");
    }
    document.querySelector('.player').innerText = userName;

    let userScore = 0;
    let computerScore = 0;

    const userScoreElement = document.getElementById('userScore');
    const computerScoreElement = document.getElementById('computerScore');
    const roundMessage = document.getElementById('roundMessage');
    const winnerMessage = document.getElementById('winnerMessage');
    const generateBtn = document.getElementById('generateBtn');
    const resetBtn = document.getElementById('resetBtn');

    function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }

    generateBtn.addEventListener('click', () => {
      if (userScore < 3 && computerScore < 3) {
        const userRandom = generateRandomNumber();
        const computerRandom = generateRandomNumber();

        if (userRandom > computerRandom) {
          userScore++;
          roundMessage.innerText = `${userName} виграв(ла) цей раунд (${userRandom} > ${computerRandom})`;
        } else if (computerRandom > userRandom) {
          computerScore++;
          roundMessage.innerText = `Комп'ютер виграв цей раунд (${computerRandom} > ${userRandom})`;
        } else {
          roundMessage.innerText = `Нічия (${userRandom} = ${computerRandom})`;
        }

        userScoreElement.innerText = userScore;
        computerScoreElement.innerText = computerScore;

        if (userScore === 3 || computerScore === 3) {
          const winner = userScore === 3 ? userName : "Комп'ютер";
          winnerMessage.innerText = `Переможець: ${winner}`;
          generateBtn.disabled = true;
          generateBtn.style.background = "gray";
        }
      }
    });

    resetBtn.addEventListener('click', () => {
      userScore = 0;
      computerScore = 0;
      userScoreElement.innerText = userScore;
      computerScoreElement.innerText = computerScore;
      roundMessage.innerText = "";
      winnerMessage.innerText = "";
      generateBtn.disabled = false;
      generateBtn.style.background = "lime";
    });