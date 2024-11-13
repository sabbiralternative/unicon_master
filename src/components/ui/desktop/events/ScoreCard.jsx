// import { useState } from "react";

const ScoreCard = ({ match_odds, score }) => {
  // const [show, setShow] = useState(true);

  return (
    <>
      {/* <div className="my-3">
        <article className="">
          <div
            onClick={() => setShow((prev) => !prev)}
            className="w-full bg-bg_Quaternary rounded-md flex items-center justify-center"
          >
            <h1 className="text-md p-[12px] font-normal w-full bg-bg_Quaternary flex items-center justify-between rounded-sm cursor-pointer">
              <span className="font-lato text-[14px]">Score</span>
              <span
                className={`flex items-center ml-[8px] autoAnimate ${
                  show ? "" : "-rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  fill="var(--color-ternary)"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </span>
            </h1>
          </div>
          <div
            className={`transition-all duration-300 w-full bg-bg_Quaternary rounded-sm flex flex-col overflow-hidden ${
              show ? "" : "max-h-0 opacity-0"
            }`}
            style={{ visibility: show ? "visible" : "hidden" }}
          >
            <div>
              <div className="scorecard">
                {match_odds?.[0]?.score?.map((scoreInfo, i) => {
                  return (
                    <div
                      key={i}
                      className="row"
                      style={{
                        display: show ? "block" : "none",
                      }}
                    >
                      <div className="col-12 col-md-6">
                        <p className="team-1 row">
                          <span className="team-name col-3">
                            {scoreInfo?.team1Name}
                          </span>
                          <span className="score col-4 text-end">
                            {scoreInfo?.team1Score}
                          </span>
                          <span className="team-name col-5">
                            <span>{scoreInfo?.runRate} </span>
                            <span></span>
                          </span>
                        </p>

                        <p className="team-1 row mt-2">
                          <span className="team-name col-3">
                            {scoreInfo?.team2Name}
                          </span>
                          <span className="score col-4 text-end">
                            {scoreInfo?.team2Score}
                          </span>
                          <span className="team-name col-5"></span>
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col-12">
                            {scoreInfo.target !== null && (
                              <div className="text-xl-end">
                                <span>{scoreInfo?.target}</span>
                              </div>
                            )}

                            <div className="row">
                              <div className="col-12">
                                <p className="text-xl-end ball-by-ball mt-2">
                                  {Array.isArray(scoreInfo?.recent) &&
                                    scoreInfo?.recent?.map((score, i) => {
                                      return (
                                        <span
                                          key={i}
                                          className={`ball-runs ${
                                            score === "4" ? "four" : ""
                                          } ${score === "6" ? "six" : ""} ${
                                            score === "ww" ? "wicket" : ""
                                          }`}
                                        >
                                          {score}
                                        </span>
                                      );
                                    })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div> */}

      <div>
        <div className="scorecard">
          {match_odds?.[0]?.score?.map((scoreInfo, i) => {
            return (
              <div
                key={i}
                className="row"
                // style={{
                //   display: show ? "block" : "none",
                // }}
              >
                <div className="col-12 col-md-12">
                  <p className="team-1 row">
                    <span className="team-name col-3">
                      {scoreInfo?.team1Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team1Score}
                    </span>
                    <span className="team-name col-5">
                      <span>{scoreInfo?.runRate} </span>
                      <span></span>
                    </span>
                  </p>

                  <p className="team-1 row mt-2">
                    <span className="team-name col-3">
                      {scoreInfo?.team2Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team2Score}
                    </span>
                    <span className="team-name col-5">{score?.timeStatus}</span>
                  </p>
                </div>
                <div className="col-12 col-md-12">
                  <div className="row">
                    <div className="col-12">
                      {scoreInfo.target !== null && (
                        <div className="text-xl-end">
                          <span>{scoreInfo?.target}</span>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-12">
                          <p className="text-xl-end ball-by-ball mt-2">
                            {Array.isArray(scoreInfo?.recent) &&
                              scoreInfo?.recent?.map((score, i) => {
                                return (
                                  <span
                                    key={i}
                                    className={`ball-runs ${
                                      score === "4" ? "four" : ""
                                    } ${score === "6" ? "six" : ""} ${
                                      score === "ww" ? "wicket" : ""
                                    }`}
                                  >
                                    {score}
                                  </span>
                                );
                              })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
