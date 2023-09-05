import berryBliss from '../../assets/Smoothie/Berry-Bliss-.png'
import nuttyLicious from '../../assets/Smoothie/Nuty-Licious.png'
import tropical from '../../assets/Smoothie/Tropical.png'
import sunrise from '../../assets/Smoothie/Sunrise.png'
import superGreen from '../../assets/Smoothie/Super-Green.png'

import mixedBerry from '../../assets/Acai/Mix-Berry.png'
import bananaSplit from '../../assets/Acai/Banana-Split.png'
import greenMachine from '../../assets/Acai/Greeg-Machine.png'
import nuttyMonkey from '../../assets/Acai/Nutty-Monkey.png'
import acaiBanana from '../../assets/Acai/Acai-Soft-Serve.png'
import acaiGurana from '../../assets/Acai/Acai-Soft-Serve.png'
import acaiSoftServeCone from '../../assets/Acai/ACAI SOFT SERVE CONE/AZW04210.png'

import greenDetox from '../../assets/Juice/Green-Detox..png'
import cleanse from '../../assets/Juice/Cleanse.png'
import summersDay from '../../assets/Juice/Summers.png'
import springbreak from '../../assets/Juice/Sping-Break.png'
import watermelonTango from '../../assets/Juice/Watermalon-Tango.png'

import banana from '../../assets/Protein Shake/Banana.png'
import cofee from '../../assets/Protein Shake/Coffee.png'
import almond from '../../assets/Protein Shake/ALMOND..png'
import berry from '../../assets/Protein Shake/Berry.png'
import strawberry from '../../assets/Protein Shake/Strawberry..png'
import choclatePeanutbutter from '../../assets/Protein Shake/Chocolate-Peanut-Butter..png'

import choclate from '../../assets/Thick Shake/Chocolate.png'
import strawberryShake from '../../assets/Thick Shake/Strawberry.-2.png'
import vanilla from '../../assets/Thick Shake/Vanilla.png'
import caramel from '../../assets/Thick Shake/Caramel...png'
import hazelnut from '../../assets/Thick Shake/Chocolate-Peanut-Butter.png'
import oreo from '../../assets/Thick Shake/OREO...png'
import biscoff from '../../assets/Thick Shake/Biscoff.....png'
import pistachio from '../../assets/Thick Shake/Pistachio....png'

import espresso from '../../assets/Coffee/Espresso.png'
import macchiato from '../../assets/Coffee/Macchiato.png'
import piccolo from '../../assets/Coffee/Piccolo.png'
import longBlack from '../../assets/Coffee/Long-Black.png'
import flatWhite from '../../assets/Coffee/Flat-White.png'
import latte from '../../assets/Coffee/Latte.png'
import cappuccino from '../../assets/Coffee/Cappuccino.png'
import mocha from '../../assets/Coffee/Mocha.png'
import chaiLatte from '../../assets/Coffee/Chai-Latte.png'
import dirtyChai from '../../assets/Coffee/Dirty-Chai--jpg.png'
import icedlb from '../../assets/Coffee/Iced-Long-Black-..png'
import icedlatte from '../../assets/Coffee/Iced-Latte.png'
import icedMocha from '../../assets/Coffee/Iced-Mocha.png'
import icedChoclate from '../../assets/Coffee/Iced-Chocolate.png'
import icedChaiLatte from '../../assets/Coffee/Iced-Chai-latte..png'
import hotchoclate from '../../assets/Coffee/Hot-Chocolate.png'
import whiteHotChoclate from '../../assets/Coffee/Hot-Chocolate.png'

import act from '../../assets/All Day Breakfast/Avocado,-Cheese-_-Tomato.png'
import bce from '../../assets/All Day Breakfast/Bacon,-Cheese-_-Egg-.png'
import cs from '../../assets/All Day Breakfast/chicken-Salad-.png'
import gs from '../../assets/All Day Breakfast/Greek-Salad.png'
import gc from '../../assets/All Day Breakfast/Grillrd-Chicken.png'
import hct from '../../assets/All Day Breakfast/Ham,-Cheese-_-Tomato.png'
import hcc from '../../assets/All Day Breakfast/Ham,-Cheese-Croissant.png'
import s from '../../assets/All Day Breakfast/Salami-.png'
import ss from '../../assets/All Day Breakfast/smoked-salmon-.png'


