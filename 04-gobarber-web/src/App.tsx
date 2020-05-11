import React from 'react'

import GlobalStyle from './styles/global'

import AuthContext from './context/AuthContext'

import SignIn from './pages/SignIn'

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Juca' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
)

export default App
