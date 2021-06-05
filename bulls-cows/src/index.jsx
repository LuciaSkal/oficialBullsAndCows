import React from 'react';
import { render } from 'react-dom';
import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { Images } from './components/Images/Images';
import './style.css';

const Game = () => {
  function randomUnique(set, delka) {
    if (delka > set.length) {
        throw new Error("Cannot generate that many unique characters.");
    }
    const arr = [...set];
    for (let i = 0; i < delka; i++) {
        const r = i + Math.floor(Math.random() * (set.length - i));
        [arr[i], arr[r]] = [arr[r], arr[i]];
    }
    return arr.slice(0, delka);
}

function parse(set, delka, input) {
    if (input.length !== delka) {
        return 'length';
    }
    const split = input.split("");
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
        calf: 0
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
    return result
}

function reportError(error) {
    switch (error) {
        case 'length':
            alert("This number is too long or short to be valid!");
            break;
        case 'not-in-set':
            alert("The guess contains an illegal character!");
            break;
        case 'repeating':
            alert("The guess contains a repeating digit!");
            break;
        default:
            alert(`Error: ${error}`);
    }
}

function game(wrapper, set, delka) {
    const oznam = wrapper.querySelector('.oznam')
    const tip = wrapper.querySelector('.tip')
    const button = wrapper.querySelector('button')

    let rnd = randomUnique(set, delka);
    let history = [];

    /*button.addEventListener('click', () => {
        const input = tip.value;
        const parsed = parse(set, delka, input)
        if (typeof parsed === 'string') {
            reportError(parsed);
            return;
        }
        history.push(parsed);

        const {bulls, cows} = check(rnd, parsed);
        if (bulls === delka) {
            oznam.innerHTML += `you won the game, after ${history.length} guesses`
        } else {
            oznam.innerHTML += `${input} : ${bulls} bulls | ${cows} cows | guesses: ${history.length} <br>`
        }
    });*/
}

  //game(document, "0123456789".split(""), 4);

  const handleGuess = (guess) => {
   /* const input = tip.value;
    const parsed = parse(set, delka, input)
    if (typeof parsed === 'string') {
        reportError(parsed);
        return;
    }
    history.push(parsed);

    const {bulls, cows} = check(rnd, parsed);
    if (bulls === delka) {
        oznam.innerHTML += `you won the game, after ${history.length} guesses`
    } else {
        oznam.innerHTML += `${input} : ${bulls} bulls | ${cows} cows | guesses: ${history.length} <br>`
    }*/
  }

  return (
    <>
    <Header />
    <Images />
    <History />
    <Controls onGuess={handleGuess} />
    </>
  );
}
  


render(<Game />, document.querySelector('#app'));
