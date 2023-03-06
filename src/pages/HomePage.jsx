import React from 'react'

const HomePage = () => {
  const isUserConnected = true

  if (!isUserConnected) {
    return <Navigate to = "/login" />
  }
  return (
    <div>
    </div>
  )
}

export default HomePage