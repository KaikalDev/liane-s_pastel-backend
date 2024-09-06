import { prisma } from "../services/prisma"

export const createPedido = async (data) => {
    const pedido = await prisma.pedido.create({
        data
    })
    return pedido
}

export const getAll = async () => {
    const pedidos = await prisma.pedido.findMany({})
    return pedidos
}

export const updatePedido = async (id_pedido, data) => {
    const pedido = await prisma.pedido.update({
        where: {
            id_pedido,
        },
        data,
    })

    return pedido
}

export const deletePedido = async (id_pedido) => {
    await prisma.pedido.delete({
        where: {
            id_pedido,
        },
    })
    return
}
