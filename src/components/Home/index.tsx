import { useRouter } from 'next/router';
import React from 'react'
import Button from '../Button';
import { Content, Logo, Painel, Wrapper } from './styles';

function Home() {
  const router = useRouter();
    
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
            onClick={()=>{
              router.push("/signin")
            }}
          >
            Log IN
          </Button.Empty>
          <Button.Fill
            onClick={()=>{
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