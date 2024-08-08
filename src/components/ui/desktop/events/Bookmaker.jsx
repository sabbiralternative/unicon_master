import runnerStatus from "../../../../utils/runnerStatus";

const Bookmaker = ({ bookmaker }) => {
  return (
    <>
      {bookmaker?.map((games, i) => {
        return (
          <section key={i} className="SportMarketStandard  moreOdds ">
            <div className="SportMarketStandard__header">
              <div className="SportEvent__market__title withDelay">
                <span
                  className="SportEvent__market__title-name"
                  style={{ cursor: "pointer" }}
                >
                  {games?.name.toUpperCase()}
                </span>
                <div className="SportMarketStandard__title-timer">
                  <div className="hover-before">
                    <img
                      className="SportMarketStandard__title-timer-fasterBetAcceptanceIcon"
                      src="/static/media/fasterBetAcceptanceIcon.0268b720.svg"
                      alt="faster Bet Acceptance Icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="hover-after">
                    <img
                      className="SportMarketStandard__title-timer-noCommissionIcon"
                      src="/static/media/noCommissionIcon.d1fac208.svg"
                      alt="no Commission Icon"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="SportMarketStandard__header__action-wrapper">
                <div className="SportMarketStandard__header__action">Back</div>
                <div className="SportMarketStandard__header__action">Lay</div>
              </div>
            </div>
            <div className="SportMarketStandard__markets">
              {games?.runners?.map((runner) => {
                return (
                  <div key={runner?.id} className="SportEvent__market">
                    <div className="SportEvent__market__row OPEN  ACTIVE ">
                      <div className="SportEvent__market__title">
                        <div className="SportEvent__market__title__text withDelay">
                          <div>
                            <p>
                              <span className="SportEvent__market-item-name">
                                {runner?.name}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="SportEvent__market__odds-wrapper ">
                        {runner.back.length === 1 && (
                          <span className="odd-button back-color not-active    secondary">
                            <span className="odd-button__inner odd-button__inner--centered ">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </span>
                          </span>
                        )}
                        {runner?.back
                          ?.slice()
                          ?.reverse()
                          ?.map((back, i) => {
                            return (
                              <span
                                key={i}
                                className={`odd-button back-color
                                  ${
                                    i === 0 && runner.back.length !== 1
                                      ? "secondary"
                                      : ""
                                  } ${i === 1 ? "secondary" : ""} 
                                   ${
                                    runnerStatus(runner)
                                   }`}
                              >
                                <span className="odd-button__inner odd-button__inner--centered ">
                                  <div className="odd-button__price">
                                    {" "}
                                    {back?.price}
                                  </div>
                                  <div className="odd-button__volume">
                                    {" "}
                                    {back?.size}
                                  </div>
                                </span>
                              </span>
                            );
                          })}

                        {runner?.lay?.map((lay, i) => {
                          return (
                            <span
                              key={i}
                              className={`odd-button lay-color   ${
                                i === 1 ? "secondary" : ""
                              } ${i === 2 ? "secondary" : ""}  ${
                              runnerStatus(runner)
                              } `}
                            >
                              <span className="odd-button__inner odd-button__inner--centered ">
                                <div className="odd-button__price">
                                  {lay?.price}
                                </div>
                                <div className="odd-button__volume">
                                  {" "}
                                  {lay?.size}
                                </div>
                              </span>
                            </span>
                          );
                        })}

                        {runner.lay.length === 1 && (
                          <span className="odd-button lay-color not-active    ">
                            <span className="odd-button__inner odd-button__inner--centered ">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
        
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Bookmaker;
