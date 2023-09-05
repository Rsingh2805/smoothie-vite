import clsx from "clsx"
import bg from '../../../assets/card-bg.jpg'
import { useEffect, useRef } from "react"
import { useHover, useBoolean } from "usehooks-ts"
import Nutrition from "../../../common/components/nutrition"
import useMobile from "../../../common/utils/useMobile"
import { ItemData, TagDetails } from "../menu"
import { Tooltip } from "react-tooltip"

interface CardProps {
    onClick: () => void
    reset: () => void
    cardItem: ItemData
}

const Card = ({ onClick, reset, cardItem }: CardProps) => {
    const { value: isSmall, toggle } = useBoolean(true)
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    const isMobile = useMobile()

    useEffect(() => {
        console.log(isHover)
    }, [isHover])

    const getScale = () => {
        if (isMobile && isSmall) return 'group-hover:scale-[125%]'
        if (isMobile && !isSmall) return 'group-hover:scale-[150%]'

        if (!isMobile && isSmall) return 'group-hover:scale-[150%]'
        if (!isMobile && !isSmall) return 'group-hover:scale-[200%]'
    }

    return <div ref={hoverRef} onMouseEnter={() => onClick()} onMouseLeave={() => reset()} className={clsx(
        "relative transition-all group flex flex-col md:flex-row justify-between min-h-[225px]",
        !isHover ? 'bg-orange-100' : ''
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
            isMobile ? 'group-hover:-translate-x-10' : 'group-hover:translate-x-20 self-end',
            `${getScale()}`

        )} />
        <div className="p-4 text-right w-[250px]">
            <h3 className="text-xl font-medium">{cardItem.name}</h3>
            <p className="text-slate-600 text-sm font-light">{cardItem.desc}</p>
            {cardItem.tags.length !== 0 && <ul className="flex justify-start absolute top-4 left-4 bg-white p-2 text-2xl border">
                {
                    cardItem.tags.map(tag => {
                        const tagDetails = TagDetails[tag]
                        const tagClass = tagDetails.name.toLowerCase().split(' ').join('-')
                        return <>
                            <tagDetails.icon className={clsx("mr-1", tagClass)} />
                            <Tooltip className="!text-sm" anchorSelect={`.${tagClass}`}>{tagDetails.name}</Tooltip>
                        </>
                    })
                }
            </ul>}
            <div className={clsx(
                "mt-6 transition-opacity delay-100 duration-500",
                isHover ? 'opacity-100' : 'opacity-0',
            )}>
                {cardItem.nutritional.length >=2 && <div className="flex items-center mb-3 justify-end">
                    <span className="mr-3 text-sm font-light">{isSmall ? 'Small' : 'Large'}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!isSmall} onChange={toggle} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>}
                {cardItem.nutritional.length != 0 && <Nutrition isSmall={isSmall} nutrition={cardItem.nutritional} />}
            </div>
        </div>
    </div>
}

export default Card