import { useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useRef } from 'react'
import * as Yup from 'yup'

import * as S from './styles'
import WhatsappIcon from '../../assets/images/whatsapp-svgrepo-com.svg'
import CopyIcon from '../../assets/images/copy.svg'

import { RootRecducer } from '../../store'

import { parseToBrl } from '../../Utils'

type Props = {
  total: number
}

type PropsMenssage = {
  form: {
    Name: string
    address: string
    phonNumber: string
    payment: string
    cash: number
  }
  cart: ProductCart[]
  total: number
}

const Mensagem = ({ total }: Props) => {
  const { cart } = useSelector((state: RootRecducer) => state.cart)
  const messageRef = useRef<HTMLDivElement>(null)

  const form = useFormik({
    initialValues: {
      Name: '',
      address: '',
      phonNumber: '',
      payment: '',
      cash: 0
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required('O campo é obrigatorio')
        .min(2, 'O número mínimo de caracteres é 2'),
      address: Yup.string()
        .required('O campo é obrigatorio')
        .min(5, 'O número mínimo de caracteres é 5'),
      phonNumber: Yup.string().required('O campo é obrigatorio'),
      cash: Yup.number(),
      payment: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      window.open(
        createWhatsAppLink(getMenssage(values, cart, total)),
        '_blank'
      )
    }
  })

  const getMenssage = (
    form: PropsMenssage['form'],
    cart: PropsMenssage['cart'],
    total: number
  ) => {
    const cartItems = cart
      .map(
        (item) =>
          `${item.id.toString().padEnd(4)} ${item.sabor.padEnd(
            20
          )} ${parseToBrl(item.price)}`
      )
      .join('\n')

    const paymentInfo =
      form.payment === 'Em Dinheiro'
        ? `Valor pago:    ${parseToBrl(form.cash)}\nValor total:  ${parseToBrl(
            total
          )}\nTroco:        ${
            form.cash - total <= 0 ? 'Sem troco' : parseToBrl(form.cash - total)
          }`
        : form.payment === 'PIX'
        ? `Valor total:   ${parseToBrl(total)}`
        : `Valor total:   ${parseToBrl(total + 1)}`

    const message = `
  Pedido de: ${form.Name}

  Carrinho:
  ${cartItems}

  ${paymentInfo}

  Informações complementares:
  Endereço: ${form.address}
  Telefone: ${form.phonNumber}
  Forma de pagamento: ${form.payment}
    `

    return message.trim()
  }

  const createWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '558388675571'
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const handleCopy = () => {
    if (messageRef.current) {
      navigator.clipboard.writeText(messageRef.current.innerText).then(
        () => {
          alert('Texto copiado com sucesso!')
        },
        (err) => {
          console.error('Erro ao copiar texto: ', err)
        }
      )
    }
  }

  return (
    <S.Container>
      <h3>Comfirmação</h3>
      <S.FormContainer onSubmit={form.handleSubmit}>
        <div>
          <label htmlFor="Name">Nome do cliente :</label>
          <input
            id="Name"
            name="Name"
            type="text"
            value={form.values.Name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={form.errors.Name && form.touched.Name ? 'error' : ''}
          />
          {form.errors.Name && form.touched.Name && (
            <div className="error-message">{form.errors.Name}</div>
          )}
        </div>
        <div>
          <label htmlFor="address">Endereço :</label>
          <input
            id="address"
            name="address"
            type="text"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={
              form.errors.address && form.touched.address ? 'error' : ''
            }
          />
          {form.errors.address && form.touched.address && (
            <div className="error-message">{form.errors.address}</div>
          )}
        </div>
        <div>
          <label htmlFor="phonNumber">Número de telefone :</label>
          <InputMask
            mask="(99) 9 9999-9999"
            id="phonNumber"
            name="phonNumber"
            type="tel"
            value={form.values.phonNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={
              form.errors.phonNumber && form.touched.phonNumber ? 'error' : ''
            }
          />
          {form.errors.phonNumber && form.touched.phonNumber && (
            <div className="error-message">{form.errors.phonNumber}</div>
          )}
        </div>
        <div>
          <label htmlFor="payment">Forma de pagamento :</label>
          <select
            name="payment"
            id="payment"
            value={form.values.payment}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={
              form.errors.payment && form.touched.payment ? 'error' : ''
            }
          >
            <option value=""></option>
            <option value="Cartão - Credito">Cartão - Crédito</option>
            <option value="Cartão - Debito">Cartão - Débito</option>
            <option value="Em Dinheiro">Em Dinheiro</option>
            <option value="PIX">PIX</option>
          </select>
          {form.errors.payment && form.touched.payment && (
            <div className="error-message">{form.errors.payment}</div>
          )}
        </div>
        {form.values.payment === 'Em Dinheiro' && (
          <div>
            <label htmlFor="cash">Valor do pagamento em dinheiro :</label>
            <input
              min={total}
              id="cash"
              name="cash"
              type="number"
              value={form.values.cash}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={form.errors.cash && form.touched.cash ? 'error' : ''}
            />
            {form.errors.cash && form.touched.cash && (
              <div className="error-message">{form.errors.cash}</div>
            )}
          </div>
        )}
        <S.MenssageBox>
          <div
            ref={messageRef}
            className="auto-expand"
            contentEditable="true"
            role="textbox"
            onInput={(e) => {
              e.currentTarget.innerText
            }}
            dangerouslySetInnerHTML={{
              __html: getMenssage(form.values, cart, total)
            }}
          />
          <div className="buttons">
            <button onClick={handleCopy}>
              <i>
                <img src={CopyIcon} alt="" />
              </i>
              Copiar texto
            </button>
            <button type="submit">
              <i>
                <img src={WhatsappIcon} alt="" />
              </i>
              Enviar Mensagem
            </button>
          </div>
        </S.MenssageBox>
      </S.FormContainer>
    </S.Container>
  )
}

export default Mensagem
