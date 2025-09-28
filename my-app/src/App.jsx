import WordTile from "./components/WordTile";
import { useState, useEffect } from "react";

const App = () => {
  const [letter, setLetter] = useState('');

  useEffect(() => {
    randomVowel({excludedVowels: []});
  }, [])

  const randomVowel = ({excludedVowels}) => {
    //function returns random vowel
    const vowelString = "aeiou";
    while(true){
      console.log("hello")
      const curletter = vowelString[getRandomInt(5)];
      if(!(excludedVowels.includes(curletter))){
        setLetter(curletter);
        return;
      }
    }
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <WordTile letter={letter} />
    </div>
  );
};

export default App;
