const Ladder = () => {
  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh]     items-center justify-center  bg-bg_CasinoPopupBg"
    >
      <div
        className="z-2 popUpBoxShadow popUpOpenAnimation  absolute  min-w-[90%] sm:max-w-[400px] h-auto p-4 bg-bg_Quaternary p-2 xs:p-5 
        rounded-md
      "
      >
        <div className="flex flex-col items-start justify-center gap-y-2">
          <div className=" text-text_Ternary  font-lato font-semibold capitalize">
            Lambi MD - Ladder
          </div>
          <table className="w-full table-auto font-lato">
            <thead>
              <tr>
                <th className="text-center">Runs</th>
                <th className="text-center">P&amp;L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center font-normal">178</td>
                <td className="text-center font-normal  text-text_Success">
                  0
                </td>
              </tr>
              <tr>
                <td className="text-center font-normal">0-175</td>
                <td className="text-center font-normal  text-text_Success">
                  0
                </td>
              </tr>
              <tr>
                <td className="text-center font-normal">176-177</td>
                <td className="text-center font-normal text-text_Primary">
                  -200
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_Secondary px-2.5 py-1 rounded-md w-full flex items-center justify-center shadow-md 
  cursor-pointer
  "
          >
            <span className=" text-text_Quaternary font-semibold fonn-lato text-base">
              OK
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ladder;
