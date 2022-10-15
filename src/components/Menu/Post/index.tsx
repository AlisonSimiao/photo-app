import React from 'react'
import { IconPost } from '../mobile/styles'
type Props = {
  open: () => void
}
function Post({open} : Props) {

  return (
    <div>
      <IconPost onClick={open} />
    </div>
  )
}

export default Post