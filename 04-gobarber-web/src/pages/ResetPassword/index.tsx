import React from 'react'
import { FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

import logoImg from '../../assets/logo.svg'

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={() => {}}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  )
}

export default ResetPassword
