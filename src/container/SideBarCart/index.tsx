import { useDispatch, useSelector } from 'react-redux'

import { RootRecducer } from '../../store'

import * as S from './styles'

import { parseToBrl } from '../../Utils'
import { addToCart, removeFromCart } from '../../store/reducers/cart'

import addIcons from '../../assets/images/add_Icon.svg'
import removeIcons from '../../assets/images/delete_Icon.svg'
import StoreIcons from '../../assets/images/Store_Icon.svg'
import Mensagem from '../menssagem'

const SideBarCart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootRecducer) => state.cart)

  const getTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.price, 0)
  }

  return (
    <>
      <S.BoxCart>
        <h2>Carrinho</h2>
        <div className="border">
          <S.Container>
            {cart.length === 0 ? (
              <p>Carrinho Vazio</p>
            ) : (
              <>
                <div>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id_Cart}>
                        <div>
                          <h3>
                            {item.id} - {item.sabor}
                          </h3>
                        </div>
                        <div>
                          <h3>{parseToBrl(item.price)}</h3>
                          <div className="Buttons">
                            <button
                              onClick={() => dispatch(addToCart(item.id))}
                            >
                              <img src={addIcons} alt="" />
                            </button>
                            <button
                              onClick={() =>
                                dispatch(removeFromCart(item.id_Cart))
                              }
                            >
                              <img src={removeIcons} alt="" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <footer>
                  <div>
                    <p>Total: {parseToBrl(getTotal())}</p>
                    <i>
                      <img src={StoreIcons} alt="" />
                    </i>
                  </div>
                </footer>
              </>
            )}
          </S.Container>
        </div>
        <i className="Detalhe Detalhe__1" />
        <i className="Detalhe Detalhe__2" />
        <i className="Detalhe Detalhe__3" />
        <i className="Detalhe Detalhe__4" />
      </S.BoxCart>
      <Mensagem total={getTotal()} />
    </>
  )
}

export default SideBarCart
