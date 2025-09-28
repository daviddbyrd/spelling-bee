const WordTile = ({ letter }) => {
  return (
    <div className="h-10 w-10 bg-blue-300 flex items-center justify-center">
      {letter}
    </div>
  );
};

export default WordTile;
