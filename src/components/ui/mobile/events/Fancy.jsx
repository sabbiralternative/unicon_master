import { useDispatch, useSelector } from "react-redux";
import isOddSuspended from "../../../../utils/isOddSuspended";
import { isPriceAvailable } from "../../../../utils/isPriceAvailable";
import SuspendedOdd from "../../../shared/SuspendedOdd/SuspendedOdd";
import { useParams } from "react-router-dom";
import useExposer from "../../../../hooks/useExposure";
import { handleBetSlip } from "../../../../utils/handleBetSlip";
import { useState } from "react";
import BetSlip from "../../../shared/mobile/BetSlip/BetSlip";
// import { useGetLadderMutation } from "../../../../redux/features/events/events";
import { FaPen } from "react-icons/fa";
// import Ladder from "../../../modal/Ladder/Ladder";
import { userToken } from "../../../../redux/features/auth/authSlice";
import { useEditFancyMutation } from "../../../../redux/features/events/events";
import toast from "react-hot-toast";

const Fancy = ({ fancy }) => {
  const [fancyName, setFancyName] = useState("");
  const [editFancy] = useEditFancyMutation();
  const token = useSelector(userToken);
  // const [eventName, setEventName] = useState("");
  // const [ladderData, setLadderData] = useState([]);
  // const [getLadder] = useGetLadderMutation();
  // const { predictOdd, stake } = useSelector((state) => state?.event);

  const [runnerId, setRunnerId] = useState("");
  const [editId, setEditId] = useState("");
  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const dispatch = useDispatch();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const handleOpenBetSlip = (betType, games, runner) => {
    handleBetSlip(
      setRunnerId,
      betType,
      games,
      runner,
      exposer,
      dispatch,
      token
    );
  };

  // const handleGetLadder = async (marketId, games) => {
  //   setEventName(games?.name);
  //   const res = await getLadder({ marketId }).unwrap();
  //   if (res.success) {
  //     setLadderData(res.result);
  //   }
  // };

  const handleEditFancy = async (game) => {
    const payload = {
      id: game?.id,
      name: fancyName,
      type: "changeVisible",
    };

    const res = await editFancy(payload).unwrap();
    if (res?.success) {
      toast.success(res?.result?.message);
      setEditId("");
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  return (
    <>
      <div className="text-base font-medium text-center">
        <ul
          style={{ paddingLeft: "3px", marginBottom: "3px" }}
          className="flex   justify-start items-start"
        >
          <li className="py-1 rounded-[100px] flex items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-100 ">
            <span className="capitalize font-bold text-xs sm:text-sm md:text-[15px]">
              Fancy Market
            </span>
          </li>
        </ul>
      </div>
      {/* {ladderData?.length > 0 && (
        <Ladder
          ladderData={ladderData}
          setLadderData={setLadderData}
          eventName={eventName}
        />
      )} */}
      {fancy?.map((games) => {
        const pnl =
          pnlBySelection?.filter((pnl) => pnl?.MarketId === games?.id) || [];
        // const predictOddValues = predictOdd?.filter(
        //   (val) => val?.id === games?.id
        // );

        return (
          <div key={games?.id} className="py-1.5">
            <div className="bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              <div title="1" id="1" className="grid grid-cols-12">
                <div className="w-full md:col-span-6 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                  <div className="col-span-8 md:col-span-10 flex items-start justify-center h-full flex-col">
                    <div className="w-full flex flex-nowrap gap-x-2">
                      <span className="w-full truncate capitalize text-text_Ternary text-[13px] md:text-sm font-semibold">
                        {games?.id === editId ? (
                          <input
                            className="border border-black py-1 rounded-sm px-2"
                            type="text"
                            onChange={(e) => setFancyName(e.target.value)}
                            value={fancyName}
                          />
                        ) : (
                          games?.name
                        )}
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

                      {/* {stake &&
                        runnerId &&
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
                        })} */}
                    </span>
                  </div>
                  <div className="col-span-4 md:col-span-1 flex flex-row items-center justify-end gap-5 w-full">
                    <button
                      onClick={() => {
                        setEditId(games?.id);
                        setFancyName(games?.name);
                      }}
                    >
                      <FaPen />
                    </button>
                    {editId === games?.id && (
                      <button
                        onClick={() => handleEditFancy(games)}
                        className="bg-[var(--color-bg-primary)] text-white px-2 py-1 rounded-sm"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
                {isOddSuspended(games) ? (
                  <SuspendedOdd colSpan={5} />
                ) : (
                  <div className="col-span-5 md:col-span-6 h-12 grid grid-cols-2 md:grid-cols-6 relative">
                    <span
                      onClick={() =>
                        handleOpenBetSlip("lay", games, games?.runners?.[0])
                      }
                      className="text-center min-h-12 cols-span-1 md:col-span-2"
                    >
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div
                          className={`${isPriceAvailable(
                            games?.runners?.[0]?.lay?.[0]?.line
                          )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                        >
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            {games?.runners?.[0]?.lay?.[0]?.line || "-"}
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              {" "}
                              {games?.runners?.[0]?.lay?.[0]?.price}
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span
                      onClick={() =>
                        handleOpenBetSlip("back", games, games?.runners?.[0])
                      }
                      className="text-center min-h-12 cols-span-1 md:col-span-2"
                    >
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div
                          className={`${isPriceAvailable(
                            games?.runners?.[0]?.back?.[0]?.line
                          )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                        >
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            {games?.runners?.[0]?.back?.[0]?.line}
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              {" "}
                              {games?.runners?.[0]?.back?.[0]?.price}
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="hidden md:block col-span-2 text-center min-h-12">
                      <div className="flex flex-col gap-y-1 items-center h-full w-full justify-center px-1">
                        <div className="flex items-center justify-center">
                          <span className="text-[10px] text-center text-text_MaxMarketTextColor">
                            Max Bet :
                          </span>
                          <span className="text-[10px] text-center text-text_MaxMarketTextColor">
                            {games?.maxLiabilityPerBet}
                          </span>
                        </div>
                        <div className="flex items-center justify-start">
                          <span className="text-[10px] text-center text-text_MaxMarketTextColor">
                            Max Mkt :
                          </span>
                          <span className="text-[10px] text-center text-text_MaxMarketTextColor">
                            60,000
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                )}

                <div className="col-span-12 h-max"></div>
                {games?.id === runnerId && (
                  <BetSlip setRunnerId={setRunnerId} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Fancy;
