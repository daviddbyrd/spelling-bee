const WordTile = ({ letter, isCenter, setUserEntry }) => {
  const handleClick = () => {
    setUserEntry((prev) => prev + letter);
  };

  return (
    <div
      className={`h-14 w-14 rounded-full border-2 flex items-center justify-center cursor-pointer
        ${
          isCenter ? "bg-grey-400 border-black" : "bg-yellow-300 border-black"
        }`}
      onClick={() => handleClick()}
    >
      {letter}
    </div>
  );
};

export default WordTile;
