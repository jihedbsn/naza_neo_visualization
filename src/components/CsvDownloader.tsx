import React from 'react'
import { FaDownload } from 'react-icons/fa'

interface CsvDownloaderProps {
  onDownload: () => void
}

const CsvDownloader: React.FC<CsvDownloaderProps> = ({ onDownload }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
        aria-label={'Download CSV'}
      >
        <FaDownload />
        <span className="ml-2">Download CSV</span>
      </button>
    </div>
  )
}

export default CsvDownloader
