import React, { useEffect, useState } from 'react'
import { fetchNeoData } from '../api/nasaApi'
import { processNeoData } from '../utils/dataProcessor'
import { ProcessedNeoData } from '../types/neo'
import NeoChart from '../components/NeoChart'
import Loading from '../components/Loading'
import Error from '../components/Error'
import OrbitingBodySelector from '../components/OrbitingBodySelector'
import ViewSwitcher from '../components/ViewSwitcher'
import NeoTable from '../components/NeoTable'

const Home: React.FC = () => {
  const [neoData, setNeoData] = useState<ProcessedNeoData[]>([])
  const [filteredData, setFilteredData] = useState<ProcessedNeoData[]>([])
  const [orbitingBodies, setOrbitingBodies] = useState<string[]>([])
  const [selectedBody, setSelectedBody] = useState<string>('All')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState<'chart' | 'table'>('chart')

  useEffect(() => {
    const getNeoData = async () => {
      try {
        const data = await fetchNeoData()
        const processedData = processNeoData(data)
        setNeoData(processedData)

        const bodiesSet = new Set<string>()
        processedData.forEach((neo) => {
          neo.orbitingBodies.forEach((body) => bodiesSet.add(body))
        })
        setOrbitingBodies(['All', ...Array.from(bodiesSet)])
        setFilteredData(processedData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getNeoData()
  }, [])

  useEffect(() => {
    if (selectedBody === 'All') {
      setFilteredData(neoData)
    } else {
      const filtered = neoData.filter((neo) =>
        neo.orbitingBodies.includes(selectedBody),
      )
      setFilteredData(filtered)
    }
  }, [selectedBody, neoData])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Near Earth Objects Visualization
      </h1>
      <div className="fixed top-16 right-16 z-50 flex items-center space-x-4">
      <ViewSwitcher currentView={currentView} onSwitchView={setCurrentView} />
      <OrbitingBodySelector
        orbitingBodies={orbitingBodies}
        selectedBody={selectedBody}
        onSelectBody={setSelectedBody}
      />
    </div>
      {filteredData.length === 0 ? (
        <div className="text-center mt-10">No data available.</div>
      ) : currentView === 'chart' ? (
        <NeoChart neoData={filteredData} />
      ) : (
        <NeoTable neoData={filteredData} />
      )}
    </div>
  )
}

export default Home
