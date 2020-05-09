import React from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.svg'

import { Container, Background, Content } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para o logon
      </a>
    </Content>
  </Container>
)

export default SignUp
