const runnerStatus = (runner) => {
  if (runner?.status === "OPEN" || runner?.status === "ACTIVE") {
    return "";
  } else {
    return "not-active";
  }
};

export default runnerStatus;
