import { pedidoValidation } from '../validations/pedido.validation'
import { createPedido, getAll, updatePedido, deletePedido } from '../repositorys/pedido.repository'

export const create = async (req, res) => {
    try {
        await pedidoValidation.validate(req.body)

        const pedido = await createPedido(req.body)
        res.status(200).send(pedido)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const pedidos = await getAll()
        res.status(200).send(pedidos)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const pedido = await updatePedido(Number(req.params.id_pedido), req.body)
        res.status(200).send(pedidos)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req, res) => {
    try {
        await deletePedido(Number(req.params.id_pedido))
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
}
