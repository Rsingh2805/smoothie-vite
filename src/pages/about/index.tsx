import about from '../../assets/about.webp'
import profile1 from '../../assets/about-profile.jpeg'
import profile2 from '../../assets/about-profile-2.jpeg'
import coffee from '../../assets/cofee-about.png'
import acai from '../../assets/about-acai.jpeg'
import Footer from '../../common/components/ok-footer'

const About = () => {
    return <>
        <div style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('${about}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container mx-auto min-h-[800px] flex items-center text-white">
                <div className="font-light text-6xl md:w-3/4 mx-auto text-center">We are focused on making <br />
                    <span className="font-extrabold text-amber-200"> healthy nutrient dense </span> <br />
                    alternatives with <br />
                    <span className="font-extrabold text-rose-300"> high quality products </span> <br />
                    and making healthy eating accessible & easy.
                </div>
            </div>
        </div>
        <section className='flex flex-row mt-16 container mx-auto items-center'>
            <div className='relative w-1/3'>
                <img src={profile1} className='rounded-2xl h-[400px]' />
                <img src={profile2} className='rounded-2xl absolute h-[200px] -bottom-8 -right-8' />
            </div>
            <div className='px-12 w-2/3 max-w-[700px] text-justify'>
                <p>OkBerry is one of Australia’s leading superfood cafes specialising in açai, smoothies, protein shakes, fresh juices, coffee and more.</p>
                <p>OkBerry is a family business created in 2023 by Jony Mathla, Rone Mathla and Kenan Mathla. The idea behind OkBerry was to promote a healthy lifestyle through offering products that fuel the mind, body, and soul to cure almost any craving. </p>
                <p>We understand and appreciate how hard eating healthy can be at times when junk food is so yum! For this reason, OkBerry is focused on making healthy nutrient dense alternatives with high quality products.</p>
            </div>
        </section>
        <section className='mt-16 container mx-auto'>
            <h1 className='text-5xl text-center'>Our Coffee</h1>
            <div className='flex flex-row-reverse items-center'>
                <div className='relative w-1/3'>
                    <img src={coffee} className='rounded-2xl h-[400px]' />
                </div>
                <div className='px-12 w-2/3 max-w-[700px] text-justify'>
                    <p>Okberry uses Veneziano Coffee Roasters Elevate beans. This is a medium body, velvety blend. </p>
                    <p><span className='text-lg font-medium'>Blend composition:</span> 50% Brazil Serra Negra, 50% Colombia Coocentral</p>
                    <p className='text-lg font-medium'>About this blend:</p>
                    <p><span className='text-lg font-medium'>Brazil Serra Negra</span> - located in the growing regions of South Minas. Nutty, chocolate and a very heavy body form the base of the most popular espresso blend.</p>
                    <p><span className='text-lg font-medium'>Colombia Coocentral</span> - this coffee is a blend of smallholder lots sourced from Coocentral, a progressive cooperative located in one of the most famed growing regions in Colombia, Huila. </p>
                </div>
            </div>
        </section>
        <section className='mt-16 container mx-auto'>
            <h1 className='text-5xl text-center mb-8'>Our Speciality - Acai</h1>
            <div className='flex flex-row items-center'>
                <div className='relative w-2/5'>
                    <img src={acai} className='rounded-2xl h-[400px] w-auto' />
                </div>
                <div className='px-12 w-3/5 max-w-[700px] text-justify'>
                    <p>Açaí berries grow high in the acai palm located in the Amazon floodplain in Brazil. The açaí palm produces clusters of purple berries that are harvested.</p>
                    <p>The acai berry is similar to a blueberry, however it has a different taste.</p>
                    <p>The purple skin of the berry is very nutrient dense with many medicinal properties. The açai berry is known as a superfood.</p>
                    <p><span className='text-lg font-medium'>ANTIOXIDANTS</span> - Açaí berries is one of the highest antioxidant fruits in the world.</p>
                    <p><span className='text-lg font-medium'>PROTEIN</span> - Açaí berries have a strong protein profile which helps to strengthen, build and repair our muscle tissue.</p>
                    <p><span className='text-lg font-medium'>OMEGA FATS</span> - Acai berries are loaded with omega fats. Omega fats help you to keep a healthy cholesterol and naturally lower blood pressure.</p>
                    <p><span className='text-lg font-medium'>ENERGY BOOSTER</span> - Acai berries contain properties that increase stamina and energy levels.</p>
                    <p><span className='text-lg font-medium'>SKIN</span> - Açaí berries increase regeneration processes in skin which means less wrinkles, blemishes and age spots.</p>
                    <p><span className='text-lg font-medium'>IMMUNE BOOSTER</span> - Açaí berries strengthen the body’s cells and increase the function of immune cells. They also have high levels of vitamin C.</p>
                </div>
            </div>
        </section>
        <section className='mt-16 py-8 container mx-auto h-[300px]' style={{ background: 'linear-gradient(194deg, rgba(250,255,94,1) 0%, rgba(255,0,0,1) 100%)' }}>
            <div className='text-center'>
                <h2 className='text-4xl text-white font-extrabold'>Some more Text!</h2>
                <p className='mt-6'>Lorem</p>
            </div>
        </section>
        <Footer />
    </>
}

export default About