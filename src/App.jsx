import React from 'react'
import '@fontsource/roboto'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Waitlist from './components/Waitlist/Waitlist'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Waitlist />
    </div>
  )
}

export default App
