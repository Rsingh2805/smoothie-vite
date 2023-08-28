import clsx from "clsx"
import useMobile from "../utils/useMobile"
import OkButton from "./ok-button"
import {SlCallIn, SlCup, SlGrid, SlMustache} from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"


const desktopNav = <>
    <li role="button" className="mr-6"><Link to='/about'>About</Link></li>
    <li role="button" className="mr-6"><Link to='/menu'>Our Menu</Link></li>
    <li role="button" className="mr-6">Loyalty</li>
</>

const mobileNav = <>
    <li role="button" className="mr-6"><Link to='/about'><SlMustache /></Link></li>
    <li role="button" className="mr-6"><Link to='/menu'><SlGrid /></Link></li>
    <li role="button" className="mr-6"><SlCup /></li>
</>

const OkNav = () => {
    const isMobile = useMobile()
    const navigate = useNavigate()

    return <nav className={clsx(
        "fixed top-0 w-screen left-0 right-0 text-white z-50",
        isMobile ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-30',
        )}>
        <div className="container mx-auto flex h-[80px] flex-row justify-between items-center px-5 md:px-0">
            <h3 className="text-xl font-bold"><Link to='/'>OkBerry</Link></h3>
            <ul className="flex flex-row">
                {isMobile ? mobileNav : desktopNav}
            </ul>
            { isMobile ? <OkButton onClick={() => navigate('/contact')} className="px-3 py-3 rounded-full"><SlCallIn /></OkButton> : <OkButton onClick={() => navigate('/contact')} className="px-12">CONTACT US</OkButton>}
        </div>
        
    </nav>
}

export default OkNav