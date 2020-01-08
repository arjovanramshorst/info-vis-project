import * as React from 'react'
import { GenderEqualityYear } from '../../../data/dataset'
import { Select } from 'antd'

interface IYearSelect {
    year: GenderEqualityYear
    setYear: (feature: GenderEqualityYear) => void
}

const YearSelect: React.FunctionComponent<IYearSelect> = ({ year, setYear }) => (
    <Select value={year} onChange={setYear}>
        <Select.Option value="2005">2005</Select.Option>
        <Select.Option value="2010">2010</Select.Option>
        <Select.Option value="2015">2015</Select.Option>
    </Select>
)

export default YearSelect
