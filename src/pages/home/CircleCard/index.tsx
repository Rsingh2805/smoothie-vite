import clsx from "clsx"
import useMobile from "../../../common/utils/useMobile"

interface CircleCardProps {
    image: string
    color?: string
}

const CircleCard = (props: CircleCardProps) => {
    const isMobile = useMobile()

    return <div className={clsx(
            "aspect-square rounded-full flex justify-center items-center",
            props.color || 'bg-red-300',
            isMobile ? 'w-[150px]': 'w-[300px]'
        )}>
        <img src={props.image} alt='menu-item' className={clsx(
            isMobile ? 'h-[100px]' : 'h-[250px]',

        )}/>
    </div>
}

export default CircleCard