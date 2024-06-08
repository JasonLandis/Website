import { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 80, Go to slide in about 81 - 85, Go to project in projects 86 - 90, Input 91 - 92 (use code from puzzle 0 - 7)
const Seven = () => {
    const { count, codes } = useContext(CountContext);
    const { page, projectPage, slide } = useContext(PageContext);

    const [clueTwoDisplay, clueTwoDisplayApi] = useSpring(() => ({ from: { right: '-250px' } }));
    const [clueOneDisplay, clueOneDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-200px' } }));
    const [puzzle, setPuzzle] = useState({ inputNum: -2, randomNum: -2, clueOnePage: '', clueOneNum: -2, clueTwoPage: '', clueTwoNum: -2, clueThreePage: '', clueThreeNum: -2 });
    
    const appearNum = 80;

    useEffect(() => {
        setPuzzle(codes[7]);
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
            if (puzzle.clueOnePage === '[about[1]]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (slide !== 1) {
                    clueTwoDisplayApi.start({ right: '-250px' });
                }
            }
            else if (puzzle.clueOnePage === '[about[2]]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (slide !== 2) {
                    clueTwoDisplayApi.start({ right: '-250px' });
                }
            }
            else if (puzzle.clueOnePage === '[about[3]]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (slide !== 3) {
                    clueTwoDisplayApi.start({ right: '-250px' });
                }
            }
            else if (puzzle.clueOnePage === '[about[4]]') {
                clueTwoDisplayApi.start({ right: '-10px' });
                if (slide !== 4) {
                    clueTwoDisplayApi.start({ right: '-250px' });
                }
            }
        }
        else if (count === puzzle.clueOneNum + 1) {
            clueTwoDisplayApi.start({ right: '-250px' });
        }

        if (count === puzzle.clueTwoNum) {
            if (puzzle.clueTwoPage === '[map]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'map') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[blog]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'blog') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[constellation]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'constellation') {
                    puzzleDisplayApi.start({ right: '-200px' });
                }
            }
            else if (puzzle.clueTwoPage === '[pathfinder]') {
                puzzleDisplayApi.start({ right: '-10px' });
                if (projectPage !== 'pathfinder') {
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
                    {puzzle.inputNum} - {"[" + puzzle.randomNum + "]"}
                </animated.div>
            )}
        </>
    );
};

export default Seven;
