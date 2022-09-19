import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../Button'
import { Input } from '../Input'
import { Icon, Title, Wrapper } from './styles'

function Login() {
  const router = useRouter()

  function toBack() {
      router.push("/")
  }

  return (
    <>
    <title>
      Log In
    </title>
    <Wrapper>
      <form>
        <Icon onClick={toBack}/>
        <Title>Log in</Title>
        <Input type={"email"}/>
        <Input type="password" />
        <Button.Fill >
          log in
        </Button.Fill>
      </form>
    </Wrapper>
    </>
  )
}

export default Login