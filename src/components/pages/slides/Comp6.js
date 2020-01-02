import React, { useState } from "react";
import * as d3 from "d3";
import AnimatedBar from "./AnimatedBarHooks";
import { genderEqualityData } from '../../../data/dataset';

export function Comp6() {

  const types = ['Gender Equality', 'Work', 'Money', 'Knowledge', 'Time', 'Power', 'Health'];
  const keys = ['gender_equality_index_' , 'work_' , 'money_' , 'knowledge_' , 'time_' , 'power_' , 'health_']
  

  const generateData = (year='2005') =>
    d3.range(7).map((item, index) => ({
      index: index,
      date: index,
      value: genderEqualityData['EU-28'][keys[index]+year]
    }));

  const [data, setData] = useState(generateData('2005'));
  const [years, setYears] = useState('2005');

  const changeData = (year) => {
    setData(generateData(year));
    setYears(year);
  }

  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column', flex:1}}>
          <button onClick={() => changeData('2005')} style={years==='2005' ? {background:'black', color:'white', transition:'0.3s'} : {background: 'none', transition:'0.3s'}}>2005</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', flex:1}}>
          <button onClick={() => changeData('2010')} style={years==='2010' ? {background:'black', color:'white', transition:'0.3s'} : {background: 'none', transition:'0.3s'}}>2010</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', flex:1}}>
          <button onClick={() => changeData('2015')} style={years==='2015' ? {background:'black', color:'white', transition:'0.3s'} : {background: 'none', transition:'0.3s'}}>2015</button>
        </div>
      </div>
      <div>
        <AnimatedBar
          data={data}
          width={600}
          height={400}
          top={20}
          bottom={30}
          left={30}
          right={0}
        />
      </div>
    </div>
  );
}