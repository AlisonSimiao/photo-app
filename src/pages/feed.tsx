import React, { useEffect } from 'react'
import useLayout from '../stored/hook/useLayout'

function feed() {
  const { auth } = useLayout()

  auth();
  
  return (
    <div>
      janvkjsnclkn
    </div>
  )
}

export default feed