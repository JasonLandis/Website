import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


const Six = () => {
    const { count, codes } = useContext(CountContext);
    const { page, projectPage } = useContext(PageContext);

    const [clueTwoDisplay, clueTwoDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [clueOneDisplay, clueOneDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { opacity: 0 } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '', clueOnePage: '', clueOneNum: -2, clueTwoNum: -2 });
    
    const appearNum = 70;

    useEffect(() => {
        setPuzzle(codes[6]);
    }, [codes]);

    useEffect(() => {
        if (count === appearNum) {
            clueOneDisplayApi.start({ right: '-10px' });
        } else if (count === appearNum + 1) {
            clueOneDisplayApi.start({ right: '-200px' });
        }

        if (page !== 'home') {
            clueOneDisplayApi.start({ right: '-200px' });
        }

        if (count === puzzle.clueOneNum) {
            if (puzzle.clueOnePage === '[map]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'map') {
                    clueTwoDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueOnePage === '[blog]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'blog') {
                    clueTwoDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueOnePage === '[constellation]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'constellation') {
                    clueTwoDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueOnePage === '[pathfinder]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'pathfinder') {
                    clueTwoDisplayApi.start({ right: '-200px' });
                }
            }
        }
        else if (count === puzzle.clueOneNum + 1) {
            clueTwoDisplayApi.start({ right: '-200px' });
        }

        if (count === puzzle.clueTwoNum) {
            puzzleDisplayApi.start({ opacity: 1 });
            if (projectPage !== 'about') {
                puzzleDisplayApi.start({ opacity: 0 });
            }
        }
        else if (count === puzzle.clueTwoNum + 1) {
            puzzleDisplayApi.start({ opacity: 0 });
        }

        
    }, [count, page, projectPage]);

    return (
        <>
            {puzzle && (count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...clueOneDisplay }}>
                    {puzzle.clueOneNum} - {puzzle.cluePage}
                </animated.div>
            )}
            {puzzle && (count === puzzle.clueOneNum || count === puzzle.clueOneNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...clueTwoDisplay }}>
                    {puzzle.clueTwoNum} - {"[about?]"}
                </animated.div>
            )}
            {puzzle && (count === puzzle.clueTwoNum || count === puzzle.clueTwoNum + 1) && (
                <animated.div className="puzzle-container-about" style={{ ...puzzleDisplay }}>
                    {puzzle.inputNum} - {puzzle.code}
                </animated.div>
            )}
        </>
    );
};

export default Six;
