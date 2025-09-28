const WordTile = ({ letter, isCenter }) => {
  return (
    <div
      className={`h-14 w-14 rounded-full border-2 flex items-center justify-center
        ${isCenter ? "bg-grey-400 border-black" : "bg-yellow-300 border-black"}`}
    >
      {letter}
    </div>
  );
};

export default WordTile;