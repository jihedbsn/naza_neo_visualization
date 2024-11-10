// src/views/Home.tsx

import React, { useEffect, useState } from 'react'
import { fetchNeoData } from '../api/nasaApi'
import { processNeoData } from '../utils/dataProcessor'
import { ProcessedNeoData } from '../types/neo'
import NeoChart from '../components/NeoChart'

const Home: React.FC = () => {
  const [neoData, setNeoData] = useState<ProcessedNeoData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getNeoData = async () => {
      try {
        const data = await fetchNeoData()
        const processedData = processNeoData(data)
        setNeoData(processedData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getNeoData()
  }, [])

  if (loading) {
    return <h1 className="text-2xl font-bold text-center mb-4">Loading...</h1>
  }

  if (error) {
    return (
      <h1 className="text-2xl font-bold text-center mb-4">An error occurred</h1>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Near Earth Objects Visualization
      </h1>
      <NeoChart neoData={neoData} />
    </div>
  )
}

export default Home
