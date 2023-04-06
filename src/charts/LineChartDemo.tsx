import { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { option } from './Options.model';
import './LineChartDemo.css';

function LineChartDemo() {
    return (
        <div className="lineChartDemo">
            <ReactECharts
                option={option}
            />
        </div>
    )
}

export default LineChartDemo
