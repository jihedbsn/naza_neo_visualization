import React from 'react'
import { ProcessedNeoData } from '../types/neo'

interface NeoTableProps {
  neoData: ProcessedNeoData[]
}

const NeoTable: React.FC<NeoTableProps> = ({ neoData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Min Diameter (km)</th>
            <th className="px-4 py-2">Max Diameter (km)</th>
            <th className="px-4 py-2">Average Diameter (km)</th>
            <th className="px-4 py-2">Orbiting Bodies</th>
          </tr>
        </thead>
        <tbody>
          {neoData.map((neo) => (
            <tr key={neo.name} className="text-center">
              <td className="border px-4 py-2">{neo.name}</td>
              <td className="border px-4 py-2">{neo.minDiameter.toFixed(2)}</td>
              <td className="border px-4 py-2">{neo.maxDiameter.toFixed(2)}</td>
              <td className="border px-4 py-2">
                {neo.averageDiameter.toFixed(2)}
              </td>
              <td className="border px-4 py-2">
                {neo.orbitingBodies.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NeoTable
