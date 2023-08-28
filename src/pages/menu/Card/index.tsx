import clsx from "clsx"
import bg from '../../../assets/card-bg.jpg'
import { useEffect, useRef } from "react"
import { useHover } from "usehooks-ts"
import Nutrition from "../../../common/components/nutrition"
import useMobile from "../../../common/utils/useMobile"
import { ItemData } from "../menu"

interface CardProps {
    onClick: () => void
    reset: () => void
    cardItem : ItemData
}

const Card = ({ onClick, reset, cardItem }: CardProps) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    const isMobile = useMobile()

    useEffect(() => {
        console.log(isHover)
    }, [isHover])

    return <div ref={hoverRef} onMouseEnter={() => onClick()} onMouseLeave={() => reset()} className={clsx(
        "relative transition-all group flex flex-col md:flex-row justify-between",
        !isHover ? 'bg-purple-200' : 'bg-purple-200/30'
    )}>
        <div className={clsx(
            "group-hover:opacity-50 opacity-0 transition-opacity duration-200 absolute top-0 left-0 w-full h-full -z-10",
         )} style={{
            backgroundImage: `url('${bg}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} />
        <img src={cardItem.image} alt="ACAI" className={clsx(
            "h-[150px] transition-all z-10 duration-500 self-end",
            isMobile ? 'group-hover:-translate-x-10 group-hover:scale-125' : 'group-hover:translate-x-20 self-end group-hover:scale-[200%]'
         )} />
        <div className="p-4 text-right w-[250px]">
            <h3 className="text-xl font-medium">{cardItem.name}</h3>
            <p className="text-slate-600 text-sm font-light">{cardItem.desc}</p>
            <div className={clsx(
                "mt-6 transition-opacity delay-100 duration-500",
                isHover ? 'opacity-100' : 'opacity-0',
            )}>
                <ul className="flex justify-end text-white">
                    <li className="ml-2 text-sm bg-blue-700 py-1 px-2 rounded-lg">Dairy</li>
                    <li className="ml-2 text-sm bg-amber-700 py-1 px-2 rounded-lg">Nuts</li>
                    <li className="ml-2 text-sm bg-pink-700 py-1 px-2 rounded-lg">Soy</li>
                </ul>
                <Nutrition />
            </div>
        </div>
    </div>
}

export default Card