/*
This file can contain the preprocessed data set so it can be used by d3 or whatever we choose.
 */

import { ICountry, IGeoData } from '../components/layout/PageWrapper'

export interface IGenderEqualityData {
    gender_equality_index_2005: number
    gender_equality_index_2010: number
    gender_equality_index_2015: number
    work_2005: number
    work_2010: number
    work_2015: number
    money_2005: number
    money_2010: number
    money_2015: number
    knowledge_2005: number
    knowledge_2010: number
    knowledge_2015: number
    time_2005: number
    time_2010: number
    time_2015: number
    power_2005: number
    power_2010: number
    power_2015: number
    health_2005: number
    health_2010: number
    health_2015: number
}

export type GenderEqualityFeature =
    | 'gender_equality_index'
    | 'work'
    | 'money'
    | 'knowledge'
    | 'time'
    | 'power'
    | 'health'

export type GenderEqualityYear = '2005' | '2010' | '2015' | 'growth' | 'reachEquality'

export const COLORS: Record<GenderEqualityFeature, string> = {
    gender_equality_index: 'hsl(279, 100%, 40%)',
    work: 'hsl(317, 100%, 35%)',
    money: 'hsl(89, 100%, 36%)',
    knowledge: 'hsl(227, 100%, 40%)',
    time: 'hsl(26, 100%, 50%)',
    power: 'hsl(1, 100%, 50%)',
    health: 'hsl(52, 100%, 48%)',
}

const color = (hue: number, brightness: number) => `hsl(${hue}, 100%, ${brightness}%)`
const mapColor = (hue: number) => [90, 80, 70, 60, 50].map(b => color(hue, b))

export const COLORSCALE: Record<GenderEqualityFeature, string[]> = {
    gender_equality_index: mapColor(279),
    work: mapColor(317),
    money: mapColor(89),
    knowledge: mapColor(227),
    time: mapColor(26),
    power: mapColor(1),
    health: mapColor(52),
}

export const getKey = (feature: GenderEqualityFeature, year: GenderEqualityYear) =>
    `${feature}_${year}` as keyof IGenderEqualityData

export const countryCode = (country: ICountry | null) =>
    (country ? country.properties.iso_a2 : 'EU-28') as keyof typeof genderEqualityData

export const getPropertiesAsArray = (country: keyof typeof genderEqualityData, year: GenderEqualityYear) => [
    {
        title: 'GEI',
        values: getValuesForCountry('gender_equality_index', country),
        color: COLORS.gender_equality_index,
        feature: 'gender_equality_index',
    },
    {
        title: 'Work',
        values: getValuesForCountry('work', country),
        color: COLORS.work,
        feature: 'work',
    },
    {
        title: 'Money',
        values: getValuesForCountry('money', country),
        color: COLORS.money,
        feature: 'money',
    },
    {
        title: 'Knowledge',
        values: getValuesForCountry('knowledge', country),
        color: COLORS.knowledge,
        feature: 'knowledge',
    },
    {
        title: 'Time',
        values: getValuesForCountry('time', country),
        color: COLORS.time,
        feature: 'time',
    },
    {
        title: 'Power',
        values: getValuesForCountry('power', country),
        color: COLORS.power,
        feature: 'power',
    },
    {
        title: 'Health',
        values: getValuesForCountry('health', country),
        color: COLORS.health,
        feature: 'health',
    },
]

export const getRange = (feature: GenderEqualityFeature) => (Object.keys(genderEqualityData) as Array<keyof typeof genderEqualityData>)
    .reduce(([min, max], country) => {
        const data = [
            genderEqualityData[country][getKey(feature, '2005')],
            genderEqualityData[country][getKey(feature, '2010')],
            genderEqualityData[country][getKey(feature, '2015')],
        ]
        return [
            Math.min(min, ...data),
            Math.max(max, ...data),
        ]
    },
    [100, 0]) as [number, number]

export const getValuesForCountry = (feature: GenderEqualityFeature, country: keyof typeof genderEqualityData) => {
    const index = {
        '2005': genderEqualityData[country][getKey(feature, '2005')],
        '2010': genderEqualityData[country][getKey(feature, '2010')],
        '2015': genderEqualityData[country][getKey(feature, '2015')],
    }
    const predictedGrowthKeys = Array.from(Array(20).keys()).map(x => `${x * 5 + 2005}`)

    const predictedGrowthValues = [
        index['2005'],
        index['2010'],
        index['2015'],
        ...Array.from(Array(17).keys()).map(x => index['2015'] + (index['2015'] - index['2010']) * (x + 1)),
    ]

    return {
        index,
        growth: predictedGrowthKeys.map((key, index) => ({ key, value: predictedGrowthValues[index] })),
        reachEquality: reachEquality(feature, country),
    }
}

