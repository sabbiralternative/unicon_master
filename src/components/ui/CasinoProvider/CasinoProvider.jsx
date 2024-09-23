const CasinoProvider = () => {
  return (
    <div title="Casino" className="py-1 px-[6px] w-full">
      <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
        <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="var(--color-iconsColor)"
          >
            <path
              d="M11.9802 5.61846C8.76732 3.66374 10.274 0.904781 10.3386 0.790102C10.4324 0.626906 10.4321 0.426129 10.3379 0.263215C10.2436 0.100301 10.0697 0 9.88143 0C8.22757 0 6.93248 0.469898 6.03217 1.39669C4.49377 2.9803 4.56513 5.445 4.59558 6.49751C4.59895 6.61409 4.60187 6.71484 4.60187 6.78966C4.60187 7.57111 4.72724 8.29255 4.83787 8.92905C4.90917 9.33922 4.97073 9.69346 4.98166 9.97196C4.99337 10.2701 4.93895 10.3384 4.93663 10.3412C4.92886 10.3504 4.86417 10.3848 4.68927 10.3848C4.48979 10.3848 4.34273 10.3196 4.21245 10.1736C3.70352 9.60289 3.66833 8.0447 3.76564 7.19698C3.78305 7.04749 3.73576 6.89773 3.63567 6.78537C3.53562 6.67301 3.39232 6.60874 3.24185 6.60874C1.87269 6.60874 0.849609 8.84777 0.849609 10.8497C0.849609 11.7908 1.03889 12.7127 1.41221 13.5898C1.77313 14.4377 2.28778 15.203 2.94193 15.8643C4.30431 17.2415 6.10055 18 7.99983 18C9.90674 18 11.7025 17.2522 13.0564 15.8945C14.4067 14.5403 15.1504 12.7486 15.1504 10.8496C15.1504 8.4266 13.2545 6.39369 11.9802 5.61846ZM7.99983 16.9453C4.69574 16.9453 1.90433 14.1539 1.90433 10.8496C1.90433 10.0461 2.09607 9.20257 2.43037 8.53548C2.50846 8.37963 2.58858 8.24593 2.66764 8.13329C2.67647 9.0033 2.81428 10.1893 3.42442 10.8745C3.75355 11.2441 4.19093 11.4395 4.6893 11.4395C5.15488 11.4395 5.50968 11.2983 5.74375 11.02C6.18137 10.4998 6.04704 9.72693 5.87702 8.74842C5.7737 8.15393 5.65659 7.48009 5.65659 6.78962C5.65659 6.69952 5.65346 6.59176 5.64988 6.46692C5.62102 5.46996 5.56093 3.39543 6.78869 2.13159C7.33984 1.56421 8.10934 1.2189 9.08282 1.10074C8.97292 1.46566 8.87817 1.92892 8.87452 2.44761C8.86643 3.59047 9.30356 5.22457 11.4321 6.51952C12.4619 7.14604 14.0957 8.87562 14.0957 10.8497C14.0957 14.2108 11.3611 16.9453 7.99983 16.9453Z"
              fill="var(--color-iconsColor)"
            ></path>
          </svg>
          <div className="w-[100%] flex flex-row justify-between">
            <span className="text-text_Ternary font-semibold capitalize">
              casino Providers
            </span>
            <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
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
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="var(--color-primary)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 6l-6 6l6 6"></path>
                </svg>
              </button>
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="var(--color-primary)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="scrollShow"
          className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto overflow-x-auto"
        >
          <div className="min-w-full grid grid-rows-3 grid-flow-col gap-2">
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Evolution Gaming"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Evolution Gaming"
                  loading="lazy"
                  title="Evolution Gaming"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Red Tiger"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rtg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Red Tiger"
                  loading="lazy"
                  title="Red Tiger"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="NetEnt"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ntn/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="NetEnt"
                  loading="lazy"
                  title="NetEnt"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Spribe"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/spb/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Spribe"
                  loading="lazy"
                  title="Spribe"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Ezugi"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ezg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Ezugi"
                  loading="lazy"
                  title="Ezugi"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Play'n Go"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/png/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Play'n Go"
                  loading="lazy"
                  title="Play'n Go"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Betsolutions"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/btsl/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Betsolutions"
                  loading="lazy"
                  title="Betsolutions"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Charismatic"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/crc/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Charismatic"
                  loading="lazy"
                  title="Charismatic"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Pragmatic Play"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/pgp/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Pragmatic Play"
                  loading="lazy"
                  title="Pragmatic Play"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Habanero"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/hbn/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Habanero"
                  loading="lazy"
                  title="Habanero"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Quickspin"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/qps/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Quickspin"
                  loading="lazy"
                  title="Quickspin"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Gamzix"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/gmz/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Gamzix"
                  loading="lazy"
                  title="Gamzix"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Yggdrasil"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ygg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Yggdrasil"
                  loading="lazy"
                  title="Yggdrasil"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Northern Lights Gaming"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/nrl/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Northern Lights Gaming"
                  loading="lazy"
                  title="Northern Lights Gaming"
                />
              </div>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
              title="Rabcat Gambling"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rbc/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Rabcat Gambling"
                  loading="lazy"
                  title="Rabcat Gambling"
                />
              </div>
            </button>
            <button
              title="4ThePlayer"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ftp/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="4ThePlayer"
                  loading="lazy"
                  title="4ThePlayer"
                />
              </div>
            </button>
            <button
              title="Reflex Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rfg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Reflex Gaming"
                  loading="lazy"
                  title="Reflex Gaming"
                />
              </div>
            </button>
            <button
              title="ReelPlay"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rpl/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="ReelPlay"
                  loading="lazy"
                  title="ReelPlay"
                />
              </div>
            </button>
            <button
              title="Peter &amp; Sons"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/pas/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Peter &amp; Sons"
                  loading="lazy"
                  title="Peter &amp; Sons"
                />
              </div>
            </button>
            <button
              title="Bang Bang Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bbg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Bang Bang Games"
                  loading="lazy"
                  title="Bang Bang Games"
                />
              </div>
            </button>
            <button
              title="Hot Rise Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/hrg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Hot Rise Games"
                  loading="lazy"
                  title="Hot Rise Games"
                />
              </div>
            </button>
            <button
              title="Bulletproof Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bpg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Bulletproof Games"
                  loading="lazy"
                  title="Bulletproof Games"
                />
              </div>
            </button>
            <button
              title="Jade Rabbit Studio"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/jdr/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Jade Rabbit Studio"
                  loading="lazy"
                  title="Jade Rabbit Studio"
                />
              </div>
            </button>
            <button
              title="Reel Life Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rlg/logo_3_2_cl_dark.svg?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Reel Life Games"
                  loading="lazy"
                  title="Reel Life Games"
                />
              </div>
            </button>
            <button
              title="GameVy"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/gmv/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="GameVy"
                  loading="lazy"
                  title="GameVy"
                />
              </div>
            </button>
            <button
              title="Jelly"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/jly/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Jelly"
                  loading="lazy"
                  title="Jelly"
                />
              </div>
            </button>
            <button
              title="Boomerang Studios"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/brg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Boomerang Studios"
                  loading="lazy"
                  title="Boomerang Studios"
                />
              </div>
            </button>
            <button
              title="Naga Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ngg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Naga Games"
                  loading="lazy"
                  title="Naga Games"
                />
              </div>
            </button>
            <button
              title="OneGame"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/onegame/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="OneGame"
                  loading="lazy"
                  title="OneGame"
                />
              </div>
            </button>
            <button
              title="Playtech"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/plt/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Playtech"
                  loading="lazy"
                  title="Playtech"
                />
              </div>
            </button>
            <button
              title="Playtech Live"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/pltl/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Playtech Live"
                  loading="lazy"
                  title="Playtech Live"
                />
              </div>
            </button>
            <button
              title="Nolimit City"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/nlc/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Nolimit City"
                  loading="lazy"
                  title="Nolimit City"
                />
              </div>
            </button>
            <button
              title="Big Time Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/btg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Big Time Gaming"
                  loading="lazy"
                  title="Big Time Gaming"
                />
              </div>
            </button>
            <button
              title="Relax Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/reg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Relax Gaming"
                  loading="lazy"
                  title="Relax Gaming"
                />
              </div>
            </button>
            <button
              title="PGSoft"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/pgs/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="PGSoft"
                  loading="lazy"
                  title="PGSoft"
                />
              </div>
            </button>
            <button
              title="Jili Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/jil/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Jili Games"
                  loading="lazy"
                  title="Jili Games"
                />
              </div>
            </button>
            <button
              title="Mancala Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/mnc/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Mancala Gaming"
                  loading="lazy"
                  title="Mancala Gaming"
                />
              </div>
            </button>
            <button
              title="3 Oaks Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/oak/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="3 Oaks Gaming"
                  loading="lazy"
                  title="3 Oaks Gaming"
                />
              </div>
            </button>
            <button
              title="Kingmidas"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/kng/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Kingmidas"
                  loading="lazy"
                  title="Kingmidas"
                />
              </div>
            </button>
            <button
              title="AE Sexy"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/aes/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="AE Sexy"
                  loading="lazy"
                  title="AE Sexy"
                />
              </div>
            </button>
            <button
              title="Spinomenal"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/spn/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Spinomenal"
                  loading="lazy"
                  title="Spinomenal"
                />
              </div>
            </button>
            <button
              title="Smartsoft Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/sms/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Smartsoft Gaming"
                  loading="lazy"
                  title="Smartsoft Gaming"
                />
              </div>
            </button>
            <button
              title="Aviatrix"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/avx/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Aviatrix"
                  loading="lazy"
                  title="Aviatrix"
                />
              </div>
            </button>
            <button
              title="TVBet"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/tvb/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="TVBet"
                  loading="lazy"
                  title="TVBet"
                />
              </div>
            </button>
            <button
              title="Fantasma Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/fnt/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Fantasma Games"
                  loading="lazy"
                  title="Fantasma Games"
                />
              </div>
            </button>
            <button
              title="Wazdan"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/wzd/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Wazdan"
                  loading="lazy"
                  title="Wazdan"
                />
              </div>
            </button>
            <button
              title="Beter Live"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Beter Live"
                  loading="lazy"
                  title="Beter Live"
                />
              </div>
            </button>
            <button
              title="Fugaso"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/fgs/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Fugaso"
                  loading="lazy"
                  title="Fugaso"
                />
              </div>
            </button>
            <button
              title="Slotmill"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/sml/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Slotmill"
                  loading="lazy"
                  title="Slotmill"
                />
              </div>
            </button>
            <button
              title="JDB"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/jdb/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="JDB"
                  loading="lazy"
                  title="JDB"
                />
              </div>
            </button>
            <button
              title="Tom Horn Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/tmh/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Tom Horn Gaming"
                  loading="lazy"
                  title="Tom Horn Gaming"
                />
              </div>
            </button>
            <button
              title="Endorphina"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/end/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Endorphina"
                  loading="lazy"
                  title="Endorphina"
                />
              </div>
            </button>
            <button
              title="NetGaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ntg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="NetGaming"
                  loading="lazy"
                  title="NetGaming"
                />
              </div>
            </button>
            <button
              title="Hacksaw Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/hcw/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Hacksaw Gaming"
                  loading="lazy"
                  title="Hacksaw Gaming"
                />
              </div>
            </button>
            <button
              title="BGaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bgm/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="BGaming"
                  loading="lazy"
                  title="BGaming"
                />
              </div>
            </button>
            <button
              title="Gamebeat"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/gmb/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Gamebeat"
                  loading="lazy"
                  title="Gamebeat"
                />
              </div>
            </button>
            <button
              title="AvatarUX"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/aux/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="AvatarUX"
                  loading="lazy"
                  title="AvatarUX"
                />
              </div>
            </button>
            <button
              title="Blueprint Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/blg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Blueprint Gaming"
                  loading="lazy"
                  title="Blueprint Gaming"
                />
              </div>
            </button>
            <button
              title="Manna Play"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/mnn/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Manna Play"
                  loading="lazy"
                  title="Manna Play"
                />
              </div>
            </button>
            <button
              title="Mobilots"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/mbl/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Mobilots"
                  loading="lazy"
                  title="Mobilots"
                />
              </div>
            </button>
            <button
              title="Push Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/psh/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Push Gaming"
                  loading="lazy"
                  title="Push Gaming"
                />
              </div>
            </button>
            <button
              title="RTG Slots"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rts/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="RTG Slots"
                  loading="lazy"
                  title="RTG Slots"
                />
              </div>
            </button>
            <button
              title="Thunderkick"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/tdk/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Thunderkick"
                  loading="lazy"
                  title="Thunderkick"
                />
              </div>
            </button>
            <button
              title="Kiron Interactive"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/kir/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Kiron Interactive"
                  loading="lazy"
                  title="Kiron Interactive"
                />
              </div>
            </button>
            <button
              title="BF Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bfg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="BF Games"
                  loading="lazy"
                  title="BF Games"
                />
              </div>
            </button>
            <button
              title="RubyPlay"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/rbp/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="RubyPlay"
                  loading="lazy"
                  title="RubyPlay"
                />
              </div>
            </button>
            <button
              title="Booming Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bmg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Booming Games"
                  loading="lazy"
                  title="Booming Games"
                />
              </div>
            </button>
            <button
              title="Raw iGaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/raw/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Raw iGaming"
                  loading="lazy"
                  title="Raw iGaming"
                />
              </div>
            </button>
            <button
              title="Leander Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/lea/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Leander Games"
                  loading="lazy"
                  title="Leander Games"
                />
              </div>
            </button>
            <button
              title="CQ9"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/cqc/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="CQ9"
                  loading="lazy"
                  title="CQ9"
                />
              </div>
            </button>
            <button
              title="Atmosfera"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/atm/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Atmosfera"
                  loading="lazy"
                  title="Atmosfera"
                />
              </div>
            </button>
            <button
              title="Novomatic"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/nvm/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Novomatic"
                  loading="lazy"
                  title="Novomatic"
                />
              </div>
            </button>
            <button
              title="Winfinity"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/win/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Winfinity"
                  loading="lazy"
                  title="Winfinity"
                />
              </div>
            </button>
            <button
              title="Onlyplay"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/onl/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Onlyplay"
                  loading="lazy"
                  title="Onlyplay"
                />
              </div>
            </button>
            <button
              title="Darwin Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/dwg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Darwin Gaming"
                  loading="lazy"
                  title="Darwin Gaming"
                />
              </div>
            </button>
            <button
              title="Booongo"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bng/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Booongo"
                  loading="lazy"
                  title="Booongo"
                />
              </div>
            </button>
            <button
              title="Playson"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ply/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Playson"
                  loading="lazy"
                  title="Playson"
                />
              </div>
            </button>
            <button
              title="Yolted"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/ylt/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Yolted"
                  loading="lazy"
                  title="Yolted"
                />
              </div>
            </button>
            <button
              title="iMoon Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/imn/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="iMoon Games"
                  loading="lazy"
                  title="iMoon Games"
                />
              </div>
            </button>
            <button
              title="InOut Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/iog/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="InOut Games"
                  loading="lazy"
                  title="InOut Games"
                />
              </div>
            </button>
            <button
              title="Print Studios"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/pnt/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Print Studios"
                  loading="lazy"
                  title="Print Studios"
                />
              </div>
            </button>
            <button
              title="Backseat Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bcs/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Backseat Gaming"
                  loading="lazy"
                  title="Backseat Gaming"
                />
              </div>
            </button>
            <button
              title="SpinOro"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/spi/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="SpinOro"
                  loading="lazy"
                  title="SpinOro"
                />
              </div>
            </button>
            <button
              title="PHOENIX 7"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/phx/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="PHOENIX 7"
                  loading="lazy"
                  title="PHOENIX 7"
                />
              </div>
            </button>
            <button
              title="Bullshark Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/bls/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Bullshark Games"
                  loading="lazy"
                  title="Bullshark Games"
                />
              </div>
            </button>
            <button
              title="Qubit Games"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/qbt/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Qubit Games"
                  loading="lazy"
                  title="Qubit Games"
                />
              </div>
            </button>
            <button
              title="NowNow Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/now/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="NowNow Gaming"
                  loading="lazy"
                  title="NowNow Gaming"
                />
              </div>
            </button>
            <button
              title="Hungry Bear Gaming"
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out transition-all bg-bg_CasinoProvider ease-in-out duration-100 flex xxs:min-w-[80px] xs:min-w-[100px] sm:min-w-[150px] min-h-[45px] md:min-h-[60px] px-5 py-2 flex-col items-center justify-center gap-1 rounded-[12px] border-2 rounded-2 border-quaternary text-text_Quaternary whitespace-nowrap uppercase font-lato font-[700] text-xs hover:scale-105 shadow-homeCasinoCardGamesShadow cursor-pointer"
              type="button"
            >
              <div
                title="InPlayAndPopulars"
                id="banners"
                className="py-2 flex items-center flex-col justify-center w-[80px] h-[50px]"
              >
                <img
                  src="https://luckmedia.link/providers/hbg/logo_3_2_cl_dark.svg?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                  width="80"
                  height="40"
                  className="rounded rounded-8"
                  alt="Hungry Bear Gaming"
                  loading="lazy"
                  title="Hungry Bear Gaming"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoProvider;
