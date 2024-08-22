const isOddSuspended = (runner) => {
  console.log(runner.status);
  if (runner?.status !== "OPEN" && runner?.status !== "ACTIVE") {
    return true;
  }else{
    return false
  }
};

export default isOddSuspended;
