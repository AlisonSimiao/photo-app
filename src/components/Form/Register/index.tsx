import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../../Button'
import { Input } from '../Input'
import { Icon, Title, Wrapper } from './styles'

type registerType = {
  email: string;
  nickname: string;
  password: string;
};

function Register() {
  const router = useRouter()
  const [step, setStep] = useState(true);
  const [register, setRegister] = useState<registerType>({} as registerType);

  const next = () => {
    console.log(step)
    setStep(! step);
  }

  function toBack() {
    router.push("/")
  }

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    next()
  }

  function handleInput(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setRegister({ ...register, [name]: value })
  }
  return (
    <>
      <title>
        Register
      </title>
      <Wrapper>
        <form onSubmit={onSubmit}>
          <Icon onClick={toBack} />
          <Title>Register</Title>
          {
            step
              ? (

                <>
                  <Input placeholder={"email"} type={"email"} onChange={handleInput} name="email" value={register?.email} />
                  <Input placeholder="password" type="password" onChange={handleInput} name="password" value={register?.password}/>
                  <Button.Fill type='submit' >
                    next
                  </Button.Fill></>
              )
              :
              (
                <>
                  <Input placeholder={"nickname"} type={"text"} onChange={handleInput} name="nickname" value={register?.nickname} />
                  <Button.Fill type='submit'>
                    sign up
                  </Button.Fill>
                </>

              )
          }
        </form>
      </Wrapper>
    </>
  )
}

export default Register;