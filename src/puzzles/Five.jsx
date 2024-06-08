import { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 60, Input 61 - 65 (use code from puzzle 0 - 4)
const Five = () => {
    const { count, codes } = useContext(CountContext);
    const { page } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, randomNum: -2, code: '' });
    
    const appearNum = 60;

    useEffect(() => {
        setPuzzle(codes[5]);
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
                    {puzzle.inputNum} - {"[" + puzzle.randomNum + "]"}
                </animated.div>
            )}
        </>
    );
};

export default Five;
