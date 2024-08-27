export const handleBetSlip = (
  event,
  betType,
  games,
  runner,
  exposer,
  dispatch,
  setPlaceBetValues,
  setShowComponent,
  showComponent,
  setPosition
) => {
  if (betType === "back" && !runner?.back[0].price) {
    return;
  }
  if (betType === "lay" && !runner?.lay[0].price) {
    return;
  }
  let pnlBySelection;
  const updatedPnl = [];

  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  games?.runners?.forEach((runner) => {
    const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
    if (pnl) {
      updatedPnl.push(pnl?.pnl);
    }
  });

  const betData = {
    price: betType === "back" ? runner?.back[0].price : runner?.lay[0].price,
    side: betType === "back" ? 0 : 1,
    selectionId: runner?.id,
    btype: games?.btype,
    eventTypeId: games?.eventTypeId,
    betDelay: games?.betDelay,
    marketId: games?.id,
    lay: betType === "lay",
    back: betType === "back",
    selectedBetName: runner?.name,
    name: games.runners.map((runner) => runner.name),
    runnerId: games.runners.map((runner) => runner.id),
    isWeak: games?.isWeak,
    maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
    isBettable: games?.isBettable,
    maxLiabilityPerBet: games?.maxLiabilityPerBet,
    pnl: updatedPnl,
    marketName: games?.name,
    eventId: games?.eventId,
  };

  dispatch(setPlaceBetValues(betData));
  dispatch(setShowComponent(!showComponent));

  const rect = event.target.getBoundingClientRect();
  dispatch(
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    })
  );
};