export const reachEquality = (feature: GenderEqualityFeature, country: keyof typeof genderEqualityData) => {
    // @ts-ignore
    const index2015 = genderEqualityData[country][getKey(feature, 2015)]
    // @ts-ignore
    const index2010 = genderEqualityData[country][getKey(feature, 2010)]
    if (index2015 - index2010 < 0) {
        return undefined
    }

    return Math.round(((100 - index2015) / (index2015 - index2010) * 5) + 2015)
}

export const MAPTEXT = {
    gender_equality_index: 'GEI',
    work: 'WORK',
    money: 'MONEY',
    knowledge: 'KNOWLEDGE',
    time: 'TIME',
    power: 'POWER',
    health: 'HEALTH',
}

export const genderEqualityData = {
    'EU-28': {
        gender_equality_index_2005: 62,
        gender_equality_index_2010: 63.8,
        gender_equality_index_2015: 66.2,
        work_2005: 70,
        work_2010: 70.5,
        work_2015: 71.5,
        money_2005: 73.9,
        money_2010: 78.4,
        money_2015: 79.6,
        knowledge_2005: 60.8,
        knowledge_2010: 61.8,
        knowledge_2015: 63.4,
        time_2005: 66.7,
        time_2010: 66.3,
        time_2015: 65.7,
        power_2005: 38.9,
        power_2010: 41.9,
        power_2015: 48.5,
        health_2005: 85.9,
        health_2010: 87.2,
        health_2015: 87.4,
    },
    BE: {
        gender_equality_index_2005: 66,
        gender_equality_index_2010: 69.3,
        gender_equality_index_2015: 70.5,
        work_2005: 71,
        work_2010: 72.7,
        work_2015: 73.8,
        money_2005: 81.3,
        money_2010: 85.5,
        money_2015: 87.5,
        knowledge_2005: 68.1,
        knowledge_2010: 70.6,
        knowledge_2015: 71.1,
        time_2005: 74.3,
        time_2010: 70.3,
        time_2015: 65.3,
        power_2005: 39.8,
        power_2010: 47.9,
        power_2015: 53.4,
        health_2005: 86.3,
        health_2010: 86.5,
        health_2015: 86.3,
    },
    BG: {
        gender_equality_index_2005: 56,
        gender_equality_index_2010: 55,
        gender_equality_index_2015: 58,
        work_2005: 67.3,
        work_2010: 67.9,
        work_2015: 68.6,
        money_2005: 54.3,
        money_2010: 60.8,
        money_2015: 61.9,
        knowledge_2005: 52.5,
        knowledge_2010: 50.4,
        knowledge_2015: 53.3,
        time_2005: 50.9,
        time_2010: 43.9,
        time_2015: 42.7,
        power_2005: 48.4,
        power_2010: 45.8,
        power_2015: 56,
        health_2005: 72.6,
        health_2010: 75.3,
        health_2015: 76.4,
    },
    CZ: {
        gender_equality_index_2005: 53.6,
        gender_equality_index_2010: 55.6,
        gender_equality_index_2015: 53.6,
        work_2005: 65.3,
        work_2010: 64.9,
        work_2015: 66.1,
        money_2005: 70.2,
        money_2010: 73.8,
        money_2015: 75.9,
        knowledge_2005: 52.2,
        knowledge_2010: 55.4,
        knowledge_2015: 57.3,
        time_2005: 51.2,
        time_2010: 53.8,
        time_2015: 57.3,
        power_2005: 29.6,
        power_2010: 31,
        power_2015: 22.6,
        health_2005: 84.6,
        health_2010: 85.7,
        health_2015: 86,
    },
    DK: {
        gender_equality_index_2005: 74.6,
        gender_equality_index_2010: 75.2,
        gender_equality_index_2015: 76.8,
        work_2005: 78.9,
        work_2010: 79.8,
        work_2015: 79.2,
        money_2005: 82.7,
        money_2010: 83.6,
        money_2015: 86.6,
        knowledge_2005: 73.7,
        knowledge_2010: 73.2,
        knowledge_2015: 73.6,
        time_2005: 82.7,
        time_2010: 80.4,
        time_2015: 83.1,
        power_2005: 54.7,
        power_2010: 58,
        power_2015: 61.5,
        health_2005: 91.1,
        health_2010: 90.3,
        health_2015: 89.6,
    },
    DE: {
        gender_equality_index_2005: 60,
        gender_equality_index_2010: 62.6,
        gender_equality_index_2015: 65.5,
        work_2005: 68.1,
        work_2010: 70,
        work_2015: 71.4,
        money_2005: 83.3,
        money_2010: 83.2,
        money_2015: 84.2,
        knowledge_2005: 55.3,
        knowledge_2010: 56.3,
        knowledge_2015: 52.9,
        time_2005: 66.6,
        time_2010: 69.8,
        time_2015: 65,
        power_2005: 34,
        power_2010: 38.3,
        power_2015: 53,
        health_2005: 86.6,
        health_2010: 89.3,
        health_2015: 90.5,
    },
    EE: {
        gender_equality_index_2005: 52.2,
        gender_equality_index_2010: 53.4,
        gender_equality_index_2015: 56.7,
        work_2005: 71,
        work_2010: 71.2,
        work_2015: 72.1,
        money_2005: 58.4,
        money_2010: 65.5,
        money_2015: 66.7,
        knowledge_2005: 49.5,
        knowledge_2010: 51.6,
        knowledge_2015: 53.2,
        time_2005: 74.6,
        time_2010: 73.7,
        time_2015: 74.7,
        power_2005: 22.5,
        power_2010: 21.9,
        power_2015: 28.2,
        health_2005: 81,
        health_2010: 82.7,
        health_2015: 81.5,
    },
    IE: {
        gender_equality_index_2005: 61.9,
        gender_equality_index_2010: 65.4,
        gender_equality_index_2015: 69.5,
        work_2005: 71.1,
        work_2010: 73.5,
        work_2015: 73.9,
        money_2005: 79.5,
        money_2010: 85.5,
        money_2015: 84.7,
        knowledge_2005: 60.8,
        knowledge_2010: 65.3,
        knowledge_2015: 66.4,
        time_2005: 74.2,
        time_2010: 70.8,
        time_2015: 74.2,
        power_2005: 32.1,
        power_2010: 37.2,
        power_2015: 48.6,
        health_2005: 90.4,
        health_2010: 90.7,
        health_2015: 90.6,
    },
    GR: {
        gender_equality_index_2005: 46.8,
        gender_equality_index_2010: 48.6,
        gender_equality_index_2015: 50,
        work_2005: 62.5,
        work_2010: 63.6,
        work_2015: 64.2,
        money_2005: 71.9,
        money_2010: 75.3,
        money_2015: 70.7,
        knowledge_2005: 47.2,
        knowledge_2010: 53.4,
        knowledge_2015: 55.6,
        time_2005: 46.2,
        time_2010: 35.6,
        time_2015: 44.7,
        power_2005: 18.2,
        power_2010: 22.3,
        power_2015: 21.7,
        health_2005: 84.6,
        health_2010: 84.3,
        health_2015: 83.1,
    },
    ES: {
        gender_equality_index_2005: 62.2,
        gender_equality_index_2010: 66.4,
        gender_equality_index_2015: 68.3,
        work_2005: 68.1,
        work_2010: 71.8,
        work_2015: 72.4,
        money_2005: 73.6,
        money_2010: 77.1,
        money_2015: 75.9,
        knowledge_2005: 59.3,
        knowledge_2010: 63.5,
        knowledge_2015: 65.3,
        time_2005: 58,
        time_2010: 60.8,
        time_2015: 64,
        power_2005: 45.9,
        power_2010: 52.6,
        power_2015: 57,
        health_2005: 88.1,
        health_2010: 88.6,
        health_2015: 89.6,
    },
    FR: {
        gender_equality_index_2005: 65.2,
        gender_equality_index_2010: 67.5,
        gender_equality_index_2015: 72.6,
        work_2005: 70.5,
        work_2010: 71.5,
        work_2015: 72.1,
        money_2005: 81.6,
        money_2010: 83.5,
        money_2015: 86.1,
        knowledge_2005: 62.3,
        knowledge_2010: 62,
        knowledge_2015: 66.1,
        time_2005: 69.1,
        time_2010: 66.6,
        time_2015: 67.3,
        power_2005: 43.6,
        power_2010: 52.4,
        power_2015: 68.2,
        health_2005: 86.9,
        health_2010: 86.7,
        health_2015: 87.1,
    },
    HR: {
        gender_equality_index_2005: 50.3,
        gender_equality_index_2010: 52.3,
        gender_equality_index_2015: 53.1,
        work_2005: 67.5,
        work_2010: 67.2,
        work_2015: 69.4,
        money_2005: 68.6,
        money_2010: 68.6,
        money_2015: 69.9,
        knowledge_2005: 43.6,
        knowledge_2010: 49.9,
        knowledge_2015: 49.8,
        time_2005: 48.3,
        time_2010: 49.8,
        time_2015: 51,
        power_2005: 27.4,
        power_2010: 28.4,
        power_2015: 28.5,
        health_2005: 81.4,
        health_2010: 81.5,
        health_2015: 83.3,
    },
    IT: {
        gender_equality_index_2005: 49.2,
        gender_equality_index_2010: 53.3,
        gender_equality_index_2015: 62.1,
        work_2005: 60.8,
        work_2010: 61.3,
        work_2015: 62.4,
        money_2005: 76.2,
        money_2010: 78.9,
        money_2015: 78.6,
        knowledge_2005: 54.1,
        knowledge_2010: 53.8,
        knowledge_2015: 61.4,
        time_2005: 60.1,
        time_2010: 55.1,
        time_2015: 59.3,
        power_2005: 16.1,
        power_2010: 25.2,
        power_2015: 45.3,
        health_2005: 85.8,
        health_2010: 86.3,
        health_2015: 86.3,
    },
    CY: {
        gender_equality_index_2005: 45.9,
        gender_equality_index_2010: 49,
        gender_equality_index_2015: 55.1,
        work_2005: 66.3,
        work_2010: 70.5,
        work_2015: 70.7,
        money_2005: 72.6,
        money_2010: 80.7,
        money_2015: 79.2,
        knowledge_2005: 43.4,
        knowledge_2010: 55.5,
        knowledge_2015: 58.5,
        time_2005: 47.7,
        time_2010: 45.9,
        time_2015: 51.3,
        power_2005: 16.4,
        power_2010: 15.4,
        power_2015: 24.7,
        health_2005: 85.8,
        health_2010: 86.4,
        health_2015: 88.2,
    },
    LV: {
        gender_equality_index_2005: 53.4,
        gender_equality_index_2010: 55.2,
        gender_equality_index_2015: 57.9,
        work_2005: 71.7,
        work_2010: 72.6,
        work_2015: 73.6,
        money_2005: 56.3,
        money_2010: 58.9,
        money_2015: 64.3,
        knowledge_2005: 46.6,
        knowledge_2010: 49.2,
        knowledge_2015: 48.9,
        time_2005: 59.1,
        time_2010: 62,
        time_2015: 65.8,
        power_2005: 34.8,
        power_2010: 34.8,
        power_2015: 39,
        health_2005: 73.8,
        health_2010: 77.3,
        health_2015: 78.4,
    },
    LT: {
        gender_equality_index_2005: 55.8,
        gender_equality_index_2010: 54.9,
        gender_equality_index_2015: 56.8,
        work_2005: 71.9,
        work_2010: 72.6,
        work_2015: 73.2,
        money_2005: 57,
        money_2010: 60.8,
        money_2015: 65.6,
        knowledge_2005: 55.1,
        knowledge_2010: 54.3,
        knowledge_2015: 55.8,
        time_2005: 53.5,
        time_2010: 52.2,
        time_2015: 50.6,
        power_2005: 37.3,
        power_2010: 32.9,
        power_2015: 36.6,
        health_2005: 77.6,
        health_2010: 80.4,
        health_2015: 79.1,
    },
    LU: {
        gender_equality_index_2005: 64.4,
        gender_equality_index_2010: 61.2,
        gender_equality_index_2015: 69,
        work_2005: 68.1,
        work_2010: 70.9,
        work_2015: 74,
        money_2005: 93.1,
        money_2010: 91.8,
        money_2015: 94.4,
        knowledge_2005: 62,
        knowledge_2010: 66.3,
        knowledge_2015: 69.4,
        time_2005: 73.2,
        time_2010: 70.2,
        time_2015: 69.1,
        power_2005: 36.2,
        power_2010: 25.6,
        power_2015: 43.5,
        health_2005: 89.2,
        health_2010: 89.8,
        health_2015: 89,
    },
    HU: {
        gender_equality_index_2005: 49.5,
        gender_equality_index_2010: 52.4,
        gender_equality_index_2015: 50.8,
        work_2005: 65.4,
        work_2010: 66,
        work_2015: 67.2,
        money_2005: 66.5,
        money_2010: 70.8,
        money_2015: 70.7,
        knowledge_2005: 56.9,
        knowledge_2010: 54.5,
        knowledge_2015: 56.9,
        time_2005: 61.1,
        time_2010: 54.1,
        time_2015: 54.3,
        power_2005: 16.3,
        power_2010: 23.5,
        power_2015: 18.7,
        health_2005: 82.4,
        health_2010: 85.4,
        health_2015: 86,
    },
    MT: {
        gender_equality_index_2005: 56,
        gender_equality_index_2010: 54.4,
        gender_equality_index_2015: 60.1,
        work_2005: 60.8,
        work_2010: 65.1,
        work_2015: 71,
        money_2005: 70.3,
        money_2010: 79.2,
        money_2015: 82.4,
        knowledge_2005: 62.4,
        knowledge_2010: 65.4,
        knowledge_2015: 65.2,
        time_2005: 60.8,
        time_2010: 54.3,
        time_2015: 64.2,
        power_2005: 27.8,
        power_2010: 20.9,
        power_2015: 27.4,
        health_2005: 90.7,
        health_2010: 90.6,
        health_2015: 91.8,
    },
    NL: {
        gender_equality_index_2005: 67.8,
        gender_equality_index_2010: 74,
        gender_equality_index_2015: 72.9,
        work_2005: 74.8,
        work_2010: 76.3,
        work_2015: 76.7,
        money_2005: 82.2,
        money_2010: 86.6,
        money_2015: 86.8,
        knowledge_2005: 63.9,
        knowledge_2010: 66.9,
        knowledge_2015: 67.3,
        time_2005: 86.4,
        time_2010: 85.9,
        time_2015: 83.9,
        power_2005: 40.3,
        power_2010: 56.9,
        power_2015: 52.9,
        health_2005: 89.7,
        health_2010: 90.3,
        health_2015: 89.9,
    },
    AT: {
        gender_equality_index_2005: 59.5,
        gender_equality_index_2010: 58.7,
        gender_equality_index_2015: 63.3,
        work_2005: 73.7,
        work_2010: 75.3,
        work_2015: 76.1,
        money_2005: 82.5,
        money_2010: 82.8,
        money_2015: 85.9,
        knowledge_2005: 58.9,
        knowledge_2010: 58.9,
        knowledge_2015: 63.2,
        time_2005: 60.2,
        time_2010: 56,
        time_2015: 61.2,
        power_2005: 29.5,
        power_2010: 28.4,
        power_2015: 34.9,
        health_2005: 91.4,
        health_2010: 91.1,
        health_2015: 91.7,
    },
    PL: {
        gender_equality_index_2005: 52.4,
        gender_equality_index_2010: 55.5,
        gender_equality_index_2015: 56.8,
        work_2005: 65.2,
        work_2010: 66.3,
        work_2015: 66.8,
        money_2005: 61.4,
        money_2010: 69.5,
        money_2015: 73.3,
        knowledge_2005: 56.7,
        knowledge_2010: 57.8,
        knowledge_2015: 56,
        time_2005: 54.6,
        time_2010: 54.2,
        time_2015: 52.5,
        power_2005: 26.3,
        power_2010: 30.6,
        power_2015: 35.1,
        health_2005: 80.6,
        health_2010: 81.6,
        health_2015: 82.2,
    },
    PT: {
        gender_equality_index_2005: 49.9,
        gender_equality_index_2010: 53.7,
        gender_equality_index_2015: 56,
        work_2005: 70.6,
        work_2010: 71.4,
        work_2015: 72,
        money_2005: 68.8,
        money_2010: 71.8,
        money_2015: 70.9,
        knowledge_2005: 48.6,
        knowledge_2010: 50.1,
        knowledge_2015: 54.8,
        time_2005: 47.3,
        time_2010: 38.7,
        time_2015: 47.5,
        power_2005: 22.2,
        power_2010: 34.9,
        power_2015: 33.9,
        health_2005: 83.8,
        health_2010: 84.3,
        health_2015: 83.6,
    },
    RO: {
        gender_equality_index_2005: 49.9,
        gender_equality_index_2010: 50.8,
        gender_equality_index_2015: 52.4,
        work_2005: 68.6,
        work_2010: 67.9,
        work_2015: 67.1,
        money_2005: 53.2,
        money_2010: 59.8,
        money_2015: 59.4,
        knowledge_2005: 47.9,
        knowledge_2010: 47.2,
        knowledge_2015: 51.8,
        time_2005: 48.9,
        time_2010: 50.6,
        time_2015: 50.3,
        power_2005: 30.7,
        power_2010: 30.8,
        power_2015: 33.2,
        health_2005: 69.5,
        health_2010: 69.9,
        health_2015: 70.4,
    },
    SI: {
        gender_equality_index_2005: 60.8,
        gender_equality_index_2010: 62.7,
        gender_equality_index_2015: 68.4,
        work_2005: 71.2,
        work_2010: 71.9,
        work_2015: 71.8,
        money_2005: 77.7,
        money_2010: 80.3,
        money_2015: 81.6,
        knowledge_2005: 52.1,
        knowledge_2010: 55,
        knowledge_2015: 55,
        time_2005: 73.4,
        time_2010: 68.3,
        time_2015: 72.9,
        power_2005: 36.5,
        power_2010: 41.1,
        power_2015: 60.6,
        health_2005: 86.3,
        health_2010: 86.8,
        health_2015: 87.7,
    },
    SK: {
        gender_equality_index_2005: 52.5,
        gender_equality_index_2010: 53,
        gender_equality_index_2015: 52.4,
        work_2005: 65.3,
        work_2010: 64.8,
        work_2015: 65.5,
        money_2005: 61.5,
        money_2010: 70.2,
        money_2015: 74,
        knowledge_2005: 54.5,
        knowledge_2010: 59.5,
        knowledge_2015: 60,
        time_2005: 55.3,
        time_2010: 39.9,
        time_2015: 46.3,
        power_2005: 26.9,
        power_2010: 29.5,
        power_2015: 23.1,
        health_2005: 83.5,
        health_2010: 84.8,
        health_2015: 85.3,
    },
    FI: {
        gender_equality_index_2005: 72,
        gender_equality_index_2010: 73.1,
        gender_equality_index_2015: 73,
        work_2005: 74.2,
        work_2010: 74.5,
        work_2015: 74.7,
        money_2005: 80.1,
        money_2010: 84.1,
        money_2015: 86.4,
        knowledge_2005: 56.6,
        knowledge_2010: 58.6,
        knowledge_2015: 61.3,
        time_2005: 81.6,
        time_2010: 80.1,
        time_2015: 77.4,
        power_2005: 68.4,
        power_2010: 69.1,
        power_2015: 65.3,
        health_2005: 89.2,
        health_2010: 89.5,
        health_2015: 89.7,
    },
    SE: {
        gender_equality_index_2005: 78.8,
        gender_equality_index_2010: 80.1,
        gender_equality_index_2015: 82.6,
        work_2005: 78.7,
        work_2010: 80.4,
        work_2015: 82.6,
        money_2005: 84.1,
        money_2010: 85.3,
        money_2015: 87.5,
        knowledge_2005: 68.1,
        knowledge_2010: 70.7,
        knowledge_2015: 72.8,
        time_2005: 89.6,
        time_2010: 84.5,
        time_2015: 90.1,
        power_2005: 74.1,
        power_2010: 77.8,
        power_2015: 79.5,
        health_2005: 91.7,
        health_2010: 93.2,
        health_2015: 94.1,
    },
    GB: {
        gender_equality_index_2005: 71.2,
        gender_equality_index_2010: 68.7,
        gender_equality_index_2015: 71.5,
        work_2005: 74.2,
        work_2010: 75.1,
        work_2015: 76.6,
        money_2005: 79.7,
        money_2010: 79.8,
        money_2015: 81.2,
        knowledge_2005: 75.8,
        knowledge_2010: 73.3,
        knowledge_2015: 71.8,
        time_2005: 69.4,
        time_2010: 72.1,
        time_2015: 69.9,
        power_2005: 51.4,
        power_2010: 42.4,
        power_2015: 53,
        health_2005: 93.1,
        health_2010: 94.1,
        health_2015: 93.1,
    },
}
