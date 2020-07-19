import React from 'react'
import { FiPower, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles'

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

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Juca"
              />

              <strong>Juca</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>

            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Juca"
              />

              <strong>Juca</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                  alt="Juca"
                />

                <strong>Juca</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                9:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                  alt="Juca"
                />

                <strong>Juca</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                  alt="Juca"
                />

                <strong>Juca</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                16:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                  alt="Juca"
                />

                <strong>Juca</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  )
}

export default Dashboard
