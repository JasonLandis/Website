import { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 30, Go to projects/about 31 - 35, Input 36 - 40
const Two = () => {
    const { count, codes } = useContext(CountContext);
    const { page } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [clueDisplay, clueDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '', cluePage: '', clueNum: -2});
    
    const appearNum = 30;

    useEffect(() => {
        setPuzzle(codes[2]);
    }, [codes]);

    useEffect(() => {
        if (count === appearNum) {
            clueDisplayApi.start({ right: '-10px' });
        } else if (count === appearNum + 1) {
            clueDisplayApi.start({ right: '-200px' });
        }

        if (page !== 'home') {
            clueDisplayApi.start({ right: '-200px' });
        }

        if (count === puzzle.clueNum) {
            if (puzzle.cluePage === '[projects]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (page !== 'projects') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }                
            }
            else if (puzzle.cluePage === '[about]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (page !== 'about') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
        }
        else if (count === puzzle.clueNum + 1) {
            puzzleDisplayApi.start({ right: '-200px' });
        }
    }, [count, page]);

    return (
        <>
            {puzzle && (count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...clueDisplay }}>
                    {puzzle.clueNum} - {puzzle.cluePage}
                </animated.div>
            )}
            {puzzle && (count === puzzle.clueNum || count === puzzle.clueNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...puzzleDisplay }}>
                    {puzzle.inputNum} - {puzzle.code}
                </animated.div>
            )}
        </>
    );
};

export default Two;
