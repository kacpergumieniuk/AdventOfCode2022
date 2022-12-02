const input = await Deno.readTextFile("./input.txt");
const splited = input.split(/\r?\n/);
const matrix = splited.map((str) => str.split(" "));

//PART 1

let finalResult = 0;

const opponentRock = "A";
const opponentPaper = "B";
const opponentScissors = "C";

const playerRock = "X";
const playerPaper = "Y";
const playerScissors = "Z";

const calculate = (playerPlay: string, opponentPlay: string) => {
  let result = 0;
  if (playerPlay === playerRock) {
    result += 1;
    if (opponentPlay === opponentRock) {
      result += 3;
    }
    if (opponentPlay === opponentPaper) {
      result += 0;
    }
    if (opponentPlay === opponentScissors) {
      result += 6;
    }
  }
  if (playerPlay === playerPaper) {
    result += 2;
    if (opponentPlay === opponentRock) {
      result += 6;
    }
    if (opponentPlay === opponentPaper) {
      result += 3;
    }
    if (opponentPlay === opponentScissors) {
      result += 0;
    }
  }
  if (playerPlay === playerScissors) {
    result += 3;
    if (opponentPlay === opponentRock) {
      result += 0;
    }
    if (opponentPlay === opponentPaper) {
      result += 6;
    }
    if (opponentPlay === opponentScissors) {
      result += 3;
    }
  }
  return result;
};

for (let x of matrix) {
  const score = calculate(x[1], x[0]);
  finalResult += score;
}

console.log(finalResult);

//PART2

const playerWin = "Z";
const playerLose = "X";
const draw = "Y";

let finalResultV2 = 0;

const calculateV2 = (opponentPlay: string, gameResult: string) => {
  let result = 0;
  if (gameResult === playerWin) {
    result += 6;
    if (opponentPlay === opponentRock) {
      result += 2;
    }
    if (opponentPlay === opponentPaper) {
      result += 3;
    }
    if (opponentPlay === opponentScissors) {
      result += 1;
    }
  }
  if (gameResult === playerLose) {
    if (opponentPlay === opponentRock) {
      result += 3;
    }
    if (opponentPlay === opponentPaper) {
      result += 1;
    }
    if (opponentPlay === opponentScissors) {
      result += 2;
    }
  }
  if (gameResult === draw) {
    result += 3;
    if (opponentPlay === opponentRock) {
      result += 1;
    }
    if (opponentPlay === opponentPaper) {
      result += 2;
    }
    if (opponentPlay === opponentScissors) {
      result += 3;
    }
  }
  return result;
};

for (let x of matrix) {
  const score = calculateV2(x[0], x[1]);
  finalResultV2 += score;
}

console.log(`Result of part 2 is ${finalResultV2}`);
