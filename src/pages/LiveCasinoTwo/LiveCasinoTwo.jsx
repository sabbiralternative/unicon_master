import { useSelector } from "react-redux";
import assets from "../../assets";
import FAQ from "../../components/ui/desktop/Home/FAQ";
import { useNavigate } from "react-router-dom";

const LiveCasinoTwo = () => {
  const navigate = useNavigate();
  const { showAppPopUp } = useSelector((state) => state.state);
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="lg:hidden flex flex-col w-fit cursor-pointer"
        style={{ paddingTop: showAppPopUp ? "120px" : "55px" }}
      >
        <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative">
          <div className="app-bg flex-row w-full h-full flex">
            <div className="w-[34px] h-full flex items-center justify-center">
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-bg_Primary2 active:scale-150 cursor-pointer primary-icon-color"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="var(--color-iconsColor)"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--color-iconsColor)"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary font-lato font-bold text-[16px] leading-5">
              <span>Casino</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[2px]`}
      >
        <div className="flex items-start justify-start w-full">
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-full"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
          >
            <h1 className="hidden">Play Online games</h1>
            <div className="w-full px-2">
              <div className="w-full pb-1">
                <img
                  src={assets.artboard}
                  width={1641}
                  height={100}
                  className="w-full rounded aspect-[3.7409]"
                  alt="CASINO IMAGE"
                  loading="lazy"
                  title="Play Live Casino And Win Big..."
                />
              </div>
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute left-0 pl-2 h-full flex items-center justify-center pointer-events-none">
                  <svg
                    fill="#999"
                    className="h-5 w-5"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </div>
                <div className="px-[0.1rem] p-0.5 h-fit">
                  <input
                    id="default-search"
                    className="block w-full focus:outline-none rounded rounded-2 w-full p-2 pl-8 text-sm bg-bg_Quaternary text-text_Ternary"
                    placeholder="Search Games (Atleast 3 chars.....)"
                    autoComplete="off"
                    type="search"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full overflow-x-auto gap-[3px] no-scrollbar mt-2 text-center">
                <div className="flex gap-[6px]">
                  <button
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary px-4 py-2 flex items-center justify-center border rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quaternary">Lobby</span>
                  </button>
                  <button
                    title="Game Show"
                    id="game_show"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Game Show</span>
                  </button>
                  <button
                    title="Live Sic Bo"
                    id="live_sic_bo"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Sic Bo</span>
                  </button>
                  <button
                    title="Live Dragon Tiger"
                    id="live_dragon_tiger"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Dragon Tiger</span>
                  </button>
                  <button
                    title="Live Dealer"
                    id="live_dealer"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Dealer</span>
                  </button>
                  <button
                    title="Live Baccarat"
                    id="live_baccarat"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Baccarat</span>
                  </button>
                  <button
                    title="Live Blackjack"
                    id="live_blackjack"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Blackjack</span>
                  </button>
                  <button
                    title="Money Wheel"
                    id="money_wheel"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Money Wheel</span>
                  </button>
                  <button
                    title="Live Roulette"
                    id="live_roulette"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Roulette</span>
                  </button>
                  <button
                    title="Live Lottery"
                    id="live_lottery"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Lottery</span>
                  </button>
                  <button
                    title="Live Poker"
                    id="live_poker"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Poker</span>
                  </button>
                  <button
                    title="Live Lobby"
                    id="live_lobby"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Quaternary px-4 py-2 flex items-center justify-center border gap-1 rounded-full text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer"
                    type="button"
                  >
                    <span className="text-text_Quinary">Live Lobby</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-transparent w-full h-full">
              <div className="w-full px-[6px]">
                <div className="w-full pb-4">
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Game Show
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Game Show"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_crazy_time/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Crazy Time"
                                  loading="lazy"
                                  title="Crazy Time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_cash_or_crash/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Cash or Crash"
                                  loading="lazy"
                                  title="Cash or Crash"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_buffalo_blitz_live_slots/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Buffalo Blitz Live Slots"
                                  loading="lazy"
                                  title="Buffalo Blitz Live Slots"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_crazy_coin_flip/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Crazy Coin Flip"
                                  loading="lazy"
                                  title="Crazy Coin Flip"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_everybodys_jackpot_live/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Everybody's Jackpot Live"
                                  loading="lazy"
                                  title="Everybody's Jackpot Live"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_the_greatest_cards_show/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="The Greatest Cards Show"
                                  loading="lazy"
                                  title="The Greatest Cards Show"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/atm_cocktail_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Cocktail Roulette"
                                  loading="lazy"
                                  title="Cocktail Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_stock_market/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Stock Market"
                                  loading="lazy"
                                  title="Stock Market"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_balloon_race/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Balloon Race"
                                  loading="lazy"
                                  title="Balloon Race"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_storm/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Storm"
                                  loading="lazy"
                                  title="Lightning Storm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-2 flex items-center justify-between">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2">
                          <div className="flex text-text_Primary items-center justify-center gap-1" />
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg leading-[18px]">
                            Game Providers
                          </span>
                        </div>
                      </div>
                      <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                        <button
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                          type="button"
                        >
                          See All
                        </button>
                        <button
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={27}
                            height={27}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="var(--color-primary)"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 6l-6 6l6 6" />
                          </svg>
                        </button>
                        <button
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={27}
                            height={27}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="var(--color-primary)"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full overflow-x-auto gap-[3px] no-scrollbar mt-2 text-center">
                      <div className="px-1 py-2 grid grid-rows-2 md:grid-rows-1 gap-2 grid-flow-col">
                        <button
                          id="provider-evo-66c5ddb81a76aea4352b815c"
                          title="Evolution Gaming"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Evolution Gaming"
                              loading="lazy"
                              title="Evolution Gaming"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-ezg-66c5ddbd1a76aea4352b8160"
                          title="Ezugi"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/ezg/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Ezugi"
                              loading="lazy"
                              title="Ezugi"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-pltl-66c5ddbe1a76aea4352b817b"
                          title="Playtech Live"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/pltl/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Playtech Live"
                              loading="lazy"
                              title="Playtech Live"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-aes-66c5ddbe1a76aea4352b8184"
                          title="AE Sexy"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/aes/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="AE Sexy"
                              loading="lazy"
                              title="AE Sexy"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-tvb-66c5ddbe1a76aea4352b8188"
                          title="TVBet"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/tvb/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="TVBet"
                              loading="lazy"
                              title="TVBet"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-btr-66c5ddbe1a76aea4352b818b"
                          title="Beter Live"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Beter Live"
                              loading="lazy"
                              title="Beter Live"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-atm-66c5ddbf1a76aea4352b81a3"
                          title="Atmosfera"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/atm/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Atmosfera"
                              loading="lazy"
                              title="Atmosfera"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                        <button
                          id="provider-win-66c5ddbf1a76aea4352b81a5"
                          title="Winfinity"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] bg-bg_Quaternary px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary } text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 cursor-pointer"
                          type="button"
                        >
                          <div
                            title="InPlayAndPopulars"
                            id="banners"
                            className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
                          >
                            <img
                              src="https://luckmedia.link/providers/win/logo_3_2_cl_dark.svg?q=65&w=600&px=auto&auto=format"
                              width={80}
                              height={40}
                              className="rounded rounded-8"
                              alt="Winfinity"
                              loading="lazy"
                              title="Winfinity"
                              style={{
                                filter: "drop-shadow(black 2px 4px 6px)",
                              }}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Sic Bo
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Sic Bo"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_sic_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sic Bo"
                                  loading="lazy"
                                  title="Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_emperor_sic_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Emperor Sic Bo"
                                  loading="lazy"
                                  title="Emperor Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/kng_sicbo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sicbo"
                                  loading="lazy"
                                  title="Sicbo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_sic_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sic Bo"
                                  loading="lazy"
                                  title="Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_extra_sicbo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Extra Sicbo"
                                  loading="lazy"
                                  title="Extra Sicbo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/btr_sic_bo/thumb_3_4.webp"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sic Bo"
                                  loading="lazy"
                                  title="Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_emperor_sic_bo_a/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Emperor Sic Bo A"
                                  loading="lazy"
                                  title="Emperor Sic Bo A"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_first_person_super_sic_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="First Person Super Sic Bo"
                                  loading="lazy"
                                  title="First Person Super Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_sic_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Sic Bo"
                                  loading="lazy"
                                  title="Lightning Sic Bo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Dragon Tiger
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Dragon Tiger"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dragon Tiger"
                                  loading="lazy"
                                  title="Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_football_studio/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Football Studio"
                                  loading="lazy"
                                  title="Football Studio"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_emperor_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Emperor Dragon Tiger"
                                  loading="lazy"
                                  title="Emperor Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_bet_on_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Bet On Dragon Tiger"
                                  loading="lazy"
                                  title="Bet On Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dragon Tiger"
                                  loading="lazy"
                                  title="Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_dragontiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dragon Tiger"
                                  loading="lazy"
                                  title="Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Dragon Tiger"
                                  loading="lazy"
                                  title="Lightning Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Dealer
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Dealer"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_fan_tan/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Fan Tan"
                                  loading="lazy"
                                  title="Fan Tan"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_craps/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Craps"
                                  loading="lazy"
                                  title="Craps"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_bac_bo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Bac Bo"
                                  loading="lazy"
                                  title="Bac Bo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_red_blue_duel/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Red Blue Duel"
                                  loading="lazy"
                                  title="Red Blue Duel"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_thai_hi_lo/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Thai Hi Lo"
                                  loading="lazy"
                                  title="Thai Hi Lo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_thai_fish_prawn_crab/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Thai Fish Prawn Crab"
                                  loading="lazy"
                                  title="Thai Fish Prawn Crab"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_korean_dealer_baseball_studio/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Korean Dealer Baseball Studio"
                                  loading="lazy"
                                  title="Korean Dealer Baseball Studio"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_dead_or_alive_saloon/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dead or Alive Saloon"
                                  loading="lazy"
                                  title="Dead or Alive Saloon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_war_of_elements/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="War Of Elements"
                                  loading="lazy"
                                  title="War Of Elements"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_extra_andar_bahar/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Extra Andar Bahar"
                                  loading="lazy"
                                  title="Extra Andar Bahar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_sedie/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sedie"
                                  loading="lazy"
                                  title="Sedie"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/win_top_card/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Top Card"
                                  loading="lazy"
                                  title="Top Card"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/btr_the_kickoff/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="The Kickoff"
                                  loading="lazy"
                                  title="The Kickoff"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Baccarat
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Baccarat"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Baccarat"
                                  loading="lazy"
                                  title="Lightning Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_speed_baccarat_a/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Baccarat A"
                                  loading="lazy"
                                  title="Speed Baccarat A"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_baccarat_squeeze/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat Squeeze"
                                  loading="lazy"
                                  title="Baccarat Squeeze"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_baccarat_control_squeeze/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat Control Squeeze"
                                  loading="lazy"
                                  title="Baccarat Control Squeeze"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_golden_wealth_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Golden Wealth Baccarat"
                                  loading="lazy"
                                  title="Golden Wealth Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_first_person_lightning_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="First Person Lightning Baccarat"
                                  loading="lazy"
                                  title="First Person Lightning Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat"
                                  loading="lazy"
                                  title="Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_baccarat_no_commission/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat No Commission"
                                  loading="lazy"
                                  title="Baccarat No Commission"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_dragon_tiger/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dragon Tiger"
                                  loading="lazy"
                                  title="Dragon Tiger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_cricket_war/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Cricket War"
                                  loading="lazy"
                                  title="Cricket War"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_peek_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Peek Baccarat"
                                  loading="lazy"
                                  title="Peek Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat"
                                  loading="lazy"
                                  title="Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_hindi_speed_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Hindi Speed Baccarat A"
                                  loading="lazy"
                                  title="Hindi Speed Baccarat A"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_jade_baccarat/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Jade Baccarat"
                                  loading="lazy"
                                  title="Jade Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_speed_baccarat_4/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Baccarat 4"
                                  loading="lazy"
                                  title="Speed Baccarat 4"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_prosperity_tree_baccarat/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Prosperity Tree Baccarat"
                                  loading="lazy"
                                  title="Prosperity Tree Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_xxxtreme_lightning_baccarat/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="XXXtreme Lightning Baccarat"
                                  loading="lazy"
                                  title="XXXtreme Lightning Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_emperor_baccarat/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Emperor Baccarat"
                                  loading="lazy"
                                  title="Emperor Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/btr_grand_bonus_baccarat/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Grand Bonus Baccarat"
                                  loading="lazy"
                                  title="Grand Bonus Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/btr_vip_baccarat/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="VIP Baccarat"
                                  loading="lazy"
                                  title="VIP Baccarat"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Blackjack
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Blackjack"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_free_bet_blackjack/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Infinite Free Bet Blackjack"
                                  loading="lazy"
                                  title="Infinite Free Bet Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_party/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Party"
                                  loading="lazy"
                                  title="Blackjack Party"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_speed_blackjack_l/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Blackjack L"
                                  loading="lazy"
                                  title="Speed Blackjack L"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_speed_blackjack_j/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Blackjack J"
                                  loading="lazy"
                                  title="Speed Blackjack J"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_silver_a/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Silver A"
                                  loading="lazy"
                                  title="Blackjack Silver A"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_silver_f/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Silver F"
                                  loading="lazy"
                                  title="Blackjack Silver F"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_vip_m/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack VIP M"
                                  loading="lazy"
                                  title="Blackjack VIP M"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_vip_r/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack VIP R"
                                  loading="lazy"
                                  title="Blackjack VIP R"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_vip_beta/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack VIP Beta"
                                  loading="lazy"
                                  title="Blackjack VIP Beta"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_grand_vip/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Grand VIP"
                                  loading="lazy"
                                  title="Blackjack Grand VIP"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_blackjack/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Blackjack"
                                  loading="lazy"
                                  title="Lightning Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_blackjack_gold_5/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Gold 5"
                                  loading="lazy"
                                  title="Blackjack Gold 5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_blackjack_1/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack 1"
                                  loading="lazy"
                                  title="Blackjack 1"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_vip_blackjack_with_surrender/thumb_3_4.webp"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="VIP Surrender Blackjack"
                                  loading="lazy"
                                  title="VIP Surrender Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_white_russian/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Russian Blackjack 1"
                                  loading="lazy"
                                  title="Russian Blackjack 1"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_unlimited_blackjack/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Unlimited BlackJack"
                                  loading="lazy"
                                  title="Unlimited BlackJack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_mambo_unlimited_bj/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Spanish Unlimited Blackjack"
                                  loading="lazy"
                                  title="Spanish Unlimited Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_blackjack_salon_priv/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Salon Privé"
                                  loading="lazy"
                                  title="Blackjack Salon Privé"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_korean_dealer_speed_blackjack/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Korean Dealer Speed Blackjack"
                                  loading="lazy"
                                  title="Korean Dealer Speed Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_quantum_blackjack_plus/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Quantum Blackjack Plus"
                                  loading="lazy"
                                  title="Quantum Blackjack Plus"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_blackjack/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="BlackJack"
                                  loading="lazy"
                                  title="BlackJack"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/btr_speed_blackjack/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Blackjack"
                                  loading="lazy"
                                  title="Speed Blackjack"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Money Wheel
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Money Wheel"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_first_person_dream_catcher/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="First Person Dream Catcher"
                                  loading="lazy"
                                  title="First Person Dream Catcher"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_imperial_quest/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Imperial Quest"
                                  loading="lazy"
                                  title="Imperial Quest"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/raw_blackbeards_superslice_rings/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackbeards SuperSlice Rings"
                                  loading="lazy"
                                  title="Blackbeards SuperSlice Rings"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/raw_lucky_mcgees_superslice_swirl/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lucky McGee's SuperSlice Swirl"
                                  loading="lazy"
                                  title="Lucky McGee's SuperSlice Swirl"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/raw_mad_joker_superslice_zones/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Mad Joker SuperSlice Zones"
                                  loading="lazy"
                                  title="Mad Joker SuperSlice Zones"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/raw_the_magnificent_superslice/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="The Magnificent SuperSlice"
                                  loading="lazy"
                                  title="The Magnificent SuperSlice"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/raw_joker__the_thief/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Joker & the Thief"
                                  loading="lazy"
                                  title="Joker & the Thief"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/mnc_boost_the_wheel/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Boost the Wheel!"
                                  loading="lazy"
                                  title="Boost the Wheel!"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/iog_wheel/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Wheel"
                                  loading="lazy"
                                  title="Wheel"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Roulette
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Roulette"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_lightning_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lightning Roulette"
                                  loading="lazy"
                                  title="Lightning Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_immersive_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Immersive Roulette"
                                  loading="lazy"
                                  title="Immersive Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_instant_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Instant Roulette"
                                  loading="lazy"
                                  title="Instant Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_autoroulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Auto-Roulette"
                                  loading="lazy"
                                  title="Auto-Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_speed_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Roulette"
                                  loading="lazy"
                                  title="Speed Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_american_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="American Roulette"
                                  loading="lazy"
                                  title="American Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_double_ball_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Double Ball Roulette"
                                  loading="lazy"
                                  title="Double Ball Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_japanese_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Japanese Roulette"
                                  loading="lazy"
                                  title="Japanese Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_salon_priv_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Salon Privé Roulette"
                                  loading="lazy"
                                  title="Salon Privé Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_emperor_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Emperor Roulette"
                                  loading="lazy"
                                  title="Emperor Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_hindi_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Hindi Roulette"
                                  loading="lazy"
                                  title="Hindi Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_speed_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Speed Roulette"
                                  loading="lazy"
                                  title="Speed Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_diamond_roulette/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Diamond Roulette"
                                  loading="lazy"
                                  title="Diamond Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_trke_rulet/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Türkçe Rulet"
                                  loading="lazy"
                                  title="Türkçe Rulet"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_ruletka_russia/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Russian Roulette"
                                  loading="lazy"
                                  title="Russian Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_prestige_auto_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Prestige Auto Roulette"
                                  loading="lazy"
                                  title="Prestige Auto Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_oracle_roulette_360/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Oracle Roulette 360"
                                  loading="lazy"
                                  title="Oracle Roulette 360"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_korean_dealer_lightning_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Korean Dealer Lightning Roulette"
                                  loading="lazy"
                                  title="Korean Dealer Lightning Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_deutsches_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Deutsches Roulette"
                                  loading="lazy"
                                  title="Deutsches Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_french_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="French Roulette"
                                  loading="lazy"
                                  title="French Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_greek_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Greek Roulette"
                                  loading="lazy"
                                  title="Greek Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_hindi_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Hindi Roulette"
                                  loading="lazy"
                                  title="Hindi Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_prestige_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Prestige Roulette"
                                  loading="lazy"
                                  title="Prestige Roulette"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/aes_roulette/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Roulette"
                                  loading="lazy"
                                  title="Roulette"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Lottery
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Lottery"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_mega_ball/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Mega Ball"
                                  loading="lazy"
                                  title="Mega Ball"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_lucky_7/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lucky 7"
                                  loading="lazy"
                                  title="Lucky 7"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_32_cards/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="32 Cards"
                                  loading="lazy"
                                  title="32 Cards"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_5bet/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="5Bet"
                                  loading="lazy"
                                  title="5Bet"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_7bet/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="7Bet"
                                  loading="lazy"
                                  title="7Bet"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_keno/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Keno"
                                  loading="lazy"
                                  title="Keno"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_1bet/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="1Bet"
                                  loading="lazy"
                                  title="1Bet"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_lucky6/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lucky6"
                                  loading="lazy"
                                  title="Lucky6"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_fast_keno/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Fast Keno"
                                  loading="lazy"
                                  title="Fast Keno"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_mega_fire_blaze_lucky_ball_live/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Mega Fire Blaze Lucky Ball Live"
                                  loading="lazy"
                                  title="Mega Fire Blaze Lucky Ball Live"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Poker
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Poker"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_texas_holdem_bonus_poker/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Texas Hold'em Bonus Poker"
                                  loading="lazy"
                                  title="Texas Hold'em Bonus Poker"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_caribbean_stud_poker/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Caribbean Stud Poker"
                                  loading="lazy"
                                  title="Caribbean Stud Poker"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_triple_card_poker/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Triple Card Poker"
                                  loading="lazy"
                                  title="Triple Card Poker"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_deal_or_no_deal/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Deal or No Deal"
                                  loading="lazy"
                                  title="Deal or No Deal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_casino_holdem/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Casino Hold'em"
                                  loading="lazy"
                                  title="Casino Hold'em"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_teen_patti_3_card/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Teen Patti 3 Card"
                                  loading="lazy"
                                  title="Teen Patti 3 Card"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_bet_on_teen_patti/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Bet on Teen Patti"
                                  loading="lazy"
                                  title="Bet on Teen Patti"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_one_day_teen_patti/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="One Day Teen Patti"
                                  loading="lazy"
                                  title="One Day Teen Patti"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_andar_bahar/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Andar Bahar"
                                  loading="lazy"
                                  title="Andar Bahar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_casino_stud_poker/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Casino Stud Poker"
                                  loading="lazy"
                                  title="Casino Stud Poker"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_teen_patti/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Teen Patti"
                                  loading="lazy"
                                  title="Teen Patti"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/tvb_poker/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Poker"
                                  loading="lazy"
                                  title="Poker"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full overflow-hidden mt-2">
                      <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                        <div className="flex items-center gap-2 px-1">
                          <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                            Live Lobby
                          </span>
                        </div>
                        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                            type="button"
                          >
                            See All
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                          <button
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={27}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="var(--color-primary)"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="scrollShow-Live Lobby"
                        className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        <div className="w-full flex gap-[8px] py-1">
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_baccarat_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat Lobby"
                                  loading="lazy"
                                  title="Baccarat Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_top_games_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Top Games Lobby"
                                  loading="lazy"
                                  title="Top Games Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_game_shows_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Game Shows Lobby"
                                  loading="lazy"
                                  title="Game Shows Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_andar_bahar_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Andar Bahar Lobby"
                                  loading="lazy"
                                  title="Andar Bahar Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_popular_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Popular Lobby"
                                  loading="lazy"
                                  title="Popular Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/pltl_live_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Live Lobby"
                                  loading="lazy"
                                  title="Live Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_roulette_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Roulette Lobby"
                                  loading="lazy"
                                  title="Roulette Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_blackjack_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Lobby"
                                  loading="lazy"
                                  title="Blackjack Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_poker_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Poker Lobby"
                                  loading="lazy"
                                  title="Poker Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_first_person_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="First Person Lobby"
                                  loading="lazy"
                                  title="First Person Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_roulette_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Roulette Lobby"
                                  loading="lazy"
                                  title="Roulette Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_blackjack_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Blackjack Lobby"
                                  loading="lazy"
                                  title="Blackjack Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_poker_lobby/thumb_3_4_custom.webp?q=65&w=600&px=auto&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Poker Lobby"
                                  loading="lazy"
                                  title="Poker Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_baccarat_lobby/thumb_3_4.webp"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Baccarat Lobby"
                                  loading="lazy"
                                  title="Baccarat Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_sic_bo_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Sic Bo Lobby"
                                  loading="lazy"
                                  title="Sic Bo Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_lucky_7_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Lucky 7 Lobby"
                                  loading="lazy"
                                  title="Lucky 7 Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/ezg_32_cards_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="32 Cards Lobby"
                                  loading="lazy"
                                  title="32 Cards Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_hindi_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Hindi Lobby"
                                  loading="lazy"
                                  title="Hindi Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_korean_dealer_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Korean Dealer Lobby"
                                  loading="lazy"
                                  title="Korean Dealer Lobby"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                              <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                <img
                                  src="https://luckmedia.link/evo_dice_lobby/thumb_3_4_custom.webp?q=20&blur=2&cs=tinysrgb&w=400&px=80&auto=format"
                                  width="auto"
                                  height="auto"
                                  className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                  alt="Dice Lobby"
                                  loading="lazy"
                                  title="Dice Lobby"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveCasinoTwo;
