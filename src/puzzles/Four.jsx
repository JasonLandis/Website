import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 50, Go to slide in about 55 - 65, Input 66 - 70
const Four = () => {
    const { count, codes } = useContext(CountContext);
    const { page, slide } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [clueDisplay, clueDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '', cluePage: '', clueNum: -2});
    
    const appearNum = 50;

    useEffect(() => {
        setPuzzle(codes[4]);
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
            if (puzzle.cluePage === '[about[1]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 1) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[about[2]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 2) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[about[3]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 3) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[about[4]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 4) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
        }
        else if (count === puzzle.clueNum + 1) {
            puzzleDisplayApi.start({ right: '-200px' });
        }
    }, [count, page, slide]);

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

export default Four;
