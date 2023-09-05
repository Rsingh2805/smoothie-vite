import React from 'react'
import Card from './Card'
import useMobile from '../../common/utils/useMobile'
import clsx from 'clsx'
import Footer from '../../common/components/ok-footer'
import { abc, ItemData, MenuItem, Tag, TagDetails } from './menu'
import { Reveal } from 'react-awesome-reveal'
import { appear, slideDown } from '../../common/utils/animations'
import { useImmer } from 'use-immer'

const defaultSelection: { [key in Tag]: boolean } = {
    [Tag.ALMOND_MILK]: false,
    [Tag.COCONUT_WATER]: false,
    [Tag.DAIRY_FREE]: false,
    [Tag.LOW_FAT]: false,
    [Tag.NUTS_FREE]: false,
    [Tag.HOT]: false,
    [Tag.COLD]: false,
    [Tag.COFFEE]: false,
    [Tag.CHOCLATE]: false,
    [Tag.TEA]: false,
}


const Menu = () => {
    const [idx, setIdx] = React.useState(-1)
    const data = abc

    const [current, setCurrent] = React.useState<MenuItem>(MenuItem.ACAI)
    const isMobile = useMobile()

    const [colStyle, setColStyle] = React.useState('')
    const [rowStyle, setRowStyle] = React.useState('')

    const [tagSelection, updateTagSelection] = useImmer<{ [key in Tag]: boolean }>(defaultSelection)

    const items = data[current]
    const categories = [... new Set(items.reduce<Tag[]>((a, curr: ItemData) => {
        return a.concat(curr.tags)
    }, []))]

    const appearKey = `${current}-${Object.values(tagSelection).map(x => +x).join('-')}`

    const currentItems = items.filter(item => {
        if (!Object.values(tagSelection).some(x => x)) return true
        for (const tagKey in tagSelection) {
            const tag = parseInt(tagKey) as Tag
            if (tagSelection[tag] && !item.tags.some(x => x === tag)) return false
        }
        return true
    })

    React.useEffect(() => {
        updateTagSelection(defaultSelection)
    }, [current])

    React.useEffect(() => {
        const cols = 3
        const rows = items.length / 3

        if (isMobile) {
            setColStyle('repeat(1, minmax(0, 1fr))')
        } else {

            let newColStyle = [];
            for (let i = 0; i < cols; i++) {
                if (i === idx % 3) {
                    newColStyle.push('1.5fr');
                } else {
                    newColStyle.push('1fr')
                }
            }
            setColStyle(newColStyle.join(' '))

            let newRowStyle = [];
            for (let i = 0; i < rows; i++) {
                if (i === Math.floor(idx / 3)) {
                    newRowStyle.push('1.5fr');
                } else {
                    newRowStyle.push('1fr')
                }
            }

            setRowStyle(newRowStyle.join(' '))
        }
    }, [idx, isMobile])

    const sectionButtonClasses = (item: MenuItem) => clsx(
        current === item ? 'bg-red-600 text-white' : 'hover:bg-gray-200',
        'border border-red-600 border-r-0 last:border-r px-4 py-2 transition-all flex-shrink-0'
    )

    return <>
        <div className="mt-[95px] h-[calc(100vh-80px)] mx-auto px-6 md:px-0 container relative flex flex-col">
            <div className='flex flex-row flex-wrap justify-between items-center'>
                <div className='pb-1 mb-2 overflow-auto'>
                    <div className="items-center flex flex-row justify-start mb-3">
                        <button onClick={() => setCurrent(MenuItem.ACAI)} className={sectionButtonClasses(MenuItem.ACAI)}>Acai Bowl</button>
                        <button onClick={() => setCurrent(MenuItem.SMOOTHIE)} className={sectionButtonClasses(MenuItem.SMOOTHIE)}>Smoothies</button>
                        <button onClick={() => setCurrent(MenuItem.COFFEE)} className={sectionButtonClasses(MenuItem.COFFEE)}>Coffee</button>
                        <button onClick={() => setCurrent(MenuItem.JUICE)} className={sectionButtonClasses(MenuItem.JUICE)}>Juice</button>
                        <button onClick={() => setCurrent(MenuItem.PROTEIN_SHAKE)} className={sectionButtonClasses(MenuItem.PROTEIN_SHAKE)}>Protein Shake</button>
                        <button onClick={() => setCurrent(MenuItem.THICK_SHAKE)} className={sectionButtonClasses(MenuItem.THICK_SHAKE)}>Thick Shake</button>
                        <button onClick={() => setCurrent(MenuItem.BREAKFAST)} className={sectionButtonClasses(MenuItem.BREAKFAST)}>Breakfast</button>

                    </div>
                </div>
                <div className='flex-grow mb-3' />
                <Reveal keyframes={appear} key={current}>
                    <div className='flex flex-wrap mb-3'>
                        {
                            categories.map(category => {
                                const details = TagDetails[category]
                                return <button className={clsx(
                                    tagSelection[category] ? 'bg-gray-300 text-black' : 'text-gray-700 hover:bg-gray-100 ',
                                    'px-3 py-3 md:py-2 transition-all border border-r-0 last:border-r border-gray-300 flex flex-row items-center'
                                )} onClick={() => updateTagSelection(obj => {
                                    obj[category] = !obj[category]
                                })}><details.icon className='md:mr-2' />{!isMobile && details.name}</button>
                            })
                        }
                    </div>
                </Reveal>
            </div>
            <div className='container mx-auto overflow-auto mt-2 flex-grow'>
                <Reveal keyframes={slideDown} key={appearKey} duration={500}>
                    <div className='grid gap-[20px] transition-all duration-500' key={current} style={{
                        gridTemplateColumns: colStyle,
                        gridTemplateRows: rowStyle
                    }}>
                        {
                            currentItems.length !== 0 ? currentItems.map((item, idx) => {
                                return <Card reset={() => setIdx(-1)} onClick={() => setIdx(idx)} cardItem={item} />
                            }) : <p className='text-gray-700 italic'>No items found!</p>
                        }
                    </div>
                </Reveal>
            </div>
        </div>
        <Footer />
    </>
}

export default Menu