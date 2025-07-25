import { useNavigate, useParams } from "react-router-dom";
import isOddSuspended, {
  isGameSuspended,
} from "../../../../utils/isOddSuspended";
import { isPriceAvailable } from "../../../../utils/isPriceAvailable";
import SuspendedOdd from "../../../shared/SuspendedOdd/SuspendedOdd";
import useExposer from "../../../../hooks/useExposure";
import { useDispatch, useSelector } from "react-redux";
import { handleDesktopBetSlip } from "../../../../utils/handleDesktopBetSlip";
import { userToken } from "../../../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { settings } from "../../../../api";
import { handleCashOutPlaceBet } from "../../../../utils/handleCashoutPlaceBet";
import { useEditFancyMutation } from "../../../../redux/features/events/events";
import toast from "react-hot-toast";
import assets from "../../../../assets";

const Bookmaker = ({ bookmaker }) => {
  const [editFancy] = useEditFancyMutation();
  const navigate = useNavigate();
  const [teamProfit, setTeamProfit] = useState([]);
  const token = useSelector(userToken);
  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const { predictOdd, stake } = useSelector((state) => state?.event);
  const dispatch = useDispatch();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleOpenBetSlip = (betType, games, runner, price) => {
    handleDesktopBetSlip(
      betType,
      games,
      runner,
      exposer,
      dispatch,
      price,
      token
    );
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };

  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }

  useEffect(() => {
    let results = [];
    if (
      bookmaker?.length > 0 &&
      exposer?.pnlBySelection &&
      Object.keys(exposer?.pnlBySelection)?.length > 0
    ) {
      bookmaker.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];

          const runner1back = runner1?.back?.[0]?.price;
          const runner1Lay = runner1?.lay?.[0]?.price;
          const runner2back = runner2?.back?.[0]?.price;
          const runner2Lay = runner2?.lay?.[0]?.price;

          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (
            pnl1 &&
            pnl2 &&
            runner1 &&
            runner2 &&
            runner1back &&
            runner1Lay &&
            runner2back &&
            runner2Lay
          ) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmaker, eventId]);

  const handleEditBookmaker = async (game) => {
    const payload = {
      id: game?.id,
      visible: game?.visible ? 0 : 1,
      type: "changeVisible",
    };
    const res = await editFancy(payload).unwrap();
    if (res?.success) {
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const changeLimit = async (game, limit) => {
    const payload = {
      id: game?.id,
      limit,
      type: "changeLimit",
    };
    const res = await editFancy(payload).unwrap();
    if (res?.success) {
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  return (
    <>
      {bookmaker?.map((games, i) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === games?.id && profit?.isOnePositiveExposure
        );

        return (
          <div key={i} className="py-1.5">
            <div className="grid grid-flow-col grid-cols-12 text-xs font-[500] mb-1.5">
              <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-12">
                {/* <span className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"></span> */}
                <span className="capitalize font-bold text-xs sm:text-sm md:text-[15px]">
                  {games?.name}
                </span>
                {settings.bookmakerCashOut &&
                  games?.runners?.length !== 3 &&
                  games?.name === "bookmaker" &&
                  games?.status === "OPEN" && (
                    <button
                      onClick={() =>
                        handleCashOutPlaceBet(
                          games,
                          "lay",
                          dispatch,
                          pnlBySelection,
                          token,
                          navigate,
                          teamProfitForGame
                        )
                      }
                      style={{
                        cursor: `${
                          !teamProfitForGame ||
                          isGameSuspended(games) ||
                          teamProfitForGame?.profit === 0
                            ? "not-allowed"
                            : "pointer"
                        }`,
                        opacity: `${
                          !teamProfitForGame ||
                          isGameSuspended(games) ||
                          teamProfitForGame?.profit === 0
                            ? "0.6"
                            : "1"
                        }`,
                      }}
                      disabled={
                        !teamProfitForGame ||
                        isGameSuspended(games) ||
                        teamProfitForGame?.profit === 0
                      }
                      type="button"
                      className={`inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out  rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-fit max-w-[74%] mr-1 cursor-pointer ${
                        teamProfitForGame?.profit > 0
                          ? "bg-bg_Secondary"
                          : "bg-bg_Secondary"
                      }`}
                    >
                      <div className="text-[10px] md:text-sm text-text_Quaternary whitespace-nowrap font-semibold">
                        Cashout
                      </div>
                      {teamProfitForGame?.profit !== 0 && (
                        <div className="capitalize text-[10px] md:text-sm ml-1 text-text_Quaternary whitespace-nowrap font-semibold">
                          <span> : </span>
                          <span className="font-roboto">₹ </span>
                          <span> {teamProfitForGame?.profit?.toFixed(2)}</span>
                        </div>
                      )}
                    </button>
                  )}
                {/* <span className="text-xs font-light">
                  Min: {games?.minLiabilityPerBet}
                </span> */}
                <button
                  onClick={() => handleEditBookmaker(games)}
                  className="flex items-center justify-center ml-4"
                >
                  {games?.visible ? (
                    <img src={assets.check} alt="" />
                  ) : (
                    <img src={assets?.close} alt="" />
                  )}
                </button>
                <span className="text-xs font-light ml-5">
                  Max: {games?.maxLiabilityPerBet}
                </span>
                <div className="ml-5 flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "1")}
                      checked={games?.maxLiabilityPerBet === "1"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "10k")}
                      checked={games?.maxLiabilityPerBet === "10k"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>10k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "50k")}
                      checked={games?.maxLiabilityPerBet === "50k"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>50k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "100k")}
                      checked={games?.maxLiabilityPerBet === "100k"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>100k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "200k")}
                      checked={games?.maxLiabilityPerBet === "200k"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>200k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      onClick={() => changeLimit(games, "500k")}
                      checked={games?.maxLiabilityPerBet === "500k"}
                      type="radio"
                      name={`maxLiabilityPerBet${games?.name}`}
                    />
                    <span>500k</span>
                  </div>
                </div>
              </div>
              {/* <div className="col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
                <span className="hidden md:flex col-span-1 text-center font-semibold h-full items-end justify-center"></span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
                <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 text-text_Ternary font-bold h-full flex items-end justify-center">
                  BACK
                </span>
                <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 font-bold h-full flex items-end justify-center">
                  LAY
                </span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
              </div> */}
            </div>
            <div className="bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              {games?.runners?.map((runner, idx) => {
                const pnl =
                  pnlBySelection?.filter(
                    (pnl) => pnl?.RunnerId === runner?.id
                  ) || [];
                const predictOddValues = predictOdd?.filter(
                  (val) => val?.id === runner?.id
                );
                return (
                  <div
                    key={runner?.id}
                    title="891555"
                    id="891555"
                    className={`grid grid-cols-12   ${
                      games?.runners?.length - 1 === idx
                        ? ""
                        : "border-b border-borderColorOfMarket"
                    }`}
                  >
                    <div className="w-full md:col-span-5 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                      <div className="truncate col-span-12 flex items-start justify-center h-full flex-col">
                        <div className="w-full flex flex-nowrap gap-x-2">
                          <span className="truncate w-full capitalize text-text_Ternary text-[13px] md:text-sm font-semibold">
                            {runner?.name}
                          </span>
                        </div>
                        <span className="w-full whitespace-nowrap">
                          {pnl &&
                            pnl?.map(({ pnl }, i) => {
                              return (
                                <span
                                  key={i}
                                  className={`text-[12px] font-bold  whitespace-nowrap ${
                                    pnl > 0
                                      ? "text-text_Success"
                                      : "text-text_Danger"
                                  }`}
                                >
                                  {pnl || ""}
                                </span>
                              );
                            })}

                          {stake &&
                            predictOddValues?.map(({ odd, id }) => {
                              return (
                                <span
                                  key={id}
                                  className={`text-[12px] font-bold ${
                                    odd > 0
                                      ? "text-text_Success"
                                      : "text-text_Danger"
                                  }`}
                                >
                                  {" "}
                                  &gt;&gt; {stake && odd}
                                </span>
                              );
                            })}
                        </span>
                      </div>
                    </div>
                    {isOddSuspended(runner) ? (
                      <SuspendedOdd />
                    ) : (
                      <div className="col-span-5 md:col-span-7 h-12 grid grid-cols-2 md:grid-cols-6 relative">
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back?.[2]?.price
                            )
                          }
                          className="hidden md:block text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.back?.[2]?.price
                              )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[2]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.back?.[2]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back?.[1]?.price
                            )
                          }
                          className="hidden md:block text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.back?.[1]?.price
                              )} overflow-hidden relative w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[1]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.back?.[1]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back?.[0]?.price
                            )
                          }
                          className="text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.back?.[0]?.price
                              )} overflow-hidden relative w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[0]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.back?.[0]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay?.[0]?.price
                            )
                          }
                          className="text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.lay?.[0]?.price
                              )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[0]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.lay?.[0]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay?.[1]?.price
                            )
                          }
                          className="hidden md:block text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.lay?.[1]?.price
                              )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[1]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.lay?.[1]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span
                          onClick={() =>
                            handleOpenBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay?.[2]?.price
                            )
                          }
                          className="hidden md:block text-center min-h-12"
                        >
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div
                              className={`${isPriceAvailable(
                                runner?.lay?.[2]?.price
                              )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[2]?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  {runner?.lay?.[2]?.size}
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                      </div>
                    )}

                    <div className="col-span-12 h-max"></div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bookmaker;
