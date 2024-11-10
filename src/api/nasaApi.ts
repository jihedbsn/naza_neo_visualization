import { NeoData } from '../types/neo'

const API_KEY = 'DEMO_KEY'
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse'

export const fetchNeoData = async (): Promise<NeoData[]> => {
  console.log('API_KEY', API_KEY)
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data.near_earth_objects
}
