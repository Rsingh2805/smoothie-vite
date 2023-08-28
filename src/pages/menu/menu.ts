import berryBliss from '../../assets/Smoothie/Berry-Bliss-.png'
import nuttyLicious from '../../assets/Smoothie/Nuty-Licious.png'
import tropical from '../../assets/Smoothie/Tropical.png'
import sunrise from '../../assets/Smoothie/Sunrise.png'
import superGreen from '../../assets/Smoothie/Super-Green.png'

import mixedBerry from '../../assets/Acai/Mix-Berry.png'
import bananaSplit from '../../assets/Acai/Banana-Split.png'
import greenMachine from '../../assets/Acai/Greeg-Machine.png'
import nuttyMonkey from '../../assets/Acai/Nutty-Monkey.png'

import espresso from '../../assets/Coffee/Espresso.png'
import macchiato from '../../assets/Coffee/Macchiato.png'
import piccolo from '../../assets/Coffee/Piccolo.png'
import longBlack from '../../assets/Coffee/_Long-Black.png'
import flatWhite from '../../assets/Coffee/Flat-White.png'
import latte from '../../assets/Coffee/Latte.png'
import cappuccino from '../../assets/Coffee/Cappuccino.png'
import mocha from '../../assets/Coffee/Mocha.png'
import chaiLatte from '../../assets/Coffee/Chai-Latte.png'
import dirtyChai from '../../assets/Coffee/Dirty-Chai--jpg.png'


export enum MenuItem {
    SMOOTHIE,
    ACAI,
    COFFEE
}

export interface ItemData {
    id: number
    name: string
    desc: string
    calories: {
        [key: string]: number
    }[]
    image: string
}

export const abc : {
    [key in MenuItem]: ItemData[]
} = {
    [MenuItem.SMOOTHIE]: [
        { id: 1, name: "Berry Bliss", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: berryBliss },
        { id: 2, name: "Tropical", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: tropical },
        { id: 3, name: "Nutty-licious", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: nuttyLicious },
        { id: 4, name: "Sunrise", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: sunrise},
        { id: 5, name: "Super Green", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: superGreen }],
    [MenuItem.ACAI]: [
        { id: 1, name: "Mixed Berry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: mixedBerry },
        { id: 2, name: "Banana Split", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: bananaSplit },
        { id: 3, name: "Nutty Monkey", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: nuttyMonkey },
        { id: 4, name: "Green Machine", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: greenMachine },
    ],
    [MenuItem.COFFEE]: [
        { id: 1, name: "Espresso", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: espresso },
        { id: 2, name: "Piccolo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: piccolo },
        { id: 3, name: "Macchiaoto", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: macchiato },
        { id: 4, name: "Long Black", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: longBlack },
        { id: 5, name: "Flat white", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: flatWhite },
        { id: 6, name: "Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: latte },
        { id: 7, name: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: cappuccino },
        { id: 8, name: "Mocha", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: mocha },
        { id: 9, name: "Chai Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: chaiLatte },
        { id: 10, name: "Dirty Chai", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", calories: [{ protein: 2 }], image: dirtyChai },

    ]
}