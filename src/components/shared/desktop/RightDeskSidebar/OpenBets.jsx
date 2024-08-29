import { useState } from "react";
import useCurrentBets from "../../../../hooks/useCurrentBets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const OpenBets = () => {
  const { myBets } = useCurrentBets();
  const [openBets, setOpenBets] = useState(true);
  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];
  return (
    <div id="openBetsRightSide" title="Open Bets">
      <div className=" flex flex-col w-full  gap-1">
        <div
          onClick={() => setOpenBets((prev) => !prev)}
          id="matched_1"
          className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded "
        >
          <span className=" text-text_Quaternary text-xs">Matched Bets</span>
          <div className=" flex items-center justify-center autoAnimate ">
            {openBets ? (
              <MdOutlineKeyboardArrowDown size={20} color="#fff" />
            ) : (
              <MdOutlineKeyboardArrowUp size={20} color="#fff" />
            )}
          </div>
        </div>

        {openBets && myBets?.length > 0 && orderedBets?.length > 0 && (
          <div className="w-full origin-top scaleVerticalOpen">
            <div className="flex flex-col gap-1 w-full">
              <div className="grid border grid-cols-6 px-2 py-1 bg-bg_Ternary8 rounded items-center gap-1 w-full text-xs font-lato capitalize cursor-pointer">
                <span className="col-span-2 text-text_Ternary font-semibold capitalize">
                  Market
                </span>
                <span className="col-span-1 text-center text-text_Ternary">
                  Odds
                </span>
                <span className="col-span-1 text-center text-text_Ternary">
                  Stake
                </span>
                <span className="col-span-2 text-center text-text_Ternary">
                  P/L
                </span>
              </div>
              <div className="flex w-full flex-col gap-0.5">
                {orderedBets?.map((bet, i) => {
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-6 font-semibold px-2 py-1 cursor-pointer rounded w-full text-xs capitalize bg-bg_BackBtnBg"
                    >
                      <span className="col-span-2">{bet?.nation}</span>
                      <span className="col-span-1 text-center">
                        {bet?.userRate}
                      </span>
                      <span className="col-span-1 text-center">
                        {bet?.amount}
                      </span>
                      <span className="col-span-2 text-center">
                        {bet?.amount}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* <div className="flex w-full flex-col gap-0.5">
                        <div className="grid grid-cols-6 font-semibold px-2 py-1 cursor-pointer rounded w-full text-xs capitalize bg-bg_BackBtnBg">
                          <span className="col-span-2">1st Wicket SL</span>
                          <span className="col-span-1 text-center">90</span>
                          <span className="col-span-1 text-center">100</span>
                          <span className="col-span-2 text-center">90</span>
                        </div>
                        <div className="grid grid-cols-6 font-semibold px-2 py-1 cursor-pointer rounded w-full text-xs capitalize bg-bg_LayBtnBg">
                          <span className="col-span-2">1st Wicket SL</span>
                          <span className="col-span-1 text-center">120</span>
                          <span className="col-span-1 text-center">100</span>
                          <span className="col-span-2 text-center">-120</span>
                        </div>
                      </div> */}
            </div>
          </div>
        )}

        {openBets && !myBets && orderedBets?.length === 0 && (
          <div
            className={`w-full origin-top scaleVerticalOpen ${
              openBets ? "hidden" : ""
            }`}
          >
            <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
              You have no Matched Bets.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenBets;
