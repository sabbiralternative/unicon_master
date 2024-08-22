const SuspendedOdd = ({ colSpan }) => {
  // bg-bg_ballRunning
  return (
    <span
      className={`col-span-${colSpan} h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
      <span className="w-full flex items-center px-[1px] md:px-[3px] justify-center h-full cursor-not-allowed`}
    >
      <span className="text-xs text-center w-full h-full flex items-center bg-bg_ballRunning  text-text_SuspendedFontColor font-bold justify-center rounded-sm">
        SUSPENDED
      </span>
    </span>
  );
};

export default SuspendedOdd;
