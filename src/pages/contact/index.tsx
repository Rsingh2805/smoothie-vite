import contact from '../../assets/contact.jpeg'
import OkButton from '../../common/components/ok-button'

const Contact = () => {
    return <div className="h-screen bg-red-500 pt-[80px] flex justify-center items-center">
        <div className="rounded-3xl bg-white flex flex-row p-8 shadow-lg w-[800px]">
            <div className="w-1/2 rounded-3xl" style={{
                backgroundImage: `url('${contact}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="w-1/2 p-4">
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
                        <textarea rows={4} className="border p-2 rounded-md" />
                    </div>
                </div>
                <OkButton variant='FILLED' className='float-right mt-2'>Submit</OkButton>
            </div>

        </div>
    </div>
}

export default Contact