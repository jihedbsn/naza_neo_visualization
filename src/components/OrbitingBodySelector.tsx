import React, { useState } from 'react'

interface OrbitingBodySelectorProps {
  orbitingBodies: string[]
  selectedBody: string
  onSelectBody: (body: string) => void
}

const OrbitingBodySelector: React.FC<OrbitingBodySelectorProps> = ({
  orbitingBodies,
  selectedBody,
  onSelectBody,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBodies = orbitingBodies.filter((body) =>
    body.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-2 border rounded bg-white text-left text-gray-700"
      >
        {selectedBody || 'Select an orbiting body'}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg mt-2">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Type to search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <ul className="max-h-48 overflow-y-auto">
            {filteredBodies.map((body) => (
              <li
                key={body}
                onClick={() => {
                  onSelectBody(body)
                  // for autoclose on selecting
                  setIsOpen((prev) => !prev)
                }}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                <input
                  type="checkbox"
                  checked={body === selectedBody}
                  readOnly
                  className="mr-2"
                />
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default OrbitingBodySelector
