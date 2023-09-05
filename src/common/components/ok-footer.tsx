import OkButton from "./ok-button"
import { MdFacebook, MdOutlineAccountBox, MdWhatsapp } from 'react-icons/md'
import privacyDoc from '../../assets/docs/Privacy.pdf'
import tncDoc from '../../assets/docs/Terms and condition.pdf'

const Footer = () =>{
    return         <footer className="mx-auto container flex flex-col items-center pt-16">
    <p className="md:w-3/5 px-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla.</p>
    <div className="flex items-center justify-center mt-8">
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdFacebook /></OkButton>
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdWhatsapp /></OkButton>
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdOutlineAccountBox /></OkButton>
    </div>
    <p className="mt-8 mb-16 font-light tracking-wider text-sm">COPYRIGHT OKBERRY | <a target="_blank" href={tncDoc}>TERMS & CONDITIONS</a> | <a target="_blank" href={privacyDoc}>PRIVACY</a></p>
</footer>
}

export default Footer