import loyal from '../../assets/loyalty.avif'
import cofLoyal from '../../assets/coffee-loyal.avif'
import { IoGiftOutline } from 'react-icons/io5'
import { TfiAnnouncement } from 'react-icons/tfi'
import { HiOutlineCake } from 'react-icons/hi'
import { FiCoffee } from 'react-icons/fi'
import useMobile from '../../common/utils/useMobile'
import Footer from '../../common/components/ok-footer'
import { Fade, Reveal } from 'react-awesome-reveal'
import { useInterval } from 'usehooks-ts'
import React, { useState } from 'react'
import { appear, slideDown } from '../../common/utils/animations'

const loyaltyOptions = [
    ['sipping', 'coffee'],
    ['', ''],
    ['munching', 'acai'],
    ['', ''],
    ['slurping', 'smoothie'],
    ['', ''],
]

const Loyalty = () => {
    const isMobile = useMobile()
    const [idx, setIdx] = useState(0)
    const [verb, noun] = loyaltyOptions[idx]

    console.log(idx, verb, noun)

    const increment = () => {
        setIdx(idx => Math.floor((idx + 1) % loyaltyOptions.length))
    }

    useInterval(() => {
        if (idx % 2 === 0) {
            setTimeout(increment, 100)
        }
        increment()
    }, 3000)
    const Component = isMobile ? React.Fragment : Fade

    return <>
        <section className="relative min-h-[500px] flex flex-col md:flex-row mt-[80px] pt-8 mx-auto container">
            <Fade duration={500} className="w-full md:w-1/2 flex justify-center items-center px-2 md:px-0">
                <div className='min-h-[600px] min-w-[300px] w-full md:w-auto rounded-xl' style={{
                    backgroundImage: isMobile ? `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${loyal}')` : `url('${loyal}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} />
            </Fade>
            <div className='absolute -top-4 md:relative flex justify-center items-start flex-col p-12 md:p-16'>
                <h1 className='text-3xl md:text-6xl font-bold py-6 leading-[65px]' style={{
                    background: isMobile ? 'white' : '-webkit-linear-gradient(194deg, rgba(239,255,0,1) 0%, rgba(255,0,0,1) 100%)',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text'
                }}>Get rewarded<br />
                    while <Component className='text-white' duration={100} cascade>{verb}</Component><br />
                    on our<br />
                    Amazing <Component duration={100} cascade>{noun}</Component></h1>
                <p className='text-white md:text-black'>Maecenas et ultrices purus. Integer id est felis. Vestibulum feugiat ut libero a tristique.<br /> Fusce vulputate magna non sem pharetra, vitae sollicitudin nulla pretium.</p>
            </div>
        </section>
        <div className='mx-auto container flex flex-col md:flex-row justify-between py-16 px-8 md:px-0'>
            <Reveal keyframes={slideDown} cascade damping={0.1} duration={500}>
                <div className='flex md:flex-col items-center justify-between mb-4'>
                    <IoGiftOutline className='text-6xl mr-4 text-red-800' />
                    <span className='mt-4 text-right md:text-center font-light'>Purchase 5 coffees, <br />get the next coffee free.</span>
                </div>

                <div className='flex md:flex-col items-center justify-between mb-4'>
                    <TfiAnnouncement className='text-6xl mr-4 text-amber-600' />
                    <span className='mt-4 text-right md:text-center font-light'>Exciting new food and drink <br />releases - you'll be the first to know!</span>
                </div>

                <div className='flex md:flex-col items-center justify-between mb-4'>
                    <HiOutlineCake className='text-6xl mr-4 text-purple-700' />
                    <span className='mt-4 text-right md:text-center font-light'>Get a delicious treat on your<br /> birthday, from us!</span>
                </div>
            </Reveal>
        </div>
        <div className='py-8 px-4 text-white container mx-auto text-center rounded-xl' style={{
            backgroundImage: `url('${cofLoyal}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <FiCoffee className="text-6xl md:text-9xl block mx-auto" />
            <h1 className='font-black text-4xl mb-8'>Interested? Come on over!</h1>
            <Reveal keyframes={appear} duration={500}>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/3 bg-black bg-opacity-60 py-1 md:py-2'>1. Visit our branch</div>
                <div className='md:w-1/3 bg-black bg-opacity-60 py-1 md:py-2'>2. Ask for a member card</div>
                <div className='md:w-1/3 bg-black bg-opacity-60 py-1 md:py-2'>3. Walk away with a promise of quality</div>
            </div>
            </Reveal>
        </div>
        <Footer />
    </>
}

export default Loyalty