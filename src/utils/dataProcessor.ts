import { NeoData, ProcessedNeoData } from '../types/neo'

export const processNeoData = (data: NeoData[]): ProcessedNeoData[] => {
  return data
    .map((neo) => {
      const minDiameter =
        neo.estimated_diameter.kilometers.estimated_diameter_min
      const maxDiameter =
        neo.estimated_diameter.kilometers.estimated_diameter_max
      const averageDiameter = (minDiameter + maxDiameter) / 2

      return {
        name: neo.name,
        minDiameter,
        maxDiameter,
        averageDiameter,
      }
    })
    .sort((a, b) => b.averageDiameter - a.averageDiameter)
}
