import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Puzzles.css'


// Appear: 10
// Input: 11 - 15
// Code: Random 8 character string
const Zero = () => {
    const { count, codes } = useContext(CountContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { top: '-100px' } }));
    const [puzzle, setPuzzle] = useState({ appearNum: -2, inputNum: -2, code: '' });

    useEffect(() => {
        setPuzzle(codes[0]);
    }, [codes]);

    useEffect(() => {
        if (count === puzzle.appearNum) {
            puzzleDisplayApi.start({ top: '10px' });
        } else if (count === puzzle.appearNum + 1) {
            puzzleDisplayApi.start({ top: '-100px' });
        }
    }, [count]);

    return (
        <>
            {puzzle && (count === puzzle.appearNum || count === puzzle.appearNum + 1) && (
                <animated.div className="puzzle-container top-right" style={{ ...puzzleDisplay }}>
                    {puzzle.inputNum} - {puzzle.code}
                </animated.div>
            )}
        </>
    );
};

export default Zero;
