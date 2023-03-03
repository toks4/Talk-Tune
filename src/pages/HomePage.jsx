import React from 'react'

const HomePage = () => {
  const isUserConnected = true

  if (!isUserConnected) {
    return <Navigate to = "/login" />
  }
  return (
    <div>
        <h1>Home Page</h1>
    </div>
  )
}

export default HomePage