import Menu from '../container/Menu'
import SideBarCart from '../container/SideBarCart/index'
import { ContainerHome } from './styles'

const Home = () => (
  <ContainerHome>
    <Menu />
    <aside>
      <SideBarCart />
    </aside>
  </ContainerHome>
)

export default Home
