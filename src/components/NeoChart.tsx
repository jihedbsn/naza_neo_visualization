import React from 'react'
import { ProcessedNeoData } from '../types/neo'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

interface NeoChartProps {
  neoData: ProcessedNeoData[]
}

const NeoChart: React.FC<NeoChartProps> = ({ neoData }) => {
  return (
    <div style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer>
        <BarChart
          data={neoData}
          layout="vertical"
          margin={{ top: 40, right: 50, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            tick={{ fontSize: 12 }}
            label={{
              value: 'Estimated Diameter (km)',
              position: 'insideBottomRight',
              offset: -10,
              fontSize: 14,
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(2)} km`}
            contentStyle={{ fontSize: 12 }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="center"
            wrapperStyle={{
              paddingBottom: 10,
              fontSize: 12,
            }}
          />
          <Bar
            dataKey="minDiameter"
            fill="#467FEB"
            name="Min Estimated Diameter (km)"
            barSize={15}
          />
          <Bar
            dataKey="maxDiameter"
            fill="#D4463A"
            name="Max Estimated Diameter (km)"
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default NeoChart
