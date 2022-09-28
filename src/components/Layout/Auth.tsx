import React from 'react'
import { LayoutProps } from '.'
import Mobile from '../Menu/mobile'
import { Content, Wraper } from './styles'

function Auth({ Component, pageProps }: LayoutProps) {
  return (
    <Wraper>
      <Content>
        <Component {...pageProps} />
        <Mobile />
      </Content>
    </Wraper>
  )
}

export default Auth