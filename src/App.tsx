import { Store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Container, GlobalStyle } from './styles'
import Home from './pages/home'
import Hero from './container/Hero'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <Hero />
        <Container>
          <Home />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
