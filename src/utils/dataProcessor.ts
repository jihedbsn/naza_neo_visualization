import { NeoData, ProcessedNeoData } from '../types/neo'

export const processNeoData = (data: NeoData[]): ProcessedNeoData[] => {
  return data
    .map((neo) => {
      const diameterData = neo.estimated_diameter?.kilometers

      if (!diameterData) {
        return null
      }
      const minDiameter =
        neo.estimated_diameter.kilometers.estimated_diameter_min
      const maxDiameter =
        neo.estimated_diameter.kilometers.estimated_diameter_max
      const averageDiameter = (minDiameter + maxDiameter) / 2

      // Extracting unique orbiting bodies
      const orbitingBodies = neo.close_approach_data
        ?.map((cad) => cad.orbiting_body)
        .filter(
          (body, index, self) => body && self.indexOf(body) === index,
        ) || ['Unknown']

      return {
        name: neo.name,
        minDiameter,
        maxDiameter,
        averageDiameter,
        orbitingBodies,
      }
    })
    .filter((item): item is ProcessedNeoData => item !== null)
    .sort((a, b) => b.averageDiameter - a.averageDiameter)
}
