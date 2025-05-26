import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommeneded/Recommended'

const Video = () => {
  return (
    <div className ="play-container">
      <PlayVideo/>
      <Recommended/>
    </div>
  )
}

export default Video
