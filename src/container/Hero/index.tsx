import Logo from '../../assets/images/Logo_semFundo.png'
import { Header } from './styles'

const Hero = () => (
  <Header>
    <div className="overlay">
      <img src={Logo} alt="" />
    </div>
  </Header>
)

export default Hero
