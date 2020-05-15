import React from 'react'

import GlobalStyle from './styles/global'

import ToastContainer from './components/ToastContainer'

import { AuthProvider } from './hooks/AuthContext'

import SignIn from './pages/SignIn'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
)

export default App
