

const EventHeader = ({data}) => {
    return (
        <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between items-center px-2 mt-2 bg-bg_Quaternary rounded-sm py-2">
          <div
            id="playIcon"
            className="flex items-center justify-start gap-x-3 w-[92%]"
          >
            <span className="min-w-[4%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1875_77994)">
                  <path
                    d="M13.2984 9.60764L9.14541 6.58877C8.993 6.4783 8.79068 6.46166 8.62363 6.54751C8.45525 6.6327 8.3501 6.80574 8.3501 6.99275V13.0285C8.3501 13.2175 8.45525 13.3899 8.62363 13.4751C8.69485 13.511 8.77271 13.529 8.85125 13.529C8.95374 13.529 9.05756 13.4964 9.14541 13.4318L13.2984 10.4156C13.4295 10.3191 13.506 10.17 13.506 10.0116C13.5067 9.85056 13.4281 9.70215 13.2984 9.60764Z"
                    fill="#C10B32"
                  ></path>
                  <path
                    d="M10.0003 0C4.47639 0 0 4.47639 0 10.0003C0 15.5223 4.47639 19.9973 10.0003 19.9973C15.5229 19.9973 20 15.5216 20 10.0003C20.0007 4.47639 15.5229 0 10.0003 0ZM10.0003 18.3288C5.40015 18.3288 1.67049 14.6012 1.67049 10.0003C1.67049 5.40148 5.40015 1.66916 10.0003 1.66916C14.5998 1.66916 18.3288 5.40082 18.3288 10.0003C18.3295 14.6012 14.5998 18.3288 10.0003 18.3288Z"
                    fill="#C10B32"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1875_77994">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="bg-titleGrd text-transparent bg-clip-text font-lato text-xl font-bold">
              <span className="capitalize w-max break-words">
              {data?.result?.length > 0 && data?.result?.[0]?.eventName}
              </span>
              {/* <span className="">vs</span>
              <span className="capitalize w-max break-words">
                Bangladesh
              </span> */}
            </span>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1717_31141)">
                  <path
                    d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                    fill="#C10B32"
                  ></path>
                  <path
                    d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                    fill="#C10B32"
                  ></path>
                  <path
                    d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                    fill="#C10B32"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1717_31141">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
};

export default EventHeader;