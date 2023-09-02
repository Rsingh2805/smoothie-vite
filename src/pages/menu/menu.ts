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
import longBlack from '../../assets/Coffee/Long-Black.png'
import flatWhite from '../../assets/Coffee/Flat-White.png'
import latte from '../../assets/Coffee/Latte.png'
import cappuccino from '../../assets/Coffee/Cappuccino.png'
import mocha from '../../assets/Coffee/Mocha.png'
import chaiLatte from '../../assets/Coffee/Chai-Latte.png'
import dirtyChai from '../../assets/Coffee/Dirty-Chai--jpg.png'
import { LuMilkOff, LuNut } from 'react-icons/lu'
import { BiRun } from 'react-icons/bi'
import { IconType } from 'react-icons'
import { TbMilk } from 'react-icons/tb'
import { MdOutlineBeachAccess } from 'react-icons/md'


export enum MenuItem {
    SMOOTHIE,
    ACAI,
    COFFEE
}

export enum Tag {
    DAIRY_FREE,
    LOW_FAT,
    ALMOND_MILK,
    COCONUT_WATER,
    NUTS_FREE
}

export const TagDetails: {[key in Tag]: {name: string, icon: IconType}} = {
    [Tag.DAIRY_FREE]: { name: 'Dairy Free', icon: LuMilkOff },
    [Tag.LOW_FAT]: { name: 'Low Fat', icon: BiRun },
    [Tag.ALMOND_MILK]: { name: 'Almond Milk', icon: TbMilk },
    [Tag.COCONUT_WATER]: { name: 'Coconut Water', icon: MdOutlineBeachAccess },
    [Tag.NUTS_FREE]: { name: 'No Nuts', icon: LuNut}   
}

export interface ItemData {
    id: number
    name: string
    desc: string
    nutritional: Nutritional[]
    image: string
    tags: Tag[]
}

export interface Nutritional {
    calories: number
    carbs: number
    fat: number
    fibre: number
    protein: number
    size: string
}

export const abc: {
    [key in MenuItem]: ItemData[]
} = {
    [MenuItem.SMOOTHIE]: [
        { id: 1, name: "Berry Bliss", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: berryBliss, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{calories: 224 ,fat: 7, carbs: 33 ,fibre: 11 ,protein: 5 ,size: "small"}, {calories: 274 ,fat: 7, carbs: 43 ,fibre: 13 ,protein: 6 ,size: "large"}] },
        { id: 2, name: "Tropical", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: tropical, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{calories: 224 ,fat: 1, carbs: 60 ,fibre: 9 ,protein: 4 ,size: "small"}, {calories: 299 ,fat: 2, carbs: 73 ,fibre: 11 ,protein: 5 ,size: "large"}] },
        { id: 3, name: "Nutty-licious", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: nuttyLicious, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT], nutritional: [{calories: 239 ,fat: 51, carbs: 81 ,fibre: 6 ,protein: 28 ,size: "small"}, {calories: 436 ,fat: 64, carbs: 92 ,fibre: 7 ,protein: 35 ,size: "large"}] },
        { id: 4, name: "Sunrise", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: sunrise, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{calories: 180 ,fat: 1, carbs: 39 ,fibre: 5 ,protein: 2 ,size: "small"}, {calories: 924 ,fat: 2, carbs: 48 ,fibre: 6 ,protein: 2 ,size: "large"}] },
        { id: 5, name: "Super Green", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: superGreen, tags: [Tag.DAIRY_FREE, Tag.LOW_FAT, Tag.NUTS_FREE], nutritional: [{calories: 299 ,fat: 1, carbs: 66 ,fibre: 8 ,protein: 6 ,size: "small"}, {calories: 355 ,fat: 1, carbs: 79 ,fibre: 9 ,protein: 7 ,size: "large"}] },
    ],
    [MenuItem.ACAI]: [
        { id: 1, name: "Mixed Berry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: mixedBerry, tags: [Tag.DAIRY_FREE, Tag.COCONUT_WATER], nutritional: [{calories: 466 ,fat: 10, carbs: 122 ,fibre: 17 ,protein: 13 ,size: "small"}, {calories: 549 ,fat: 11, carbs: 132 ,fibre: 20 ,protein: 16 ,size: "large"}]},
        { id: 2, name: "Banana Split", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: bananaSplit, tags: [Tag.DAIRY_FREE, Tag.ALMOND_MILK], nutritional: [{calories: 487 ,fat: 9, carbs: 146 ,fibre: 16 ,protein: 12 ,size: "small"}, {calories: 583 ,fat: 11, carbs: 164 ,fibre: 18 ,protein: 14 ,size: "large"}] },
        { id: 3, name: "Nutty Monkey", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: nuttyMonkey, tags: [Tag.DAIRY_FREE, Tag.ALMOND_MILK], nutritional: [{calories: 502 ,fat: 47, carbs: 136 ,fibre: 15 ,protein: 33 ,size: "small"}, {calories: 616 ,fat: 59, carbs: 153 ,fibre: 17 ,protein: 37 ,size: "large"}] },
        { id: 4, name: "Green Machine", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: greenMachine, tags: [Tag.DAIRY_FREE, Tag.COCONUT_WATER], nutritional: [{calories: 543 ,fat: 5, carbs: 144 ,fibre: 15 ,protein: 10 ,size: "small"}, {calories: 613 ,fat: 6, carbs: 160 ,fibre: 17 ,protein: 12 ,size: "large"}] },
    ],
    [MenuItem.COFFEE]: [
        { id: 1, name: "Espresso", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: espresso, tags: [], nutritional: [] },
        { id: 2, name: "Piccolo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: piccolo, tags: [], nutritional: [] },
        { id: 3, name: "Macchiaoto", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: macchiato, tags: [], nutritional: [] },
        { id: 4, name: "Long Black", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: longBlack, tags: [], nutritional: [] },
        { id: 5, name: "Flat white", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: flatWhite, tags: [], nutritional: [] },
        { id: 6, name: "Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: latte, tags: [], nutritional: [] },
        { id: 7, name: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: cappuccino, tags: [], nutritional: [] },
        { id: 8, name: "Mocha", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: mocha, tags: [], nutritional: [] },
        { id: 9, name: "Chai Latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: chaiLatte, tags: [], nutritional: [] },
        { id: 10, name: "Dirty Chai", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  image: dirtyChai, tags: [], nutritional: [] },
    ]
}