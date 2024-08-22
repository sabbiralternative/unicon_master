import { useNavigate } from "react-router-dom";
import isOddSuspended from "../../../../utils/isOddSuspended";
import SuspendedOdd from "./SuspendedOdd";

const InPlay = ({ data }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <>
      <div title="In Play" className="py-1 px-[6px] w-full">
        <div className="w-full font-helvetica-neue">
          <div className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-inPlayBlockBg">
            <div className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <g clipPath="url(#clip0_1696_2272)">
                  <path
                    d="M14.5 2.83337C8.06004 2.83337 2.83337 8.06004 2.83337 14.5C2.83337 20.94 8.06004 26.1667 14.5 26.1667C20.94 26.1667 26.1667 20.94 26.1667 14.5C26.1667 8.06004 20.94 2.83337 14.5 2.83337ZM12.1667 19.75V9.25004L19.1667 14.5L12.1667 19.75Z"
                    fill="var(--color-quaternary)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1696_2272">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>In Play</span>
            </div>
            <div className="w-max text-nowrap">
              <span className="text-xs tracking-wide text-text_Quaternary text-nowrap whitespace-nowrap font-normal">
                Open Bets
              </span>
              <sup className="font-features sups">
                <span className="text-x font-normal tracking-wide text-text_Ternary bg-bg_Warning min-w-4 min-h-4 text-center px-1 py-0.5 font-lato rounded-full">
                  0
                </span>
              </sup>
            </div>
          </div>
          <div className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg">
            <div className="eventHeadName grid grid-cols-12">
              <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 19 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.36255 16.7108C4.35063 16.7037 4.34109 16.6966 4.32917 16.6895C3.88333 16.4077 3.4518 16.107 3.05842 15.7566C2.91299 15.6263 2.77709 15.489 2.63404 15.3564C2.59828 15.3256 2.61974 15.3067 2.63642 15.283C2.81524 15.0533 2.99643 14.8213 3.17524 14.5916C3.92148 13.635 4.6701 12.676 5.41634 11.7194C6.27225 10.6231 7.12578 9.52678 7.98169 8.43047C8.8066 7.37204 9.6339 6.31125 10.4588 5.25282C11.329 4.14231 12.1969 3.02942 13.0647 1.9189C13.2292 1.70816 13.3961 1.49506 13.5582 1.28195C13.5797 1.25354 13.5916 1.24644 13.6274 1.26538C13.9468 1.45244 14.2472 1.67028 14.5333 1.90233C14.6692 2.01125 14.8123 2.1107 14.9458 2.22199C15.0817 2.34038 15.2128 2.46351 15.3439 2.58663C15.3773 2.61742 15.3535 2.63162 15.3368 2.65293C15.1008 2.95602 14.8623 3.26147 14.6263 3.56455C13.9254 4.46433 13.222 5.36411 12.5211 6.26389C11.7343 7.27259 10.9476 8.28129 10.1584 9.29C9.42648 10.2277 8.69693 11.1653 7.965 12.103C7.12101 13.1827 6.2794 14.2648 5.43542 15.3446C5.08971 15.7874 4.7464 16.2278 4.40069 16.6706C4.39116 16.6848 4.38401 16.7037 4.36255 16.7108Z"
                      fill="#8B191B"
                    ></path>
                    <path
                      d="M17.9928 8.49706C17.9761 8.16556 17.9451 7.83643 17.8927 7.50967C17.8283 7.11424 17.7305 6.72591 17.6137 6.33995C17.3777 5.55146 17.0225 4.8198 16.5814 4.12365C16.4336 3.89161 16.2762 3.66903 16.1022 3.45119C16.0879 3.46776 16.0736 3.48197 16.0617 3.49854C15.7231 3.93423 15.3869 4.36991 15.0484 4.80322C14.2426 5.84271 13.4367 6.88219 12.6309 7.92167C11.7988 8.99431 10.9691 10.0669 10.1371 11.1372C9.34792 12.1554 8.55639 13.1759 7.76724 14.1941C6.99001 15.1981 6.2104 16.202 5.43317 17.2036C5.40456 17.2391 5.40695 17.251 5.44986 17.2699C6.43213 17.6867 7.45492 17.9211 8.52063 17.9803C9.05468 18.0087 9.58872 17.9921 10.1204 17.9258C10.571 17.869 11.0144 17.7814 11.4483 17.6511C12.247 17.412 13.0052 17.0852 13.7157 16.6495C14.4619 16.1925 15.1247 15.6385 15.7112 14.9897C16.0998 14.5587 16.4455 14.097 16.7411 13.5998C17.1917 12.8421 17.5136 12.0346 17.7353 11.1846C17.8736 10.6518 17.9594 10.1096 17.988 9.56022C18.0095 9.20741 18.0119 8.85224 17.9928 8.49706ZM9.17865 15.8587C8.93547 16.1618 8.70182 16.472 8.46579 16.7821C8.3299 16.9621 8.15586 17.0473 7.92936 16.9952C7.69572 16.9408 7.54552 16.7443 7.5479 16.5051C7.54552 16.382 7.58843 16.2754 7.66472 16.1783C7.90075 15.8776 8.13678 15.5745 8.37281 15.2738C8.52778 15.0797 8.7805 15.0063 8.98792 15.1128C9.31931 15.2809 9.336 15.6598 9.17865 15.8587ZM11.105 13.2612C11.0955 13.3606 11.055 13.4435 10.9954 13.5216C10.7569 13.8271 10.5233 14.1349 10.2873 14.4403C10.1633 14.6014 10.0012 14.6795 9.79853 14.644C9.58157 14.6061 9.44567 14.4688 9.39322 14.2557C9.38369 14.2201 9.38369 14.1823 9.3813 14.1444C9.3813 14.026 9.42183 13.9194 9.49336 13.8271C9.73654 13.5169 9.97972 13.2043 10.2253 12.8941C10.3588 12.726 10.6115 12.6621 10.807 12.7426C10.9977 12.8231 11.1265 13.0457 11.105 13.2612ZM12.8407 11.1443C12.5927 11.4569 12.3519 11.7742 12.0992 12.082C11.98 12.2264 11.8131 12.3069 11.6176 12.2643C11.4078 12.2169 11.2695 12.082 11.2242 11.8689C11.1932 11.7268 11.2266 11.5918 11.3172 11.4734C11.5485 11.1704 11.7845 10.872 12.0134 10.5666C12.2494 10.2493 12.7501 10.28 12.9098 10.666C12.936 10.7276 12.9432 10.7915 12.9432 10.8554C12.9432 10.9644 12.9098 11.0591 12.8407 11.1443ZM14.6645 8.77646C14.419 9.09139 14.1758 9.41105 13.9326 9.72834C13.7991 9.90119 13.5678 9.97459 13.358 9.90829C13.1602 9.84673 13.0195 9.66204 13.0123 9.44656C13.0076 9.31633 13.0576 9.19794 13.1363 9.09849C13.3747 8.79067 13.6203 8.48996 13.8635 8.18687C14.0018 8.01639 14.2235 7.95009 14.4238 8.02112C14.624 8.09216 14.7575 8.27922 14.7599 8.49943C14.7528 8.59414 14.7313 8.69122 14.6645 8.77646ZM16.5099 6.40152C16.2667 6.71644 16.0235 7.03373 15.7827 7.34866C15.6254 7.55466 15.4084 7.62333 15.1795 7.53808C14.9888 7.46705 14.86 7.27288 14.8648 7.03847C14.8624 6.94375 14.9077 6.8372 14.9816 6.74012C15.2153 6.44177 15.4465 6.14342 15.6826 5.84508C15.8638 5.61303 16.1308 5.56804 16.3835 5.72432C16.5933 5.85691 16.6601 6.20736 16.5099 6.40152Z"
                      fill="#8B191B"
                    ></path>
                    <path
                      d="M12.5188 0.709924C11.5127 0.274241 10.4589 0.0469281 9.36222 0.00667475C8.58975 -0.0217394 7.82444 0.0398245 7.06866 0.205573C6.33911 0.364219 5.63817 0.605739 4.97299 0.94434C3.79522 1.54104 2.7915 2.35084 1.96896 3.38559C1.49213 3.98702 1.09398 4.63344 0.784041 5.33432C0.469333 6.04467 0.245222 6.78581 0.116478 7.55062C0.0592586 7.88212 0.0306488 8.21598 0.0163439 8.54985C0.00203901 8.85057 0.00203901 9.14891 0.0163439 9.44963C0.0282647 9.72904 0.0521062 10.0108 0.0902526 10.2878C0.142704 10.6738 0.233302 11.0527 0.338204 11.4268C0.457412 11.8577 0.602845 12.2816 0.791193 12.6888C0.979541 13.0937 1.19888 13.4821 1.4373 13.8609C1.57796 14.0835 1.72816 14.2966 1.89029 14.5097C5.44744 9.91609 8.99982 5.32248 12.5522 0.733602C12.5451 0.717027 12.5308 0.71466 12.5188 0.709924ZM3.05375 11.1379C2.81057 11.4505 2.56739 11.7654 2.31943 12.0732C2.17162 12.2579 1.91651 12.3171 1.70909 12.2082C1.45637 12.0732 1.3014 11.7441 1.5279 11.4741C1.61134 11.3747 1.68525 11.2681 1.76393 11.1639C1.92366 10.9532 2.07863 10.7377 2.24076 10.5294C2.37427 10.3565 2.55308 10.2831 2.77004 10.3328C2.987 10.3826 3.11097 10.5246 3.15627 10.7401C3.15865 10.7472 3.15865 10.7567 3.16104 10.7638C3.16104 10.7851 3.16104 10.8064 3.16104 10.8277C3.16342 10.9414 3.12528 11.0456 3.05375 11.1379ZM4.8824 8.78427C4.68213 9.03999 4.48186 9.29809 4.28159 9.55382C4.24583 9.60117 4.21006 9.64853 4.17192 9.69352C4.06463 9.82849 3.91681 9.89952 3.6784 9.89715C3.5282 9.89242 3.38753 9.77166 3.29932 9.5917C3.21349 9.42122 3.24687 9.2602 3.36369 9.10866C3.60449 8.79611 3.83814 8.47882 4.07655 8.16389C4.20291 7.99814 4.37457 7.92711 4.57722 7.96263C4.78226 7.99814 4.91816 8.1189 4.97538 8.32254C5.02544 8.49302 4.98968 8.64693 4.8824 8.78427ZM6.69673 6.43063C6.4607 6.73372 6.22467 7.03443 5.98864 7.33515C5.85275 7.508 5.66917 7.55772 5.46413 7.508C5.27101 7.46064 5.14704 7.32804 5.09697 7.13625C5.05882 6.98471 5.09935 6.84264 5.18995 6.72424C5.4379 6.40222 5.69301 6.08729 5.95049 5.77C6.07209 5.62083 6.23659 5.5711 6.42017 5.61136C6.61806 5.65398 6.74203 5.78421 6.79687 5.98074C6.80879 6.02099 6.81117 6.06125 6.80879 6.11571C6.81594 6.227 6.77303 6.33355 6.69673 6.43063ZM8.59452 3.9515C8.52538 4.09831 8.41332 4.21433 8.31796 4.33983C8.15107 4.55767 7.98179 4.77551 7.81013 4.98862C7.68139 5.14963 7.50496 5.21119 7.30708 5.17094C7.09727 5.12832 6.96138 4.99572 6.91369 4.78498C6.90654 4.75183 6.90654 4.71395 6.90177 4.67843C6.90416 4.5553 6.95422 4.45348 7.02575 4.35877C7.25701 4.05332 7.49066 3.75023 7.72669 3.44715C7.88166 3.24825 8.13199 3.17722 8.34657 3.2814C8.6279 3.42347 8.71134 3.70288 8.59452 3.9515ZM10.3683 1.70679C10.1299 2.02408 9.88673 2.33663 9.64355 2.65155C9.5148 2.8173 9.28115 2.8836 9.08089 2.81967C8.88062 2.75574 8.74234 2.57105 8.73518 2.35557C8.7328 2.22534 8.78287 2.10695 8.85678 2.00513C9.09042 1.69495 9.32884 1.38713 9.56725 1.07931C9.665 0.953812 9.79852 0.885144 9.97494 0.878041C10.1704 0.894616 10.3254 0.998801 10.4232 1.17639C10.5281 1.36108 10.4899 1.54577 10.3683 1.70679Z"
                      fill="#8B191B"
                    ></path>
                  </svg>
                </span>
                <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                  In Play
                </div>
              </div>

              <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  1
                </span>
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  X
                </span>
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  2
                </span>
              </div>

              {data &&
                Object.values(data).length > 0 &&
                Object.keys(data)
                  .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                  .map((keys) => {
                    return (
                      <>
                        <div
                          onClick={() => navigateGameList(keys)}
                          className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket"
                        >
                          <span
                            id="inPlayTime"
                            className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                          >
                            <span
                              id="inPlayTime"
                              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                            >
                              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                                {data?.[keys]?.date}
                              </span>
                              <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                                {/* Tgt 145 */}
                              </span>
                              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                                {/* 0/0 */}
                              </span>
                            </span>
                          </span>
                          <span
                            id="inPlayTeamName"
                            className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                          >
                            <span className="flex flex-col items-center justify-start w-[87%]">
                              <span className="text-selection-none w-full flex items-center justify-start">
                                <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                                  {data[keys]?.eventName}
                                </span>
                              </span>
                              {/* <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        South Africa
                      </span>
                    </span> */}
                            </span>
                            {data?.[keys]?.inPlay === 1 && (
                              <span className="absolute top-0.5 right-0.5">
                                <svg
                                  width="13"
                                  height="11"
                                  viewBox="0 0 13 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                                    fill="#257B24"
                                  ></path>
                                </svg>
                              </span>
                            )}
                          </span>
                        </div>
                        {isOddSuspended(data[keys]) ? (
                          <SuspendedOdd  colSpan={6}/>
                        ) : (
                          <span
                            onClick={() => navigateGameList(keys)}
                            className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket"
                          >
                            <div
                              className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                              id="hideScrollBar"
                            >
                              <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {
                                          data[keys]?.[0]?.ex
                                            ?.availableToBack[0]?.price
                                        }
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {
                                            data[keys]?.[0]?.ex
                                              ?.availableToBack[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div
                                      className={`
                                    ${
                                      data[keys]?.[2]?.ex?.availableToBack[0]
                                        ?.price
                                        ? "opacity-100 cursor-pointer active:scale-95"
                                        : "opacity-50 cursor-not-allowed"
                                    }
                                    overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined   `}
                                    >
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {data[keys]?.[2]?.ex?.availableToBack[0]
                                          ?.price || "-"}
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {" "}
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToBack[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {
                                          data[keys]?.[1]?.ex
                                            ?.availableToBack[0]?.price
                                        }
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToBack[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </span>
                              <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {
                                          data[keys]?.[0]?.ex?.availableToLay[0]
                                            ?.price
                                        }
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {
                                            data[keys]?.[0]?.ex
                                              ?.availableToLay[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {
                                          data[keys]?.[2]?.ex?.availableToLay[0]
                                            ?.price
                                        }
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToLay[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                                <span className="col-span-4">
                                  <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                    <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                      <span
                                        id="oddBtnPrice"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                      >
                                        {
                                          data[keys]?.[1]?.ex?.availableToLay[0]
                                            ?.price
                                        }
                                      </span>
                                      <span
                                        id="oddBtnSize"
                                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                      >
                                        <span className="w-max break-all truncate">
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToLay[0]?.size
                                          }
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </span>
                        )}
                      </>
                    );
                  })}

              {/* Tennis start */}
              {/* <>
              <div className="col-span-12">
                <div className="relative w-full min-h-[43px]">
                  <div
                    className="absolute right-0 z-0 top-0 w-[42%] h-full"
                    style={{
                      background: "url('/src/assets/images/StadiumImage.png')",
                    }}
                  ></div>
                  <div className="w-full z-10 min-h-[43px] bg-superOverBannerGradient pt-[9px] pb-[8px] pl-[13px] relative">
                    <div className="flex items-center gap-[9px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                      >
                        <path
                          d="M19.3594 1.48438C19.3594 1.48438 20.3438 2.64823 20.3438 3.78125C20.3438 6.40625 17.764 6.24514 16.7344 8.04688C15.4219 10.3438 17.0625 11.6562 16.4063 14.6094C15.0386 20.7634 6.89063 19.5312 6.89063 19.5312L1.76073 13.3297C0.607039 5.09375 7.87501 3.78125 7.87501 3.78125C5.57813 5.09375 6.23438 7.0625 7.54688 7.71875C8.85938 8.375 10.5204 7.28038 10.5 5.75C10.4721 3.65 12.4904 2.76406 14.0602 3.78125C17.4097 5.95573 19.3594 2.79688 19.3594 1.48438Z"
                          fill="#FFF575"
                        ></path>
                        <path
                          d="M19.3108 4.00535C18.9335 4.4546 18.4668 4.82034 17.9403 5.07925C17.4138 5.33816 16.8392 5.48457 16.253 5.50914C15.275 5.48061 14.3267 5.16711 13.5244 4.60713C13.2751 4.44011 12.9827 4.34893 12.6827 4.34463C12.5286 4.34206 12.3755 4.37032 12.2324 4.42774C12.0894 4.48516 11.9592 4.57058 11.8496 4.67899C11.7212 4.82198 11.6227 4.98927 11.5599 5.17096C11.4972 5.35266 11.4715 5.54508 11.4844 5.73686C11.4892 6.14746 11.4119 6.55487 11.2569 6.93513C11.102 7.31539 10.8725 7.6608 10.5821 7.95105C10.294 8.24637 9.95045 8.48196 9.57118 8.64435C9.19192 8.80673 8.78435 8.89271 8.37181 8.89736C7.93256 8.89837 7.4992 8.79633 7.10656 8.59943C6.60944 8.35648 6.18639 7.98495 5.88129 7.52337C5.57618 7.06179 5.40014 6.52698 5.37143 5.97443V5.9321C3.81809 7.03427 2.25129 9.10703 2.70115 12.9212L2.65357 14.4076L6.89065 19.5312C6.89065 19.5312 15.0387 20.7633 16.4063 14.6094C17.0625 11.6562 15.4219 10.3437 16.7344 8.04686C17.7641 6.24513 20.3438 6.40624 20.3438 3.78124C20.3214 3.28576 20.1829 2.80247 19.9395 2.3703C19.8623 2.95739 19.6469 3.51778 19.3108 4.00535Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M19.6875 9.03125C19.6875 9.03125 17.1911 9.74558 18.0469 12.3125C18.2848 13.046 18.3189 13.8303 18.1455 14.5816C17.9721 15.333 17.5978 16.0231 17.0625 16.5781C17.0625 16.5781 20.0156 15.5938 20.0156 12.6406C20.0156 11 19.0312 11 19.6875 9.03125Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M6.56255 2.46876C6.56255 2.46876 3.60943 2.79689 2.29693 5.09376C2.29693 5.09376 1.9688 3.12501 3.60943 2.14064C5.12471 1.23141 6.56255 2.46876 6.56255 2.46876Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M9.84375 2.79688C10.025 2.79688 10.1719 2.64997 10.1719 2.46875C10.1719 2.28753 10.025 2.14062 9.84375 2.14062C9.66253 2.14062 9.51562 2.28753 9.51562 2.46875C9.51562 2.64997 9.66253 2.79688 9.84375 2.79688Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M8.53125 6.40625C8.89369 6.40625 9.1875 6.11244 9.1875 5.75C9.1875 5.38756 8.89369 5.09375 8.53125 5.09375C8.16881 5.09375 7.875 5.38756 7.875 5.75C7.875 6.11244 8.16881 6.40625 8.53125 6.40625Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M17.7188 19.2031C17.9 19.2031 18.0469 19.0562 18.0469 18.875C18.0469 18.6938 17.9 18.5469 17.7188 18.5469C17.5375 18.5469 17.3906 18.6938 17.3906 18.875C17.3906 19.0562 17.5375 19.2031 17.7188 19.2031Z"
                          fill="#FFD83F"
                        ></path>
                        <path
                          d="M5.90625 20.8438C8.80575 20.8438 11.1562 18.4932 11.1562 15.5938C11.1562 12.6943 8.80575 10.3438 5.90625 10.3438C3.00675 10.3438 0.65625 12.6943 0.65625 15.5938C0.65625 18.4932 3.00675 20.8438 5.90625 20.8438Z"
                          fill="#D7184A"
                        ></path>
                        <path
                          d="M2.19384 19.3061C2.30212 19.4141 2.41532 19.5132 2.53016 19.61C3.64349 20.1786 4.92316 20.3312 6.139 20.0405C7.35484 19.7498 8.42704 19.0348 9.16272 18.024C9.8984 17.0133 10.2493 15.7732 10.1522 14.5269C10.0552 13.2805 9.51656 12.1097 8.63329 11.2251C8.52501 11.1171 8.4118 11.018 8.29696 10.9212C7.18364 10.3526 5.90396 10.2 4.68812 10.4907C3.47228 10.7814 2.40009 11.4965 1.66441 12.5072C0.92873 13.5179 0.577858 14.758 0.67491 16.0043C0.771962 17.2507 1.31057 18.4215 2.19384 19.3061Z"
                          fill="#F01D64"
                        ></path>
                        <path
                          d="M3.23796 16.8698L3.93424 16.1738C3.96558 16.1436 3.99058 16.1073 4.00778 16.0673C4.02497 16.0273 4.03403 15.9842 4.0344 15.9407C4.03478 15.8971 4.02648 15.8539 4.00998 15.8136C3.99348 15.7732 3.96912 15.7366 3.93831 15.7058C3.9075 15.675 3.87087 15.6506 3.83054 15.6341C3.79022 15.6176 3.74701 15.6093 3.70344 15.6097C3.65987 15.6101 3.61682 15.6191 3.57678 15.6363C3.53675 15.6535 3.50054 15.6785 3.47027 15.7099L2.77399 16.4058C2.71422 16.4677 2.68115 16.5506 2.6819 16.6366C2.68264 16.7226 2.71715 16.8049 2.77799 16.8658C2.83883 16.9266 2.92113 16.9611 3.00716 16.9619C3.09319 16.9626 3.17608 16.9295 3.23796 16.8698Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M4.8622 15.2456L5.55815 14.5496C5.61985 14.4881 5.65458 14.4046 5.65471 14.3175C5.65483 14.2303 5.62033 14.1467 5.55881 14.085C5.49728 14.0233 5.41377 13.9886 5.32663 13.9885C5.2395 13.9883 5.15588 14.0228 5.09418 14.0844L4.39692 14.7816C4.33715 14.8435 4.30407 14.9264 4.30482 15.0124C4.30557 15.0985 4.34008 15.1808 4.40092 15.2416C4.46175 15.3024 4.54405 15.3369 4.63008 15.3377C4.71612 15.3384 4.799 15.3054 4.86089 15.2456H4.8622Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M6.48638 13.6217L7.18233 12.9254C7.21367 12.8951 7.23866 12.8589 7.25586 12.8189C7.27306 12.7789 7.28211 12.7358 7.28249 12.6922C7.28287 12.6487 7.27456 12.6055 7.25807 12.5651C7.24157 12.5248 7.2172 12.4882 7.1864 12.4574C7.15559 12.4266 7.11895 12.4022 7.07863 12.3857C7.0383 12.3692 6.99509 12.3609 6.95152 12.3613C6.90796 12.3617 6.8649 12.3707 6.82487 12.3879C6.78483 12.4051 6.74863 12.4301 6.71836 12.4614L6.02241 13.1577C5.96264 13.2196 5.92956 13.3025 5.93031 13.3885C5.93106 13.4746 5.96557 13.5569 6.0264 13.6177C6.08724 13.6785 6.16954 13.713 6.25557 13.7138C6.3416 13.7145 6.42449 13.6815 6.48638 13.6217Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M5.32615 17.5657L4.63019 18.262C4.57042 18.3239 4.53735 18.4068 4.5381 18.4928C4.53885 18.5789 4.57335 18.6612 4.63419 18.722C4.69503 18.7828 4.77733 18.8173 4.86336 18.8181C4.94939 18.8188 5.03228 18.7858 5.09416 18.726L5.79012 18.0297C5.84989 17.9678 5.88296 17.8849 5.88221 17.7989C5.88146 17.7129 5.84696 17.6306 5.78612 17.5697C5.72528 17.5089 5.64298 17.4744 5.55695 17.4736C5.47092 17.4729 5.38803 17.506 5.32615 17.5657Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M6.95035 15.9418L6.25439 16.6378C6.22384 16.6683 6.19959 16.7044 6.18302 16.7443C6.16646 16.7841 6.1579 16.8268 6.15784 16.87C6.15778 16.9131 6.16621 16.9558 6.18267 16.9957C6.19912 17.0356 6.22327 17.0719 6.25374 17.1024C6.2842 17.133 6.32038 17.1572 6.36022 17.1738C6.40006 17.1904 6.44277 17.1989 6.48591 17.199C6.57305 17.1991 6.65666 17.1646 6.71836 17.1031L7.41563 16.4058C7.4754 16.3439 7.50847 16.261 7.50772 16.175C7.50698 16.089 7.47247 16.0067 7.41163 15.9458C7.35079 15.885 7.26849 15.8505 7.18246 15.8497C7.09643 15.849 7.01354 15.8821 6.95166 15.9418H6.95035Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M8.57453 14.3176L7.87825 15.0136C7.84691 15.0439 7.82191 15.0801 7.80472 15.1201C7.78752 15.1601 7.77847 15.2032 7.77809 15.2468C7.77771 15.2903 7.78601 15.3335 7.80251 15.3739C7.81901 15.4142 7.84337 15.4508 7.87418 15.4816C7.90499 15.5124 7.94163 15.5368 7.98195 15.5533C8.02228 15.5698 8.06548 15.5781 8.10905 15.5777C8.15262 15.5773 8.19568 15.5683 8.23571 15.5511C8.27574 15.5339 8.31195 15.5089 8.34222 15.4776L9.0385 14.7816C9.09827 14.7197 9.13134 14.6368 9.13059 14.5508C9.12985 14.4648 9.09534 14.3825 9.0345 14.3216C8.97366 14.2608 8.89137 14.2263 8.80533 14.2255C8.7193 14.2248 8.63642 14.2579 8.57453 14.3176Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M1.56518 18.5422L2.31002 17.7977C2.37168 17.7361 2.40635 17.6526 2.40642 17.5655C2.40648 17.4783 2.37192 17.3947 2.31035 17.3331C2.27987 17.3026 2.24367 17.2783 2.20382 17.2618C2.16397 17.2453 2.12125 17.2367 2.07811 17.2367C1.99097 17.2366 1.90738 17.2712 1.84573 17.3328L1.22229 17.9562C1.32377 18.1588 1.43831 18.3545 1.56518 18.5422Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M8.11025 11.9975L8.85477 11.2526C8.66783 11.1255 8.47284 11.0106 8.27104 10.9088L7.6476 11.5322C7.58603 11.5937 7.55142 11.6772 7.55139 11.7642C7.55136 11.8513 7.58591 11.9348 7.64743 11.9963C7.70896 12.0579 7.79243 12.0925 7.87947 12.0925C7.96651 12.0926 8.05 12.058 8.11157 11.9965L8.11025 11.9975Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M3.70228 19.19L2.95776 19.9349C3.1447 20.062 3.33969 20.1769 3.5415 20.2787L4.16494 19.6553C4.22651 19.5938 4.26111 19.5103 4.26114 19.4233C4.26117 19.3362 4.22663 19.2527 4.1651 19.1912C4.10357 19.1296 4.02011 19.095 3.93307 19.095C3.84603 19.0949 3.76254 19.1295 3.70097 19.191L3.70228 19.19Z"
                          fill="#DCEDFF"
                        ></path>
                        <path
                          d="M9.50253 13.8547C9.533 13.8852 9.56919 13.9094 9.60902 13.9259C9.64886 13.9424 9.69155 13.9509 9.73467 13.9509C9.7778 13.9509 9.82049 13.9424 9.86033 13.9259C9.90016 13.9094 9.93635 13.8852 9.96682 13.8547L10.5903 13.2313C10.4884 13.0294 10.3735 12.8345 10.2464 12.6475L9.50154 13.392C9.44056 13.4536 9.40643 13.5369 9.40662 13.6236C9.4068 13.7103 9.44128 13.7933 9.50253 13.8547Z"
                          fill="#DCEDFF"
                        ></path>
                        <path
                          d="M2.1938 19.3062C2.27223 19.3843 2.35557 19.4542 2.4376 19.5264L9.83879 12.1252C9.7666 12.0431 9.69671 11.9611 9.61862 11.8814C9.54052 11.8016 9.45685 11.7334 9.37482 11.6612L1.97363 19.0624C2.04582 19.1444 2.11571 19.2278 2.1938 19.3062Z"
                          fill="#DCEDFF"
                        ></path>
                        <path
                          d="M4.16714 19.19C4.10561 19.1285 4.02216 19.0939 3.93515 19.0939C3.84815 19.0939 3.7647 19.1285 3.70317 19.19L3.05151 19.84C3.28409 19.9283 3.5227 19.9998 3.76551 20.054L4.16714 19.6543C4.19765 19.6238 4.22185 19.5876 4.23836 19.5478C4.25487 19.508 4.26337 19.4653 4.26337 19.4222C4.26337 19.379 4.25487 19.3363 4.23836 19.2965C4.22185 19.2567 4.19765 19.2205 4.16714 19.19Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M9.50244 13.8547C9.53292 13.8852 9.5691 13.9094 9.60894 13.9259C9.64877 13.9424 9.69147 13.9509 9.73459 13.9509C9.77771 13.9509 9.82041 13.9424 9.86024 13.9259C9.90008 13.9094 9.93627 13.8852 9.96674 13.8547L10.0383 13.7828C9.98414 13.54 9.91264 13.3014 9.82433 13.0688L9.50244 13.3907C9.44093 13.4523 9.40637 13.5357 9.40637 13.6227C9.40637 13.7097 9.44093 13.7932 9.50244 13.8547Z"
                          fill="#F1F8FF"
                        ></path>
                        <path
                          d="M2.1938 19.3062C2.27223 19.3843 2.35557 19.4542 2.4376 19.5263L9.53298 12.4313C9.42498 12.2348 9.30442 12.0456 9.17204 11.8646L1.97363 19.0624C2.04582 19.1444 2.11571 19.2277 2.1938 19.3062Z"
                          fill="#F1F8FF"
                        ></path>
                      </svg>
                      <div className="flex flex-col items-start justify-start font-lato font-bold leading-3 text-text_Quaternary">
                        <span className="text-[11px] md:text-xs">
                          Play Super Over Game
                        </span>
                        <span className="text-xxs md:text-x">
                          Win More Money
                        </span>
                      </div>
                    </div>
                    <svg
                      className="absolute bottom-0 right-[31.054%] z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="15"
                      viewBox="0 0 28 15"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1129_3507)">
                        <mask
                          id="mask0_1129_3507"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="28"
                          height="36"
                        >
                          <path
                            d="M26.9431 32.7644L6.63765 35.9041C6.01451 36 5.42803 35.5749 5.31959 34.9457L0.111497 4.80008C4.55976e-06 4.15234 0.436812 3.53706 1.07981 3.43812L22.6728 0.0989181C23.3158 -2.11969e-05 23.9129 0.454481 23.9985 1.10841L27.9175 31.4519C28 32.0857 27.5663 32.6685 26.9431 32.7644Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_1129_3507)">
                          <path
                            d="M26.3474 14.5248L1.83032 18.3178L1.95332 19.1323L26.4704 15.3394L26.3474 14.5248Z"
                            fill="#E6E4F9"
                          ></path>
                          <path
                            d="M26.2244 13.7122L1.70728 17.5051L1.83027 18.3196L26.3474 14.5267L26.2244 13.7122Z"
                            fill="#E6E5FA"
                          ></path>
                          <path
                            d="M26.1027 12.8961L1.58557 16.6891L1.70856 17.5036L26.2257 13.7106L26.1027 12.8961Z"
                            fill="#E6E6FB"
                          ></path>
                          <path
                            d="M25.9779 12.0818L1.46082 15.8748L1.58381 16.6893L26.1009 12.8964L25.9779 12.0818Z"
                            fill="#E7E7FB"
                          ></path>
                          <path
                            d="M25.8565 11.2689L1.33936 15.0618L1.46235 15.8763L25.9795 12.0834L25.8565 11.2689Z"
                            fill="#E7E8FC"
                          ></path>
                          <path
                            d="M25.7317 10.4546L1.2146 14.2476L1.33759 15.0621L25.8547 11.2691L25.7317 10.4546Z"
                            fill="#E7E9FC"
                          ></path>
                          <path
                            d="M25.6099 9.64014L1.09277 13.4331L1.21577 14.2476L25.7329 10.4547L25.6099 9.64014Z"
                            fill="#E7E9FD"
                          ></path>
                          <path
                            d="M25.487 8.82587L0.969849 12.6188L1.09284 13.4334L25.61 9.64039L25.487 8.82587Z"
                            fill="#E8EAFD"
                          ></path>
                          <path
                            d="M25.3637 8.01135L0.846558 11.8043L0.969551 12.6188L25.4867 8.82587L25.3637 8.01135Z"
                            fill="#E8EAFD"
                          ></path>
                          <path
                            d="M25.242 7.19684L0.724854 10.9898L0.847847 11.8043L25.365 8.01136L25.242 7.19684Z"
                            fill="#E8EBFE"
                          ></path>
                          <path
                            d="M25.1173 6.38416L0.60022 10.1771L0.723213 10.9916L25.2403 7.19868L25.1173 6.38416Z"
                            fill="#E8EBFE"
                          ></path>
                          <path
                            d="M24.9956 5.56964L0.478516 9.36261L0.601509 10.1771L25.1186 6.38416L24.9956 5.56964Z"
                            fill="#E8ECFE"
                          ></path>
                          <path
                            d="M24.8725 4.75537L0.355347 8.54834L0.47834 9.36286L24.9955 5.56989L24.8725 4.75537Z"
                            fill="#E9ECFE"
                          ></path>
                          <path
                            d="M24.7494 3.94086L0.2323 7.73383L0.355293 8.54835L24.8724 4.75538L24.7494 3.94086Z"
                            fill="#E9ECFF"
                          ></path>
                          <path
                            d="M24.6261 3.12659L0.109009 6.91956L0.232002 7.73408L24.7491 3.94111L24.6261 3.12659Z"
                            fill="#E9EDFF"
                          ></path>
                          <path
                            d="M0.108438 6.91957L0 6.19916V6.10332L24.504 2.3158L24.6262 3.12895L0.108438 6.91957Z"
                            fill="#E9EDFF"
                          ></path>
                          <path
                            d="M0 5.27007L24.3803 1.5011L24.504 2.3158L0 6.10332V5.27007Z"
                            fill="#E9EDFF"
                          ></path>
                          <path
                            d="M0 4.43682L24.2581 0.686401L24.3803 1.5011L0 5.27007V4.43682Z"
                            fill="#E9EDFF"
                          ></path>
                          <path
                            d="M0 3.6051L23.3112 0H24.1543L24.2581 0.686392L0 4.43681V3.6051Z"
                            fill="#E9EDFF"
                          ></path>
                          <path
                            d="M23.3112 0L0 3.6051V0H23.3112Z"
                            fill="#E9EDFF"
                          ></path>
                        </g>
                        <path
                          d="M4.09314 6.64595L3.02097 6.81136L2.90032 7.40964L2.65137 7.44828L3.15538 4.95934L3.42265 4.9176L4.63533 7.14065L4.38638 7.17929L4.09467 6.6444L4.09314 6.64595ZM3.33254 5.2407L3.06221 6.60266L3.99234 6.45889L3.33254 5.2407Z"
                          fill="#2F0020"
                        ></path>
                        <mask
                          id="mask1_1129_3507"
                          maskUnits="userSpaceOnUse"
                          x="9"
                          y="12"
                          width="11"
                          height="9"
                        >
                          <path
                            d="M9.66164 18.5094C10.2771 21.5007 13.8113 21.7048 14.8881 19.287C16.6704 21.2642 19.9419 20.0074 19.6471 16.9665C19.3524 13.9257 14.5887 14.5781 13.8541 12.4401C13.7838 14.7033 9.04462 15.5195 9.66012 18.5109L9.66164 18.5094Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask1_1129_3507)">
                          <path
                            d="M13.8556 12.4385L9.04614 13.1821V12.4385H13.8556Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M15.4852 12.4385L9.04614 13.4341V13.1821L13.8556 12.4385H15.4852Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M17.1133 12.4385L9.04614 13.6861V13.4341L15.4852 12.4385H17.1133Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M18.743 12.4385L9.04614 13.9381V13.6861L17.1133 12.4385H18.743Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M19.4394 12.4385L19.4608 12.5792L9.04614 14.1901V13.9381L18.743 12.4385H19.4394Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M19.4608 12.5792L19.4975 12.825L9.04614 14.4421V14.1901L19.4608 12.5792Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M19.4975 12.825L19.5341 13.0724L9.04614 14.694V14.4421L19.4975 12.825Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M19.5341 13.0724L19.5723 13.3182L9.04614 14.9461V14.6941L19.5341 13.0724Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M19.5723 13.3182L19.609 13.564L9.04614 15.198V14.946L19.5723 13.3182Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M19.609 13.564L19.6456 13.8098L9.04614 15.4485V15.198L19.609 13.564Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M19.6456 13.8098L19.6838 14.0556L9.04614 15.7004V15.4484L19.6456 13.8098Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M19.6838 14.0556L19.7204 14.303L9.04614 15.9525V15.7005L19.6838 14.0556Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M19.7204 14.3029L19.7571 14.5487L9.04614 16.2044V15.9524L19.7204 14.3029Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M19.7571 14.5487L19.7953 14.7945L9.04614 16.4564V16.2044L19.7571 14.5487Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M19.7953 14.7946L19.8319 15.0404L9.04614 16.7084V16.4564L19.7953 14.7946Z"
                            fill="#340A31"
                          ></path>
                        </g>
                        <mask
                          id="mask2_1129_3507"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="7"
                          width="4"
                          height="3"
                        >
                          <path
                            d="M2.75218 8.81799C2.89574 9.51211 3.71438 9.55849 3.96485 8.99886C4.37875 9.458 5.13629 9.16582 5.06909 8.46088C5.00036 7.75594 3.89613 7.90744 3.72507 7.41119C3.70827 7.93681 2.61014 8.12541 2.75218 8.81953V8.81799Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask2_1129_3507)">
                          <path
                            d="M3.72504 7.40967L2.61011 7.58281V7.40967H3.72504Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M4.10228 7.40967L2.61011 7.64156V7.58281L3.72504 7.40967H4.10228Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M4.48105 7.40967L2.61011 7.7003V7.64156L4.10228 7.40967H4.48105Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M4.85829 7.40967L2.61011 7.7575V7.7003L4.48105 7.40967H4.85829Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M5.13626 7.42513L2.61011 7.81625V7.7575L4.85829 7.40967H5.13626V7.42513Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M5.13626 7.48386L2.61011 7.87497V7.81623L5.13626 7.42511V7.48386Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M5.13626 7.54263L2.61011 7.93375V7.87501L5.13626 7.48389V7.54263Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M5.13626 7.60135L2.61011 7.99092V7.93372L5.13626 7.5426V7.60135Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M5.13626 7.66012L2.61011 8.0497V7.99095L5.13626 7.60138V7.66012Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M5.13626 7.71729L2.61011 8.10841V8.04967L5.13626 7.6601V7.71729Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M5.13626 7.77603L2.61011 8.16715V8.10841L5.13626 7.71729V7.77603Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M5.13626 7.83481L2.61011 8.22593V8.16718L5.13626 7.77606V7.83481Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M5.13626 7.89352L2.61011 8.2831V8.2259L5.13626 7.83478V7.89352Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M5.13626 7.95075L2.61011 8.34187V8.28313L5.13626 7.89355V7.95075Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M5.13626 8.00949L2.61011 8.40061V8.34186L5.13626 7.95074V8.00949Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M5.13626 8.06821L2.61011 8.45933V8.40058L5.13626 8.00946V8.06821Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M5.13626 8.12698L2.61011 8.5181V8.45936L5.13626 8.06824V8.12698Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M5.13626 8.1857L2.61011 8.57527V8.51807L5.13626 8.12695V8.1857Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M5.13626 8.24293L2.61011 8.63405V8.5753L5.13626 8.18573V8.24293Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M5.13626 8.30167L2.61011 8.69278V8.63404L5.13626 8.24292V8.30167Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M5.13626 8.36044L2.61011 8.75156V8.69282L5.13626 8.3017V8.36044Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M5.13626 8.41916L2.61011 8.80873V8.75153L5.13626 8.36041V8.41916Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M5.13626 8.47787L2.61011 8.86745V8.8087L5.13626 8.41913V8.47787Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M5.13626 8.5351L2.61011 8.92622V8.86748L5.13626 8.47791V8.5351Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M5.13626 8.59384L2.61011 8.98496V8.92622L5.13626 8.5351V8.59384Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M5.13626 8.65262L2.61011 9.04374V8.98499L5.13626 8.59387V8.65262Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M5.13626 8.71133L2.61011 9.10091V9.04371L5.13626 8.65259V8.71133Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M5.13626 8.76856L2.61011 9.15968V9.10094L5.13626 8.71136V8.76856Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M5.13626 8.8273L2.61011 9.21842V9.15967L5.13626 8.76855V8.8273Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M5.13626 8.88602L2.61011 9.27714V9.21839L5.13626 8.82727V8.88602Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M5.13626 8.94479L2.61011 9.33437V9.27717L5.13626 8.88605V8.94479Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M5.13626 9.00351L2.61011 9.39308V9.33434L5.13626 8.94476V9.00351Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M5.13626 9.06074L2.61011 9.45186V9.39311L5.13626 9.00354V9.06074Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M5.13626 9.11948L2.61011 9.51059V9.45185L5.13626 9.06073V9.11948Z"
                            fill="#2C001D"
                          ></path>
                          <path
                            d="M2.61011 9.51057L5.13626 9.11945V9.55849H2.61011V9.51057Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                        <mask
                          id="mask3_1129_3507"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="8"
                          width="2"
                          height="3"
                        >
                          <path
                            d="M3.96488 8.99884C3.96488 8.99884 4.07026 9.73316 3.60291 10.0671L4.11455 9.98823L4.6262 9.90939C4.08248 9.73161 3.96488 8.99884 3.96488 8.99884Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask3_1129_3507)">
                          <path
                            d="M3.60291 10.0671L4.62467 9.90784V10.0671H3.60291Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M3.60291 10.0362L4.62467 9.87848V9.90785L3.60291 10.0671V10.0362Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M3.60291 10.0052L4.62467 9.84753V9.87845L3.60291 10.0361V10.0052Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M3.60291 9.97433L4.62467 9.81665V9.84757L3.60291 10.0053V9.97433Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M3.60291 9.94339L4.62467 9.78571V9.81662L3.60291 9.97431V9.94339Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M3.60291 9.91251L4.62467 9.75482V9.78574L3.60291 9.94343V9.91251Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M3.60291 9.88311L4.62467 9.72388V9.7548L3.60291 9.91248V9.88311Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M3.60291 9.85216L4.62467 9.69293V9.72385L3.60291 9.88308V9.85216Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M3.60291 9.82126L4.62467 9.66357V9.69295L3.60291 9.85218V9.82126Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M3.60291 9.79038L4.62467 9.63269V9.66361L3.60291 9.82129V9.79038Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M3.60291 9.75943L4.62467 9.60175V9.63266L3.60291 9.79035V9.75943Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M3.60291 9.72855L4.62467 9.57086V9.60178L3.60291 9.75947V9.72855Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M3.60291 9.69915L4.62467 9.53992V9.57084L3.60291 9.72852V9.69915Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M3.60291 9.6682L4.62467 9.50897V9.53989L3.60291 9.69912V9.6682Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M3.60291 9.6373L4.62467 9.47961V9.50899L3.60291 9.66822V9.6373Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M3.60291 9.60642L4.62467 9.44873V9.47965L3.60291 9.63733V9.60642Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M3.60291 9.57547L4.62467 9.41779V9.4487L3.60291 9.60639V9.57547Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M3.60291 9.54453L4.62467 9.38684V9.41776L3.60291 9.57544V9.54453Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M3.60291 9.51364L4.62467 9.35596V9.38688L3.60291 9.54456V9.51364Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M3.60291 9.48424L4.62467 9.32501V9.35593L3.60291 9.51362V9.48424Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M3.60291 9.45336L4.62467 9.29413V9.32505L3.60291 9.48428V9.45336Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M3.60291 9.42246L4.62467 9.26477V9.29414L3.60291 9.45337V9.42246Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M3.60291 9.39151L4.62467 9.23383V9.26474L3.60291 9.42243V9.39151Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M3.60291 9.36057L4.62467 9.20288V9.2338L3.60291 9.39148V9.36057Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M3.60291 9.32968L4.62467 9.172V9.20292L3.60291 9.3606V9.32968Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M3.60291 9.30028L4.62467 9.14105V9.17197L3.60291 9.32965V9.30028Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M3.60291 9.2694L4.62467 9.11017V9.14109L3.60291 9.30032V9.2694Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M3.60291 9.23843L4.62467 9.08075V9.11012L3.60291 9.26935V9.23843Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M3.60291 9.20755L4.62467 9.04987V9.08078L3.60291 9.23847V9.20755Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M3.60291 9.17661L4.62467 9.01892V9.04984L3.60291 9.20752V9.17661Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M3.60291 9.1457L4.56052 8.99884H4.62467V9.01894L3.60291 9.17662V9.1457Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M3.60291 9.11633L4.36197 8.99884H4.56052L3.60291 9.1457V9.11633Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M3.60291 9.08541L4.16342 8.99884H4.36197L3.60291 9.11633V9.08541Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M3.60291 9.05449L3.96488 8.99884H4.16342L3.60291 9.08541V9.05449Z"
                            fill="#2C001D"
                          ></path>
                          <path
                            d="M3.96488 8.99884L3.60291 9.05449V8.99884H3.96488Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1129_3507">
                          <rect width="28" height="36" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="13"
                      viewBox="0 0 34 13"
                      fill="none"
                      className="absolute bottom-0 right-[8.17%] z-10"
                    >
                      <g clipPath="url(#clip0_1129_2718)">
                        <mask
                          id="mask0_1129_2718"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="33"
                          height="42"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M31.1863 38.2089L7.25371 41.4447C6.51877 41.5441 5.83968 41.0379 5.72429 40.3051L0.20276 5.18957C0.084249 4.43367 0.610412 3.72831 1.3667 3.62606L26.8173 0.185022C27.5753 0.0825267 28.2681 0.623071 28.3546 1.38331L32.3582 36.7041C32.4416 37.4412 31.9213 38.1095 31.1863 38.2089Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_1129_2718)">
                          <path
                            d="M29.8047 11.9743L1.61902 15.7852L1.88897 17.7818L30.0746 13.9709L29.8047 11.9743Z"
                            fill="#E6ECF0"
                          ></path>
                          <path
                            d="M29.5349 9.97951L1.34924 13.7903L1.61919 15.787L29.8049 11.9761L29.5349 9.97951Z"
                            fill="#E6EDF0"
                          ></path>
                          <path
                            d="M29.265 7.98292L1.07935 11.7938L1.3493 13.7904L29.535 9.97953L29.265 7.98292Z"
                            fill="#E6EDEF"
                          ></path>
                          <path
                            d="M28.9952 5.98805L0.80957 9.79889L1.07952 11.7955L29.2652 7.98466L28.9952 5.98805Z"
                            fill="#E5EDEF"
                          ></path>
                          <path
                            d="M28.7253 3.99147L0.539673 7.80231L0.809624 9.79892L28.9953 5.98808L28.7253 3.99147Z"
                            fill="#E5EEEF"
                          ></path>
                          <path
                            d="M28.4556 1.9966L0.269897 5.80743L0.539849 7.80404L28.7255 3.99321L28.4556 1.9966Z"
                            fill="#E5EEEF"
                          ></path>
                          <path
                            d="M28.1857 1.38625e-05L0 3.81085L0.269951 5.80746L28.4556 1.99662L28.1857 1.38625e-05Z"
                            fill="#E5EEEF"
                          ></path>
                        </g>
                        <path
                          d="M4.85109 7.40421L3.58764 7.57504L3.43489 8.26796L3.14127 8.30766L3.78483 5.42829L4.09802 5.38594L5.47777 7.99175L5.18415 8.03145L4.85287 7.40397L4.85109 7.40421ZM3.98502 5.75638L3.64 7.33239L4.73796 7.18394L3.9868 5.75614L3.98502 5.75638Z"
                          fill="#2F0020"
                        ></path>
                        <mask
                          id="mask1_1129_2718"
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="10"
                          width="2"
                          height="2"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M4.82493 10.615C4.82493 10.615 4.94629 11.5663 4.32728 11.987L5.66903 11.8056C4.96053 11.5643 4.82493 10.615 4.82493 10.615Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask1_1129_2718)">
                          <path
                            d="M5.66402 11.7682L4.32227 11.9496L4.32756 11.9888L5.66931 11.8074L5.66402 11.7682Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M5.65865 11.7291L4.31689 11.9105L4.32219 11.9496L5.66394 11.7682L5.65865 11.7291Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M5.6534 11.6899L4.31165 11.8713L4.31694 11.9105L5.65869 11.7291L5.6534 11.6899Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M5.64815 11.6507L4.3064 11.8322L4.31169 11.8713L5.65344 11.6899L5.64815 11.6507Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M5.64278 11.6116L4.30103 11.793L4.30632 11.8322L5.64807 11.6508L5.64278 11.6116Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M5.63753 11.5725L4.29578 11.7539L4.30107 11.7931L5.64282 11.6116L5.63753 11.5725Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M5.63252 11.5351L4.29077 11.7165L4.29606 11.7556L5.63782 11.5742L5.63252 11.5351Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M5.62715 11.496L4.2854 11.6774L4.29069 11.7165L5.63244 11.5351L5.62715 11.496Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M5.6219 11.4568L4.28015 11.6382L4.28544 11.6773L5.6272 11.4959L5.6219 11.4568Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M5.61653 11.4176L4.27478 11.5991L4.28007 11.6382L5.62182 11.4568L5.61653 11.4176Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M5.61128 11.3785L4.26953 11.5599L4.27482 11.5991L5.61658 11.4177L5.61128 11.3785Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M5.60603 11.3393L4.26428 11.5208L4.26958 11.5599L5.61133 11.3785L5.60603 11.3393Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M5.60091 11.302L4.25916 11.4834L4.26445 11.5225L5.6062 11.3411L5.60091 11.302Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M5.59566 11.2629L4.25391 11.4443L4.2592 11.4834L5.60095 11.302L5.59566 11.2629Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M5.59041 11.2237L4.24866 11.4051L4.25395 11.4442L5.5957 11.2628L5.59041 11.2237Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M5.58504 11.1846L4.24329 11.366L4.24858 11.4051L5.59033 11.2237L5.58504 11.1846Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M5.57979 11.1454L4.23804 11.3268L4.24333 11.3659L5.58508 11.1845L5.57979 11.1454Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M5.57454 11.1062L4.23279 11.2877L4.23808 11.3268L5.57983 11.1454L5.57454 11.1062Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M5.56941 11.0689L4.22766 11.2503L4.23295 11.2895L5.57471 11.108L5.56941 11.0689Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M5.56416 11.0297L4.22241 11.2111L4.22771 11.2503L5.56946 11.0689L5.56416 11.0297Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M5.55879 10.9906L4.21704 11.172L4.22233 11.2111L5.56408 11.0297L5.55879 10.9906Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M5.55354 10.9514L4.21179 11.1328L4.21709 11.172L5.55884 10.9906L5.55354 10.9514Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M5.54829 10.9123L4.20654 11.0937L4.21184 11.1328L5.55359 10.9514L5.54829 10.9123Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M5.54317 10.8749L4.20142 11.0563L4.20671 11.0955L5.54846 10.9141L5.54317 10.8749Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M5.53792 10.8357L4.19617 11.0172L4.20146 11.0563L5.54321 10.8749L5.53792 10.8357Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M5.53267 10.7966L4.19092 10.978L4.19621 11.0172L5.53796 10.8358L5.53267 10.7966Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M5.5273 10.7574L4.18555 10.9388L4.19084 10.978L5.53259 10.7966L5.5273 10.7574Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M5.52205 10.7183L4.1803 10.8997L4.18559 10.9389L5.52734 10.7575L5.52205 10.7183Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M5.51668 10.6792L4.17493 10.8606L4.18022 10.8997L5.52197 10.7183L5.51668 10.6792Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M5.51167 10.6418L4.16992 10.8232L4.17521 10.8623L5.51697 10.6809L5.51167 10.6418Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M5.50642 10.6026L4.16467 10.7841L4.16997 10.8232L5.51172 10.6418L5.50642 10.6026Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M5.50105 10.5635L4.1593 10.7449L4.16459 10.784L5.50635 10.6026L5.50105 10.5635Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M5.4958 10.5243L4.15405 10.7057L4.15935 10.7449L5.5011 10.5635L5.4958 10.5243Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                        <mask
                          id="mask2_1129_2718"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="8"
                          width="3"
                          height="3"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M4.78504 10.1058C5.23516 10.045 5.55072 9.63075 5.48986 9.18063C5.429 8.73051 5.01477 8.41495 4.56465 8.4758C4.11453 8.53666 3.79897 8.95089 3.85983 9.40101C3.92069 9.85114 4.33492 10.1667 4.78504 10.1058Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask2_1129_2718)">
                          <path
                            d="M5.59329 9.94581L3.96326 10.1662L3.96999 10.216L5.60003 9.99564L5.59329 9.94581Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M5.58658 9.89601L3.95654 10.1164L3.96328 10.1662L5.59331 9.94583L5.58658 9.89601Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M5.58011 9.84797L3.95007 10.0684L3.95681 10.1182L5.58684 9.8978L5.58011 9.84797Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M5.57339 9.79811L3.94336 10.0185L3.9501 10.0683L5.58013 9.84793L5.57339 9.79811Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M5.56656 9.7483L3.93652 9.96869L3.94326 10.0185L5.57329 9.79813L5.56656 9.7483Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M5.55984 9.69844L3.92981 9.91882L3.93655 9.96865L5.56658 9.74826L5.55984 9.69844Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M5.55337 9.6504L3.92334 9.87079L3.93008 9.92062L5.56011 9.70023L5.55337 9.6504Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M5.54666 9.6006L3.91663 9.82098L3.92336 9.87081L5.55339 9.65042L5.54666 9.6006Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M5.53994 9.55079L3.90991 9.77118L3.91665 9.82101L5.54668 9.60062L5.53994 9.55079Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M5.53311 9.50093L3.90308 9.72131L3.90981 9.77114L5.53985 9.55075L5.53311 9.50093Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M5.52639 9.45112L3.89636 9.67151L3.9031 9.72133L5.53313 9.50095L5.52639 9.45112Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M5.51992 9.40309L3.88989 9.62347L3.89663 9.6733L5.52666 9.45291L5.51992 9.40309Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M5.51321 9.35322L3.88318 9.57361L3.88992 9.62343L5.51995 9.40305L5.51321 9.35322Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M5.5065 9.30342L3.87646 9.5238L3.8832 9.57363L5.51323 9.35324L5.5065 9.30342Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M5.49978 9.25361L3.86975 9.474L3.87649 9.52383L5.50652 9.30344L5.49978 9.25361Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M5.49319 9.20552L3.86316 9.4259L3.8699 9.47573L5.49993 9.25534L5.49319 9.20552Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M5.48648 9.15571L3.85645 9.3761L3.86318 9.42592L5.49321 9.20554L5.48648 9.15571Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M5.47976 9.10591L3.84973 9.32629L3.85647 9.37612L5.4865 9.15573L5.47976 9.10591Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M5.47305 9.05604L3.84302 9.27643L3.84975 9.32625L5.47979 9.10587L5.47305 9.05604Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M5.46658 9.00801L3.83655 9.22839L3.84328 9.27822L5.47332 9.05783L5.46658 9.00801Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M5.45974 8.9582L3.82971 9.17859L3.83645 9.22841L5.46648 9.00803L5.45974 8.9582Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M5.45303 8.90833L3.823 9.12872L3.82973 9.17855L5.45977 8.95816L5.45303 8.90833Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M5.44632 8.85853L3.81628 9.07892L3.82302 9.12874L5.45305 8.90836L5.44632 8.85853Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M5.43985 8.8105L3.80981 9.03088L3.81655 9.08071L5.44658 8.86032L5.43985 8.8105Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M5.43313 8.76069L3.8031 8.98108L3.80984 9.03091L5.43987 8.81052L5.43313 8.76069Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M5.4263 8.71083L3.79626 8.93121L3.803 8.98104L5.43303 8.76065L5.4263 8.71083Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M5.41958 8.66102L3.78955 8.88141L3.79629 8.93124L5.42632 8.71085L5.41958 8.66102Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M5.41287 8.61115L3.78284 8.83154L3.78957 8.88137L5.41961 8.66098L5.41287 8.61115Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M5.4064 8.56312L3.77637 8.78351L3.7831 8.83333L5.41314 8.61295L5.4064 8.56312Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M5.39969 8.51332L3.76965 8.7337L3.77639 8.78353L5.40642 8.56314L5.39969 8.51332Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M5.39285 8.46351L3.76282 8.6839L3.76955 8.73372L5.39959 8.51334L5.39285 8.46351Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M5.38614 8.41365L3.7561 8.63403L3.76284 8.68386L5.39287 8.46347L5.38614 8.41365Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M5.37967 8.36561L3.74963 8.586L3.75637 8.63582L5.3864 8.41544L5.37967 8.36561Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                        <mask
                          id="mask3_1129_2718"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="9"
                          width="2"
                          height="3"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M4.20227 11.2773C4.6524 11.2164 4.96795 10.8022 4.9071 10.3521C4.84624 9.90195 4.43201 9.58639 3.98189 9.64725C3.53177 9.70811 3.21621 10.1223 3.27706 10.5725C3.33792 11.0226 3.75215 11.3381 4.20227 11.2773Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask3_1129_2718)">
                          <path
                            d="M5.01077 11.119L3.38074 11.3394L3.38747 11.3892L5.01751 11.1689L5.01077 11.119Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M5.00406 11.0692L3.37402 11.2896L3.38076 11.3394L5.01079 11.119L5.00406 11.0692Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M4.99734 11.0194L3.36731 11.2398L3.37405 11.2896L5.00408 11.0692L4.99734 11.0194Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M4.99063 10.9696L3.3606 11.1899L3.36733 11.2398L4.99736 11.0194L4.99063 10.9696Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M4.98404 10.9215L3.354 11.1419L3.36074 11.1917L4.99077 10.9713L4.98404 10.9215Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M4.97732 10.8717L3.34729 11.0921L3.35403 11.1419L4.98406 10.9215L4.97732 10.8717Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M4.97061 10.8218L3.34058 11.0422L3.34731 11.0921L4.97734 10.8717L4.97061 10.8218Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M4.96389 10.772L3.33386 10.9924L3.3406 11.0423L4.97063 10.8219L4.96389 10.772Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M4.95718 10.7222L3.32715 10.9426L3.33389 10.9925L4.96392 10.7721L4.95718 10.7222Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M4.95059 10.6741L3.32056 10.8945L3.32729 10.9444L4.95733 10.724L4.95059 10.6741Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M4.94387 10.6243L3.31384 10.8447L3.32058 10.8946L4.95061 10.6742L4.94387 10.6243Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M4.93716 10.5745L3.30713 10.7949L3.31387 10.8447L4.9439 10.6244L4.93716 10.5745Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M4.93045 10.5247L3.30042 10.7451L3.30715 10.7949L4.93718 10.5745L4.93045 10.5247Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M4.92398 10.4766L3.29395 10.697L3.30068 10.7468L4.93071 10.5265L4.92398 10.4766Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M4.91714 10.4268L3.28711 10.6472L3.29385 10.697L4.92388 10.4767L4.91714 10.4268Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M4.91043 10.377L3.2804 10.5974L3.28713 10.6472L4.91716 10.4268L4.91043 10.377Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M4.90371 10.3272L3.27368 10.5475L3.28042 10.5974L4.91045 10.377L4.90371 10.3272Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M4.89724 10.2791L3.26721 10.4995L3.27395 10.5493L4.90398 10.329L4.89724 10.2791Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M4.89053 10.2293L3.2605 10.4496L3.26723 10.4995L4.89727 10.2791L4.89053 10.2293Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M4.88382 10.1795L3.25378 10.3998L3.26052 10.4497L4.89055 10.2293L4.88382 10.1795Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M4.87698 10.1296L3.24695 10.35L3.25369 10.3999L4.88372 10.1795L4.87698 10.1296Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M4.87027 10.0798L3.24023 10.3002L3.24697 10.35L4.877 10.1296L4.87027 10.0798Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M4.8638 10.0317L3.23376 10.2521L3.2405 10.302L4.87053 10.0816L4.8638 10.0317Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M4.85708 9.98194L3.22705 10.2023L3.23379 10.2522L4.86382 10.0318L4.85708 9.98194Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M4.85037 9.93214L3.22034 10.1525L3.22707 10.2024L4.85711 9.98196L4.85037 9.93214Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M4.84353 9.88227L3.2135 10.1027L3.22024 10.1525L4.85027 9.9321L4.84353 9.88227Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M4.83706 9.83424L3.20703 10.0546L3.21377 10.1045L4.8438 9.88407L4.83706 9.83424Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M4.83035 9.78443L3.20032 10.0048L3.20705 10.0546L4.83709 9.83426L4.83035 9.78443Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M4.82364 9.73457L3.1936 9.95496L3.20034 10.0048L4.83037 9.78439L4.82364 9.73457Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M4.81692 9.68476L3.18689 9.90515L3.19363 9.95498L4.82366 9.73459L4.81692 9.68476Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M4.81033 9.63673L3.1803 9.85712L3.18703 9.90694L4.81707 9.68655L4.81033 9.63673Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M4.80362 9.58686L3.17358 9.80725L3.18032 9.85708L4.81035 9.63669L4.80362 9.58686Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M4.7969 9.53706L3.16687 9.75745L3.17361 9.80727L4.80364 9.58688L4.7969 9.53706Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                        <mask
                          id="mask4_1129_2718"
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="9"
                          width="3"
                          height="3"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M6.31469 10.1618C6.37556 10.612 6.06008 11.0261 5.60987 11.087C5.15965 11.1478 4.74553 10.8324 4.68466 10.3822C4.62379 9.93194 4.93926 9.51782 5.38948 9.45694C5.83969 9.39607 6.25382 9.71155 6.31469 10.1618Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask4_1129_2718)">
                          <path
                            d="M6.41836 10.9287L4.78833 11.1491L4.79507 11.1989L6.4251 10.9785L6.41836 10.9287Z"
                            fill="#39103E"
                          ></path>
                          <path
                            d="M6.41165 10.8789L4.78162 11.0993L4.78835 11.1491L6.41838 10.9287L6.41165 10.8789Z"
                            fill="#39103D"
                          ></path>
                          <path
                            d="M6.40493 10.8291L4.7749 11.0495L4.78164 11.0993L6.41167 10.8789L6.40493 10.8291Z"
                            fill="#380F3C"
                          ></path>
                          <path
                            d="M6.39822 10.7792L4.76819 10.9996L4.77493 11.0495L6.40496 10.8291L6.39822 10.7792Z"
                            fill="#380F3B"
                          ></path>
                          <path
                            d="M6.39163 10.7312L4.7616 10.9516L4.76833 11.0014L6.39837 10.781L6.39163 10.7312Z"
                            fill="#370E3A"
                          ></path>
                          <path
                            d="M6.38491 10.6814L4.75488 10.9018L4.76162 10.9516L6.39165 10.7312L6.38491 10.6814Z"
                            fill="#370E39"
                          ></path>
                          <path
                            d="M6.3782 10.6315L4.74817 10.8519L4.75491 10.9018L6.38494 10.6814L6.3782 10.6315Z"
                            fill="#370D38"
                          ></path>
                          <path
                            d="M6.37149 10.5817L4.74146 10.8021L4.74819 10.852L6.37822 10.6316L6.37149 10.5817Z"
                            fill="#360D37"
                          ></path>
                          <path
                            d="M6.36477 10.5319L4.73474 10.7523L4.74148 10.8021L6.37151 10.5818L6.36477 10.5319Z"
                            fill="#360C36"
                          ></path>
                          <path
                            d="M6.35818 10.4838L4.72815 10.7042L4.73489 10.754L6.36492 10.5337L6.35818 10.4838Z"
                            fill="#350C35"
                          ></path>
                          <path
                            d="M6.35147 10.434L4.72144 10.6544L4.72817 10.7042L6.3582 10.4839L6.35147 10.434Z"
                            fill="#350B34"
                          ></path>
                          <path
                            d="M6.34475 10.3842L4.71472 10.6046L4.72146 10.6544L6.35149 10.4341L6.34475 10.3842Z"
                            fill="#350B33"
                          ></path>
                          <path
                            d="M6.33804 10.3344L4.70801 10.5547L4.71474 10.6046L6.34478 10.3842L6.33804 10.3344Z"
                            fill="#340A32"
                          ></path>
                          <path
                            d="M6.33157 10.2863L4.70154 10.5067L4.70827 10.5565L6.33831 10.3362L6.33157 10.2863Z"
                            fill="#340A31"
                          ></path>
                          <path
                            d="M6.32473 10.2365L4.6947 10.4569L4.70144 10.5067L6.33147 10.2863L6.32473 10.2365Z"
                            fill="#330930"
                          ></path>
                          <path
                            d="M6.31802 10.1867L4.68799 10.407L4.69473 10.4569L6.32476 10.2365L6.31802 10.1867Z"
                            fill="#33092F"
                          ></path>
                          <path
                            d="M6.31131 10.1369L4.68127 10.3572L4.68801 10.4071L6.31804 10.1867L6.31131 10.1369Z"
                            fill="#33082E"
                          ></path>
                          <path
                            d="M6.30484 10.0888L4.6748 10.3092L4.68154 10.359L6.31157 10.1386L6.30484 10.0888Z"
                            fill="#32082C"
                          ></path>
                          <path
                            d="M6.29812 10.039L4.66809 10.2593L4.67483 10.3092L6.30486 10.0888L6.29812 10.039Z"
                            fill="#32072B"
                          ></path>
                          <path
                            d="M6.29141 9.98915L4.66138 10.2095L4.66811 10.2594L6.29815 10.039L6.29141 9.98915Z"
                            fill="#31072A"
                          ></path>
                          <path
                            d="M6.28457 9.93934L4.65454 10.1597L4.66128 10.2096L6.29131 9.98917L6.28457 9.93934Z"
                            fill="#310629"
                          ></path>
                          <path
                            d="M6.27786 9.88948L4.64783 10.1099L4.65456 10.1597L6.2846 9.9393L6.27786 9.88948Z"
                            fill="#300628"
                          ></path>
                          <path
                            d="M6.27139 9.84144L4.64136 10.0618L4.64809 10.1117L6.27813 9.89127L6.27139 9.84144Z"
                            fill="#300527"
                          ></path>
                          <path
                            d="M6.26468 9.79164L4.63464 10.012L4.64138 10.0618L6.27141 9.84146L6.26468 9.79164Z"
                            fill="#300526"
                          ></path>
                          <path
                            d="M6.25796 9.74183L4.62793 9.96222L4.63467 10.012L6.2647 9.79166L6.25796 9.74183Z"
                            fill="#2F0425"
                          ></path>
                          <path
                            d="M6.25113 9.69197L4.62109 9.91235L4.62783 9.96218L6.25786 9.74179L6.25113 9.69197Z"
                            fill="#2F0424"
                          ></path>
                          <path
                            d="M6.24466 9.64393L4.61462 9.86432L4.62136 9.91415L6.25139 9.69376L6.24466 9.64393Z"
                            fill="#2E0323"
                          ></path>
                          <path
                            d="M6.23794 9.59413L4.60791 9.81451L4.61465 9.86434L6.24468 9.64395L6.23794 9.59413Z"
                            fill="#2E0322"
                          ></path>
                          <path
                            d="M6.23123 9.54426L4.6012 9.76465L4.60793 9.81447L6.23796 9.59409L6.23123 9.54426Z"
                            fill="#2E0221"
                          ></path>
                          <path
                            d="M6.22451 9.49446L4.59448 9.71484L4.60122 9.76467L6.23125 9.54428L6.22451 9.49446Z"
                            fill="#2D0220"
                          ></path>
                          <path
                            d="M6.21792 9.44642L4.58789 9.66681L4.59463 9.71664L6.22466 9.49625L6.21792 9.44642Z"
                            fill="#2D011F"
                          ></path>
                          <path
                            d="M6.21121 9.39656L4.58118 9.61694L4.58791 9.66677L6.21795 9.44638L6.21121 9.39656Z"
                            fill="#2C011E"
                          ></path>
                          <path
                            d="M6.20449 9.34675L4.57446 9.56714L4.5812 9.61696L6.21123 9.39658L6.20449 9.34675Z"
                            fill="#2C001D"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1129_2718">
                          <rect
                            width="28.4421"
                            height="38.2664"
                            fill="white"
                            transform="translate(0 3.81085) rotate(-7.69997)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="20"
                      viewBox="0 0 39 20"
                      fill="none"
                      className="absolute top-0 right-[17.71%] z-10"
                    >
                      <g clipPath="url(#clip0_1129_2511)">
                        <mask
                          id="mask0_1129_2511"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="-23"
                          width="34"
                          height="41"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M24.5285 17.6244L3.95652 10.9232C3.32423 10.7175 2.97478 10.0422 3.16789 9.40327L12.4401 -21.2133C12.6396 -21.8722 13.3384 -22.2391 13.9905 -22.0272L35.8662 -14.9005C36.5183 -14.6885 36.8667 -13.9809 36.6379 -13.3304L26.0621 16.8608C25.8418 17.4904 25.1594 17.8295 24.5285 17.6244Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_1129_2511)">
                          <path
                            d="M3.32418 10.7175L25.6411 17.9864L25.0296 19.498L3.32418 10.7175Z"
                            fill="#B18ECE"
                          ></path>
                          <path
                            d="M1.89793 10.1405L25.6808 17.8884L25.6412 17.9864L3.32427 10.7175L1.89793 10.1405Z"
                            fill="#B18ECE"
                          ></path>
                          <path
                            d="M1.858 10.1244L1.88965 10.0249L25.721 17.7889L25.6808 17.8884L1.89791 10.1405L1.858 10.1244Z"
                            fill="#B28FCE"
                          ></path>
                          <path
                            d="M1.88962 10.0248L1.92335 9.92443L25.7612 17.6894L25.721 17.7889L1.88962 10.0248Z"
                            fill="#B290CF"
                          ></path>
                          <path
                            d="M1.92333 9.92443L1.95619 9.82196L25.8015 17.5899L25.7612 17.6894L1.92333 9.92443Z"
                            fill="#B391CF"
                          ></path>
                          <path
                            d="M1.95627 9.82201L1.99 9.72161L25.8412 17.4919L25.8016 17.59L1.95627 9.82201Z"
                            fill="#B392D0"
                          ></path>
                          <path
                            d="M1.98999 9.72161L2.02284 9.61913L25.8814 17.3925L25.8412 17.4919L1.98999 9.72161Z"
                            fill="#B493D0"
                          ></path>
                          <path
                            d="M2.02282 9.61913L2.05508 9.51814L25.9217 17.293L25.8814 17.3925L2.02282 9.61913Z"
                            fill="#B494D1"
                          ></path>
                          <path
                            d="M2.05505 9.51809L2.08938 9.41621L25.9619 17.1934L25.9216 17.2929L2.05505 9.51809Z"
                            fill="#B595D1"
                          ></path>
                          <path
                            d="M2.08936 9.41621L2.12162 9.31522L26.0021 17.0939L25.9618 17.1934L2.08936 9.41621Z"
                            fill="#B596D2"
                          ></path>
                          <path
                            d="M2.1217 9.31527L2.15603 9.21339L26.0418 16.996L26.0022 17.094L2.1217 9.31527Z"
                            fill="#B697D2"
                          ></path>
                          <path
                            d="M2.15601 9.21339L2.18827 9.1124L26.082 16.8965L26.0418 16.996L2.15601 9.21339Z"
                            fill="#B698D3"
                          ></path>
                          <path
                            d="M2.18825 9.1124L2.2211 9.00992L26.1223 16.797L26.082 16.8965L2.18825 9.1124Z"
                            fill="#B799D3"
                          ></path>
                          <path
                            d="M2.22107 9.00987L2.2548 8.90948L26.1625 16.6975L26.1222 16.797L2.22107 9.00987Z"
                            fill="#B79AD4"
                          ></path>
                          <path
                            d="M2.25479 8.90948L2.28704 8.80849L26.2027 16.598L26.1625 16.6975L2.25479 8.90948Z"
                            fill="#B89BD4"
                          ></path>
                          <path
                            d="M2.28712 8.80854L2.32145 8.70666L26.2424 16.5L26.2028 16.598L2.28712 8.80854Z"
                            fill="#B89CD5"
                          ></path>
                          <path
                            d="M2.32143 8.70666L2.35369 8.60567L26.2827 16.4006L26.2424 16.5L2.32143 8.70666Z"
                            fill="#B99DD5"
                          ></path>
                          <path
                            d="M2.35367 8.60566L2.38653 8.50319L26.3229 16.3011L26.2826 16.4006L2.35367 8.60566Z"
                            fill="#B99ED6"
                          ></path>
                          <path
                            d="M2.3865 8.50314L2.42023 8.40274L26.3631 16.2015L26.3229 16.301L2.3865 8.50314Z"
                            fill="#BA9FD6"
                          ></path>
                          <path
                            d="M2.42032 8.40278L2.45318 8.30031L26.4028 16.1036L26.3632 16.2016L2.42032 8.40278Z"
                            fill="#BAA0D7"
                          ></path>
                          <path
                            d="M2.45315 8.30032L2.48688 8.19992L26.4431 16.0041L26.4028 16.1036L2.45315 8.30032Z"
                            fill="#BBA1D7"
                          ></path>
                          <path
                            d="M2.48686 8.19992L2.51972 8.09745L26.4833 15.9046L26.443 16.0041L2.48686 8.19992Z"
                            fill="#BBA2D8"
                          ></path>
                          <path
                            d="M2.5197 8.09744L2.55195 7.99645L26.5235 15.8051L26.4833 15.9046L2.5197 8.09744Z"
                            fill="#BCA3D8"
                          ></path>
                          <path
                            d="M2.55192 7.9964L2.58625 7.89452L26.5637 15.7056L26.5235 15.8051L2.55192 7.9964Z"
                            fill="#BDA4D9"
                          ></path>
                          <path
                            d="M2.58635 7.89456L2.6186 7.79357L26.6035 15.6076L26.5638 15.7056L2.58635 7.89456Z"
                            fill="#BDA5D9"
                          ></path>
                          <path
                            d="M2.61857 7.79358L2.6529 7.6917L26.6437 15.5081L26.6034 15.6076L2.61857 7.79358Z"
                            fill="#BEA6DA"
                          ></path>
                          <path
                            d="M2.65289 7.6917L2.68514 7.59071L26.6839 15.4087L26.6437 15.5081L2.65289 7.6917Z"
                            fill="#BEA7DA"
                          ></path>
                          <path
                            d="M2.68512 7.59071L2.71798 7.48823L26.7241 15.3092L26.6839 15.4087L2.68512 7.59071Z"
                            fill="#BFA8DB"
                          ></path>
                          <path
                            d="M2.71794 7.48822L2.75167 7.38783L26.7637 15.2112L26.7241 15.3092L2.71794 7.48822Z"
                            fill="#BFA9DB"
                          ></path>
                          <path
                            d="M2.75177 7.38783L2.78403 7.28684L26.8041 15.1117L26.7638 15.2112L2.75177 7.38783Z"
                            fill="#C0AADC"
                          ></path>
                          <path
                            d="M2.78399 7.28685L2.81833 7.18497L26.8443 15.0122L26.8041 15.1117L2.78399 7.28685Z"
                            fill="#C0ABDC"
                          ></path>
                          <path
                            d="M2.81831 7.18497L2.85056 7.08398L26.8845 14.9127L26.8443 15.0122L2.81831 7.18497Z"
                            fill="#C1ACDD"
                          ></path>
                          <path
                            d="M2.85055 7.08398L2.8834 6.9815L26.9248 14.8132L26.8845 14.9127L2.85055 7.08398Z"
                            fill="#C1ADDD"
                          ></path>
                          <path
                            d="M2.88348 6.98149L2.91721 6.8811L26.9645 14.7152L26.9248 14.8132L2.88348 6.98149Z"
                            fill="#C2AFDE"
                          ></path>
                          <path
                            d="M2.9172 6.88109L2.95005 6.77862L27.0047 14.6157L26.9645 14.7152L2.9172 6.88109Z"
                            fill="#C2B0DE"
                          ></path>
                          <path
                            d="M2.95002 6.77863L2.98375 6.67823L27.0449 14.5162L27.0047 14.6157L2.95002 6.77863Z"
                            fill="#C3B1DF"
                          ></path>
                          <path
                            d="M2.98373 6.67823L3.01659 6.57576L27.0852 14.4167L27.0449 14.5162L2.98373 6.67823Z"
                            fill="#C3B2DF"
                          ></path>
                          <path
                            d="M3.01657 6.57575L3.04883 6.47476L27.1254 14.3173L27.0851 14.4167L3.01657 6.57575Z"
                            fill="#C4B3E0"
                          ></path>
                          <path
                            d="M3.04891 6.47475L3.08324 6.37288L27.1651 14.2192L27.1255 14.3173L3.04891 6.47475Z"
                            fill="#C4B4E0"
                          ></path>
                          <path
                            d="M3.08322 6.37287L3.11548 6.27188L27.2053 14.1198L27.1651 14.2192L3.08322 6.37287Z"
                            fill="#C5B5E1"
                          ></path>
                          <path
                            d="M3.11545 6.27189L3.14978 6.17001L27.2455 14.0203L27.2053 14.1198L3.11545 6.27189Z"
                            fill="#C5B6E1"
                          ></path>
                          <path
                            d="M3.14976 6.17001L3.18202 6.06902L27.2858 13.9208L27.2455 14.0203L3.14976 6.17001Z"
                            fill="#C6B7E2"
                          ></path>
                          <path
                            d="M3.18199 6.069L3.21484 5.96652L27.3254 13.8228L27.2857 13.9208L3.18199 6.069Z"
                            fill="#C6B8E2"
                          ></path>
                          <path
                            d="M3.21493 5.96653L3.24866 5.86614L27.3657 13.7233L27.3255 13.8228L3.21493 5.96653Z"
                            fill="#C7B9E3"
                          ></path>
                          <path
                            d="M3.24865 5.86614L3.2809 5.76515L27.406 13.6238L27.3657 13.7233L3.24865 5.86614Z"
                            fill="#C8BAE3"
                          ></path>
                          <path
                            d="M3.28087 5.76516L3.3152 5.66328L27.4462 13.5243L27.4059 13.6238L3.28087 5.76516Z"
                            fill="#C8BBE4"
                          ></path>
                          <path
                            d="M3.31518 5.66328L3.34744 5.56229L27.4864 13.4248L27.4461 13.5243L3.31518 5.66328Z"
                            fill="#C9BCE4"
                          ></path>
                          <path
                            d="M3.34741 5.56226L3.38027 5.45979L27.526 13.3268L27.4864 13.4248L3.34741 5.56226Z"
                            fill="#C9BDE5"
                          ></path>
                          <path
                            d="M3.38036 5.4598L3.41409 5.3594L27.5663 13.2273L27.5261 13.3268L3.38036 5.4598Z"
                            fill="#CABEE5"
                          ></path>
                          <path
                            d="M3.41407 5.3594L3.44693 5.25693L27.6066 13.1279L27.5663 13.2273L3.41407 5.3594Z"
                            fill="#CABFE6"
                          ></path>
                          <path
                            d="M3.44689 5.25694L3.48063 5.15655L27.6468 13.0284L27.6065 13.1279L3.44689 5.25694Z"
                            fill="#CBC0E6"
                          ></path>
                          <path
                            d="M3.48061 5.15654L3.51346 5.05407L27.687 12.9289L27.6468 13.0284L3.48061 5.15654Z"
                            fill="#CBC1E7"
                          ></path>
                          <path
                            d="M3.51344 5.05404L3.54569 4.95305L27.7266 12.8309L27.687 12.9289L3.51344 5.05404Z"
                            fill="#CCC2E7"
                          ></path>
                          <path
                            d="M3.54578 4.95307L3.58011 4.85119L27.767 12.7314L27.7267 12.8309L3.54578 4.95307Z"
                            fill="#CCC3E8"
                          ></path>
                          <path
                            d="M3.5801 4.85119L3.61235 4.75019L27.8072 12.6319L27.767 12.7314L3.5801 4.85119Z"
                            fill="#CDC4E8"
                          ></path>
                          <path
                            d="M3.61233 4.75019L3.64519 4.64771L27.8474 12.5324L27.8072 12.6319L3.61233 4.75019Z"
                            fill="#CDC5E9"
                          ></path>
                          <path
                            d="M3.64515 4.64771L3.67888 4.54731L27.887 12.4344L27.8474 12.5324L3.64515 4.64771Z"
                            fill="#CEC6E9"
                          ></path>
                          <path
                            d="M3.67898 4.54731L3.71184 4.44483L27.9274 12.3349L27.8871 12.4344L3.67898 4.54731Z"
                            fill="#CEC7EA"
                          ></path>
                          <path
                            d="M3.71181 4.44484L3.74554 4.34445L27.9676 12.2354L27.9273 12.3349L3.71181 4.44484Z"
                            fill="#CFC8EA"
                          ></path>
                          <path
                            d="M3.74552 4.34445L3.77778 4.24346L28.0078 12.136L27.9676 12.2354L3.74552 4.34445Z"
                            fill="#CFC9EB"
                          ></path>
                          <path
                            d="M3.77776 4.24346L3.81061 4.14098L28.048 12.0365L28.0078 12.1359L3.77776 4.24346Z"
                            fill="#D0CAEB"
                          ></path>
                          <path
                            d="M3.81057 4.14097L3.8443 4.04058L28.0876 11.9385L28.048 12.0365L3.81057 4.14097Z"
                            fill="#D0CBEC"
                          ></path>
                          <path
                            d="M3.84441 4.04058L3.87726 3.9381L28.128 11.839L28.0878 11.9384L3.84441 4.04058Z"
                            fill="#D1CCEC"
                          ></path>
                          <path
                            d="M3.87723 3.93811L3.91096 3.83772L28.1682 11.7395L28.128 11.839L3.87723 3.93811Z"
                            fill="#D1CDED"
                          ></path>
                          <path
                            d="M3.91095 3.83771L3.9438 3.73524L28.2084 11.64L28.1682 11.7395L3.91095 3.83771Z"
                            fill="#D2CEED"
                          ></path>
                          <path
                            d="M3.94374 3.73522L4.1191 3.19968L28.4198 11.1173L28.2084 11.64L3.94374 3.73522Z"
                            fill="#D2CEED"
                          ></path>
                          <path
                            d="M4.11919 3.19966L4.29307 2.66352L28.6319 10.5931L28.4199 11.1173L4.11919 3.19966Z"
                            fill="#D3CFED"
                          ></path>
                          <path
                            d="M4.29302 2.66352L4.46839 2.12798L28.8439 10.069L28.6319 10.5931L4.29302 2.66352Z"
                            fill="#D4D0EE"
                          ></path>
                          <path
                            d="M4.46844 2.12802L4.64321 1.59396L29.0554 9.54632L28.844 10.069L4.46844 2.12802Z"
                            fill="#D5D1EE"
                          ></path>
                          <path
                            d="M4.64316 1.59396L4.81852 1.05842L29.2674 9.02216L29.0554 9.54632L4.64316 1.59396Z"
                            fill="#D6D2EF"
                          ></path>
                          <path
                            d="M4.81859 1.05839L4.99248 0.522243L29.4789 8.49945L29.2675 9.02213L4.81859 1.05839Z"
                            fill="#D7D3EF"
                          ></path>
                          <path
                            d="M4.99243 0.522244L5.16779 -0.0132994L29.6909 7.97529L29.4789 8.49945L4.99243 0.522244Z"
                            fill="#D8D4EF"
                          ></path>
                          <path
                            d="M5.16774 -0.0132986L5.34311 -0.548842L29.9029 7.45112L29.6909 7.97529L5.16774 -0.0132986Z"
                            fill="#D9D5F0"
                          ></path>
                          <path
                            d="M5.34318 -0.548814L5.51707 -1.08496L30.1144 6.92847L29.903 7.45115L5.34318 -0.548814Z"
                            fill="#DAD6F0"
                          ></path>
                          <path
                            d="M5.51701 -1.08496L5.69238 -1.6205L30.3264 6.40431L30.1144 6.92847L5.51701 -1.08496Z"
                            fill="#DAD7F0"
                          ></path>
                          <path
                            d="M5.69244 -1.62052L5.8678 -2.15607L30.5379 5.88161L30.3265 6.40429L5.69244 -1.62052Z"
                            fill="#DBD8F1"
                          ></path>
                          <path
                            d="M5.86776 -2.15608L6.04165 -2.69222L30.7499 5.35744L30.5379 5.8816L5.86776 -2.15608Z"
                            fill="#DCD9F1"
                          ></path>
                          <path
                            d="M6.04172 -2.69222L6.21708 -3.22776L30.962 4.83328L30.75 5.35744L6.04172 -2.69222Z"
                            fill="#DDDAF2"
                          ></path>
                          <path
                            d="M6.21702 -3.22772L6.39239 -3.76326L31.1734 4.31064L30.9619 4.83332L6.21702 -3.22772Z"
                            fill="#DEDBF2"
                          ></path>
                          <path
                            d="M6.39235 -3.76328L6.56624 -4.29942L31.3854 3.78646L31.1733 4.31063L6.39235 -3.76328Z"
                            fill="#DFDCF2"
                          ></path>
                          <path
                            d="M6.56628 -4.29946L6.74105 -4.83352L31.5741 3.25626L31.4701 3.57705L31.3854 3.78642L6.56628 -4.29946Z"
                            fill="#E0DDF3"
                          ></path>
                          <path
                            d="M31.7473 2.71986L6.91492 -5.37103L6.73991 -4.83507L31.5723 3.25583L31.7473 2.71986Z"
                            fill="#E1DEF3"
                          ></path>
                          <path
                            d="M31.9221 2.18495L7.08972 -5.90594L6.91472 -5.36998L31.7471 2.72092L31.9221 2.18495Z"
                            fill="#E2DFF3"
                          ></path>
                          <path
                            d="M32.099 1.64918L7.2666 -6.44171L7.0916 -5.90575L31.924 2.18515L32.099 1.64918Z"
                            fill="#E3E0F4"
                          ></path>
                          <path
                            d="M32.2737 1.11427L7.44128 -6.97662L7.26628 -6.44066L32.0987 1.65024L32.2737 1.11427Z"
                            fill="#E4E1F4"
                          ></path>
                          <path
                            d="M32.4472 0.57887L7.61475 -7.51202L7.43974 -6.97606L32.2722 1.11484L32.4472 0.57887Z"
                            fill="#E5E2F5"
                          ></path>
                          <path
                            d="M32.622 0.0439593L7.78955 -8.04694L7.61455 -7.51097L32.447 0.579926L32.622 0.0439593Z"
                            fill="#E6E3F5"
                          ></path>
                          <path
                            d="M32.7974 -0.492479L7.96497 -8.58337L7.78996 -8.04741L32.6224 0.0434883L32.7974 -0.492479Z"
                            fill="#E7E4F5"
                          ></path>
                        </g>
                        <path
                          d="M23.0446 13.1762L24.1131 13.5237L24.5001 13.0306L24.7491 13.1123L23.1327 15.1608L22.8668 15.074L22.7736 12.4687L23.0211 12.5498L23.0426 13.177L23.0446 13.1762ZM23.0984 14.8204L23.9783 13.6955L23.0514 13.3932L23.099 14.8189L23.0984 14.8204Z"
                          fill="#C0001B"
                        ></path>
                        <mask
                          id="mask1_1129_2511"
                          maskUnits="userSpaceOnUse"
                          x="15"
                          y="-8"
                          width="9"
                          height="12"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M17.8104 3.67035L15.6466 -3.37868L21.5533 -7.7971L23.7177 -0.74955L17.8104 3.67035Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask1_1129_2511)">
                          <path
                            d="M15.0249 -1.84186L17.8104 3.67032L13.5004 1.92678L15.0249 -1.84186Z"
                            fill="#B50122"
                          ></path>
                          <path
                            d="M15.1427 -2.13287L18.143 3.80488L17.8105 3.67034L15.025 -1.84184L15.1427 -2.13287Z"
                            fill="#B50122"
                          ></path>
                          <path
                            d="M15.2604 -2.42389L18.3756 3.74004L18.2021 3.82882L18.143 3.8049L15.1426 -2.13285L15.2604 -2.42389Z"
                            fill="#B60222"
                          ></path>
                          <path
                            d="M15.3782 -2.71497L18.5863 3.63169L18.3757 3.74L15.2604 -2.42393L15.3782 -2.71497Z"
                            fill="#B70322"
                          ></path>
                          <path
                            d="M15.4958 -3.00598L18.7963 3.52489L18.5863 3.63171L15.3781 -2.71494L15.4958 -3.00598Z"
                            fill="#B80422"
                          ></path>
                          <path
                            d="M15.6141 -3.29852L19.0069 3.41656L18.7963 3.52487L15.4958 -3.006L15.6141 -3.29852Z"
                            fill="#B90521"
                          ></path>
                          <path
                            d="M15.7319 -3.58954L19.2185 3.31036L19.007 3.41658L15.6142 -3.2985L15.7319 -3.58954Z"
                            fill="#BA0621"
                          ></path>
                          <path
                            d="M15.8496 -3.88055L19.4291 3.20207L19.2185 3.31038L15.7319 -3.58952L15.8496 -3.88055Z"
                            fill="#BB0721"
                          ></path>
                          <path
                            d="M15.9674 -4.17163L19.6392 3.09521L19.4292 3.20203L15.8497 -3.88059L15.9674 -4.17163Z"
                            fill="#BC0821"
                          ></path>
                          <path
                            d="M16.0851 -4.46265L19.8498 2.98692L19.6392 3.09523L15.9673 -4.17161L16.0851 -4.46265Z"
                            fill="#BD0921"
                          ></path>
                          <path
                            d="M16.2029 -4.75366L20.0605 2.87863L19.8499 2.98694L16.0851 -4.46262L16.2029 -4.75366Z"
                            fill="#BE0A21"
                          ></path>
                          <path
                            d="M16.3206 -5.04474L20.2705 2.77177L20.0605 2.87859L16.2028 -4.7537L16.3206 -5.04474Z"
                            fill="#BF0B21"
                          ></path>
                          <path
                            d="M16.4384 -5.33575L20.4812 2.66348L20.2706 2.77179L16.3206 -5.04472L16.4384 -5.33575Z"
                            fill="#C00C20"
                          ></path>
                          <path
                            d="M16.5435 -5.59565L16.5669 -5.60689L20.6912 2.55663L20.4812 2.66345L16.4383 -5.33579L16.5435 -5.59565Z"
                            fill="#C10D20"
                          ></path>
                          <path
                            d="M16.7785 -5.71707L16.5679 -5.60938L20.6938 2.55339L20.9045 2.4457L16.7785 -5.71707Z"
                            fill="#C20E20"
                          ></path>
                          <path
                            d="M16.9892 -5.82479L16.7786 -5.7171L20.9045 2.44567L21.1151 2.33798L16.9892 -5.82479Z"
                            fill="#C30F20"
                          ></path>
                          <path
                            d="M17.1986 -5.93313L16.9879 -5.82544L21.1138 2.33733L21.3245 2.22964L17.1986 -5.93313Z"
                            fill="#C41020"
                          ></path>
                          <path
                            d="M17.41 -6.03945L17.1993 -5.93176L21.3253 2.23101L21.5359 2.12332L17.41 -6.03945Z"
                            fill="#C51120"
                          ></path>
                          <path
                            d="M17.6192 -6.14779L17.4086 -6.0401L21.5345 2.12267L21.7451 2.01498L17.6192 -6.14779Z"
                            fill="#C61220"
                          ></path>
                          <path
                            d="M17.8307 -6.25411L17.62 -6.14642L21.7459 2.01635L21.9566 1.90866L17.8307 -6.25411Z"
                            fill="#C7141F"
                          ></path>
                          <path
                            d="M18.04 -6.36245L17.8293 -6.25476L21.9553 1.90801L22.1659 1.80032L18.04 -6.36245Z"
                            fill="#C8151F"
                          ></path>
                          <path
                            d="M18.2514 -6.46877L18.0408 -6.36108L22.1667 1.80169L22.3773 1.694L18.2514 -6.46877Z"
                            fill="#C9161F"
                          ></path>
                          <path
                            d="M18.4621 -6.57784L18.2515 -6.47015L22.3774 1.69262L22.588 1.58492L18.4621 -6.57784Z"
                            fill="#CA171F"
                          ></path>
                          <path
                            d="M18.6728 -6.68563L18.4622 -6.57794L22.5881 1.58483L22.7987 1.47714L18.6728 -6.68563Z"
                            fill="#CB181F"
                          ></path>
                          <path
                            d="M18.6725 -6.68342L18.8831 -6.79173L22.9254 1.20899L22.8203 1.46885L22.7983 1.48068L18.6725 -6.68342Z"
                            fill="#CC191F"
                          ></path>
                          <path
                            d="M18.8832 -6.79172L19.0932 -6.89854L23.0432 0.917967L22.9254 1.209L18.8832 -6.79172Z"
                            fill="#CD1A1F"
                          ></path>
                          <path
                            d="M19.0931 -6.89851L19.3038 -7.00682L23.1608 0.626961L23.0431 0.917998L19.0931 -6.89851Z"
                            fill="#CE1B1E"
                          ></path>
                          <path
                            d="M19.3038 -7.00687L19.5139 -7.11369L23.2792 0.33439L23.1608 0.626912L19.3038 -7.00687Z"
                            fill="#CF1C1E"
                          ></path>
                          <path
                            d="M19.5139 -7.11366L19.7245 -7.22197L23.397 0.0433847L23.2792 0.334422L19.5139 -7.11366Z"
                            fill="#D01D1E"
                          ></path>
                          <path
                            d="M19.7245 -7.222L19.9366 -7.32971L23.5146 -0.247683L23.3969 0.043355L19.7245 -7.222Z"
                            fill="#D11E1E"
                          ></path>
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.8086 12.3846L23.2913 10.6997L24.7041 9.64358L25.2213 11.3284L23.8086 12.3846Z"
                          fill="#C0001B"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1129_2511">
                          <rect
                            width="27"
                            height="36"
                            fill="white"
                            transform="translate(13.5004 -24) rotate(22.0248)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="12"
                      viewBox="0 0 38 12"
                      fill="none"
                      className="absolute top-[1.87px] right-[27.30%] z-10"
                    >
                      <path
                        d="M19.2733 10.1305C22.1468 9.70216 24.0562 7.71099 23.5382 5.68313C23.0202 3.65527 20.2709 2.35862 17.3974 2.78699C14.524 3.21536 12.6145 5.20653 13.1325 7.23439C13.6505 9.26226 16.3999 10.5589 19.2733 10.1305Z"
                        fill="url(#paint0_linear_1129_3371)"
                      ></path>
                      <path
                        d="M13.3785 7.02457L14.3306 6.82099L14.8451 6.25617L14.766 4.47179L13.8139 4.67239C13.3552 5.4207 13.2156 6.24379 13.3785 7.02457Z"
                        fill="url(#paint1_linear_1129_3371)"
                      ></path>
                      <path
                        d="M14.4724 8.5537C14.7528 8.89089 15.102 9.1973 15.5222 9.46022C15.9424 9.72313 16.4005 9.92151 16.8794 10.0609L17.8743 9.85103L17.8033 9.44932L15.745 8.28374L15.4673 8.34386L14.4724 8.5537Z"
                        fill="url(#paint2_linear_1129_3371)"
                      ></path>
                      <path
                        d="M20.7292 10.0511C20.6164 10.0559 20.5293 10.0381 20.4444 10.0051C20.4343 10.0031 20.4255 10.0002 20.4166 9.99728L19.957 10.1995L19.004 10.4003C19.2622 10.3861 19.5213 10.3546 19.7751 10.3087L19.7664 10.3118L19.8101 10.3024C19.8601 10.2932 19.9087 10.2818 19.9575 10.2719L20.9343 10.0681L20.6931 10.0643C20.7056 10.0601 20.7168 10.0553 20.7292 10.0511Z"
                        fill="url(#paint3_linear_1129_3371)"
                      ></path>
                      <path
                        d="M15.8507 3.16744L14.918 3.36435C14.918 3.36435 15.6568 2.86948 16.5282 2.67697L17.5561 2.4563L15.8495 3.16683L15.8507 3.16744Z"
                        fill="url(#paint4_linear_1129_3371)"
                      ></path>
                      <path
                        d="M20.223 9.96909C23.0965 9.54072 25.0059 7.54955 24.4879 5.52169C23.9699 3.49382 21.2206 2.19718 18.3471 2.62555C15.4737 3.05392 13.5642 5.04509 14.0822 7.07295C14.6002 9.10082 17.3496 10.3975 20.223 9.96909Z"
                        fill="url(#paint5_linear_1129_3371)"
                      ></path>
                      <path
                        d="M17.2797 8.29505C15.9268 7.45006 15.7252 5.86651 16.8309 4.76581C17.9354 3.66447 19.9365 3.45618 21.2906 4.3003C22.6435 5.1453 22.8451 6.72885 21.7393 7.82955C20.6349 8.93089 18.6338 9.13918 17.2797 8.29505Z"
                        fill="url(#paint6_radial_1129_3371)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <path
                        d="M19.7714 8.20134C21.2613 7.97923 22.2513 6.9467 21.9827 5.8951C21.714 4.84351 20.2885 4.17108 18.7986 4.39319C17.3087 4.6153 16.3187 5.64783 16.5873 6.69943C16.856 7.75102 18.2815 8.42345 19.7714 8.20134Z"
                        fill="url(#paint7_linear_1129_3371)"
                      ></path>
                      <path
                        d="M20.5186 3.75643L21.9154 4.6304C22.1903 4.80267 22.5942 4.76023 22.8194 4.53634L23.1553 4.20184C22.8766 3.86708 22.5297 3.56289 22.1121 3.30188C21.6945 3.04087 21.2394 2.84393 20.7622 2.70647L20.4263 3.04097C20.2011 3.26486 20.2425 3.58506 20.5174 3.75733L20.5186 3.75643Z"
                        fill="url(#paint8_linear_1129_3371)"
                      ></path>
                      <path
                        d="M18.0497 8.83908L16.6529 7.96511C16.3781 7.79284 15.9741 7.83528 15.7489 8.05917L15.413 8.39367C15.6917 8.72843 16.0387 9.03262 16.4563 9.29363C16.8738 9.55464 17.329 9.75158 17.8061 9.88903L18.142 9.55454C18.3672 9.33064 18.3259 9.01045 18.051 8.83818L18.0497 8.83908Z"
                        fill="url(#paint9_linear_1129_3371)"
                      ></path>
                      <path
                        d="M21.7147 8.71868L20.0819 9.2287C19.7611 9.32941 19.595 9.61515 19.7113 9.86649L19.8844 10.2429C20.8816 10.1887 21.8643 9.89207 22.6787 9.36997L22.5055 8.99359C22.388 8.74162 22.0343 8.61883 21.7147 8.71868Z"
                        fill="url(#paint10_linear_1129_3371)"
                      ></path>
                      <path
                        d="M16.8549 3.87739L18.4864 3.36674C18.8072 3.26603 18.9733 2.98028 18.857 2.72895L18.6839 2.35257C17.6867 2.40677 16.704 2.70337 15.8896 3.22547L16.0628 3.60185C16.1803 3.85381 16.534 3.97661 16.8536 3.87676L16.8549 3.87739Z"
                        fill="url(#paint11_linear_1129_3371)"
                      ></path>
                      <path
                        d="M15.554 6.47784L15.8116 5.09603C15.862 4.82444 15.6274 4.57853 15.2868 4.54715L14.7778 4.49953C14.317 5.25218 14.175 6.08037 14.339 6.86508L14.8468 6.91207C15.1873 6.94345 15.5036 6.74944 15.554 6.47784Z"
                        fill="url(#paint12_linear_1129_3371)"
                      ></path>
                      <path
                        d="M24.2318 5.73029L23.7241 5.6833C23.3835 5.65192 23.0672 5.84593 23.0168 6.11752L22.7592 7.49934C22.7089 7.77093 22.9434 8.01684 23.284 8.04822L23.793 8.09584C24.2539 7.34319 24.3958 6.515 24.2318 5.73029Z"
                        fill="url(#paint13_linear_1129_3371)"
                      ></path>
                      <path
                        d="M17.7711 7.80378C16.7498 7.16671 16.5993 5.972 17.4333 5.14131C18.2672 4.31062 19.7753 4.15315 20.7967 4.79022C21.8181 5.42728 21.9685 6.622 21.1346 7.45268C20.3006 8.28337 18.7925 8.44084 17.7711 7.80378Z"
                        fill="url(#paint14_radial_1129_3371)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <path
                        d="M21.0224 7.38255C20.2368 8.16403 18.8237 8.31168 17.8643 7.71255C16.9048 7.11341 16.7625 5.99425 17.5468 5.21213C18.3323 4.43065 19.7454 4.283 20.7049 4.88214C21.6644 5.48127 21.8066 6.60043 21.0224 7.38255Z"
                        fill="url(#paint15_linear_1129_3371)"
                      ></path>
                      <path
                        d="M19.3274 8.0762L19.3588 8.32606C19.5511 8.33118 19.743 8.31817 19.9332 8.28942L19.9019 8.04258C19.713 8.07348 19.5185 8.08522 19.3261 8.07707L19.3274 8.0762Z"
                        fill="url(#paint16_linear_1129_3371)"
                      ></path>
                      <path
                        d="M17.8239 7.48752L17.6205 7.68934C17.6877 7.74219 17.76 7.79301 17.8361 7.84115C17.9123 7.8893 17.9922 7.9317 18.0733 7.97168L18.2767 7.76986C18.1956 7.73142 18.1157 7.68902 18.0396 7.64087C17.9635 7.59273 17.8924 7.54102 17.8265 7.48728L17.8239 7.48752Z"
                        fill="url(#paint17_linear_1129_3371)"
                      ></path>
                      <path
                        d="M17.0616 6.30084L16.7491 6.33368C16.7552 6.48609 16.7856 6.63696 16.8349 6.78374L17.1499 6.75066C17.0968 6.605 17.0665 6.45413 17.0603 6.30171L17.0616 6.30084Z"
                        fill="url(#paint18_linear_1129_3371)"
                      ></path>
                      <path
                        d="M20.8685 7.72118L21.1092 7.87206C21.2234 7.79206 21.3324 7.70215 21.4311 7.60429C21.4543 7.58202 21.475 7.5585 21.4969 7.5356L21.2587 7.38745C21.238 7.41097 21.2161 7.43387 21.1929 7.45615C21.0929 7.55486 20.9839 7.64328 20.866 7.72142L20.8685 7.72118Z"
                        fill="url(#paint19_linear_1129_3371)"
                      ></path>
                      <path
                        d="M20.7467 5.10781L20.9501 4.906C20.8829 4.85315 20.8106 4.80233 20.7344 4.75418C20.6583 4.70603 20.5784 4.66363 20.4973 4.62366L20.2939 4.82547C20.375 4.86391 20.4548 4.90631 20.531 4.95446C20.6071 5.00261 20.6782 5.05432 20.7441 5.10806L20.7467 5.10781Z"
                        fill="url(#paint20_linear_1129_3371)"
                      ></path>
                      <path
                        d="M17.4686 5.06664L17.2288 4.91754C17.2041 4.93933 17.182 4.96089 17.1587 4.98331C17.0592 5.08179 16.9738 5.18716 16.9009 5.29432L17.1434 5.44617C17.2137 5.33775 17.2966 5.23262 17.3973 5.13327C17.4207 5.11085 17.444 5.08844 17.4674 5.06751L17.4686 5.06664Z"
                        fill="url(#paint21_linear_1129_3371)"
                      ></path>
                      <path
                        d="M21.5254 6.49645L21.8392 6.4635C21.8508 6.31151 21.8408 6.15932 21.8093 6.00994L21.4981 6.04265C21.5308 6.19116 21.5395 6.34422 21.5229 6.49669L21.5254 6.49645Z"
                        fill="url(#paint22_linear_1129_3371)"
                      ></path>
                      <path
                        d="M18.9872 4.50862L18.9561 4.26327C18.7653 4.2732 18.5749 4.30115 18.39 4.34513L18.4212 4.59348C18.6048 4.54587 18.7952 4.51792 18.986 4.5095L18.9872 4.50862Z"
                        fill="url(#paint23_linear_1129_3371)"
                      ></path>
                      <path
                        d="M19.7714 8.20134C21.2613 7.97923 22.2513 6.9467 21.9827 5.8951C21.714 4.84351 20.2885 4.17108 18.7986 4.39319C17.3087 4.6153 16.3187 5.64783 16.5873 6.69943C16.856 7.75102 18.2815 8.42345 19.7714 8.20134Z"
                        fill="url(#paint24_radial_1129_3371)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <path
                        opacity="0.7"
                        d="M19.5384 10.1626C19.5384 10.1626 19.477 10.1654 19.3619 10.1702C19.2456 10.1744 19.0779 10.1758 18.8652 10.167C18.6537 10.1573 18.3997 10.1342 18.1207 10.0868C17.843 10.04 17.5391 9.96826 17.2369 9.8644C16.9334 9.76142 16.6266 9.6283 16.3382 9.46374C16.3018 9.44282 16.2668 9.42254 16.2316 9.40074C16.2134 9.39028 16.1966 9.38046 16.177 9.36784L16.1262 9.33382C16.0585 9.28846 15.992 9.24222 15.923 9.1947C15.8878 9.17138 15.8552 9.14782 15.8201 9.1245C15.7849 9.10118 15.7573 9.07257 15.7246 9.04749C15.6631 8.99469 15.6016 8.94189 15.5375 8.88781C15.5074 8.86096 15.4721 8.8346 15.4445 8.806C15.4169 8.7774 15.3893 8.74879 15.3629 8.71931C15.3077 8.6621 15.2524 8.60338 15.1972 8.54465C15.1406 8.48681 15.0993 8.42143 15.0503 8.35982C15.0027 8.29733 14.9524 8.23509 14.9072 8.17084C14.8684 8.10522 14.8283 8.03897 14.7882 7.97271C14.7481 7.90646 14.7042 7.84133 14.6768 7.77082C14.6182 7.63246 14.5418 7.49731 14.5048 7.35309L14.4379 7.14013C14.4182 7.0689 14.4086 6.99518 14.394 6.92347C14.3832 6.85064 14.3634 6.77941 14.3577 6.70609C14.3533 6.63341 14.3476 6.56009 14.3431 6.4874L14.3365 6.37915C14.3343 6.34357 14.3398 6.30574 14.3401 6.26991C14.3447 6.19715 14.3479 6.12526 14.3525 6.05249C14.3532 5.98085 14.3705 5.90839 14.3815 5.83729C14.3951 5.76596 14.4073 5.6955 14.4196 5.62504C14.457 5.48444 14.4995 5.34639 14.5434 5.21202C14.6053 5.07748 14.6557 4.9463 14.7216 4.81975C14.7583 4.75687 14.7939 4.69487 14.8307 4.63351C14.8478 4.60295 14.8663 4.57303 14.8834 4.54247C14.9006 4.51191 14.919 4.48199 14.9413 4.45399C15.0292 4.33829 15.107 4.22508 15.1939 4.11938C15.2885 4.016 15.3807 3.91589 15.4679 3.82234C15.5602 3.72983 15.6579 3.64443 15.7519 3.56623C15.9412 3.40895 16.1248 3.28038 16.2847 3.17918C16.446 3.07862 16.5798 3.00502 16.6759 2.95633C16.7693 2.90787 16.8225 2.88304 16.8225 2.88304C16.8225 2.88304 16.7706 2.90851 16.6797 2.95824C16.5876 3.00734 16.4551 3.08309 16.2977 3.18557C16.1416 3.28869 15.9632 3.41829 15.7803 3.57724C15.6889 3.65672 15.5977 3.74228 15.5079 3.83454C15.4245 3.92849 15.3349 4.02835 15.2428 4.1315C15.1585 4.23695 15.0846 4.34904 15.0004 4.46361C14.9781 4.49162 14.961 4.52218 14.9451 4.55186C14.9292 4.58154 14.9121 4.61209 14.8949 4.64265C14.8607 4.70377 14.8264 4.76489 14.7922 4.82753C14.7301 4.95296 14.6822 5.08389 14.6242 5.21732C14.5854 5.3512 14.5403 5.48797 14.5054 5.62681C14.4944 5.69639 14.4808 5.76621 14.4698 5.8373C14.4589 5.90839 14.4415 5.97933 14.442 6.0501C14.4374 6.12135 14.4354 6.19235 14.4321 6.26424C14.4318 6.30006 14.4263 6.33637 14.4285 6.37195L14.4364 6.47933C14.4421 6.55113 14.4477 6.62293 14.4522 6.69561C14.4578 6.76741 14.4776 6.83864 14.4897 6.9106C14.5043 6.98231 14.5138 7.05451 14.5348 7.12486L14.6029 7.33542C14.6386 7.47748 14.7137 7.61199 14.7697 7.74908C14.7971 7.81806 14.8397 7.88256 14.8772 7.94905C14.9161 8.01467 14.9549 8.08028 14.9937 8.1459C15.0375 8.20951 15.0865 8.27112 15.1329 8.33297C15.1818 8.39458 15.2218 8.4578 15.2771 8.51652C15.3311 8.57461 15.3863 8.63182 15.4403 8.6899C15.4679 8.71851 15.4942 8.74647 15.5205 8.77595C15.5482 8.80456 15.5808 8.82964 15.6109 8.85648C15.7365 8.96032 15.8455 9.06954 15.9861 9.1613C16.0526 9.20906 16.1204 9.25594 16.1856 9.30155L16.2351 9.33645L16.2871 9.36807C16.3222 9.38987 16.3573 9.41015 16.3911 9.43131C16.6719 9.5966 16.971 9.73045 17.2681 9.83631C17.5665 9.94129 17.8603 10.017 18.1343 10.068C18.4082 10.1189 18.6586 10.1462 18.8675 10.1592C19.0778 10.1712 19.2468 10.172 19.3606 10.1695C19.4758 10.1662 19.5384 10.1641 19.5384 10.1641L19.5384 10.1626Z"
                        fill="url(#paint25_radial_1129_3371)"
                        style={{ mixBlendMode: "lighten" }}
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1129_3371"
                          x1="22.4987"
                          y1="-1.0436"
                          x2="21.0986"
                          y2="15.0918"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0C7C4E"></stop>
                          <stop offset="0.76" stopColor="#1B5336"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1129_3371"
                          x1="22.3567"
                          y1="3.89707"
                          x2="12.8016"
                          y2="7.68682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1129_3371"
                          x1="20.1557"
                          y1="6.73535"
                          x2="17.6323"
                          y2="11.0637"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1129_3371"
                          x1="23.6628"
                          y1="6.98697"
                          x2="22.9549"
                          y2="8.94219"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1129_3371"
                          x1="22.4068"
                          y1="2.61787"
                          x2="16.0696"
                          y2="1.92017"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1129_3371"
                          x1="21.2995"
                          y1="7.66028"
                          x2="25.4483"
                          y2="16.7867"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0C7C4E"></stop>
                          <stop offset="0.76" stopColor="#1B5336"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint6_radial_1129_3371"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(19.3836 6.28194) rotate(77.4399) scale(2.66029 3.37021)"
                        >
                          <stop offset="0.82" stopColor="white"></stop>
                          <stop offset="0.84" stopColor="#F6F8F7"></stop>
                          <stop offset="0.86" stopColor="#DFE7E3"></stop>
                          <stop offset="0.9" stopColor="#B9CAC1"></stop>
                          <stop offset="0.93" stopColor="#84A293"></stop>
                          <stop offset="0.98" stopColor="#427058"></stop>
                          <stop offset="1" stopColor="#1B5336"></stop>
                        </radialGradient>
                        <linearGradient
                          id="paint7_linear_1129_3371"
                          x1="31.9787"
                          y1="1.46862"
                          x2="18.7184"
                          y2="16.8687"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0C7C4E"></stop>
                          <stop offset="0.76" stopColor="#1B5336"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_1129_3371"
                          x1="23.3888"
                          y1="2.38189"
                          x2="21.8029"
                          y2="6.07899"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_1129_3371"
                          x1="17.6914"
                          y1="8.1039"
                          x2="16.4772"
                          y2="11.8436"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_1129_3371"
                          x1="20.8761"
                          y1="8.8826"
                          x2="21.5953"
                          y2="11.9347"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_1129_3371"
                          x1="16.3589"
                          y1="2.75598"
                          x2="17.7791"
                          y2="4.18084"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint12_linear_1129_3371"
                          x1="15.4892"
                          y1="4.2817"
                          x2="15.3236"
                          y2="10.2624"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint13_linear_1129_3371"
                          x1="22.5025"
                          y1="6.51655"
                          x2="23.934"
                          y2="7.95338"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint14_radial_1129_3371"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(19.3834 6.28) rotate(77.4399) scale(2.00638 2.5418)"
                        >
                          <stop offset="0.49" stopColor="#1B5336"></stop>
                          <stop offset="0.62" stopColor="#1D5437"></stop>
                          <stop offset="0.68" stopColor="#245A3E"></stop>
                          <stop offset="0.73" stopColor="#31644A"></stop>
                          <stop offset="0.77" stopColor="#44725A"></stop>
                          <stop offset="0.81" stopColor="#5C846F"></stop>
                          <stop offset="0.84" stopColor="#799A89"></stop>
                          <stop offset="0.87" stopColor="#9DB5A8"></stop>
                          <stop offset="0.9" stopColor="#C6D4CC"></stop>
                          <stop offset="0.93" stopColor="#F2F5F4"></stop>
                          <stop offset="0.94" stopColor="white"></stop>
                        </radialGradient>
                        <linearGradient
                          id="paint15_linear_1129_3371"
                          x1="21.6399"
                          y1="5.20067"
                          x2="16.7043"
                          y2="10.9968"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0C7C4E"></stop>
                          <stop offset="0.76" stopColor="#1B5336"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint16_linear_1129_3371"
                          x1="19.3147"
                          y1="8.08852"
                          x2="19.7228"
                          y2="8.49819"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint17_linear_1129_3371"
                          x1="17.6651"
                          y1="7.64436"
                          x2="18.0313"
                          y2="8.01179"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint18_linear_1129_3371"
                          x1="16.6358"
                          y1="6.44659"
                          x2="17.0441"
                          y2="6.85648"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint19_linear_1129_3371"
                          x1="21.0105"
                          y1="7.57726"
                          x2="21.2328"
                          y2="7.80025"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint20_linear_1129_3371"
                          x1="20.3385"
                          y1="4.78012"
                          x2="20.7047"
                          y2="5.14755"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint21_linear_1129_3371"
                          x1="17.0132"
                          y1="5.1289"
                          x2="17.2369"
                          y2="5.35343"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint22_linear_1129_3371"
                          x1="21.375"
                          y1="6.16453"
                          x2="21.7554"
                          y2="6.54639"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint23_linear_1129_3371"
                          x1="18.3936"
                          y1="4.33988"
                          x2="18.7731"
                          y2="4.72076"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint24_radial_1129_3371"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(19.4348 6.274) rotate(75.8382) scale(2.00058 2.83766)"
                        >
                          <stop offset="0.82" stopColor="white"></stop>
                          <stop offset="0.84" stopColor="#F6F8F7"></stop>
                          <stop offset="0.86" stopColor="#DFE7E3"></stop>
                          <stop offset="0.9" stopColor="#B9CAC1"></stop>
                          <stop offset="0.93" stopColor="#84A293"></stop>
                          <stop offset="0.98" stopColor="#427058"></stop>
                          <stop offset="1" stopColor="#1B5336"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint25_radial_1129_3371"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(15.0689 6.50441) rotate(16.9226) scale(6.48883 5.05524)"
                        >
                          <stop stopColor="white"></stop>
                          <stop
                            offset="0.04"
                            stopColor="white"
                            stopOpacity="0.94"
                          ></stop>
                          <stop
                            offset="0.21"
                            stopColor="white"
                            stopOpacity="0.66"
                          ></stop>
                          <stop
                            offset="0.38"
                            stopColor="white"
                            stopOpacity="0.42"
                          ></stop>
                          <stop
                            offset="0.53"
                            stopColor="white"
                            stopOpacity="0.24"
                          ></stop>
                          <stop
                            offset="0.67"
                            stopColor="white"
                            stopOpacity="0.11"
                          ></stop>
                          <stop
                            offset="0.78"
                            stopColor="white"
                            stopOpacity="0.03"
                          ></stop>
                          <stop
                            offset="0.85"
                            stopColor="white"
                            stopOpacity="0"
                          ></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      className="absolute bottom-[39.58%] right-[33.04%] z-10"
                    >
                      <path
                        d="M1.98722 1.61236L2.95281 1.21594L6.87837 10.7715L5.91279 11.1679C4.38267 11.7957 2.26487 10.1669 1.18052 7.5277C0.0961653 4.88855 0.457101 2.24014 1.98722 1.61236Z"
                        fill="#F5B528"
                      ></path>
                      <mask
                        id="mask0_1184_703"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="1"
                        width="7"
                        height="11"
                        style={{ maskType: "luminance" }}
                      >
                        <path
                          d="M1.98722 1.61236L2.95281 1.21594L6.87837 10.7715L5.91279 11.1679C4.38267 11.7957 2.26487 10.1669 1.18052 7.5277C0.0961653 4.88855 0.457101 2.24014 1.98722 1.61236Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_1184_703)">
                        <path
                          d="M8.78665 -2.51685L-7.5542 4.19749"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M8.92109 -2.18829L-7.41821 4.52605"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.05679 -1.85822L-7.28406 4.85458"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.19253 -1.52966L-7.14832 5.18313"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.32668 -1.20111L-7.01416 5.51323"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.46243 -0.872559L-6.87842 5.84178"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.59663 -0.54248L-6.74268 6.17032"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.73245 -0.213928L-6.6084 6.49887"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M9.86807 0.114624L-6.47278 6.82896"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.0023 0.443115L-6.3385 7.15745"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.1381 0.773254L-6.20276 7.48605"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.2723 1.10175L-6.06702 7.81454"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.408 1.4303L-5.93286 8.14464"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.5437 1.75885L-5.79712 8.47319"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.6779 2.08893L-5.66138 8.80172"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.8137 2.41748L-5.5271 9.13028"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M10.9494 2.74603L-5.39148 9.46037"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.0836 3.07458L-5.2572 9.78892"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.2194 3.40466L-5.12146 10.1175"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.3536 3.73322L-4.98572 10.446"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.4893 4.06177L-4.85156 10.7761"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.625 4.39032L-4.71582 11.1047"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.7592 4.71887L-4.58167 11.4332"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11.8949 5.04895L-4.44592 11.7617"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.0291 5.3775L-4.31018 12.0903"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.1648 5.70605L-4.17603 12.4204"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.3006 6.03455L-4.04028 12.7489"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.4348 6.36469L-3.90601 13.0775"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.5705 6.69318L-3.77039 13.406"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.7048 7.02173L-3.63452 13.7361"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.8405 7.35028L-3.50037 14.0646"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.9762 7.68036L-3.36462 14.3932"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.1104 8.00891L-3.22888 14.7217"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.2461 8.33746L-3.09473 15.0518"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.3819 8.66602L-2.95898 15.3804"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.5161 8.99609L-2.82471 15.7089"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.6518 9.32465L-2.68909 16.0374"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                      <path
                        d="M6.88024 10.7696C8.51128 10.0993 8.95441 7.4168 7.87 4.77799C6.78559 2.13917 4.58429 0.543352 2.95325 1.21362C1.32222 1.88389 0.879087 4.56643 1.9635 7.20524C3.0479 9.84405 5.24921 11.4399 6.88024 10.7696Z"
                        fill="#F7D320"
                      ></path>
                      <path
                        d="M6.56427 10.0006C7.93292 9.43815 8.30483 7.18731 7.39495 4.9732C6.48507 2.75909 4.63795 1.42014 3.2693 1.98259C1.90065 2.54503 1.52874 4.79587 2.43862 7.00998C3.3485 9.22409 5.19562 10.563 6.56427 10.0006Z"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M6.43994 9.69819C7.70537 9.17817 8.04925 7.09713 7.20802 5.05006C6.36678 3.00299 4.65899 1.76507 3.39356 2.2851C2.12813 2.80512 1.78425 4.88616 2.62548 6.93323C3.46672 8.9803 5.17451 10.2182 6.43994 9.69819Z"
                        fill="#F5B528"
                      ></path>
                      <path
                        d="M5.14925 3.45717L2.99906 4.341L2.98517 4.34717L2.979 4.38727L3.24122 5.02585L4.14665 4.65412C4.30244 4.58934 4.49987 4.668 4.66492 4.85464L3.38776 5.37908L3.66231 6.04851L4.93947 5.52407C4.9549 5.77241 4.86852 5.96676 4.71273 6.03154L3.80731 6.40327L4.014 6.90612L6.40327 8.47326L6.41869 8.48251L7.03722 8.22801L4.81453 6.77038L4.98729 6.69943C5.36982 6.54209 5.53178 5.97601 5.38062 5.34052L5.8449 5.14925L5.57034 4.47982L5.10606 4.67109C5.0351 4.55386 4.95644 4.44743 4.87006 4.35334L5.42535 4.12506L5.15079 3.45563L5.14925 3.45717Z"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M6.96472 8.0506L7.03722 8.22798L6.42023 8.48249L6.34619 8.3051"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M5.07674 3.2798L2.92655 4.16363L2.91266 4.1698L2.90649 4.20991L3.16871 4.84849L4.07414 4.47675C4.22993 4.41197 4.42736 4.49063 4.59241 4.67727L3.31525 5.20171L3.5898 5.87114L4.86696 5.3467C4.88239 5.59504 4.79601 5.78939 4.64022 5.85417L3.7348 6.2259L3.94149 6.72875L6.33076 8.29589L6.34618 8.30514L6.96471 8.05064L4.74202 6.59301L4.91478 6.52206C5.29731 6.36473 5.45927 5.79864 5.30811 5.16315L5.77239 4.97188L5.49783 4.30245L5.03355 4.49372C4.9626 4.37649 4.88393 4.27006 4.79755 4.17597L5.35284 3.94769L5.07828 3.27826L5.07674 3.2798Z"
                        fill="#F7D75A"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="14"
                      viewBox="0 0 27 14"
                      fill="none"
                      className="absolute top-[12.02%] right-[5.30%] z-10"
                    >
                      <path
                        d="M10.7931 8.05136C14.0258 10.5084 17.7534 11.8834 19.119 11.1225C20.4847 10.3616 18.9711 7.75302 15.7385 5.29602C12.5058 2.83902 8.7782 1.46403 7.41258 2.2249C6.04697 2.98576 7.56049 5.59436 10.7931 8.05136Z"
                        fill="url(#paint0_linear_1129_3348)"
                      ></path>
                      <path
                        d="M11.9841 7.38747C13.6601 8.66136 15.5925 9.37439 16.3002 8.98006C17.0079 8.58573 16.223 7.23337 14.547 5.95948C12.871 4.68559 10.9386 3.97256 10.2309 4.36689C9.52313 4.76121 10.3081 6.11358 11.9841 7.38747Z"
                        fill="url(#paint1_linear_1129_3348)"
                      ></path>
                      <path
                        d="M16.5827 9.37032L15.4892 9.66777C15.2745 9.72624 15.4041 10.0878 15.7791 10.4748L16.3396 11.0545C16.8002 11.1448 17.2048 11.1528 17.531 11.063C17.8582 10.9748 18.082 10.7952 18.2121 10.5438L17.6517 9.9641C17.2767 9.57706 16.7978 9.31029 16.5831 9.36876L16.5827 9.37032Z"
                        fill="url(#paint2_linear_1129_3348)"
                      ></path>
                      <path
                        d="M9.94728 3.97847L11.0408 3.68102C11.2555 3.62255 11.1259 3.26101 10.7509 2.87396L10.1905 2.2943C9.72985 2.204 9.3252 2.19598 8.99904 2.2858C8.67181 2.37398 8.44804 2.55357 8.31788 2.80503L8.87835 3.38469C9.25331 3.77173 9.73224 4.0385 9.9469 3.98003L9.94728 3.97847Z"
                        fill="url(#paint3_linear_1129_3348)"
                      ></path>
                      <path
                        d="M8.99906 6.2831L8.20517 4.72865C8.04878 4.42271 7.69953 4.07384 7.42354 3.94797L7.01296 3.76073C7.20123 4.4992 7.66562 5.42465 8.37135 6.42171L8.78298 6.60902C9.05897 6.7349 9.15545 6.58904 8.99906 6.2831Z"
                        fill="url(#paint4_linear_1129_3348)"
                      ></path>
                      <path
                        d="M17.5338 7.06549L18.3277 8.61993C18.4841 8.92587 18.8333 9.27475 19.1093 9.40062L19.5199 9.58786C19.3316 8.84938 18.8672 7.92394 18.1615 6.92688L17.7499 6.73956C17.4739 6.61369 17.3774 6.75955 17.5338 7.06549Z"
                        fill="url(#paint5_linear_1129_3348)"
                      ></path>
                      <path
                        d="M14.0063 4.15664L15.9621 5.57968C16.3474 5.86014 16.6528 5.9007 16.6454 5.67287L16.6348 5.33188C15.5213 4.31523 14.3515 3.47149 13.2873 2.89687L13.297 3.23635C13.3031 3.4641 13.6209 3.87619 14.0054 4.15513L14.0063 4.15664Z"
                        fill="url(#paint6_linear_1129_3348)"
                      ></path>
                      <path
                        d="M13.2448 10.4501L13.2352 10.1106C13.2291 9.88288 12.9112 9.47079 12.5268 9.19185L10.571 7.76881C10.1856 7.48836 9.88159 7.44788 9.8877 7.67562L9.89832 8.01661C11.0117 9.03326 12.1816 9.877 13.2458 10.4516L13.2448 10.4501Z"
                        fill="url(#paint7_linear_1129_3348)"
                      ></path>
                      <path
                        d="M11.6664 7.0042C10.4447 5.65945 10.1704 4.4223 11.054 4.23944C11.9375 4.05658 13.6444 4.99913 14.8653 6.34243C16.087 7.68719 16.3613 8.92433 15.4777 9.10719C14.5942 9.29005 12.8873 8.3475 11.6664 7.0042Z"
                        fill="url(#paint8_radial_1129_3348)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <path
                        d="M12.14 7.30048C13.6114 8.41884 15.308 9.04478 15.9294 8.69854C16.5508 8.35231 15.8618 7.16501 14.3904 6.04665C12.919 4.92828 11.2224 4.30235 10.601 4.64858C9.97959 4.99482 10.6686 6.18211 12.14 7.30048Z"
                        fill="url(#paint9_linear_1129_3348)"
                      ></path>
                      <path
                        d="M10.3943 5.22475L10.0771 5.03513C10.0979 5.16941 10.1408 5.3192 10.2063 5.48172L10.5202 5.66971C10.4547 5.50719 10.4118 5.35741 10.3952 5.22621L10.3943 5.22475Z"
                        fill="url(#paint10_linear_1129_3348)"
                      ></path>
                      <path
                        d="M11.6443 4.7726L11.3136 4.42952C11.2462 4.43308 11.1829 4.44304 11.1242 4.45789C11.0664 4.47433 11.0146 4.49576 10.9686 4.52215L11.2993 4.86523C11.3429 4.83716 11.3937 4.81413 11.4514 4.79769C11.5092 4.78124 11.5735 4.77288 11.6433 4.771L11.6443 4.7726Z"
                        fill="url(#paint11_linear_1129_3348)"
                      ></path>
                      <path
                        d="M13.6772 5.28343L13.584 5.0186C13.3701 4.88705 13.1622 4.77502 12.9634 4.68121L13.0572 4.94902C13.2545 5.03832 13.4623 5.15036 13.6772 5.28343Z"
                        fill="url(#paint12_linear_1129_3348)"
                      ></path>
                      <path
                        d="M10.7004 6.48778L10.5377 6.53375C10.6593 6.68718 10.7909 6.8441 10.9332 7.00175C10.9651 7.03742 10.9982 7.07318 11.0325 7.10901L11.1916 7.06279C11.1585 7.02704 11.1254 6.99128 11.0924 6.95553C10.9491 6.79642 10.8175 6.63951 10.6995 6.48633L10.7004 6.48778Z"
                        fill="url(#paint13_linear_1129_3348)"
                      ></path>
                      <path
                        d="M14.8873 8.5747L15.218 8.91778C15.2854 8.91422 15.3487 8.90426 15.4074 8.88941C15.4652 8.87296 15.517 8.85155 15.563 8.82516L15.2323 8.48207C15.1887 8.51015 15.1379 8.53317 15.0802 8.54962C15.0224 8.56607 14.9581 8.57443 14.8883 8.5763L14.8873 8.5747Z"
                        fill="url(#paint14_linear_1129_3348)"
                      ></path>
                      <path
                        d="M15.5664 6.55755L15.7323 6.51037C15.6991 6.47396 15.6671 6.43762 15.6317 6.39963C15.4834 6.23868 15.3289 6.083 15.174 5.93442L15.0044 5.98134C15.1621 6.12869 15.3166 6.28437 15.4649 6.44532C15.4981 6.48174 15.5322 6.51964 15.5655 6.55606L15.5664 6.55755Z"
                        fill="url(#paint15_linear_1129_3348)"
                      ></path>
                      <path
                        d="M12.5392 7.91277L12.6306 8.17622C12.8431 8.32048 13.0507 8.44705 13.2508 8.55578L13.16 8.29525C12.9596 8.18795 12.751 8.05987 12.5379 7.91268L12.5392 7.91277Z"
                        fill="url(#paint16_linear_1129_3348)"
                      ></path>
                      <path
                        d="M16.1949 7.96698L16.4958 8.15128C16.4575 8.00727 16.3969 7.84799 16.3171 7.68051L16.013 7.49463C16.0968 7.66513 16.1574 7.82441 16.1957 7.96842L16.1949 7.96698Z"
                        fill="url(#paint17_linear_1129_3348)"
                      ></path>
                      <path
                        d="M11.9841 7.38747C13.6601 8.66136 15.5925 9.37439 16.3002 8.98006C17.0079 8.58573 16.223 7.23337 14.547 5.95948C12.871 4.68559 10.9386 3.97256 10.2309 4.36689C9.52313 4.76121 10.3081 6.11358 11.9841 7.38747Z"
                        fill="url(#paint18_radial_1129_3348)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <path
                        d="M10.3967 3.51768C11.5398 3.28068 13.7582 4.50499 15.3405 6.24494C16.9228 7.98488 17.2789 9.59327 16.1358 9.83027C14.9927 10.0673 12.7744 8.84297 11.1921 7.10302C9.60975 5.36307 9.25362 3.75467 10.3967 3.51768Z"
                        fill="url(#paint19_radial_1129_3348)"
                        style={{ mixBlendMode: "multiply" }}
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1129_3348"
                          x1="20.2046"
                          y1="9.88997"
                          x2="-10.6934"
                          y2="6.74562"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E50656"></stop>
                          <stop offset="0.76" stopColor="#99002E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1129_3348"
                          x1="22.8184"
                          y1="12.3965"
                          x2="6.69189"
                          y2="1.68678"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E50656"></stop>
                          <stop offset="0.76" stopColor="#99002E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1129_3348"
                          x1="16.8009"
                          y1="10.1749"
                          x2="14.504"
                          y2="13.4218"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1129_3348"
                          x1="8.78536"
                          y1="2.4277"
                          x2="1.45669"
                          y2="2.13797"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1129_3348"
                          x1="7.679"
                          y1="5.09738"
                          x2="4.13505"
                          y2="6.36599"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1129_3348"
                          x1="18.9141"
                          y1="7.70234"
                          x2="18.1069"
                          y2="8.47303"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1129_3348"
                          x1="15.2659"
                          y1="4.02727"
                          x2="14.6011"
                          y2="4.73191"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1129_3348"
                          x1="11.909"
                          y1="8.49505"
                          x2="10.2708"
                          y2="10.4182"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint8_radial_1129_3348"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.5737 6.94738) rotate(145.107) scale(1.34866 3.32002)"
                        >
                          <stop offset="0.84" stopColor="#820026"></stop>
                          <stop offset="0.87" stopColor="#A2425E"></stop>
                          <stop offset="0.91" stopColor="#C28496"></stop>
                          <stop offset="0.94" stopColor="#DCB9C3"></stop>
                          <stop offset="0.97" stopColor="#EFDFE3"></stop>
                          <stop offset="0.99" stopColor="#FAF6F7"></stop>
                          <stop offset="1" stopColor="white"></stop>
                        </radialGradient>
                        <linearGradient
                          id="paint9_linear_1129_3348"
                          x1="15.8468"
                          y1="7.86426"
                          x2="2.57137"
                          y2="6.50304"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E50656"></stop>
                          <stop offset="0.76" stopColor="#99002E"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_1129_3348"
                          x1="10.4155"
                          y1="5.23145"
                          x2="10.1956"
                          y2="5.45755"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_1129_3348"
                          x1="11.4339"
                          y1="4.52445"
                          x2="11.2102"
                          y2="4.76874"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint12_linear_1129_3348"
                          x1="13.4361"
                          y1="4.86577"
                          x2="13.2252"
                          y2="5.09158"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint13_linear_1129_3348"
                          x1="10.9473"
                          y1="6.71466"
                          x2="10.7982"
                          y2="6.86752"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint14_linear_1129_3348"
                          x1="15.3511"
                          y1="8.57541"
                          x2="15.1268"
                          y2="8.82044"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint15_linear_1129_3348"
                          x1="15.4405"
                          y1="6.17399"
                          x2="15.3166"
                          y2="6.30361"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint16_linear_1129_3348"
                          x1="13.0004"
                          y1="8.12933"
                          x2="12.8101"
                          y2="8.33082"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint17_linear_1129_3348"
                          x1="16.36"
                          y1="7.70914"
                          x2="16.1559"
                          y2="7.91441"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F6EBF8"></stop>
                          <stop offset="0.31" stopColor="#F1E8F7"></stop>
                          <stop offset="0.65" stopColor="#E4E2F4"></stop>
                          <stop offset="1" stopColor="#CFD7F0"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint18_radial_1129_3348"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.8513 6.33609) rotate(153.279) scale(1.57439 3.58044)"
                        >
                          <stop offset="0.85" stopColor="white"></stop>
                          <stop offset="0.86" stopColor="#FAF6F7"></stop>
                          <stop offset="0.88" stopColor="#EFDFE3"></stop>
                          <stop offset="0.91" stopColor="#DCB9C3"></stop>
                          <stop offset="0.94" stopColor="#C28496"></stop>
                          <stop offset="0.97" stopColor="#A2425E"></stop>
                          <stop offset="1" stopColor="#820026"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint19_radial_1129_3348"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.6875 6.10634) rotate(145.107) scale(2.01338 4.74394)"
                        >
                          <stop offset="0.82" stopColor="white"></stop>
                          <stop offset="0.83" stopColor="#FAF6F7"></stop>
                          <stop offset="0.86" stopColor="#EFDFE3"></stop>
                          <stop offset="0.89" stopColor="#DCB9C3"></stop>
                          <stop offset="0.93" stopColor="#C28496"></stop>
                          <stop offset="0.96" stopColor="#A2425E"></stop>
                          <stop offset="1" stopColor="#820026"></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      className="absolute bottom-[8.27%] right-[1.14%] z-10"
                    >
                      <path
                        d="M15.0526 3.70587L13.6206 2.79199L4.37952 16.6458L5.81151 17.5597C8.07947 19.0071 11.9865 17.0781 14.5399 13.2521C17.0932 9.42622 17.323 5.15325 15.0551 3.70587H15.0526Z"
                        fill="#F5B528"
                      ></path>
                      <mask
                        id="mask0_1184_600"
                        maskUnits="userSpaceOnUse"
                        x="4"
                        y="2"
                        width="13"
                        height="17"
                        style={{ maskType: "luminance" }}
                      >
                        <path
                          d="M15.0526 3.70587L13.6206 2.79199L4.37952 16.6458L5.81151 17.5597C8.07947 19.0071 11.9865 17.0781 14.5399 13.2521C17.0932 9.42622 17.323 5.15325 15.0551 3.70587H15.0526Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_1184_600)">
                        <path
                          d="M5.3822 -4.82526L29.6074 10.6316"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M5.06458 -4.34857L29.2898 11.1083"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M4.74609 -3.87189L28.9713 11.5849"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M4.42761 -3.39514L28.6528 12.0617"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M4.10999 -2.91846L28.3352 12.5384"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M3.7915 -2.44177L28.0167 13.0175"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M3.47302 -1.96509L27.6983 13.4942"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M3.15527 -1.4884L27.3805 13.9709"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M2.83911 -1.01172L27.0618 14.4476"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M2.52136 -0.532532L26.7466 14.9243"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M2.20288 -0.0558472L26.4281 15.401"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M1.8844 0.420837L26.1096 15.8777"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M1.56677 0.897583L25.792 16.3544"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M1.24829 1.37427L25.4735 16.8311"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M0.92981 1.85095L25.155 17.3078"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M0.612061 2.32764L24.8373 17.7845"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M0.293701 2.80438L24.5189 18.2612"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-0.0247803 3.28107L24.2005 18.7379"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-0.343262 3.75775L23.882 19.217"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-0.660889 4.23444L23.5643 19.6937"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-0.97937 4.71112L23.2459 20.1704"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-1.29785 5.18787L22.9274 20.6472"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-1.6156 5.66455L22.6096 21.1238"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-1.93396 6.14368L22.2913 21.6005"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-2.25244 6.62036L21.9728 22.0772"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-2.57019 7.09711L21.655 22.5539"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-2.88855 7.57379L21.3367 23.0306"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-3.20703 8.05048L21.0182 23.5073"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-3.52478 8.52716L20.7005 23.984"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-3.84326 9.00391L20.382 24.4607"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-4.16162 9.48059L20.0636 24.9374"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-4.4801 9.95728L19.7451 25.4141"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-4.79785 10.434L19.4274 25.8933"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-5.11633 10.9106L19.1089 26.3699"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-5.43469 11.3874L18.7905 26.8467"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-5.75244 11.8641L18.4728 27.3234"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M-6.07092 12.3432L18.1543 27.8"
                          stroke="#E0A723"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                      <path
                        d="M13.3785 12.515C15.9309 8.68886 16.0397 4.33642 13.6215 2.79357C11.2033 1.25072 7.17384 3.1017 4.62147 6.92785C2.0691 10.754 1.96034 15.1064 4.37853 16.6493C6.79673 18.1921 10.8262 16.3412 13.3785 12.515Z"
                        fill="#F7D320"
                      ></path>
                      <path
                        d="M12.6739 12.0641C10.5322 15.275 7.15044 16.8261 5.12242 15.5319C3.09439 14.2377 3.18531 10.5846 5.32446 7.37619C7.46614 4.16529 10.8479 2.61417 12.8759 3.90841C14.9039 5.20266 14.813 8.85568 12.6739 12.0641Z"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M12.3971 11.8888C14.3771 8.92065 14.4613 5.54412 12.5851 4.3471C10.709 3.15009 7.58295 4.58588 5.60295 7.55403C3.62294 10.5222 3.53874 13.8987 5.41489 15.0957C7.29103 16.2927 10.4171 14.857 12.3971 11.8888Z"
                        fill="#F5B528"
                      ></path>
                      <path
                        d="M12.6383 7.72693L9.45105 5.69417L9.43085 5.68182L9.37276 5.70899L8.75652 6.63522L10.0976 7.49228C10.3299 7.64048 10.4057 7.97145 10.3072 8.35676L8.41304 7.14896L7.7665 8.11965L9.66067 9.32744C9.33992 9.57196 8.99897 9.63618 8.76662 9.48799L7.42554 8.63092L6.93811 9.36202L7.04418 13.9363V13.966L7.96097 14.5513L7.86247 10.2957L8.12008 10.4587C8.6858 10.8193 9.60258 10.5204 10.3173 9.74486L11.0068 10.1845L11.6533 9.21382L10.9639 8.77418C11.0548 8.57411 11.1255 8.37405 11.1735 8.17398L11.9968 8.69761L12.6434 7.72693H12.6383Z"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M8.12783 14.2895L7.95609 14.5464L7.03931 13.9635L7.21105 13.7066"
                        fill="#EB8904"
                      ></path>
                      <path
                        d="M12.8102 7.46759L9.62292 5.43483L9.60272 5.42249L9.54463 5.44965L8.92839 6.37588L10.2695 7.23294C10.5018 7.38114 10.5776 7.71211 10.4791 8.09742L8.58492 6.88962L7.93837 7.86031L9.83255 9.0681C9.5118 9.31262 9.17085 9.37684 8.9385 9.22865L7.59742 8.37158L7.10999 9.10268L7.21606 13.677V13.7066L8.13284 14.292L8.03434 10.0363L8.29195 10.1993C8.85768 10.5599 9.77446 10.2611 10.4892 9.48552L11.1787 9.92517L11.8252 8.95449L11.1357 8.51484C11.2267 8.31477 11.2974 8.11471 11.3454 7.91464L12.1687 8.43827L12.8152 7.46759H12.8102Z"
                        fill="#F7D75A"
                      ></path>
                    </svg>
                    <img
                      alt="Super Over Banner Ball"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="w-4 h-4 absolute right-[25.21%] bottom-[17.45%] z-10"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fball.webp&amp;w=256&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div
                      className="absolute right-[12.17%] z-10 top-[7.6%] w-[20px] h-[20px] flex items-center justify-center"
                      style={{
                        backgroundImage: "url('/src/assets/image/ball.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 6 8"
                        fill="none"
                      >
                        <path
                          d="M3.002 8C2.41632 8 1.8963 7.90494 1.44194 7.71483C0.990208 7.52472 0.635648 7.26489 0.378265 6.93536C0.123507 6.6033 -0.00255844 6.22687 6.79231e-05 5.80608C-0.00255844 5.47909 0.0709798 5.17871 0.220683 4.90494C0.370385 4.63118 0.572616 4.40304 0.827373 4.22053C1.08476 4.03549 1.37103 3.91762 1.68619 3.86692V3.81369C1.27123 3.72497 0.935054 3.52091 0.67767 3.20152C0.422913 2.87959 0.296847 2.50824 0.299474 2.08745C0.296847 1.68695 0.412407 1.32953 0.646154 1.01521C0.8799 0.700887 1.20032 0.453739 1.6074 0.273764C2.01449 0.0912548 2.47936 0 3.002 0C3.5194 0 3.98032 0.0912548 4.38479 0.273764C4.79187 0.453739 5.11229 0.700887 5.34604 1.01521C5.58241 1.32953 5.70059 1.68695 5.70059 2.08745C5.70059 2.50824 5.57059 2.87959 5.31058 3.20152C5.0532 3.52091 4.72096 3.72497 4.31387 3.81369V3.86692C4.62904 3.91762 4.91268 4.03549 5.16482 4.22053C5.41957 4.40304 5.6218 4.63118 5.77151 4.90494C5.92384 5.17871 6 5.47909 6 5.80608C6 6.22687 5.87131 6.6033 5.61392 6.93536C5.35654 7.26489 5.00198 7.52472 4.55025 7.71483C4.10114 7.90494 3.58506 8 3.002 8ZM3.002 6.91255C3.30404 6.91255 3.56667 6.86312 3.78991 6.76426C4.01315 6.66287 4.18649 6.52091 4.30993 6.3384C4.43337 6.15589 4.49641 5.9455 4.49903 5.70722C4.49641 5.45881 4.42943 5.23954 4.29812 5.04943C4.16942 4.85678 3.99214 4.70596 3.76628 4.59696C3.54304 4.48796 3.28828 4.43346 3.002 4.43346C2.7131 4.43346 2.45572 4.48796 2.22985 4.59696C2.00398 4.70596 1.82539 4.85678 1.69407 5.04943C1.56538 5.23954 1.50235 5.45881 1.50498 5.70722C1.50235 5.9455 1.56276 6.15589 1.68619 6.3384C1.80963 6.51838 1.98297 6.65906 2.20622 6.76046C2.43208 6.86185 2.69735 6.91255 3.002 6.91255ZM3.002 3.36502C3.24888 3.36502 3.46687 3.31686 3.65597 3.22053C3.84769 3.12421 3.99871 2.98986 4.10902 2.81749C4.21932 2.64512 4.27579 2.44613 4.27842 2.22053C4.27579 1.99747 4.22064 1.80228 4.11296 1.63498C4.00528 1.46515 3.85557 1.3346 3.66385 1.24335C3.47212 1.14956 3.25151 1.10266 3.002 1.10266C2.74725 1.10266 2.52269 1.14956 2.32834 1.24335C2.13662 1.3346 1.98691 1.46515 1.87923 1.63498C1.77418 1.80228 1.72296 1.99747 1.72559 2.22053C1.72296 2.44613 1.77549 2.64512 1.88317 2.81749C1.99348 2.98733 2.1445 3.12167 2.33622 3.22053C2.53057 3.31686 2.7525 3.36502 3.002 3.36502Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      className="absolute bottom-[11.53%] right-[19.36%] z-10"
                    >
                      <path
                        d="M6.60485 8.26013C6.25023 8.4807 5.86686 8.63712 5.45472 8.72937C5.04108 8.81923 4.61328 8.81218 4.17132 8.70823C3.72785 8.60188 3.28275 8.37056 2.83601 8.01428C2.38776 7.6556 1.95096 7.13681 1.52561 6.45791C1.12668 5.82616 0.838232 5.22041 0.660277 4.64064C0.482322 4.06087 0.411757 3.5208 0.448582 3.02044C0.48389 2.51767 0.622415 2.06397 0.864158 1.65932C1.1083 1.25315 1.45137 0.910518 1.89335 0.631418C2.35695 0.338666 2.82534 0.170564 3.29853 0.127111C3.77412 0.0821404 4.22252 0.148417 4.64374 0.325941C5.06343 0.501062 5.42484 0.770108 5.72797 1.13308L4.41284 1.96355C4.16659 1.72258 3.88589 1.584 3.57073 1.54783C3.25646 1.50773 2.94078 1.58779 2.62371 1.78801C2.11207 2.1111 1.85844 2.58206 1.86282 3.20088C1.8696 3.81818 2.11676 4.51553 2.6043 5.29291L2.65474 5.26106C2.63896 4.97535 2.67697 4.69767 2.76877 4.42803C2.86057 4.15838 2.99838 3.9084 3.18221 3.67808C3.36693 3.44384 3.5914 3.24329 3.85563 3.07644C4.288 2.80341 4.74116 2.66172 5.2151 2.65139C5.69145 2.63955 6.14503 2.75127 6.57585 2.98657C7.00515 3.21946 7.36574 3.56967 7.6576 4.03719C7.96641 4.52089 8.13122 5.02664 8.15204 5.55444C8.17134 6.07984 8.0514 6.57893 7.79221 7.05172C7.53301 7.5245 7.13723 7.92731 6.60485 8.26013ZM5.91507 7.18375C6.17689 7.01841 6.3709 6.80686 6.49708 6.54911C6.62327 6.29135 6.67815 6.01645 6.66174 5.72443C6.64533 5.4324 6.55098 5.15262 6.37869 4.88511C6.21424 4.61937 6.00566 4.41676 5.75296 4.27731C5.50266 4.13633 5.23598 4.06785 4.95293 4.07188C4.66988 4.0759 4.39744 4.16058 4.13562 4.32592C3.94105 4.44879 3.7832 4.60054 3.66208 4.78118C3.54096 4.96183 3.45966 5.15764 3.41818 5.36863C3.37518 5.57722 3.37225 5.79074 3.40941 6.0092C3.44744 6.22373 3.52669 6.42904 3.64715 6.62513C3.81186 6.88063 4.02132 7.07931 4.27554 7.22117C4.52976 7.36303 4.80111 7.4336 5.0896 7.43286C5.37808 7.43212 5.65324 7.34908 5.91507 7.18375Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="#7FBA42"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5403 19.3516C9.28848 19.3516 9.03913 19.3516 8.78731 19.3516C8.74781 19.3516 8.73546 19.3442 8.73793 19.3021C8.78237 18.8565 8.7725 18.4135 8.75275 17.9679C8.73546 17.5595 8.69596 17.1535 8.6219 16.7526C8.49599 16.0743 8.30836 15.4109 8.06395 14.7624C7.68128 13.7476 7.15542 12.8119 6.4839 11.9579C6.13086 11.5074 5.74326 11.0891 5.3285 10.698C4.65698 10.0668 3.91387 9.53709 3.09916 9.10639C2.31902 8.69549 1.50924 8.3638 0.652565 8.15835C0.548875 8.1336 0.445185 8.11132 0.341495 8.08904C0.306931 8.08162 0.294587 8.07419 0.301994 8.02964C0.363714 7.74498 0.418028 7.45785 0.49703 7.17566C0.679722 6.51724 0.93401 5.88604 1.26977 5.28949C1.51418 4.85137 1.78081 4.42809 2.09188 4.03452C2.43505 3.59887 2.81031 3.19788 3.23001 2.83648C3.64724 2.47509 4.09162 2.15578 4.56811 1.87607C5.41244 1.38349 6.30862 1.02953 7.26405 0.829027C7.68128 0.742392 8.10592 0.687936 8.53302 0.660707C9.02678 0.631004 9.52055 0.650806 10.0143 0.660707C10.0513 0.660707 10.0587 0.675559 10.0563 0.707738C10.0513 0.801799 10.0513 0.898335 10.0464 0.992396C10.0316 1.30428 10.0365 1.61617 10.0464 1.92558C10.0587 2.28697 10.0958 2.64589 10.1452 3.00233C10.2143 3.49244 10.318 3.97512 10.4562 4.45037C10.6636 5.16821 10.9549 5.84891 11.3055 6.50734C11.6462 7.14844 12.0437 7.74993 12.5053 8.30935C13.004 8.91331 13.5669 9.4554 14.1866 9.93313C14.9124 10.495 15.6951 10.9629 16.5295 11.344C17.122 11.6139 17.7392 11.8144 18.3688 11.9752C18.5021 12.0099 18.4996 12.0099 18.4749 12.1411C18.3169 12.9802 18.038 13.7797 17.6479 14.5372C17.3343 15.1411 16.9517 15.6981 16.5122 16.2179C15.9074 16.9308 15.2087 17.5347 14.4162 18.0248C13.5669 18.5521 12.6584 18.9358 11.6832 19.1536C11.2586 19.2476 10.8265 19.3095 10.392 19.3417C10.1081 19.3615 9.82421 19.3665 9.5403 19.3665C9.5403 19.3615 9.5403 19.3566 9.5403 19.3516Z"
                      fill="#7FBA42"
                    ></path>
                    <path
                      d="M0.00561523 10.3862C0.338905 10.4729 0.659851 10.5694 0.975859 10.6882C1.85969 11.0174 2.65712 11.4952 3.38048 12.0967C3.95819 12.5769 4.45442 13.1338 4.8914 13.7452C5.42219 14.4903 5.8172 15.3046 6.08137 16.1809C6.22456 16.6561 6.32331 17.1388 6.38009 17.6289C6.41713 17.9458 6.43194 18.2626 6.43935 18.5794C6.44181 18.6686 6.44181 18.7577 6.41713 18.8443C6.39244 18.9285 6.37269 18.9359 6.29122 18.9062C5.56785 18.6413 4.88893 18.2898 4.25198 17.8567C3.86684 17.5943 3.50393 17.3047 3.15829 16.9928C2.71884 16.5943 2.32136 16.1586 1.96339 15.6858C1.64244 15.2626 1.36099 14.817 1.11411 14.3467C0.763541 13.6809 0.489503 12.9853 0.299404 12.2576C0.178432 11.7848 0.0895549 11.3046 0.0401786 10.8194C0.0253657 10.6759 0.0179593 10.5323 0.00561523 10.3862Z"
                      fill="#7FBA42"
                    ></path>
                    <path
                      d="M19.0056 9.63093C18.3218 9.45518 17.6725 9.21013 17.0553 8.87596C16.5097 8.5814 16.006 8.22744 15.5369 7.82397C14.8481 7.23237 14.2704 6.54672 13.8014 5.77196C13.3718 5.05907 13.0484 4.29916 12.8385 3.49222C12.7151 3.01944 12.6336 2.53923 12.599 2.0516C12.5793 1.78922 12.5694 1.52437 12.5768 1.25951C12.5768 1.24218 12.5793 1.22238 12.5818 1.20505C12.604 1.08624 12.6262 1.07386 12.7373 1.11594C13.3027 1.32634 13.8433 1.58872 14.3593 1.90308C14.8728 2.21745 15.3567 2.57389 15.806 2.97241C16.127 3.25707 16.4282 3.56648 16.7072 3.89569C17.4429 4.76699 18.0082 5.73978 18.423 6.80167C18.6501 7.38337 18.8032 7.98486 18.8995 8.60121C18.9513 8.93289 18.9809 9.26706 19.0056 9.60122C19.0056 9.61112 19.0056 9.62102 19.0056 9.63093Z"
                      fill="#7FBA42"
                    ></path>
                  </svg>
                </span>
                <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                  Tennis
                </div>
              </div>
              <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  1
                </span>
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  X
                </span>
                <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                  2
                </span>
              </div>
              <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                <span
                  id="inPlayTime"
                  className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span
                    id="inPlayTime"
                    className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                  >
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 0</span>
                      <span className="text-text_Ternary"> 6</span>
                    </span>
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 1</span>
                      <span className="text-text_Ternary"> 6</span>
                    </span>
                  </span>
                </span>
                <span
                  id="inPlayTeamName"
                  className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span className="flex flex-col items-center justify-start w-[87%]">
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]">
                        <svg
                          height="4"
                          width="4"
                          fill="var(--color-inplayEventsIconColor)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                        </svg>
                      </span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Gael Monfils
                      </span>
                    </span>
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Carlos Alcaraz
                      </span>
                    </span>
                  </span>
                  <span className="absolute top-0.5 right-0.5">
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                        fill="#257B24"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
                <div
                  className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                  id="hideScrollBar"
                >
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            7.2
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              107
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.15
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              961
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            7.4
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">14</span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.16
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              260
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
              <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                <span
                  id="inPlayTime"
                  className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span
                    id="inPlayTime"
                    className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                  >
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 0</span>
                      <span className="text-text_Ternary"> 2</span>
                    </span>
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 1</span>
                      <span className="text-text_Ternary"> 4</span>
                    </span>
                  </span>
                </span>
                <span
                  id="inPlayTeamName"
                  className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span className="flex flex-col items-center justify-start w-[87%]">
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]">
                        <svg
                          height="4"
                          width="4"
                          fill="var(--color-inplayEventsIconColor)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                        </svg>
                      </span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Caroline Wozniacki
                      </span>
                    </span>
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Anastasia Pavlyuchenkova
                      </span>
                    </span>
                  </span>
                  <span className="absolute top-0.5 right-0.5">
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                        fill="#257B24"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
                <div
                  className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                  id="hideScrollBar"
                >
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            10
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              116
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.1
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              1,023
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            11
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              102
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.11
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              1,042
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
              <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                <span
                  id="inPlayTime"
                  className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span
                    id="inPlayTime"
                    className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                  >
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 1</span>
                      <span className="text-text_Ternary"> 5</span>
                    </span>
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 0</span>
                      <span className="text-text_Ternary"> 4</span>
                    </span>
                  </span>
                </span>
                <span
                  id="inPlayTeamName"
                  className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span className="flex flex-col items-center justify-start w-[87%]">
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]">
                        <svg
                          height="4"
                          width="4"
                          fill="var(--color-inplayEventsIconColor)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                        </svg>
                      </span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Qinwen Zheng
                      </span>
                    </span>
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Magdalena Frech
                      </span>
                    </span>
                  </span>
                  <span className="absolute top-0.5 right-0.5">
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                        fill="#257B24"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
                <div
                  className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                  id="hideScrollBar"
                >
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            100
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">22</span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.01
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              2,198
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            350
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">3</span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
              <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket border-b">
                <span
                  id="inPlayTime"
                  className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span
                    id="inPlayTime"
                    className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                  >
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 0</span>
                      <span className="text-text_Ternary"> 5</span>
                    </span>
                    <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                      <span> 0</span>
                      <span className="text-text_Ternary"> 0</span>
                    </span>
                  </span>
                </span>
                <span
                  id="inPlayTeamName"
                  className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                >
                  <span className="flex flex-col items-center justify-start w-[87%]">
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Marc-Andrea Huesler
                      </span>
                    </span>
                    <span className="text-selection-none w-full flex items-center justify-start">
                      <span className="w-[5px] h-[5px] p-[1px] mr-[2px]">
                        <svg
                          height="4"
                          width="4"
                          fill="var(--color-inplayEventsIconColor)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                        </svg>
                      </span>
                      <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                        Antoine Escoffier
                      </span>
                    </span>
                  </span>
                  <span className="absolute top-0.5 right-0.5">
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                        fill="#257B24"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket border-b">
                <div
                  className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                  id="hideScrollBar"
                >
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.09
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              4,262
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            11
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              589
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            1.1
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              5,893
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            -
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate"></span>
                          </span>
                        </div>{" "}
                      </span>
                    </span>
                    <span className="col-span-4">
                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                          <span
                            id="oddBtnPrice"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                          >
                            12.5
                          </span>
                          <span
                            id="oddBtnSize"
                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                          >
                            <span className="w-max break-all truncate">
                              401
                            </span>
                          </span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </span>
              </> */}
              {/* Tennis end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InPlay;
