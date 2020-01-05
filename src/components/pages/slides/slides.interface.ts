import { GenderEqualityFeature, GenderEqualityYear } from '../../../data/dataset'
import { ICountry } from '../../charts/WorldMap'

export interface ISlideProps {
    setYear: (year: GenderEqualityYear) => void
    year: GenderEqualityYear
    setFeature: (feature: GenderEqualityFeature) => void
    feature: GenderEqualityFeature
    country: ICountry | null
    setCountry: (country: ICountry | null) => void
}