import { LuMilkOff, LuNutOff } from 'react-icons/lu'
import { IconType } from 'react-icons'
import { GiAlmond, GiChocolateBar, GiCoconuts, GiCoffeePot, GiColdHeart, GiHotSpices, GiTeapotLeaves } from 'react-icons/gi'
import { FaDropletSlash } from 'react-icons/fa6'


export enum MenuItem {
    SMOOTHIE,
    ACAI,
    COFFEE,
    JUICE,
    PROTEIN_SHAKE,
    THICK_SHAKE,
    BREAKFAST
}

export interface ItemData {
    id: number
    name: string
    desc: string
    nutritional: Nutritional[]
    image: string
    tags: Tag[]
}

export enum Tag {
    DAIRY_FREE,
    LOW_FAT,
    ALMOND_MILK,
    COCONUT_WATER,
    NUTS_FREE,
    HOT,
    COFFEE,
    TEA,
    CHOCLATE,
    COLD
}

export const TagDetails: { [key in Tag]: { name: string, icon: IconType } } = {
    [Tag.DAIRY_FREE]: { name: 'Dairy Free', icon: LuMilkOff },
    [Tag.LOW_FAT]: { name: 'Low Fat', icon:FaDropletSlash },
    [Tag.ALMOND_MILK]: { name: 'Almond Milk', icon: GiAlmond },
    [Tag.COCONUT_WATER]: { name: 'Coconut Water', icon: GiCoconuts },
    [Tag.NUTS_FREE]: { name: 'No Nuts', icon: LuNutOff },
    [Tag.COFFEE]: { name: 'Coffee', icon: GiCoffeePot },
    [Tag.CHOCLATE]: { name: 'Choclate', icon: GiChocolateBar },
    [Tag.TEA]: { name: 'Tea', icon: GiTeapotLeaves },
    [Tag.HOT]: { name: 'Hot', icon: GiHotSpices },
    [Tag.COLD]: { name: 'Cold', icon: GiColdHeart },

}

export interface Nutritional {
    calories: number
    fat: number
    carbs: number
    fibre: number
    protein: number
    size: string
}

