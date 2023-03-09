import React from 'react'

const HomePage = () => {
  const isUserConnected = true

  if (!isUserConnected) {
    return <Navigate to = "/login" />
  }
  return (
    <div>
    <img src='/src/assets/BackgroundHP.png' class='homePageBGImg'></img>
    <h1 homePageBGTitle>Self Development,<br></br>Made Easy</h1>
    </div>
  )
}

export default HomePage