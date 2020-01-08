import { GenderEqualityFeature, GenderEqualityYear } from '../../../data/dataset'
import { ICountry } from '../../layout/PageWrapper'

export interface ISlideProps {
    setYear: (year: GenderEqualityYear) => void
    year: GenderEqualityYear
    setFeature: (feature: GenderEqualityFeature) => void
    feature: GenderEqualityFeature
    country: ICountry | null
    setCountry: (country: ICountry | null) => void
}
