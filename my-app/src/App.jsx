import WordTile from "./components/WordTile";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [centerLetter, setCenterLetter] = useState("");
  const [edgeLetters, setEdgeLetters] = useState([]);
  const [userEntry, setUserEntry] = useState("");
  const [score, setScore] = useState(0);

  const didInitRef = useRef(false);

  useEffect(() => {
    if (didInitRef.current) return; // skip the second dev-mount
    didInitRef.current = true;

    if (!centerLetter && edgeLetters.length === 0) {
      generateLetters();
    }
  }, []);

  const randomVowel = (excludedVowels) => {
    //function returns random vowel 2
    const vowelString = "aeiou";
    while (true) {
      const curVowel = vowelString[getRandomInt(5)];
      if (!excludedVowels.includes(curVowel)) {
        return curVowel;
      }
    }
  };

  const randomCons = (excludedCons) => {
    const consString = "qwrtypsdfghjklzxcvbnm";
    while (true) {
      const curCons = consString[getRandomInt(21)];
      if (!excludedCons.includes(curCons)) {
        return curCons;
      }
    }
  };

  const generateLetters = () => {
    const letters = [];
    while (letters.length < 2) {
      const newVowel = randomVowel(letters);
      letters.push(newVowel);
    }
    while (letters.length < 7) {
      const newCons = randomCons(letters);
      letters.push(newCons);
    }
    const centerIndex = getRandomInt(7);

    // Get random permutation of 0, ... , 6
    const arr = Array.from({ length: 7 }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index [0..i]
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }

    for (let i = 0; i < 7; i++) {
      if (i === centerIndex) {
        setCenterLetter(letters[arr[i]]);
      } else {
        setEdgeLetters((prev) => [...prev, letters[arr[i]]]);
      }
    }
    console.log(letters);
    console.log(centerLetter, edgeLetters);
  };

  const validateLetter = (i) => {
    if (edgeLetters.length > i) {
      return edgeLetters[i];
    } else {
      return "";
    }
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleChange = (e) => {
    setUserEntry(e.target.value);
  };

  const handleEnter = () => {
    if (validEntry()) {
      const newScore = findScore();
      setScore((prev) => prev + newScore);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div>{score}</div>
      <input
        type="text"
        value={userEntry}
        onChange={(e) => handleChange(e)}
        className="text-center h-12 text-2xl flex items-center justify-center mb-5 border-1 border-black rounded-md focus:outline-none"
      ></input>
      <div className="h-70 w-70 flex flex-col items-center justify-center">
        <div className="h-20 w-70 flex items-center justify-center gap-4">
          <WordTile letter={validateLetter(0)} setUserEntry={setUserEntry} />
          <WordTile letter={validateLetter(1)} setUserEntry={setUserEntry} />
        </div>
        <div className="h-20 flex items-center justify-center gap-4">
          <WordTile letter={validateLetter(2)} setUserEntry={setUserEntry} />
          <WordTile
            letter={centerLetter}
            isCenter
            setUserEntry={setUserEntry}
          />
          <WordTile letter={validateLetter(3)} setUserEntry={setUserEntry} />
        </div>
        <div className="h-20 w-70 flex items-center justify-center gap-4">
          <WordTile letter={validateLetter(4)} setUserEntry={setUserEntry} />
          <WordTile letter={validateLetter(5)} setUserEntry={setUserEntry} />
        </div>
      </div>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default App;
