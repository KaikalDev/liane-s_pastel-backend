import { useDispatch, useSelector } from 'react-redux'

import { RootRecducer } from '../../store'

import { parseToBrl } from '../../Utils'
import { addToCart } from '../../store/reducers/cart'

import { Container } from './styles'
import AddIcon from '../../assets/images/add_Icon.svg'

const Menu = () => {
  const dispatch = useDispatch()
  const { ProductsList, ProductTypes } = useSelector(
    (state: RootRecducer) => state.cart
  )

  return (
    <Container>
      {ProductTypes.map((type) => (
        <ul key={type}>
          <h1>{type.replace('_', ' ')}</h1>
          {ProductsList.filter((product) => product.class === type).map(
            (product) => (
              <li key={product.id}>
                <h2>{product.sabor}</h2>
                <div>
                  <h2>{parseToBrl(product.price)}</h2>
                  <button onClick={() => dispatch(addToCart(product.id))}>
                    <i>
                      <img src={AddIcon} alt="" />
                    </i>
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      ))}
    </Container>
  )
}

export default Menu
