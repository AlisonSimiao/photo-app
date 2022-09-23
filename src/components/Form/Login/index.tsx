import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import CustomError from '../../../Errors/CustomError'
import Button from '../../Button'
import { Input } from '../Input'
import { Icon, Title, Wrapper } from './styles'

function Login() {
  const router = useRouter()
  const [Loading, setLoading] = useState(false);
  const [register, setRegister] = useState({} as Omit<User, "id">);

  function toBack() {
    router.push("/")
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()

    setLoading(true);
    try{
    const response = await fetch("/api/auth/signin",{
      method: "POST",
      body: JSON.stringify( register )
    })

    const data = await response.json();

    setLoading(false);

    
    if( response.status < 400){
      router.push("/feed");
      const { user } = data;

      return toast.success("Bem vindo " + user.nickname );
    }
    
    toast.error((data as CustomError).message)
  }
  catch(error){
    console.error("erro>", error );
  }



  }
  function handleInput(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setRegister({ ...register, [name]: value })
  }

  return (
    <>
      <title>
        Log In
      </title>
      <Wrapper>
        <form onSubmit={onSubmit}>
          <Icon onClick={toBack} />
          <Title>Log in</Title>
          <Input
            type={"email"}
            placeholder="email"
            onChange={handleInput}
            name="email"
            value={register.email}
            required
          />

          <Input
            type="password"
            placeholder="password"
            onChange={handleInput}
            name="password"
            value={register.password}
            required
          />

          <Button.Fill Loading={Loading}>
            log in
          </Button.Fill>
        </form>
      </Wrapper>
    </>
  )
}

export default Login