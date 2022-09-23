import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../Button'
import { Input } from '../Input'
import { Icon, Title, Wrapper } from './styles'

function Register() {
  const router = useRouter()
  const [step, setStep] = useState(true);
  const [created, setCreted] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [register, setRegister] = useState({} as Omit<User, "id">);

  const next = () => {
    setStep(!step);
  }

  function toBack() {
    if (step)
      return router.push("/")
    next();
  }

  const onSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    setLoading(true);

    if( created ){
      return router.push("/signin");
    }

    switch (step) {
      case true:
        setLoading(false);
        return next()
      case false:

        const response = await fetch("/api/user/create", {
          method: "POST",
          body: JSON.stringify(register)
        })
        const data = await response.json();

        setLoading(false);

        if (response.status < 400){
          setCreted(true);
          return toast.success("Bem vindo " + data.nickname);

        }   
        
        return toast.error(data.message);
    }



  }

  function handleInput(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setRegister({ ...register, [name]: value })
  }

  const notify = () => toast("Wow so easy!");
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
                  <Input placeholder={"email"} type={"email"} onChange={handleInput} name="email" value={register.email} required />
                  <Input placeholder="password" type="password" onChange={handleInput} name="password" value={register.password} required />
                  <Button.Fill type='submit' Loading={Loading}>
                    next
                  </Button.Fill></>
              )
              :
              (
                <>
                  <Input placeholder={"nickname"} type={"text"} onChange={handleInput} name="nickname" value={register.nickname} required />

                  <Button.Fill type='submit' Loading={Loading} status={ created? "success": undefined }>
                    { created
                    ? "sign In" 
                    : "sign up" }
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