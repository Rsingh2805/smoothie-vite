import { Reveal } from 'react-awesome-reveal'
import contact from '../../assets/contact.jpeg'
import OkButton from '../../common/components/ok-button'
import { slideUp } from '../../common/utils/animations'
import useMobile from '../../common/utils/useMobile'

const Contact = () => {
    const isMobile = useMobile()
    return <div className="min-h-screen bg-red-500 pt-[80px] flex justify-center items-center">
        <Reveal keyframes={slideUp} className='w-full p-4 flex justify-center items-center'>
            <div className="rounded-3xl bg-white flex flex-col md:flex-row p-4 md:p-8 shadow-lg md:w-[800px]">
                <div className="md:w-1/2 rounded-3xl min-h-[150px] md:mb-0 mb-4" style={{
                    backgroundImage: `url('${contact}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}></div>
                <div className="md:w-1/2p-2 md:p-4">
                    <h2 className="text-2xl">GET IN <span className="font-bold">TOUCH</span></h2>
                    <p>Reach out to us for your needs</p>
                    <div className="mt-4">
                        <div className="flex flex-col mb-2">
                            <label className="text-sm">Name</label>
                            <input className="border p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm">Email</label>
                            <input className="border p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm">Phone</label>
                            <input className="border p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-sm">Description</label>
                            <textarea rows={isMobile ? 2 : 4} className="border p-2 rounded-md" />
                        </div>
                    </div>
                    <OkButton variant='FILLED' className='float-right mt-2'>Submit</OkButton>
                </div>
            </div>
        </Reveal>
    </div>
}

export default Contact