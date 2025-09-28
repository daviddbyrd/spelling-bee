const WordTile = ({ letter }) => {
  return (
    <div className="h-14 w-14 rounded-full bg-yellow-300 border-2 border-grey flex items-center justify-center">
      {letter}
    </div>
  );
};

export default WordTile;
