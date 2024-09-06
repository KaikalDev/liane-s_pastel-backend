import * as yup from 'yup'

export const pedidoValidation = yup.object({
    name: yup.string().required(),
    total: yup.number().required(),
    payment: yup.string().required(),
    address: yup.string().required(),
    phoneNumber: yup.string().required(),
    sabores_id: yup.array().required()
    })
