import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

type Props = {}

const Bootstrap: React.FC<Props> = () => {
  return (
    <BrowserRouter basename='admin'>
      <App />
    </BrowserRouter>
  )
}

export default Bootstrap
