import clsx from "clsx"
import { Nutritional } from "../../pages/menu/menu"

interface NutritionProps {
    isSmall: boolean
    nutrition : Nutritional[]
}
 
const Nutrition = ({isSmall, nutrition}: NutritionProps) => {
    function getNutrition():Nutritional {
        const element = nutrition[0]
        return element.size == 'small' && isSmall ?element : nutrition[1];
    }
    return <div className={clsx(
            "flex flex-row justify-center my-auto transition-colors duration-500 text-white px-4 py-2 mt-4 rounded-md",
            isSmall ? 'bg-teal-700' : 'bg-purple-800'
        )}>
        <div className="flex flex-col items-center mr-3">
            <span className="text-xl font-light flex flex-row items-end leading-6">{getNutrition().calories}</span>
            <span className="text-xs">kCal</span>
        </div>
        <div className="flex flex-col items-center mr-3">
            <span className="text-xl font-light flex flex-row items-end leading-6">{getNutrition().fat}g</span>
            <span className="text-xs">fat</span>
        </div>
        <div className="flex flex-col items-center mr-3">
            <span className="text-xl font-light flex flex-row items-end leading-6">{getNutrition().fibre}g</span>
            <span className="text-xs">fiber</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-xl font-light flex flex-row items-end leading-6">{getNutrition().protein}g</span>
            <span className="text-xs">protein</span>
        </div>        
    </div>
}

export default Nutrition