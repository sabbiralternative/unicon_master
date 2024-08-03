const BetSlip = () => {
  return (
    <div className="main_container-rigth">
      <div
        className="main_container__betslip-desktop_wrapper"
        style={{ top: "-27px" }}
      >
        <div className="betSlipDesktop">
          <div className="betSlipDesktop__topSection">
            <span className="betSlipDesktop__topSection-title">Betslip</span>
          </div>
          <div className="betSlipDesktop__betTop">
            <div style={{ display: "flex" }}>
              <div className="betSlipDesktop__betTop-slip active">Betslip</div>
              <div className="betSlipDesktop__betTop-openBets">Open Bets</div>
            </div>
            <button
              type="button"
              className="betSlipDesktop__betTop-editStakesBtn"
            >
              Edit Stakes
            </button>
          </div>
          <div className="betSlipDesktop__betMain">
            <div className="DesktopBetPlacing-container">
              <div className="DesktopBetPlacing__empty-message">
                Click on the odds to add selections to the betslip.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
