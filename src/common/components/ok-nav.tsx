import clsx from "clsx"
import useMobile from "../utils/useMobile"
import OkButton from "./ok-button"
import {SlCallIn, SlCup, SlGrid, SlMustache} from "react-icons/sl"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const desktopNav = <>
    <li role="button" className="mr-6"><Link to='/about'>About</Link></li>
    <li role="button" className="mr-6"><Link to='/menu'>Our Menu</Link></li>
    <li role="button" className="mr-6"><Link to='/loyalty'>Loyalty</Link></li>
</>

const mobileNav = <>
    <li role="button" className="mr-6"><Link to='/about'><SlMustache /></Link></li>
    <li role="button" className="mr-6"><Link to='/menu'><SlGrid /></Link></li>
    <li role="button" className="mr-6"><Link to='/loyalty'><SlCup /></Link></li>
</>

const OkNav = () => {
    const isMobile = useMobile()
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY === 0 ? setAtTop(true) : setAtTop(false)
        })
    })

    return <nav className={clsx(
        "fixed top-0 w-screen left-0 right-0 z-50 transition-all",
        // isMobile ? 'bg-black' : 'bg-black',
        ['/',].includes(pathname) && atTop ? 'bg-transparent h-[90px] text-black' : 'bg-black/80 h-[80px] text-white'
        )}>
        <div className="container mx-auto flex h-full flex-row justify-between items-center px-5 md:px-0">
            <h3 className="text-xl font-bold"><Link to='/'>OkBerry</Link></h3>
            <ul className="flex flex-row">
                {isMobile ? mobileNav : desktopNav}
            </ul>
            { isMobile ? <OkButton onClick={() => navigate('/contact')} className="px-3 py-3 rounded-full"><SlCallIn /></OkButton> : <OkButton onClick={() => navigate('/contact')} className="px-12">CONTACT US</OkButton>}
        </div>
        
    </nav>
}

export default OkNav