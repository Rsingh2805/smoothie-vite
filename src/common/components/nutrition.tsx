const Nutrition = () => {
    return <div className="flex flex-row justify-center my-auto bg-teal-700 text-white px-10 py-1 mt-4 rounded-[200px]">
        <div className="flex flex-col items-center mr-2">
            <span className="text-sm">41cal</span>
            <span className="uppercase text-xs">ENERGY</span>
        </div>
        <div className="flex flex-col items-center mr-2">
            <span className="text-sm">12g</span>
            <span className="uppercase text-xs">CARBS</span>
        </div>
        <div className="flex flex-col items-center mr-2">
            <span className="text-sm">30g</span>
            <span className="uppercase text-xs">PROTEIN</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-sm">41g</span>
            <span className="uppercase text-xs">FAT</span>
        </div>
    </div>
}

export default Nutrition