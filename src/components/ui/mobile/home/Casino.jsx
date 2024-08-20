

const Casino = () => {
    return (
      <div title="Casino" className="py-1 px-[6px] w-full">
      <div className="flex divide-y flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow">
        <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            x="0"
            y="0"
            viewBox="0 0 511.643 511.643"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                fill="var(--color-iconsColor)"
                opacity="1"
              ></path>
            </g>
          </svg>
          <span className="text-text_Ternary font-semibold capitalize">
            casino Providers
          </span>
        </div>
        <div
          id="scrollShow"
          className="py-2.5 px-2.5 w-full h-max overflow-x-auto"
        >
          <div className="grid grid-rows-2 grid-flow-col gap-x-[6px] gap-y-2 w-max">
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/jilib.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Real Teenpatti
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/casinob.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                CASINO LOBBY
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/ezugib.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Ezugi
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/betgamesb.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                BetgamesTV
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/liveb.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                LivegamesIO
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/virtualb.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Virtual Sports
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/fishingb.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Fishing Games
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/tablegamesb.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Table Games
              </div>
            </div>
            <div className="flex w-[130px] sm:w-[130px] md:w-[143px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100">
              <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-t-[4px]">
                <div className="aspect-[1.67] w-[130px] sm:w-[130px] md:w-[143px]">
                  <img
                    src="https://mac.imgix.net/gemexchimages/bingob.png?auto=format"
                    width="500"
                    height="auto"
                    className="w-full h-full object-cover rounded-t-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                    alt="Mega Ball"
                    loading="lazy"
                    title="Mega Ball"
                  />
                </div>
              </div>
              <div className="bg-bg_CasinoGameNameBg capitalize py-1 px-1 relative truncate text-center font-lato text-xs rounded-b-[4px] text-text_Quaternary w-full -mt-[0.5rem]">
                Bingo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Casino;