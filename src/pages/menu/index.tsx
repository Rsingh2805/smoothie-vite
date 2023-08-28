import React from 'react'
import Card from './Card'
import './index.css'
import useMobile from '../../common/utils/useMobile'
import clsx from 'clsx'
import Footer from '../../common/components/ok-footer'
import { abc , MenuItem } from './menu'



const Menu = () => {
    const [idx, setIdx] = React.useState(-1)
    const data = abc
    
    const [current, setCurrent] = React.useState<MenuItem>(MenuItem.ACAI)
    const isMobile = useMobile()

    const [colStyle, setColStyle] = React.useState('')
    const [rowStyle, setRowStyle] = React.useState('')

    const items = data[current]

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

    return <>
        <div className="mt-[80px] h-[calc(100vh-80px)] mx-auto container relative">
            <div className="h-[calc(100vh-80px)] absolute top-0 bottom-0 right-0 w-[30px] py-12 px-8 text-white font-bold items-center flex flex-col justify-start bg-red-500 orientation-sideways">
                <button onClick={() => setCurrent(MenuItem.ACAI)} className={clsx(
                    current === MenuItem.ACAI && 'active'
                )}>Acai Bowl</button>
                <button onClick={() => setCurrent(MenuItem.SMOOTHIE)} className={clsx(
                    current === MenuItem.SMOOTHIE && 'active'
                )}>Smoothies</button>
                <button onClick={() => setCurrent(MenuItem.COFFEE)} className={clsx(
                    current === MenuItem.COFFEE && 'active'
                )}>Coffee</button>
            </div>
            <div className='h-[calc(100vh-80px)] container mx-auto overflow-auto  py-8 pr-[90px] pl-8'>
                <div className='grid gap-[20px] transition-all duration-500' style={{
                    gridTemplateColumns: colStyle,
                    gridTemplateRows: rowStyle
                }}>
                    {
                        items.map((item, idx) => {
                            console.log('Hi this is card',item)
                            return <Card reset={() => setIdx(-1)} onClick={() => setIdx(idx)} cardItem={item}/>
                        })
                    }
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Menu