import React from 'react'

import GlobalStyle from './styles/global'

import AppProvider from './hooks/'

import SignIn from './pages/SignIn'

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
)

export default App
