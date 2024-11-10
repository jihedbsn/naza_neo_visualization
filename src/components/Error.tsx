import React from 'react'

interface ErrorProps {
  message: string
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className="text-center mt-10 text-red-500">Error: {message}</div>
}

export default Error
