import React from 'react'

import GlobalStyle from './styles/global'

import { AuthProvider } from './context/AuthContext'

import SignIn from './pages/SignIn'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
)

export default App
