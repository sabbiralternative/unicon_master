import runnerStatus from "../../../../utils/runnerStatus";

const Fancy = ({ fancy }) => {
  return (
    <section className="SportMarketTabs">
      <div className="SportMarketTabs__header">
        <div className="SportMarketTabs__header__item active">
          {fancy?.[0]?.tabGroupName}
        </div>
        <div className="SportMarketTabs__header__item ">Premium Cricket</div>
      </div>
      <div className="SportMarketTabs__markets">
        <div className="SportMarketTabs__markets_fancy-title">
          <div>Session Runs</div>
          <div className="SportMarketTabs__markets_fancy-title-block">
            <span>No</span>
            <span>Yes</span>
          </div>
        </div>

        {fancy?.map((games) => {
          return (
            <div key={games?.id} className="SportMarketTabs__markets__item">
              <section className="SportMarketStandard short moreOdds ">
                <div className="SportMarketStandard__markets">
                  <div className="SportEvent__market">
                    <div className="SportEvent__market__row OPEN  null ">
                      <div className="SportEvent__market__title">
                        <div className="SportEvent__market__title__text withDelay">
                          <div>
                            <p>
                              <span className="SportEvent__market-item-name">
                                {games?.name}
                              </span>
                              <div className="SportMarketStandard__title-timer">
                                <img
                                  className="SportMarketStandard__title-timer-img"
                                  src="/static/media/timer.8213d00a.svg"
                                  alt="timer icon"
                                  loading="lazy"
                                />
                                <span className="SportMarketStandard__title-timer-delay">
                                  3s
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                        <span className="SportMarketStandard__inningIcon disabled"></span>
                      </div>
                      <div className="SportEvent__market__odds-wrapper fancy">
                        {games?.runners?.map((runner) =>
                          runner?.lay?.map((lay, i) => {
                            return (
                              <span
                                key={i}
                                className={`odd-button lay-color  ${runnerStatus(games)}`}
                              >
                                <span className="odd-button__inner odd-button__inner--centered ">
                                  <div className="odd-button__price">
                                    {" "}
                                    {lay?.line}
                                  </div>
                                  <div className="odd-button__volume">
                                    {lay?.price}
                                  </div>
                                </span>
                              </span>
                            );
                          })
                        )}
                        {games?.runners?.map((runner) =>
                          runner?.back?.map((back, i) => {
                            return (
                              <span
                                key={i}
                                className={`odd-button back-color  ${runnerStatus(games)}`}
                              >
                                <span className="odd-button__inner odd-button__inner--centered ">
                                  <div className="odd-button__price">
                                    {" "}
                                    {back?.line}
                                  </div>
                                  <div className="odd-button__volume">
                                    {back?.price}
                                  </div>
                                </span>
                              </span>
                            );
                          })
                        )}

                        <div className="SportEvent__market__odds-wrapper-max-bets"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Fancy;
