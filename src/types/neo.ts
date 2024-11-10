export interface EstimatedDiameter {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface EstimatedDiameterData {
  kilometers: EstimatedDiameter
  meters: EstimatedDiameter
  miles: EstimatedDiameter
  feet: EstimatedDiameter
}

export interface NeoData {
  id: string
  name: string
  estimated_diameter: EstimatedDiameterData
  close_approach_data: CloseApproachData[]
  [key: string]: any
}

export interface CloseApproachData {
  orbiting_body: string
  [key: string]: any
}

export interface ProcessedNeoData {
  name: string
  minDiameter: number
  maxDiameter: number
  averageDiameter: number
  orbitingBodies: string[]
}
