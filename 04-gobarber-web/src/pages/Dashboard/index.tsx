import React from 'react'
import { FiPower } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

import { Container, Header, HeaderContent, Profile } from './styles'

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth()
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  )
}

export default Dashboard
