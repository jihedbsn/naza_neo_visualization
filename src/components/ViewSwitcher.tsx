import React from 'react'
import { FaChartBar, FaTable } from 'react-icons/fa'

interface ViewSwitcherProps {
  currentView: 'chart' | 'table'
  onSwitchView: (view: 'chart' | 'table') => void
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  currentView,
  onSwitchView,
}) => {
  const isChartView = currentView === 'chart'

  return (
    <div className="flex justify-center">
      <button
        onClick={() => onSwitchView(isChartView ? 'table' : 'chart')}
        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
        aria-label={
          isChartView ? 'Switch to Table View' : 'Switch to Chart View'
        }
      >
        {isChartView ? <FaTable /> : <FaChartBar />}
        <span className="ml-2">
          {isChartView ? 'Table View' : 'Chart View'}
        </span>
      </button>
    </div>
  )
}

export default ViewSwitcher
