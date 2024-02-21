import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear: 18
// Input: 40 - 80
// Code: Random 8 character string
const One = () => {
    const { count, codes } = useContext(CountContext);
    const { page } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '' });
    
    const appearNum = 18;

    useEffect(() => {
        setPuzzle(codes[1]);
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

    return (
        <>
            {puzzle && (count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...puzzleDisplay }}>
                    {puzzle.inputNum} - {puzzle.code}
                </animated.div>
            )}
        </>
    );
};

export default One;
