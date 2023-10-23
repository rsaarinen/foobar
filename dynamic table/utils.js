const utils = {};

utils.getRound = (round) => {
  const playerList = players.plrs;
  if (round > playerList.length - 1) {
    throw "Error";
  }
  const resArr = [];
  for (let i = 1; i <= playerList.length / 2; i++) {
    const [player1, player2] = getGame(i, round, playerList.length);
    const idx = Math.floor(Math.random() * 3);
    const points = [0, 1 / 2, 1];
    let res = points[idx];
    let res2 = 1 - res;
    if (res === 0.5) {
      res = res2 = "\xBD";
    }
    const obj = {
      round: round,
      player1: player1 - 1,
      player2: player2 - 1,
      pointsPl1: res,
      pointsPl2: res2,
    };
    resArr.push(obj);
  }
  return resArr;
};

/*
    p = table, r = round, n = total amount of players
*/
function getGame(p, r, n) {
  let t1, t2;
  if (p === 1) {
    t1 = 1;
    t2 = n - r + 1;
  } else {
    t1 = p - r + 1;
    t1 = t1 <= 1 ? t1 + n - 1 : t1;
    t2 = t1 + n - 2 * p + 1;
    t2 = t2 > n ? t2 - n + 1 : t2;
  }
  return [t1, t2];
}
