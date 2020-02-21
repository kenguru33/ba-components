import React from 'react'

import './avatar.css'

export const Avatar = () => (
  <div className="box-border h-32 w-32 p-4 border-4 border-gray-400 bg-gray-200">
    <div className="h-full w-full bg-red-400">
      <img className="h-12 w-12" src="https://source.unsplash.com/random" alt="Avatar"></img>
    </div>
  </div>

)
