const coinFlip = new Promise((resolve, reject) => { 
  console.log("Computer is selecting heads or tails.. .");

  setTimeout(() => {
    let randomNum = Math.random() > 0.5;

    if (randomNum) {
      resolve("Heads! You win! 🎉");
    } else {
      reject("Tails! You lose! 😢");
    }
  }, 2000);
});

async function playGame() {  
  try {
    const result = await coinFlip;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

playGame();