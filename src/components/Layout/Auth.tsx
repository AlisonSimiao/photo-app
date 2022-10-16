import React, { useState } from 'react'
import styled from 'styled-components'
import { LayoutProps } from '.'
import CreatePost from '../CreatePost'
import Mobile from '../Menu/mobile'
import { Content, Wraper } from './styles'

const Test = styled.div`
  display: flex;
`

function Auth({ Component, pageProps }: LayoutProps) {
  const [open, setOpen] = useState(true)
  const styles = {
    display:  ''
  }
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