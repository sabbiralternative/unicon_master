const Banner = () => {
  return (
    <>
      <div
        title="InPlayAndPopulars"
        id="banners"
        className="w-full px-[6px] rounded-md overflow-hidden"
        style={{ aspectRatio: "2.00561 / 1", maxHeight: "350px" }}
      >
        <div className="w-full relative h-full z-10 rounded-md overflow-hidden">
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/DelhiDevils-1718966736075"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform translate-x-full z-0"
              alt="Carousel Image 0"
              loading="lazy"
              title="Carousel Image 0"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/AssociateSharjah-1718966683664"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform z-0"
              alt="Carousel Image 1"
              loading="lazy"
              title="Carousel Image 1"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/PrincipleGulf-1718966637662"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform z-0"
              alt="Carousel Image 2"
              loading="lazy"
              title="Carousel Image 2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/IshanCrore-1718966438595"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform z-0 translate-x-full z-0"
              alt="Carousel Image 3"
              loading="lazy"
              title="Carousel Image 3"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform -translate-x-full z-0 z-0"
              alt="Carousel Image 4"
              loading="lazy"
              title="Carousel Image 4"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://promomaterial.imgix.net/inPlaySlidingBanners/DelDubSponsor-1718966819602"
              width="100"
              height="100"
              className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform -translate-x-full z-0 translate-x-0 z-10"
              alt="Carousel Image 5"
              loading="lazy"
              title="Carousel Image 5"
            />
          </div>
        </div>
      </div>
      <div
        title="Sports"
        id="sportsTabsBtns"
        className="grid gap-0.5 grid-cols-5 grid-flow-col w-full bg-transparent px-[6px] py-1.5 overflow-x-auto text-selection-none"
      >
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="cricket"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461957?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="cricket-image"
                loading="lazy"
                title="cricket"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                cricket
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Football"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514974')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514989?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Football-image"
                loading="lazy"
                title="Football"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Football
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Tennis"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559167')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559179?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Tennis-image"
                loading="lazy"
                title="Tennis"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Tennis
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Horse"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625542')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625546?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Horse-image"
                loading="lazy"
                title="Horse"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Horse
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Greyhound"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684708')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684721?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Greyhound-image"
                loading="lazy"
                title="Greyhound"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Greyhound
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>
        </span>
      </div>
      <div
        title="scaleton-Quick"
        className="w-full h-max overflow-auto no-scrollbar scroll-smooth"
      >
        <div className="grid grid-rows-2 grid-flow-col w-max">
          <span
            title="QuickButtons-0"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275808')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Evolution-image"
                  loading="lazy"
                  title="Evolution"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Evolution
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-1"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352020')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Sportsbook-image"
                  loading="lazy"
                  title="Sportsbook"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Sportsbook
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-2"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704269')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Live Casinos-image"
                  loading="lazy"
                  title="Live Casinos"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Live Casinos
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-3"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799120')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="e-Cricket-image"
                  loading="lazy"
                  title="e-Cricket"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  e-Cricket
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-4"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853715')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Card Games-image"
                  loading="lazy"
                  title="Card Games"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Card Games
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-5"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015298')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Slot Games-image"
                  loading="lazy"
                  title="Slot Games"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Slot Games
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-6"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077487')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Multiplayer Games-image"
                  loading="lazy"
                  title="Multiplayer Games"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Multiplayer Games
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-7"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199645')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Aura-image"
                  loading="lazy"
                  title="Aura"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Aura
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-8"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252625')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Fishing games-image"
                  loading="lazy"
                  title="Fishing games"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Fishing games
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>{" "}
          </span>
          <span
            title="QuickButtons-9"
            className="min-w-[180px] col-span-1 px-[3px] py-[3px]"
          >
            <div
              className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
              style={{
                backgroundImage:
                  "url('https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763420?q=65&w=600&px=auto&auto=format')",
              }}
            >
              <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                <img
                  src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                  width="16"
                  height="16"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                  alt="Color Game-image"
                  loading="lazy"
                  title="Color Game"
                />
                <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                  Color Game
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
