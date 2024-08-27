import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useOrderMutation } from "../../../../redux/features/events/events";
import { useEffect, useState } from "react";
import useExposer from "../../../../hooks/useExposure";
import useBalance from "../../../../hooks/useBalance";
import handleEncryptData from "../../../../utils/handleEncryptData";
import handleRandomToken from "../../../../utils/handleRandomToken";
import { settings } from "../../../../api";
import toast from "react-hot-toast";
import BetLoading from "../../mobile/BetSlip/BetLoading";

const RightDeskSidebar = () => {
  const { eventId } = useParams();
  const { refetchBalance } = useBalance();
  const { refetchExposure } = useExposer(eventId);
  const { placeBetValues } = useSelector((state) => state?.event);

  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }
  const [stake, setStake] = useState("");
  const [price, setPrice] = useState("");
  const [betDelay, setBetDelay] = useState(null);

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }
    setPrice(placeBetValues?.price);
    setStake(placeBetValues?.totalSize?.toFixed(2));
  }, [placeBetValues, betDelay]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const generatedToken = handleRandomToken();
    const encryptedData = handleEncryptData([
      {
        ...payload,
        token: generatedToken,
        site: settings.siteUrl,
      },
    ]);
    setBetDelay(placeBetValues?.betDelay);
    const res = await createOrder(encryptedData).unwrap();
    console.log(res);
    if (res?.success) {
      refetchExposure();
      refetchBalance();
      // refetchCurrentBets();
      setBetDelay("");
      toast.success(res?.result?.result?.placed?.[0]?.message);
    } else {
      toast.error(
        res?.error?.status?.[0]?.description || res?.error?.errorMessage
      );
      setBetDelay(null);
      refetchExposure();
      refetchBalance();
      // refetchCurrentBets();
    }
  };

  return (
    <>
      {betDelay > 0 && (
        <BetLoading betDelay={betDelay} setBetDelay={setBetDelay} right={true} />
      )}
      <div
        title="Menu 2"
        id="rightDeskSideBar"
        className="hidden lg:flex p-2 overflow-y-auto no-scrollbar z-10 w-[26%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]"
      >
        <div className="flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_Quaternary">
          <div className="flex flex-col w-full gap-1 select-none">
            <div className="w-full flex px-3 gap-x-1 py-2 relative cursor-pointer rounded bg-bg_Secondary">
              <div className="flex flex-col items-start">
                <span className="uppercase text-text_Quaternary font-normal text-xxs">
                  Available Credit
                </span>
                <span className="text-text_Quaternary font-lato text-sm">
                  ₹ 1,374.46
                </span>
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-2 flex items-center justify-center autoAnimate -rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  fill="var(--color-quaternary)"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </div>
            </div>
            <div
              className="overflow-hidden transition-height duration-100 ease-in-out"
              style={{ height: "0px" }}
            ></div>
          </div>
          <div className="w-full flex flex-col gap-y-1 py-2">
            <div className="w-full flex items-center gap-1">
              <div className="flex gap-1 w-3/4 border rounded-lg p-0.5">
                <button className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_Quaternary text-text_Secondary">
                  Betslip
                </button>
                <button className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_Secondary text-text_Quaternary">
                  Open Bets
                </button>
              </div>
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out text-xs capitalize whitespace-nowrap rounded py-2 px-3 bg-bg_Secondary text-text_Quaternary cursor-pointer"
                type="button"
              >
                Edit Stakes
              </button>
            </div>

            <div className="relative">
              <div
                title="Bet Slip"
                id="betSlipPlaceorder"
                className={`w-full bg-bg_BetSlipBgColor text-selection-none border-[2px] border-b-[5px] font-lato origin-top transition-all ease-in-out p-2 rounded-sm scaleVerticalOpen ${
                  placeBetValues?.back ? "border-backBtn" : "border-layBtn"
                }`}
              >
                <div
                  id="topPartOfBetSlip"
                  title="Bet Slip Top Part"
                  className="grid grid-cols-12 pt-[2px] gap-x-[15px]"
                >
                  <span className="col-span-6 text-[10px] text-text_Ternary font-normal">
                    ODDS
                  </span>
                  <div className="col-span-6 w-full flex items-center justify-between">
                    <span className="text-[10px] text-text_Ternary font-normal text-start pl-1">
                      STAKE
                    </span>
                    <span className="text-[10px] float-right capitalize text-text_Ternary 5 font-normal text-center">
                      Max Mkt : {placeBetValues?.maxLiabilityPerMarket}
                    </span>
                  </div>
                  <span title="Odds" className="col-span-6 pt-1.5 w-full">
                    <div className="grid grid-cols-12 min-h-[35px]">
                      <span className="col-span-12 h-full pr-1 overflow-hidden">
                        <input
                          onChange={(e) => setPrice(e.target.value)}
                          id="oddInput"
                          className="focus:outline-none text-sm w-full h-full text-center py-1 flex items-center justify-center border-[0.25px] text-text_Ternary border-oddInputBorder focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                          disabled=""
                          max="1000"
                          min="-1000"
                          pattern="^[+-ed]+$"
                          type="number"
                          value={price}
                        />
                      </span>
                    </div>{" "}
                  </span>
                  <span
                    title="Stakes"
                    className="col-span-6 pt-1.5 w-full px-[1px] overflow-hidden"
                  >
                    <input
                      id="stakeInput"
                      className="focus:outline-none text-md w-full h-full text-center bg-bg_Quaternary flex items-center justify-center border-[0.75px] text-text_Ternary placeholder:text-text_Ternary 5 rounded-sm text-text_Ternary focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                      placeholder="Max : 50,000"
                      pattern="d*"
                      type="number"
                      value={stake}
                    />
                  </span>
                </div>
                <div className="mt-[15px] p-2.5 rounded-md border border-borderColorOfMarket bg-bg_InActivePlaceBtnColor">
                  <div className="grid grid-cols-12 gap-x-1 gap-y-1">
                    {parseButtonValues?.map((button, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => setStake(button?.value)}
                          className="inline-block leading-normal relative  transition duration-150 ease-in-out col-span-4 w-full overflow-hidden border border-primary text-[12px] font-semibold rounded-[4px] bg-bg_Primary text-text_Quaternary text-center py-1.5 cursor-pointer"
                          type="button"
                        >
                          <span>+ {button?.value}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-12 gap-x-1 gap-y-1 pt-[15px]">
                    <button
                      onClick={() => setStake(100)}
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px] font-semibold rounded-[4px] bg-minBtnGrd text-text_Quaternary py-2 cursor-pointer"
                      type="button"
                    >
                      MIN
                    </button>
                    <button
                      onClick={() =>
                        setStake(
                          parseButtonValues[parseButtonValues?.length - 1]
                            ?.value
                        )
                      }
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-maxBtnGrd text-text_Quaternary py-2 cursor-pointer"
                      type="button"
                    >
                      MAX
                    </button>
                    <button
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] text-text_Quaternary py-2 bg-editStakesGrd cursor-pointer"
                      type="button"
                    >
                      EDIT STAKES
                    </button>
                    <button
                      onClick={() => setStake("")}
                      className="inline-block relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-clearBtnGrd text-text_Quaternary leading-4 py-2 cursor-pointer"
                      id="clearBtn"
                      type="button"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-[13px] pt-3.5 w-full">
                  <button
                    onClick={() => setStake("")}
                    type="button"
                    className="leading-normal relative overflow-hidden transition duration-150 ease-in-out px-5 py-2.5 w-[50%] max-w-[156px] flex items-center justify-center min-h-[46px] text-sm bg-transparent  text-text_BetSlipCancelBtnColor font-medium border border-danger rounded-md cursor-pointer"
                  >
                    <span className="text-text_Primary font-bold text-xs leading-5">
                      Cancel Bet
                    </span>
                  </button>
                  <div className="w-[50%] max-w-[156px] h-max">
                    <button
                      disabled={!stake || betDelay > 0}
                      onClick={handleOrderBets}
                      type="button"
                      className="leading-normal relative overflow-hidden transition duration-150 ease-in-out py-1  w-full flex min-h-[46px] px-2.5 rounded-md font-medium border flex-row items-center justify-between bg-placeBetBtnGrd text-text_Quaternary border-primary cursor-pointer"
                    >
                      <div className="flex items-start justify-start flex-col">
                        <span className="font-bold text-xs sm:text-sm">
                          Place Bet
                        </span>
                        <span className="font-semibold text-[10px] sm:text-xs">
                          <div>
                            <span>Profit : </span>
                            <span>1,600</span>
                          </div>
                        </span>
                      </div>
                      <span className="text-[10px] flex items-center justify-center gap-x-[1px]">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_2144_3162)">
                              <path
                                d="M9.91095 3.68857L10.3814 3.21808C10.5643 3.03525 10.5643 2.7388 10.3814 2.55606C10.1986 2.37323 9.90225 2.37323 9.71942 2.55606L9.24893 3.02655C8.45956 2.36884 7.50037 1.9715 6.47717 1.87848V0.93631H6.92972C7.18826 0.93631 7.39783 0.726654 7.39783 0.468109C7.39783 0.209564 7.18826 0 6.92972 0H5.08832C4.82977 0 4.62021 0.209564 4.62021 0.468109C4.62021 0.726654 4.82977 0.93631 5.08832 0.93631H5.54086V1.87848C2.97958 2.11139 0.9375 4.26306 0.9375 6.92844C0.9375 9.73141 3.20572 12 6.00906 12C8.81195 12 11.0805 9.73178 11.0805 6.92844C11.0805 5.73111 10.6682 4.59723 9.91095 3.68857ZM6.00897 11.0637C3.72885 11.0637 1.87372 9.20865 1.87372 6.92844C1.87372 4.64832 3.72885 2.79327 6.00897 2.79327C8.28918 2.79327 10.1442 4.64832 10.1442 6.92844C10.1442 9.20865 8.28918 11.0637 6.00897 11.0637ZM8.1785 4.759C8.36133 4.94183 8.36133 5.23828 8.1785 5.42102L6.34003 7.25949C6.1572 7.44232 5.86075 7.44232 5.67801 7.25949C5.49518 7.07666 5.49518 6.78021 5.67801 6.59747L7.51639 4.759C7.69922 4.57617 7.99567 4.57617 8.1785 4.759Z"
                                fill="var(--color-quaternary)"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2144_3162">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="font-normal text-text_Quaternary">
                          {placeBetValues?.betDelay}s
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div id="openBetsRightSide" title="Open Bets">
            <div className=" flex flex-col w-full  gap-1">
              <div
                id="unmatched_0"
                className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded "
              >
                <span className=" text-text_Quaternary text-xs">
                  Unmatched Bets
                </span>
                <div className=" flex items-center justify-center autoAnimate ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                    viewBox="0 0 512 512"
                    height="12"
                    width="12"
                    fill="var(--color-quaternary)"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </div>
              </div>
              <div className="w-full origin-top scaleVerticalOpen">
                <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
                  You have no Unmatched Bets.
                </div>
              </div>
              <div
                id="matched_1"
                className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded "
              >
                <span className=" text-text_Quaternary text-xs">
                  Matched Bets
                </span>
                <div className=" flex items-center justify-center autoAnimate ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                    viewBox="0 0 512 512"
                    height="12"
                    width="12"
                    fill="var(--color-quaternary)"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </div>
              </div>
              <div className="w-full origin-top scaleVerticalOpen">
                <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
                  You have no Matched Bets.
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightDeskSidebar;
