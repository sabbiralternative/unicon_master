

const Fancy = ({ fancy }) => {
  return (
    <section className="SportMarketTabs">
      <div className="SportMarketTabs__header">
        <div className="SportMarketTabs__header__item active">
          {fancy?.[0]?.tabGroupName}
        </div>
      </div>
      <div className="SportMarketTabs__markets">
        {fancy?.map((games) => {
          return (
            <div key={games?.id} className="SportMarketTabs__markets__item">
              <section className="SportMarketStandard short">
                <div className="SportMarketStandard__markets">
                  <div className="SportEvent__market">
                    <div className="SportEvent__market__row OPEN null">
                      <div className="SportEvent__market__title">
                        <div className="SportEvent__market__title__text">
                          <div>
                            <p>
                              <span>{games?.name}</span>
                            </p>
                          </div>
                        </div>
                        <div className="SportMarketStandard__title-timer">
                          <img
                            className="SportMarketStandard__title-timer-img"
                            src="static/media/timer.8213d00a.svg"
                            alt="timer icon"
                            loading="lazy"
                          />
                          <span className="SportMarketStandard__title-timer-delay">
                            1s
                          </span>
                        </div>
                        <span className="SportMarketStandard__inningIcon disabled"></span>
                      </div>
                      <span
                        className={`odd-button lay-color `}
                      >
                        <span className="odd-button__inner odd-button__inner--centered">
                          <div className="odd-button__price">
                            {games?.runners?.[0]?.back?.[0]?.line}
                          </div>
                          <div className="odd-button__volume">
                            {games?.runners?.[0]?.back?.[0]?.price}
                          </div>
                        </span>
                      </span>
                      <span
                        className={`odd-button back-color `}
                      >
                        <span className="odd-button__inner odd-button__inner--centered">
                          <div className="odd-button__price">
                            {games?.runners?.[0]?.lay?.[0]?.line}
                          </div>
                          <div className="odd-button__volume">
                            {games?.runners?.[0]?.lay?.[0]?.price}
                          </div>
                        </span>
                      </span>
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
