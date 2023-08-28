import OkButton from "../../common/components/ok-button"
import landing from '../../assets/splash.webp'
import hero from '../../assets/hero.jpg'
import useMobile from "../../common/utils/useMobile"
import clsx from "clsx"
import CircleCard from "./CircleCard"

import acaiImg from '../../assets/Acai/Banana-Split.png'
import coffeeImg from '../../assets/Coffee/Hot-Chocolate.png'
import smoothieImg from '../../assets/Smoothie/Berry-Bliss-..png'

import acai2 from '../../assets/Acai/Mix-Berry.png'
import smoothie2 from '../../assets/Smoothie/Nuty-Licious..png'

import acaiSoft from '../../assets/Acai/ACAI SOFT SERVE CONE/AZW04210.png'

import './index.css'
import Footer from "../../common/components/ok-footer"

const Home = () => {
    const isMobile = useMobile()

    return <>
        <section className="relative" style={{
            backgroundImage: `url('${hero}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
        }}>
            <main className="flex min-h-[800px] pt-[120px] flex-row flex-wrap items-center justify-between container mx-auto px-4 md:px-0 text-white">
                <div className='flex-grow md:w-[60] w-100 text-center md:text-left'>
                    <p className='font-bold tracking-widest mb-4'>SUMMER SEASON</p>
                    <h1 className='font-extrabold text-5xl md:text-4xl mb-4'>Smoothies that</h1>
                    <h3 className='font-extrabold text-4xl md:text-5xl mb-8'>everyone loves!</h3>
                    <p className='text-slate-900 mb-12'>Huge range of organic smoothies for customers</p>
                    <OkButton variant='FILLED' className='z-20 px-16 py-4 shadow-xl'>Start Exploring</OkButton>
                </div>
                <div className={clsx(
                        'flex-grow self-stretch min-w-[400px] relative min-h-[400px] z-10',
                        isMobile && 'top-[-100px]'
                    )} style={{
                    backgroundImage: `url('${landing}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundSize: 'contain',
                    transform: 'rotate(-30deg)'
                }}/>
            </main>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-500px] transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,80 0,80 C 29.928631443657537,71.47049572324865 59.85726288731507,62.94099144649729 88,69 C 116.14273711268493,75.05900855350271 142.49957989439721,95.70652993725943 186,94 C 229.50042010560279,92.29347006274057 290.1444175350962,68.23288880446503 326,58 C 361.8555824649038,47.76711119553497 372.92274996521826,51.361914844880474 407,53 C 441.07725003478174,54.638085155119526 498.16458260403067,54.319451816013085 532,66 C 565.8354173959693,77.68054818398691 576.4189196186591,101.36027789106716 607,108 C 637.5810803813409,114.63972210893284 688.159738921333,104.23943661971832 727,103 C 765.840261078667,101.76056338028168 792.9421246960094,109.68197563005961 827,102 C 861.0578753039906,94.31802436994039 902.0717622946297,71.03266086004325 932,69 C 961.9282377053703,66.96733913995675 980.770826125472,86.18738092976741 1012,86 C 1043.229173874528,85.81261907023259 1086.8449332034818,66.21781542088709 1130,61 C 1173.1550667965182,55.782184579112915 1215.849441060601,64.94135738668425 1250,68 C 1284.150558939399,71.05864261331575 1309.757302554114,68.01675503237593 1340,69 C 1370.242697445886,69.98324496762407 1405.121348722943,74.99162248381204 1440,80 C 1440,80 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffe26c" fill-opacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,160 0,160 C 41.10396387282587,150.18107042035496 82.20792774565174,140.36214084070994 115,136 C 147.79207225434826,131.63785915929006 172.27225289021888,132.7325070575152 199,141 C 225.72774710978112,149.2674929424848 254.70306069347265,164.7078309292292 293,174 C 331.29693930652735,183.2921690707708 378.9155043358905,186.4361692255681 418,178 C 457.0844956641095,169.5638307744319 487.6349219629657,149.54749216849848 518,150 C 548.3650780370343,150.45250783150152 578.5448078122471,171.37386210043806 611,175 C 643.4551921877529,178.62613789956194 678.1858467880454,164.95705942974925 709,154 C 739.8141532119546,143.04294057025075 766.7118050355713,134.79790018056497 805,130 C 843.2881949644287,125.20209981943502 892.9669330696692,123.85133984799074 935,131 C 977.0330669303308,138.14866015200926 1011.4204626857518,153.7967404274721 1046,163 C 1080.5795373142482,172.2032595725279 1115.3512161873243,174.96169844212088 1147,177 C 1178.6487838126757,179.03830155787912 1207.1746725649512,180.35646580404438 1238,177 C 1268.8253274350488,173.64353419595562 1301.950093552871,165.61243834170162 1336,162 C 1370.049906447129,158.38756165829838 1405.0249532235644,159.1937808291492 1440,160 C 1440,160 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffe26c" fill-opacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,240 0,240 C 28.194523951401834,231.915105215128 56.38904790280367,223.83021043025602 90,227 C 123.61095209719633,230.16978956974398 162.63833234018713,244.59426349410398 202,247 C 241.36166765981287,249.40573650589602 281.0576227364477,239.79273559332796 309,230 C 336.9423772635523,220.20726440667204 353.131176714022,210.2347941325841 392,215 C 430.868823285978,219.7652058674159 492.41767040746424,239.2680878763355 533,243 C 573.5823295925358,246.7319121236645 593.1981416561209,234.69285436207377 620,226 C 646.8018583438791,217.30714563792623 680.7897629680522,211.9604946753693 715,215 C 749.2102370319478,218.0395053246307 783.6428064716703,229.46516693644907 816,229 C 848.3571935283297,228.53483306355093 878.6390111452666,216.1788375788345 915,213 C 951.3609888547334,209.8211624211655 993.8011489472628,215.81948274821286 1030,217 C 1066.1988510527372,218.18051725178714 1096.156393065682,214.54323142831407 1125,211 C 1153.843606934318,207.45676857168593 1181.5732787900088,204.00759153853085 1218,214 C 1254.4267212099912,223.99240846146915 1299.5504917742833,247.4264024175626 1338,254 C 1376.4495082257167,260.5735975824374 1408.2247541128584,250.2867987912187 1440,240 C 1440,240 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffe26c" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,320 0,320 C 41.69722874743259,327.6497688737859 83.39445749486518,335.2995377475717 116,337 C 148.60554250513482,338.7004622524283 172.11939876797186,334.45161788349895 204,326 C 235.88060123202814,317.54838211650105 276.1279474332474,304.89399071843235 316,307 C 355.8720525667526,309.10600928156765 395.3688114990384,325.97241924277154 429,332 C 462.6311885009616,338.02758075722846 490.39680657059887,333.2163323104814 516,322 C 541.6031934294011,310.7836676895186 565.0439622185663,293.162251515303 601,292 C 636.9560377814337,290.837748484697 685.4273445551356,306.1346616283065 725,321 C 764.5726554448644,335.8653383716935 795.246659560891,350.2991019714712 828,346 C 860.753340439109,341.7008980285288 895.5860172013009,318.66893048580863 925,309 C 954.4139827986991,299.33106951419137 978.4092716339055,303.0251760852944 1012,305 C 1045.5907283660945,306.9748239147056 1088.7768962630769,307.23036517301387 1128,306 C 1167.2231037369231,304.76963482698613 1202.483143313787,302.05336322265015 1236,310 C 1269.516856686213,317.94663677734985 1301.2905304817752,336.55618193638566 1335,340 C 1368.7094695182248,343.44381806361434 1404.3547347591125,331.7219090318072 1440,320 C 1440,320 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffe26c" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
        </section>
        <section className={clsx(
                "container mx-auto flex items-center justify-center flex-wrap relative",
                isMobile ? 'top-[-160px]' : 'top-[-170px]'
        )}>
            <div className={clsx(
                isMobile ? "p-1" : "p-4"
            )}>
            <CircleCard image={acaiImg} color="bg-blue-300" />
            </div>
            <div className="px-4">
            <CircleCard image={coffeeImg} color="bg-purple-300"  />
            </div>
            <div className="px-4">
            <CircleCard image={smoothieImg} />
            </div>
        </section>
        <section className={clsx(
            'mx-auto container mb-24'
        )}>
            <div className="text-center">
                <h4 className="text-4xl uppercase font-bold">Our Products</h4>
                <h6 className="font-light">Lorem ipsum dolor amet text</h6>
            </div>
            <div className="py-8 px-2 md:px-0 grid md:gap-[100px] grid-cols-1 md:grid-cols-2 grid-rows-1">
                <div className="flex items-center p-4 mb-4 flex-wrap md:flex-nowrap flex-col md:flex-row border rounded-xl transition-all hover:shadow-md">
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
                    <img src={acai2} alt='acai' className="h-[250px] md:h-[300px] mr-8" />
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

                <div className="flex items-center p-4 mb-4 flex-wrap md:flex-nowrap flex-col md:flex-row border rounded-xl transition-all hover:shadow-md">
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
                    <img src={smoothie2} alt='acai' className="h-[250px] md:h-[300px] mr-8" />
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
            </div>
        </section>
        <section className="box min-h-[60vh] bg-red-700 flex items-center overflow-visible py-16">
            <div className="mx-auto container flex flex-wrap items-center text-white">
                <div className="p-8 w-full md:w-auto">
                    <h3 className="font-black text-6xl uppercase tracking-widest">Hi this is me</h3>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla,<br />et vehicula nisl consectetur quis. Cras egestas quam ligula. </p>
                    <div className="inline-block mt-8 text-center mr-8">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                    <div className="inline-block mt-8 text-center mr-8">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                    <div className="inline-block mt-8 text-center">
                        <h3 className="text-2xl font-semibold">123Cal</h3>
                        <p className="text-center uppercase tracking-widest">Energy</p>
                    </div>
                </div>
                <img className="mx-auto h-[250px] md:h-[350px] -rotate-[15deg] scale-150" src={acaiSoft} />
            </div>
        </section>
        <Footer />
    </> 
}

export default Home