import OkButton from "../../common/components/ok-button"
import landing from '../../assets/splash.webp'
import hero from '../../assets/wave.svg'
import useMobile from "../../common/utils/useMobile"
import clsx from "clsx"
import acai2 from '../../assets/Acai/Mix-Berry.png'
import smoothie2 from '../../assets/Smoothie/Nuty-Licious..png'
import acaiSoft from '../../assets/Acai/ACAI SOFT SERVE CONE/AZW04210.png'

import './index.css'
import Footer from "../../common/components/ok-footer"
import { Reveal } from "react-awesome-reveal"
import { getSlide, slideDown, slideLeft, slideRight } from "../../common/utils/animations"

const Home = () => {
    const isMobile = useMobile()

    return <>
        <section className="relative" style={{
            backgroundImage: `url('${hero}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
        }}>
            <main className="flex min-h-screen pt-[120px] flex-row flex-wrap items-center justify-between container mx-auto px-4 md:px-0 text-black">
                <Reveal keyframes={slideDown} duration={500} className="z-10">
                <div className='flex-grow md:w-[60] w-100 text-center md:text-left'>
                    <p className='font-bold tracking-widest mb-4'>SUMMER SEASON</p>
                    <h1 className='font-extrabold text-5xl md:text-4xl mb-4'>Smoothies that</h1>
                    <h3 className='font-extrabold text-4xl md:text-5xl mb-8'>everyone loves!</h3>
                    <p className='text-slate-900 mb-12'>Huge range of organic smoothies for customers</p>
                    <OkButton variant='FILLED' className='px-16 py-4 shadow-xl'>Start Exploring</OkButton>
                </div>
                </Reveal>
                <div className={clsx(
                    'flex-grow self-stretch min-w-[400px] relative min-h-[400px] -z-0',
                    isMobile && 'top-[-100px]'
                )} style={{
                    backgroundImage: `url('${landing}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundSize: 'contain',
                    transform: 'rotate(-30deg)'
                }} />
            </main>
        </section>
            {/* <section className={clsx(
                "container mx-auto flex items-center justify-center flex-wrap relative",
                isMobile ? 'top-[-160px]' : 'top-[-170px]'
            )}>
                <Zoom duration={500} cascade>
                
                    <div className={clsx(
                        isMobile ? "p-1" : "p-4"
                    )}>
                        <CircleCard image={acaiImg} color="bg-blue-300" />
                    </div>
                    <div className="px-4">
                        <CircleCard image={coffeeImg} color="bg-purple-300" />
                    </div>
                    <div className="px-4">
                        <CircleCard image={smoothieImg} />
                    </div>
                </Zoom>
            </section> */}

        <section className={clsx(
            'mx-auto mt-16 container mb-24'
        )}>
            <div className="text-center">
                <h4 className="text-4xl uppercase font-bold">Our Products</h4>
                <h6 className="font-light">Lorem ipsum dolor amet text</h6>
            </div>
            <div className="py-8 px-2 md:px-0 grid md:gap-[100px] grid-cols-1 md:grid-cols-2 grid-rows-1">
                <Reveal keyframes={slideRight}>
                <div className="group flex items-center p-4 mb-4 flex-wrap md:flex-nowrap flex-col md:flex-row border rounded-xl transition-all hover:shadow-md">
                    <div className="flex flex-row md:flex-col justify-center my-auto bg-red-500 text-white px-6 py-2 md:py-6 md:px-2  rounded-[200px]">
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">41cal</span>
                            <span className="uppercase text-xs">ENERGY</span>
                        </div>
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">12g</span>
                            <span className="uppercase text-xs">CARBS</span>
                        </div>
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">30g</span>
                            <span className="uppercase text-xs">PROTEIN</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg">41g</span>
                            <span className="uppercase text-xs">FAT</span>
                        </div>
                    </div>
                    <img src={acai2} alt='acai' className="h-[250px] md:h-[300px] mr-8 group-hover:scale-110 transition-transform" />
                    <div className="md:w-full py-8">
                        <div className="mb-6">
                            <span className="text-sm font-light mr-2 px-4 py-1 bg-blue-700 rounded-[200px] text-white">Tag 1</span>
                            <span className="text-sm font-light mr-2 px-4 py-1 bg-red-700 rounded-[200px] text-white">Tag 2</span>
                        </div>
                        <h4 className="text-2xl font-bold">Mix Berry Bowl</h4>
                        <div className="text-slate-700 text-sm mb-4">LOREM IPSUM</div>
                        <p className='text-slate-800 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla.</p>
                    </div>
                </div>
                </Reveal>

                <Reveal keyframes={slideLeft}>
                <div className="group flex items-center p-4 mb-4 flex-wrap md:flex-nowrap flex-col md:flex-row border rounded-xl transition-all hover:shadow-md">
                    <div className="flex flex-row md:flex-col justify-center my-auto bg-amber-500 text-white px-6 py-2 md:py-6 md:px-2  rounded-[200px]">
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">41cal</span>
                            <span className="uppercase text-xs">ENERGY</span>
                        </div>
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">12g</span>
                            <span className="uppercase text-xs">CARBS</span>
                        </div>
                        <div className="flex flex-col items-center mr-4 md:mr-0 md:mb-4">
                            <span className="text-lg">30g</span>
                            <span className="uppercase text-xs">PROTEIN</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg">41g</span>
                            <span className="uppercase text-xs">FAT</span>
                        </div>
                    </div>
                    <img src={smoothie2} alt='acai' className="h-[250px] md:h-[300px] mr-8 group-hover:scale-110 transition-transform" />
                    <div className="md:w-full py-8 ">
                        <div className="mb-6">
                            <span className="text-sm font-light mr-2 px-4 py-1 bg-blue-700 rounded-[200px] text-white">Tag 1</span>
                            <span className="text-sm font-light mr-2 px-4 py-1 bg-red-700 rounded-[200px] text-white">Tag 2</span>
                        </div>
                        <h4 className="text-2xl font-bold">Mix Berry Bowl</h4>
                        <div className="text-slate-700 text-sm mb-4">LOREM IPSUM</div>
                        <p className='text-slate-800 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla.</p>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
        <section className="box min-h-[60vh] bg-red-700 flex items-center overflow-visible py-16">
            <div className="mx-auto container flex flex-wrap items-center text-white">
                <div className="p-8 w-full md:w-auto">
                    <h3 className="font-black text-6xl uppercase tracking-widest">Hi this is me</h3>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla,<br />et vehicula nisl consectetur quis. Cras egestas quam ligula. </p>
                    <Reveal keyframes={getSlide(0, -50, 0)} cascade className="inline-block">
                    <div className="mt-8 text-center mr-8">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                    <div className="mt-8 text-center mr-8">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                    <div className="mt-8 text-center">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                    </Reveal>
                </div>
                <Reveal keyframes={slideLeft} className="mx-auto">
                <img className="mx-auto h-[250px] md:h-[350px] -rotate-[15deg] scale-150" src={acaiSoft} />
                </Reveal>
            </div>
        </section>
        <Footer />
    </>
}

export default Home