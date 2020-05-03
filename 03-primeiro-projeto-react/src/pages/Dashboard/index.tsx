import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4" alt="Rogério Gomes Rios" />

          <div>
            <strong>rogerlista/bootcamp-2020</strong>
            <p>Bootcamp Rockectseat 2020</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4" alt="Rogério Gomes Rios" />

          <div>
            <strong>rogerlista/bootcamp-2020</strong>
            <p>Bootcamp Rockectseat 2020</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4" alt="Rogério Gomes Rios" />

          <div>
            <strong>rogerlista/bootcamp-2020</strong>
            <p>Bootcamp Rockectseat 2020</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4" alt="Rogério Gomes Rios" />

          <div>
            <strong>rogerlista/bootcamp-2020</strong>
            <p>Bootcamp Rockectseat 2020</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4" alt="Rogério Gomes Rios" />

          <div>
            <strong>rogerlista/bootcamp-2020</strong>
            <p>Bootcamp Rockectseat 2020</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
