import React, { useState } from 'react'
import { LayoutProps } from '.'
import CreatePost from '../CreatePost'
import Mobile from '../Menu/mobile'
import { Content, Wraper } from './styles'

function Auth({ Component, pageProps }: LayoutProps) {
  const [open, setOpen] = useState(true)
  return (
    <Wraper>
      <Content>
        <Component {...pageProps} />
        <Mobile close={ () => setOpen(false) } open={() => setOpen(true)}/>
        {open && <CreatePost  close={()=> setOpen(false)} />}
      </Content>
    </Wraper>
  )
}

export default Auth