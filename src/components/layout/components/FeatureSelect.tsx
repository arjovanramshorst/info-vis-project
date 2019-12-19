import * as React from 'react'
import { GenderEqualityFeature } from '../../../data/dataset'
import { Select } from 'antd'

interface IFeatureSelect {
    feature: GenderEqualityFeature
    setFeature: (feature: GenderEqualityFeature) => void
}

const FeatureSelect: React.FunctionComponent<IFeatureSelect> = ({ feature, setFeature }) => <Select value={feature} onChange={setFeature}>
    <Select.Option value="gender_equality_index">Gender equality index</Select.Option>
    <Select.Option value="work">Work</Select.Option>
    <Select.Option value="money">Money</Select.Option>
    <Select.Option value="knowledge">Knowledge</Select.Option>
    <Select.Option value="time">Time</Select.Option>
    <Select.Option value="power">Power</Select.Option>
    <Select.Option value="health">Health</Select.Option>
</Select>

export default FeatureSelect
