import { ProcessedNeoData } from '../types/neo'

const generateCSVData = (data: ProcessedNeoData[]): string => {
  const headers = [
    'Name',
    'Min Diameter (km)',
    'Max Diameter (km)',
    'Average Diameter (km)',
    'Orbiting Bodies',
  ]

  const rows = data.map((neo) => [
    neo.name,
    neo.minDiameter.toFixed(2),
    neo.maxDiameter.toFixed(2),
    neo.averageDiameter.toFixed(2),
    neo.orbitingBodies.join(', '),
  ])

  const csvContent = [headers, ...rows].map((e) => e.join(',')).join('\n')

  return csvContent
}

export const handleDownloadCSV = (data: ProcessedNeoData[]) => {
  const csvData = generateCSVData(data)

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'neo_data.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
