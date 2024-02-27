import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 70, Go to project in projects 71 - 75, Go to slide in about 81 - 85, Input 93 - 94
const Six = () => {
    const { count, codes } = useContext(CountContext);
    const { page, projectPage, slide } = useContext(PageContext);

    const [clueTwoDisplay, clueTwoDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [clueOneDisplay, clueOneDisplayApi] = useSpring(() => ({ from: { right: '-250px' } }));
    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, code: '', clueOnePage: '', clueOneNum: -2, clueTwoPage: '', clueTwoNum: -2 });
    
    const appearNum = 70;

    useEffect(() => {
        setPuzzle(codes[6]);
    }, [codes]);

    useEffect(() => {
        if (count === appearNum) {
            clueOneDisplayApi.start({ right: '-10px' });
        } else if (count === appearNum + 1) {
            clueOneDisplayApi.start({ right: '-250px' });
        }

        if (page !== 'home') {
            clueOneDisplayApi.start({ right: '-250px' });
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
            if (puzzle.clueTwoPage === '[about[1]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 1) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[about[2]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 2) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[about[3]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 3) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[about[4]]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (slide !== 4) {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
        }
        else if (count === puzzle.clueTwoNum + 1) {
            puzzleDisplayApi.start({ right: '-200px' });
        }
        
    }, [count, page, projectPage, slide]);

    return (
        <>
            {puzzle && (count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...clueOneDisplay }}>
                    {puzzle.clueOneNum} - {puzzle.clueOnePage}
                </animated.div>
            )}
            {puzzle && (count === puzzle.clueOneNum || count === puzzle.clueOneNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...clueTwoDisplay }}>
                    {puzzle.clueTwoNum} - {puzzle.clueTwoPage}
                </animated.div>
            )}
            {puzzle && (count === puzzle.clueTwoNum || count === puzzle.clueTwoNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...puzzleDisplay }}>
                    {puzzle.inputNum} - {puzzle.code}
                </animated.div>
            )}
        </>
    );
};

export default Six;
