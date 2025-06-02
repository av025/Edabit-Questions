//! MatchStick Houses

//* Problem Link  : https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(number) {
  if (number > 0) {
    const totalStickInSingleNum = 6;
    const totalReduceStick = number - 1;
    const totalMatchStick = totalStickInSingleNum * number - totalReduceStick;
    return totalMatchStick;
  } else if (number === 0) {
    return 0;
  } else {
    return "Please give positive integer only";
  };
};

// console.log(matchHouses(0));
// console.log(matchHouses(-1));
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
