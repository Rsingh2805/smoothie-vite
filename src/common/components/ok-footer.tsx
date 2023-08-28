import OkButton from "./ok-button"
import { MdFacebook, MdOutlineAccountBox, MdWhatsapp } from 'react-icons/md'

const Footer = () =>{
    return         <footer className="mx-auto container flex flex-col items-center pt-16">
    <p className="md:w-3/5 px-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum odio nulla, et vehicula nisl consectetur quis. Cras egestas quam ligula, eu bibendum nulla dapibus ut. Donec sit amet cursus nibh. Donec commodo est nec dui volutpat.</p>
    <div className="flex items-center justify-center mt-8">
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdFacebook /></OkButton>
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdWhatsapp /></OkButton>
        <OkButton variant="FILLED" className="text-4xl h-[50px] w-[50px] rounded-full mx-2"><MdOutlineAccountBox /></OkButton>
    </div>
    <p className="mt-8 mb-16 font-light tracking-wider text-sm">COPYRIGHT OKBERRY | TERMS & CONDITIONS | PRIVACY</p>
</footer>
}

export default Footer