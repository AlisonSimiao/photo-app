import React, { useEffect } from 'react'
import useLayout from '../stored/hook/useLayout'

function feed() {
  const { auth } = useLayout()

  useEffect(()=>{
    auth();
  })
  
  
  return (
    <div>
      lkncaklsnclk
    </div>
  )
}

export default feed