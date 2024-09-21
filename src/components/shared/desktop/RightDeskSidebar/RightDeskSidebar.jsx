import { useDispatch, useSelector } from "react-redux";
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
import {
  setPredictOdd,
  setPrice,
  setShowComponent,
  setStake,
} from "../../../../redux/features/events/eventSlice";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import OpenBets from "./OpenBets";
import { setShowLoginModal } from "../../../../redux/features/stateSlice";

const RightDeskSidebar = () => {
  const [showBalance, setShowBalance] = useState(true);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { showComponent, price, stake, placeBetValues } = useSelector(
    (state) => state.event
  );
  const { eventId } = useParams();
  const { refetchBalance, balance } = useBalance();
  const { refetchExposure } = useExposer(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }

    dispatch(setPrice(placeBetValues?.price));
    dispatch(setStake(placeBetValues?.totalSize?.toFixed(2)));
  }, [placeBetValues, betDelay, dispatch]);

  useEffect(() => {
    dispatch(setPredictOdd([]));
  }, [placeBetValues, dispatch]);

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

    if (res?.success) {
      refetchExposure();
      refetchBalance();
      dispatch(setShowComponent(false));
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
      <div
        title="Menu 2"
        id="rightDeskSideBar"
        className="hidden lg:flex p-2 overflow-y-auto no-scrollbar z-10 w-[26%] h-[calc(100dvh-120px)] sticky top-[54px] lg:top-[110px]"
      >
        <div className="flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_Quaternary">
          {token ? (
            <>
              {betDelay > 0 && (
                <BetLoading
                  absolute={true}
                  betDelay={betDelay}
                  setBetDelay={setBetDelay}
                />
              )}
              <div className="flex flex-col w-full gap-1 select-none">
                <div
                  onClick={() => setShowBalance((prev) => !prev)}
                  className="w-full flex px-3 gap-x-1 py-2 relative cursor-pointer rounded bg-bg_Secondary"
                >
                  <div className="flex flex-col items-start">
                    <span className="uppercase text-text_Quaternary font-normal text-xxs">
                      Available Credit
                    </span>
                    <span className="text-text_Quaternary font-lato text-sm">
                      ₹ {balance?.availBalance}
                    </span>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-2 flex items-center justify-center autoAnimate -rotate-180">
                    {showBalance ? (
                      <MdOutlineKeyboardArrowDown size={20} color="#fff" />
                    ) : (
                      <MdOutlineKeyboardArrowUp size={20} color="#fff" />
                    )}
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-height duration-300 ease-in-out"
                  style={{ height: showBalance ? "226px" : "0px" }}
                >
                  <div className="flex flex-col gap-1 border autoAnimate rounded-lg opacity-100">
                    <div className="grid grid-cols-2 gap-1 w-full p-1">
                      <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
                        <span className="uppercase font-normal text-xxs">
                          Balance
                        </span>
                        <span className="font-lato text-sm">₹ 1,014.46</span>
                      </div>
                      <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                        <span className="uppercase font-normal text-xxs">
                          Free Cash
                        </span>
                        <span className="font-lato text-sm">₹ 0.00</span>
                      </div>
                      <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                        <span className="uppercase font-normal text-xxs">
                          Net Exposure
                        </span>
                        <span className="font-lato text-sm">₹ -330</span>
                      </div>
                    </div>
                    <div title="Bonus Information">
                      <div className="grid grid-cols-2 gap-1 p-1">
                        <div className="px-1 col-span-2 flex items-center justify-start gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_532_33690)">
                              <path
                                d="M9.38052 11.7641C7.73333 11.7641 2.88544 11.7641 2.88544 11.7641C2.37081 11.7641 1.94971 12.1851 1.94971 12.6998V19.7229C1.94971 20.2375 2.37081 20.6586 2.88544 20.6586C2.88544 20.6586 7.83478 20.6586 9.48973 20.6586C9.70986 20.6586 9.70986 20.4221 9.70986 20.4221V12.082C9.70986 12.082 9.70979 11.7641 9.38052 11.7641Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                              <path
                                d="M18.1147 11.7641C18.1147 11.7641 13.2483 11.7641 11.6263 11.7641C11.2311 11.7641 11.2903 12.1756 11.2903 12.1756V20.4297C11.2903 20.4297 11.287 20.6584 11.5248 20.6584C13.1722 20.6584 18.1146 20.6584 18.1146 20.6584C18.6292 20.6584 19.0503 20.2373 19.0503 19.7227V12.6998C19.0505 12.1851 18.6294 11.7641 18.1147 11.7641Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                              <path
                                d="M9.70983 6.23815C9.70983 6.23815 9.70983 5.92108 9.39651 5.92108C7.52033 5.92108 1.8288 5.92108 1.8288 5.92108C1.31417 5.92108 0.893066 6.34218 0.893066 6.85675V9.77761C0.893066 10.2922 1.31417 10.7133 1.8288 10.7133C1.8288 10.7133 7.54583 10.7133 9.42214 10.7133C9.70983 10.7133 9.70983 10.4638 9.70983 10.4638V6.23815Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                              <path
                                d="M19.1712 5.92108C19.1712 5.92108 13.4774 5.92108 11.5794 5.92108C11.2903 5.92108 11.2903 6.19657 11.2903 6.19657V10.4696C11.2903 10.4696 11.2903 10.7133 11.6418 10.7133C13.5241 10.7133 19.1712 10.7133 19.1712 10.7133C19.6859 10.7133 20.107 10.2922 20.107 9.77761V6.85675C20.107 6.34218 19.6859 5.92108 19.1712 5.92108Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                              <path
                                d="M6.52727 5.22878C6.09915 5.22878 5.70811 5.19483 5.3652 5.12782C4.49423 4.95766 3.8956 4.62648 3.53511 4.11546C3.21211 3.65747 3.11326 3.09287 3.24122 2.43725C3.46537 1.29018 4.23572 0.658493 5.41019 0.658493C5.65875 0.658493 5.93172 0.687194 6.22159 0.743845C6.95894 0.887894 7.90204 1.3107 8.74445 1.87483C10.1737 2.83204 10.2444 3.42712 10.1732 3.7915C10.0686 4.32693 9.56811 4.70951 8.64321 4.96121C8.01834 5.13123 7.24711 5.22878 6.52727 5.22878ZM5.41026 2.15822C4.95542 2.15822 4.7991 2.2853 4.71327 2.7248C4.64305 3.08414 4.7316 3.20965 4.76065 3.25089C4.88227 3.42337 5.19906 3.56721 5.65275 3.65577C5.89756 3.70363 6.20004 3.72892 6.5272 3.72892C7.24663 3.72892 7.88043 3.61991 8.30099 3.50068C8.3316 3.49202 8.37911 3.45582 8.32819 3.42548C7.77837 2.97759 6.77249 2.37951 5.93403 2.21569C5.73872 2.17765 5.56242 2.15822 5.41026 2.15822Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                              <path
                                d="M14.4947 5.22878C14.4947 5.22878 14.4947 5.22878 14.4945 5.22878C13.7747 5.22878 13.0035 5.13122 12.3787 4.9612C11.4537 4.70957 10.9533 4.32692 10.8487 3.79156C10.7775 3.42718 10.8481 2.8321 12.2775 1.87489C13.1198 1.31076 14.0629 0.887955 14.8003 0.743906C15.0902 0.687255 15.3632 0.658554 15.6115 0.658554C16.7863 0.658554 17.5566 1.29031 17.7805 2.43738C17.9086 3.09293 17.8098 3.65754 17.4868 4.11552C17.1263 4.62661 16.5277 4.95772 15.6565 5.12788C15.3138 5.19476 14.9227 5.22878 14.4947 5.22878ZM12.7057 3.4162C12.6569 3.4445 12.6805 3.48915 12.7058 3.49644C13.1262 3.61731 13.7666 3.72898 14.4945 3.72898C14.8218 3.72898 15.1242 3.70369 15.369 3.65583C15.8227 3.56721 16.1396 3.42343 16.2611 3.25095C16.2903 3.20971 16.379 3.0842 16.3085 2.72487C16.2228 2.28536 16.0664 2.15828 15.6115 2.15828C15.4594 2.15828 15.2832 2.17764 15.0878 2.21582C14.2492 2.37957 13.2555 2.96824 12.7057 3.4162Z"
                                fill="var(--color-iconsColor)"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_532_33690">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                  transform="translate(0.5 0.658493)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="font-lato-bold font-semibold text-sm text-text_Ternary">
                            Bonus Information
                          </span>
                        </div>
                        <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                          <span className="uppercase font-normal text-xxs">
                            Bonus Balance
                          </span>
                          <span className="font-lato text-sm">₹ 365</span>
                        </div>
                        <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                          <span className="uppercase font-normal text-xxs">
                            Net Exposure
                          </span>
                          <span className="font-lato text-sm">₹ 0.00</span>
                        </div>
                        <div className="flex w-full col-span-2 rounded items-center justify-between bg-bg_Ternary8 border px-2 py-2">
                          <span className="font-semibold text-xs">
                            Play With Bonus
                          </span>
                          <label className="inline-flex items-center cursor-pointer relative">
                            <input className="sr-only peer" type="checkbox" />
                            <div className="relative bg-bg_Ternary9 border-[0.5px] font-lato border-betSlipCancelBtnColor rounded-full peer-checked:bg-bg_SwitchCheckedBg h-[20px] w-[40px]">
                              <span className="absolute top-1/2 right-[5px] transform -translate-y-1/2 text-[10px] font-bold text-text_Primary text-[8px]">
                                OFF
                              </span>
                              <div className="bg-bg_Quaternary h-full border-[0.5px] border-betSlipCancelBtnColor transition-all ease-in-out aspect-square absolute left-0 rounded-full"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div title="sWalletInfo"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1 py-2">
                {/* <div className="w-full flex items-center gap-1">
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
                </div> */}

                {showComponent && (
                  <div className="relative">
                    <div
                      title="Bet Slip"
                      id="betSlipPlaceorder"
                      className={`w-full bg-bg_BetSlipBgColor text-selection-none border-[2px] border-b-[5px] font-lato origin-top transition-all ease-in-out p-2 rounded-sm scaleVerticalOpen ${
                        placeBetValues?.back
                          ? "border-backBtn"
                          : "border-layBtn"
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
                                onChange={(e) =>
                                  dispatch(setPrice(e.target.value))
                                }
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
                                onClick={() =>
                                  dispatch(setStake(button?.value))
                                }
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
                            onClick={() => dispatch(setStake(100))}
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px] font-semibold rounded-[4px] bg-minBtnGrd text-text_Quaternary py-2 cursor-pointer"
                            type="button"
                          >
                            MIN
                          </button>
                          <button
                            onClick={() =>
                              dispatch(
                                setStake(
                                  parseButtonValues[
                                    parseButtonValues?.length - 1
                                  ]?.value
                                )
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
                            onClick={() => dispatch(setStake(null))}
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
                          onClick={() => {
                            dispatch(setPredictOdd([]));
                            dispatch(setShowComponent(false));
                          }}
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
                              {/* <span className="font-semibold text-[10px] sm:text-xs">
                            <div>
                              <span>Profit : </span>
                              <span>1,600</span>
                            </div>
                          </span> */}
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
                )}

                {!showComponent && <OpenBets />}
              </div>
            </>
          ) : (
            <div className="w-full flex flex-col gap-y-1 py-2">
              <h4 className="text-sm font-lato text-center py-4">
                Please login to see your open bets. {" "}
                <span onClick={()=> dispatch(setShowLoginModal(true))} className="text-text_Secondary cursor-pointer hover:underline">
                  Login
                </span>
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightDeskSidebar;
