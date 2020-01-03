import * as React from 'react'
import { Slider } from 'antd'
import { GenderEqualityYear } from '../../../data/dataset'

interface IYearSlider {
    year: GenderEqualityYear
    setYear: (year: GenderEqualityYear) => void
}

const YearSlider: React.FunctionComponent<IYearSlider> = ({ year, setYear }) => (
    <Slider
        step={null}
        min={2005}
        max={2015}
        marks={{
            2005: '2005',
            2010: '2010',
            2015: '2015',
        }}
        value={Number(year)}
        onChange={year => setYear(`${year}` as GenderEqualityYear)}
    />
)

export default YearSlider
