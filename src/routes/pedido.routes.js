import { create, get, update, remove } from '../controllers/pedido.controllers'

const pedidosRoutes = app => {
    app.post('/pedidos', create)
    app.get('/pedidos', get)
    app.put('/pedidos/:id_pedido', update)
    app.delete('/pedidos/:id_pedido', remove)
}

export default pedidosRoutes
