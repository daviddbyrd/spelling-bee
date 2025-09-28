const WordTile = ({ letter, isCenter, setUserEntry }) => {
  const handleClick = () => {
    setUserEntry((prev) => prev + letter);
  };

  return (
    <div
      className="h-22 w-22 clip-hexagon-vertical flex items-center justify-center cursor-pointer bg-black"
      onClick={() => handleClick()}
    >
      <div
        className={`h-20 w-20 clip-hexagon-vertical flex items-center justify-center cursor-pointer
        ${
          isCenter ? "bg-gray-400 border-black" : "bg-yellow-300 border-black"
        }`}
      >
        {letter}
      </div>
    </div>
  );
};

export default WordTile;
