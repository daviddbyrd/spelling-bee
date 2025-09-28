import WordTile from "./components/WordTile";
import { useState, useEffect } from "react";

const App = () => {
  const [centerLetter, setCenterLetter] = useState("");
  const [edgeLetters, setEdgeLetters] = useState([]);

  useEffect(() => {
    randomVowel({excludedVowels: []});
  }, [])

  const randomVowel = ({excludedVowels}) => {
    //function returns random vowel 2
    const vowelString = "aeiou";
    while(true){
      const curletter = vowelString[getRandomInt(5)];
      if(!(excludedVowels.includes(curletter))){
        return (curletter);
      }
    }
  }

  const randomCons = ({excludedCons}) => {
    const consString = "qwrtypsdfghjklzxcvbnm";
    while(true){
      const curCons = consString[getRandomInt(21)];
      if(!(excludedCons.includes(curletter))){
        return curCons;
      }
    }
  }

  const generateLetters = () => {
    const letters =[];
    while(letters.length < 2){
      const newVowel = randomVowel(letters);
      letters.push(newVowel);
    }
    while(letters.length < 7){
      const newCons = randomCons(letters);
      letters.push(newCons);
    }
    const centerIndex = getRandomInt(7);
    for(let i = 0; i < 7; i++){
      if(i === centerIndex){
        setCenterLetter(letters[i]);
      }
      else{
        setEdgeLetters(prev => [...prev, letters[i]]);
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
