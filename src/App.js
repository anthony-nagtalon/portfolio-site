import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'

import theme from './theme'

const App = _ => {
  return(
    <BrowserRouter>  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <LandingPage />
        <AboutPage />
        <ProjectPage />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
