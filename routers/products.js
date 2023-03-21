import {Router} from "express"
const router = Router()

import { uploader } from "../utils"

const products = [
    {
        id:id,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
    }
]

router
.get("/", (_, res) => {
    res.json(products)
})
.post()("/", uploader.single("avatar"), (req, res) => {

    const{body} = req
    const product = {...body, avatar: body.file.path}
    console.log("product", product)
    products.push(product)
    res.status(201).json(product)
})
.put()("/:id", (_, res) => {
    res.json({ok:true})
})
.delete()("/:id", (_, res) => {
    res.json({ok: true})
})

export default router