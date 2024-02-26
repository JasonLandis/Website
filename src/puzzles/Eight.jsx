import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


const Eight = () => {
    const { count, codes } = useContext(CountContext);
    const { page } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '' }); 
    
    const appearNum = 90;

    useEffect(() => {
        setPuzzle(codes[8]);
    }, [codes]);

    useEffect(() => {
        if (count === appearNum) {
            puzzleDisplayApi.start({ right: '-10px' });
        } else if (count === appearNum + 1) {
            puzzleDisplayApi.start({ right: '-200px' });
        }

        if (page !== 'home') {
            puzzleDisplayApi.start({ right: '-200px' });
        }
    }, [count, page]);

    const reverseCode = (code) => {
        let newCode = '';
        for (let i = code.length - 1; i >= 0; i--) {
            newCode += code[i];
        }
        return newCode;
    }

    const reverseNum = (num) => {
        return num.toString().split('').reverse().join('') * 1;
    }        

    return (
        <>
            {puzzle && (count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...puzzleDisplay }}>
                    {reverseNum(puzzle.inputNum)} - {reverseCode(puzzle.code)}
                </animated.div>
            )}
        </>
    );
};

export default Eight;
