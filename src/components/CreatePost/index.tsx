import React from 'react'
import { Container, Header, Wrapper } from './styles'
type Props = {
  close: () => void
}


function CreatePost({ close }: Props) {
  return (
    <Wrapper onClick={close}>
      <Container>
        <Header >
          <span>
          Criar nova publicação
          </span>
        </Header>
      </Container>
    </Wrapper>
  )
}

export default CreatePost