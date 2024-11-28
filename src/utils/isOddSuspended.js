const isOddSuspended = (game, runner) => {
  if (game?.status !== "OPEN" || runner?.status !== "ACTIVE") {
    return true;
  } else {
    return false;
  }
};

export default isOddSuspended;
