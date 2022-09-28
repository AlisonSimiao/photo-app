import { NextRouter, Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useLayout from '../../stored/hook/useLayout';
import Button from '../Button';
import { Content, Logo, Painel, Wrapper } from './styles';

function Home() {
  const [router, setRouter] = useState<NextRouter>(useRouter())    
  const {freedom} = useLayout();
  freedom();
  return (
    <>
      <title>
        Home
      </title>
      <Wrapper>
        <Content>
          <Logo />
        </Content>

        <Painel>
          <Button.Empty
            full
            onClick={() => {
              router.push("/signin")
            }}
          >
            Log IN
          </Button.Empty>
          <Button.Fill
            full
            onClick={() => {
              router.push("/signup")
            }}
          >
            Register
          </Button.Fill>

        </Painel>

      </Wrapper>
    </>
  )
}

export default Home