export const abc: {
    [key in MenuItem]: ItemData[]
} = {
    [MenuItem.SMOOTHIE]: [
        { id: 1, name: "Berry Bliss", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: berryBliss, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 224, fat: 7, carbs: 33, fibre: 11, protein: 5, size: "small" }, { calories: 274, fat: 7, carbs: 43, fibre: 13, protein: 6, size: "large" }] },
        { id: 2, name: "Tropical", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: tropical, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 224, fat: 1, carbs: 60, fibre: 9, protein: 4, size: "small" }, { calories: 299, fat: 2, carbs: 73, fibre: 11, protein: 5, size: "large" }] },
        { id: 3, name: "Nutty-licious", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: nuttyLicious, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT], nutritional: [{ calories: 239, fat: 51, carbs: 81, fibre: 6, protein: 28, size: "small" }, { calories: 436, fat: 64, carbs: 92, fibre: 7, protein: 35, size: "large" }] },
        { id: 4, name: "Sunrise", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: sunrise, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 180, fat: 1, carbs: 39, fibre: 5, protein: 2, size: "small" }, { calories: 924, fat: 2, carbs: 48, fibre: 6, protein: 2, size: "large" }] },
        { id: 5, name: "Super Green", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: superGreen, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 299, fat: 1, carbs: 66, fibre: 8, protein: 6, size: "small" }, { calories: 355, fat: 1, carbs: 79, fibre: 9, protein: 7, size: "large" }] },
    ],
    [MenuItem.ACAI]: [
        { id: 1, name: "Mixed Berry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: mixedBerry, tags: [Tag.DAIRY_FREE, Tag.COCONUT_WATER], nutritional: [{ calories: 466, fat: 10, carbs: 122, fibre: 17, protein: 13, size: "small" }, { calories: 549, fat: 11, carbs: 132, fibre: 20, protein: 16, size: "large" }] },
        { id: 2, name: "Banana Split", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: bananaSplit, tags: [Tag.DAIRY_FREE, Tag.ALMOND_MILK], nutritional: [{ calories: 487, fat: 9, carbs: 146, fibre: 16, protein: 12, size: "small" }, { calories: 583, fat: 11, carbs: 164, fibre: 18, protein: 14, size: "large" }] },
        { id: 3, name: "Nutty Monkey", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: nuttyMonkey, tags: [Tag.DAIRY_FREE, Tag.ALMOND_MILK], nutritional: [{ calories: 502, fat: 47, carbs: 136, fibre: 15, protein: 33, size: "small" }, { calories: 616, fat: 59, carbs: 153, fibre: 17, protein: 37, size: "large" }] },
        { id: 4, name: "Green Machine", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: greenMachine, tags: [Tag.DAIRY_FREE, Tag.COCONUT_WATER], nutritional: [{ calories: 447, fat: 11, carbs: 144, fibre: 15, protein: 10, size: "small" }, { calories: 613, fat: 6, carbs: 160, fibre: 17, protein: 12, size: "large" }] },
        { id: 5, name: "ACAI Soft Serve Banana", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: acaiBanana, tags: [Tag.DAIRY_FREE], nutritional: [{ calories: 447, fat: 11, carbs: 126, fibre: 16, protein: 9, size: "small" }, { calories: 583, fat: 14, carbs: 141, fibre: 10, protein: 14, size: "large" }] },
        { id: 6, name: "ACAI Soft Serve Guarana", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: acaiGurana, tags: [Tag.DAIRY_FREE], nutritional: [{ calories: 487, fat: 11, carbs: 126, fibre: 16, protein: 9, size: "small" }, { calories: 589, fat: 14, carbs: 141, fibre: 10, protein: 14, size: "large" }] },
        { id: 6, name: "ACAI Soft Serve Cone", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: acaiSoftServeCone, tags: [Tag.DAIRY_FREE], nutritional: [{ calories: 127, fat: 17, carbs: 109, fibre: 12, protein: 8, size: "small" }] },

    ],
    [MenuItem.COFFEE]: [
        { id: 1, name: "Espresso", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: espresso, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 2, name: "Piccolo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: piccolo, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 3, name: "Macchiaoto", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: macchiato, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 4, name: "Long Black", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: longBlack, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 5, name: "Flat white", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: flatWhite, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 6, name: "Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: latte, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 7, name: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: cappuccino, tags: [Tag.HOT, Tag.COFFEE], nutritional: [] },
        { id: 8, name: "Mocha", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: mocha, tags: [Tag.HOT, Tag.COFFEE, Tag.CHOCLATE], nutritional: [] },
        { id: 9, name: "Chai Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: chaiLatte, tags: [Tag.HOT, Tag.TEA], nutritional: [] },
        { id: 10, name: "Dirty Chai", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: dirtyChai, tags: [Tag.HOT, Tag.TEA], nutritional: [] },

        { id: 11, name: "Iced Long Black", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: icedlb, tags: [Tag.COFFEE, Tag.COLD], nutritional: [] },
        { id: 12, name: "Iced Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: icedlatte, tags: [Tag.COFFEE, Tag.COLD], nutritional: [] },
        { id: 13, name: "Iced Mocha", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: icedMocha, tags: [Tag.COFFEE, Tag.CHOCLATE, Tag.COLD], nutritional: [] },
        { id: 14, name: "Iced Choclate", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: icedChoclate, tags: [Tag.CHOCLATE, Tag.COLD], nutritional: [] },
        { id: 15, name: "Iced Chai Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: icedChaiLatte, tags: [Tag.TEA, Tag.COLD], nutritional: [] },
        { id: 16, name: "Hot Choclate", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: hotchoclate, tags: [Tag.HOT, Tag.CHOCLATE], nutritional: [] },
        { id: 16, name: "White Hot Choclate", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: whiteHotChoclate, tags: [Tag.HOT, Tag.CHOCLATE], nutritional: [] },

    ],
    [MenuItem.JUICE]: [
        { id: 1, name: "Green Detox", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: greenDetox, tags: [], nutritional: [{ calories: 285, fat: 1, carbs: 66, fibre: 16, protein: 7, size: "small" }, { calories: 341, fat: 2, carbs: 80, fibre: 19, protein: 8, size: "large" }] },
        { id: 2, name: "Cleanse", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: cleanse, tags: [], nutritional: [{ calories: 305, fat: 2, carbs: 77, fibre: 14, protein: 5, size: "small" }, { calories: 358, fat: 2, carbs: 95, fibre: 18, protein: 7, size: "large" }] },
        { id: 3, name: "Summers Day", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: summersDay, tags: [], nutritional: [{ calories: 348, fat: 1, carbs: 105, fibre: 18, protein: 7, size: "small" }, { calories: 416, fat: 1, carbs: 140, fibre: 24, protein: 9, size: "large" }] },
        { id: 4, name: "Spring Break", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: springbreak, tags: [], nutritional: [{ calories: 369, fat: 24, carbs: 97, fibre: 7, protein: 5, size: "small" }, { calories: 446, fat: 30, carbs: 135, fibre: 12, protein: 7, size: "large" }] },
        { id: 5, name: "Watermelon Tango", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: watermelonTango, tags: [], nutritional: [{ calories: 340, fat: 45, carbs: 58, fibre: 10, protein: 5, size: "small" }, { calories: 425, fat: 46, carbs: 106, fibre: 19, protein: 7, size: "large" }] },
    ],
    [MenuItem.PROTEIN_SHAKE]: [
        { id: 1, name: "Banana", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: banana, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 428, fat: 8, carbs: 87, fibre: 6, protein: 35, size: "small" }] },
        { id: 2, name: "Coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: cofee, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 436, fat: 8, carbs: 112, fibre: 8, protein: 38, size: "small" }] },
        { id: 3, name: "Almond", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: almond, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT], nutritional: [{ calories: 678, fat: 26, carbs: 93, fibre: 9, protein: 47, size: "small" }] },
        { id: 4, name: "Berry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: berry, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 400, fat: 10, carbs: 63, fibre: 11, protein: 35, size: "small" }] },
        { id: 5, name: "Strawberry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: strawberry, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 385, fat: 9, carbs: 54, fibre: 8, protein: 40, size: "small" }] },
        { id: 6, name: "Chocolate Peanut Butter", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: choclatePeanutbutter, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 423, fat: 23, carbs: 66, fibre: 4, protein: 42, size: "small" }] },
    ],
    [MenuItem.THICK_SHAKE]: [
        { id: 1, name: "Chocolate", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: choclate, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 449, fat: 16, carbs: 78, fibre: 1, protein: 13, size: "small" }] },
        { id: 2, name: "Strawberry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: strawberryShake, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 449, fat: 16, carbs: 78, fibre: 1, protein: 13, size: "small" }] },
        { id: 3, name: "Vanilla", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: vanilla, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 449, fat: 16, carbs: 78, fibre: 1, protein: 13, size: "small" }] },
        { id: 4, name: "Caramel", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: caramel, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 449, fat: 16, carbs: 78, fibre: 1, protein: 13, size: "small" }] },
        { id: 5, name: "Hazelnut", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: hazelnut, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 449, fat: 16, carbs: 78, fibre: 1, protein: 13, size: "small" }] },
        { id: 6, name: "Oreo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: oreo, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 456, fat: 16, carbs: 78, fibre: 1, protein: 9, size: "small" }] },
        { id: 7, name: "Biscoff", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: biscoff, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 468, fat: 16, carbs: 78, fibre: 1, protein: 12, size: "small" }] },
        { id: 8, name: "Pistachio", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: pistachio, tags: [Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{ calories: 456, fat: 16, carbs: 78, fibre: 1, protein: 9, size: "small" }] },
    ],
    [MenuItem.BREAKFAST]: [
        { id: 1, name: "Avocado, Cheese & Tomato", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: act, tags: [], nutritional: [] },
        { id: 2, name: "Chicken, cheese & Avocado", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: act, tags: [], nutritional: [] },
        { id: 3, name: "Ham, cheese & tomato ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: hct, tags: [], nutritional: [] },
        { id: 4, name: "Ham & Cheese Croissant ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: hcc, tags: [], nutritional: [] },
        { id: 5, name: "Salami", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: s, tags: [], nutritional: [] },
        { id: 6, name: "Bacon, cheese & Egg Roll 7.5 ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: bce, tags: [], nutritional: [] },
        { id: 7, name: "Grilled Chicken Baguette", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: gc, tags: [], nutritional: [] },
        { id: 8, name: "Turkey Baguette ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: gc, tags: [], nutritional: [] },
        { id: 9, name: "Smoked Salmon ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: ss, tags: [], nutritional: [] },
        { id: 10, name: "Greek Salad ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: gs, tags: [], nutritional: [] },
        { id: 11, name: "Chicken Salad ", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: cs, tags: [], nutritional: [] },

    ]
}