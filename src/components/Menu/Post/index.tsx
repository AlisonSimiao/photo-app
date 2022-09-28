import React, { useState } from 'react'
import CreatePost from '../../CreatePost'
import { IconPost } from '../mobile/styles'

function Post() {

  const [activePost, setActivePost] = useState(true)
  const close = ()=> setActivePost(false)
  const open = ()=> setActivePost(true)

  return (
    <>
      <IconPost onClick={open}/>
      {activePost && <CreatePost close={close}/>}
    </>
  )
}

export default Post