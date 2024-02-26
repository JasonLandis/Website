import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


const Three = () => {
    const { count, codes } = useContext(CountContext);
    const { page, projectPage } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [clueDisplay, clueDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '', cluePage: '', clueNum: -2});
    
    const appearNum = 40;

    useEffect(() => {
        setPuzzle(codes[3]);
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
            if (puzzle.cluePage === '[map]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'map') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[blog]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'blog') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[constellation]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'constellation') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.cluePage === '[pathfinder]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'pathfinder') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
        }
        else if (count === puzzle.clueNum + 1) {
            puzzleDisplayApi.start({ right: '-200px' });
        }
    }, [count, page, projectPage]);

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

export default Three;
