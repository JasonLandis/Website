import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'


// Handles link elements and page transitions.
const Links = () => {
    const { page, setPage, setProjectPage, setSlide } = useContext(PageContext)
    const { count, isMobile } = useContext(CountContext)

    const [homePage, homePageApi] = useSpring(() => ({ from: { opacity: 1 } }))
    const [projectsPage, projectsPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [aboutPage, aboutPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    
    const [home, homeApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [projects, projectsApi] = useSpring(() => ({ from: { top: '-100px' } }))
    const [about, aboutApi] = useSpring(() => ({ from: { top: '-100px' } }))

    useEffect(() => {
        if (isMobile) {
            homeApi.start({ top: '-5px' })
            projectsApi.start({ top: '-15px', delay: 60 })
            aboutApi.start({ top: '-15px', delay: 120 })
        }
    }, [isMobile])

    useEffect(() => {
        if (count === 1 ) {
            homeApi.start({ top: '-5px' })
            projectsApi.start({ top: '-15px', delay: 60 })
            aboutApi.start({ top: '-15px', delay: 120 })
        }
    }, [count])
    
    const transition = (currentPage, nextPage) => {
        if (currentPage === nextPage) return
        
        if (currentPage === 'home') {
            homeApi.start({ top: '-15px', config: { duration: 150 }})
            homePageApi.start({ opacity: 0, config: { duration: 150 }})
        }
        else if (currentPage === 'projects') {
            projectsApi.start({ top: '-15px', config: { duration: 150 }})
            projectsPageApi.start({ opacity: 0, config: { duration: 150 }})
        }
        else if (currentPage === 'about') {
            aboutApi.start({ top: '-15px', config: { duration: 150 }})
            aboutPageApi.start({ opacity: 0, config: { duration: 150 }})
        }

        if (nextPage === 'home') {
            homeApi.start({ top: '-5px', config: { duration: 150 }})
        }
        else if (nextPage === 'projects') {
            projectsApi.start({ top: '-5px', config: { duration: 150 }})
        }
        else if (nextPage === 'about') {
            aboutApi.start({ top: '-5px', config: { duration: 150 }})
        }

        setTimeout(() => {
            if (nextPage === 'home') {
                homePageApi.start({ opacity: 1, config: { duration: 150 }})
            }
            else if (nextPage === 'projects') {
                projectsPageApi.start({ opacity: 1, config: { duration: 150 }})
            }
            else if (nextPage === 'about') {
                aboutPageApi.start({ opacity: 1, config: { duration: 150 }})
            }
            setPage(nextPage)
            setProjectPage('')
            setSlide(0)
        }, 150)
    }

    return (
        <>
            <div className="links">
                <animated.div style={{...home}} onClick={() => transition(page, 'home')}>Home</animated.div>
                <animated.div style={{...projects}} onClick={() => transition(page, 'projects')}>Projects</animated.div>
                <animated.div style={{...about}} onClick={() => transition(page, 'about')}>About</animated.div>
            </div>
            {page === 'home' && <animated.div style={{...homePage}}><Home/></animated.div>}
            {page === 'projects' && <animated.div style={{...projectsPage}}><Projects/></animated.div>}
            {page === 'about' && <animated.div style={{...aboutPage}}><About/></animated.div>}
        </>
    )
}

export default Links
