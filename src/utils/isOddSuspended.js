const isOddSuspended = (runner) => {
  if (runner?.status !== "OPEN" || runner?.status !== "ACTIVE") {
    return false;
  }else{
    return true
  }
};

export default isOddSuspended;
