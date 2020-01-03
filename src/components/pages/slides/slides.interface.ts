import { GenderEqualityFeature, GenderEqualityYear } from '../../../data/dataset'

export interface ISlideProps {
    setYear: (year: GenderEqualityYear) => void
    year: GenderEqualityYear
    setFeature: (feature: GenderEqualityFeature) => void
    feature: GenderEqualityFeature
}
