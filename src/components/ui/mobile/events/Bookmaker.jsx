

const Bookmaker = ({ bookmaker }) => {
  return (
    <>
      {bookmaker?.map((games, i) => {
        return (
          <section key={i} className="SportMarketStandard">
            <div className="SportMarketStandard__header">
              <div className="SportEvent__market__title withDelay">
                <span className="SportEvent__market__title-name">
                  {games?.name.toUpperCase()}
                </span>
              </div>
              <div className="SportMarketStandard__header__action">Back</div>
              <div className="SportMarketStandard__header__action">Lay</div>
            </div>
            {games?.runners?.map((runner) => {
              return (
                <div key={runner?.id} className="SportMarketStandard__markets">
                  <div className="SportEvent__market">
                    <div className="SportEvent__market__row OPEN SUSPENDED">
                      <div className="SportEvent__market__title">
                        <div className="SportEvent__market__title__text">
                          <div>
                            <p>
                              <span>{runner?.name}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`odd-button back-color  `}
                      >
                        <span className="odd-button__inner odd-button__inner--centered">
                          <div className="odd-button__price">
                            {runner?.back?.[0]?.price}
                          </div>{" "}
                          <div className="odd-button__volume">
                            {" "}
                            {runner?.back?.[0]?.size}
                          </div>
                        </span>
                      </span>
                      <span
                        className={`odd-button lay-color `}
                      >
                        <span className="odd-button__inner odd-button__inner--centered">
                          <div className="odd-button__price">
                            {runner?.lay?.[0]?.price}
                          </div>{" "}
                          <div className="odd-button__volume">
                            {" "}
                            {runner?.lay?.[0]?.size}
                          </div>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default Bookmaker;
