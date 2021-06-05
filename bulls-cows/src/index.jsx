import React, {useState} from 'react';
import { render } from 'react-dom';
import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { Images } from './components/Images/Images';
import './style.css';

const Game = ({set, delka}) => {
  function randomUnique(set, delka) {
    if (delka > set.length) {
      throw new Error('Cannot generate that many unique characters.');
    }
    const arr = [...set];
    for (let i = 0; i < delka; i++) {
      const r = i + Math.floor(Math.random() * (set.length - i));
      [arr[i], arr[r]] = [arr[r], arr[i]];
    }
    const rnd = arr.slice(0, delka);
    console.log(rnd)
    return  rnd //arr.slice(0, delka);
  }


  function parse(set, delka, input) {
    if (input.length !== delka) {
      return 'length';
    }
    const split = input.split('');
    for (let i = 0; i < split.length; i++) {
      const c = split[i];
      if (!set.includes(c)) {
        return 'not-in-set';
      }
      if (split.lastIndexOf(c) > i) {
        return 'repeating';
      }
    }
    return split;
  }

  function check(rnd, tip) {
    const result = {
        bulls: 0,
        cows: 0,
        calf: 0,
        guess: tip,
    };
    for (let i = 0; i < rnd.length; i++) {
      if (rnd[i] === tip[i]) {
        result.bulls++;
      } else if (rnd.includes(tip[i])) {
        result.cows++;
      } else {
        result.calf++;
      }
    }
    return result;
  }

  function reportError(error) {
    switch (error) {
      case 'length':
        alert('This number is too long or short to be valid!');
        break;
      case 'not-in-set':
        alert('The guess contains an illegal character!');
        break;
      case 'repeating':
        alert('The guess contains a repeating digit!');
        break;
      default:
        alert(`Error: ${error}`);
    }
  };



  const [history, setHistory] = useState([]);
  const [rnd, setRnd] = useState(() => randomUnique(set, delka));
  const [start, setStart] = useState(() => new Date())
  const [stop, setStop] = useState(null)

  const handleGuess = (guess) => {
    const parsed = parse(set, delka, guess)
    console.log(guess);
    if (typeof parsed === 'string') {
        reportError(parsed);
        return;
    }
    
    const result = check(rnd, parsed);
    setHistory([...history, result] );

    const {bulls, cows} = check(rnd, parsed);
    if (bulls === delka) {
        console.log( `you won the game, after ${history.length +1} guesses`)
    } else {
        console.log(`${guess} : ${bulls} bulls | ${cows} cows | guesses: ${history.length +1}`)
    }
  };

  return (
    <>
      <Header start={start} stop={stop}/>
      <Images />
      <History history={history}/>
      <Controls onGuess={handleGuess} />
    </>
  );
};

render(<Game set={"0123456789".split("")} delka={4} />, document.querySelector('#app'));
