import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { FiPower, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import api from '../../services/api'

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

interface MonthAvailabilityItem {
  day: number
  available: boolean
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([])

  const { user, signOut } = useAuth()

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day)
    }
  }, [])

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month)
  }, [])

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data)
      })
  }, [currentMonth, user.id])

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()

        return new Date(year, month, monthDay.day)
      })

    return dates
  }, [currentMonth, monthAvailability])

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

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  )
}

export default Dashboard
