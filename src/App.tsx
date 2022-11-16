import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout'
import Profile from './components/pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App (): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feed' element={<Layout/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  )
}

export default App
